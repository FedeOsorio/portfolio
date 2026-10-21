const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directorio raíz de imágenes del portfolio
const IMG_DIR = path.join(__dirname, '../public/img');
const SRC_DIR = path.join(__dirname, '../src');

// Resolución máxima para imágenes de proyectos / portfolio (anchura o altura máx)
const MAX_DIMENSION = 1440;
const WEBP_QUALITY = 85;

// Obtener todos los archivos recursivamente en un directorio
function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  }
  return arrayOfFiles;
}

// Actualizar referencias en archivos de src (ej. projects.tsx) cuando cambia la extensión a .webp
function updateSourceReferences(convertedFilesMap) {
  if (Object.keys(convertedFilesMap).length === 0) return;

  const srcFiles = getAllFiles(SRC_DIR).filter(f => /\.(tsx?|jsx?|json|css)$/i.test(f));
  let updatedFilesCount = 0;

  for (const file of srcFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    for (const [oldRelPath, newRelPath] of Object.entries(convertedFilesMap)) {
      const oldRef = oldRelPath.replace(/\\/g, '/');
      const newRef = newRelPath.replace(/\\/g, '/');

      if (content.includes(oldRef)) {
        content = content.split(oldRef).join(newRef);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      updatedFilesCount++;
      console.log(`  📝 Referencias actualizadas en: ${path.relative(path.join(__dirname, '..'), file)}`);
    }
  }
}

async function convertImages() {
  console.log('🚀 Iniciando optimización y reducción de imágenes en /public/img...');

  if (!fs.existsSync(IMG_DIR)) {
    console.error(`❌ Directorio no encontrado: ${IMG_DIR}`);
    process.exit(1);
  }

  const allFiles = getAllFiles(IMG_DIR);

  const pngOrJpgFiles = allFiles.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ext === '.png' || ext === '.jpg' || ext === '.jpeg';
  });

  const webpFiles = allFiles.filter(f => path.extname(f).toLowerCase() === '.webp');

  let convertedCount = 0;
  let recompressedCount = 0;
  let savedBytes = 0;
  const convertedMap = {};

  // 1. Convertir PNG/JPG a WebP y redimensionar si supera MAX_DIMENSION
  if (pngOrJpgFiles.length > 0) {
    console.log(`🖼️  Convirtiendo y reduciendo ${pngOrJpgFiles.length} imágenes PNG/JPG a WebP (máx ${MAX_DIMENSION}px, calidad ${WEBP_QUALITY})...`);
    
    for (const filePath of pngOrJpgFiles) {
      const ext = path.extname(filePath);
      const dir = path.dirname(filePath);
      const baseName = path.basename(filePath, ext);
      const webpPath = path.join(dir, `${baseName}.webp`);

      try {
        const inputBuffer = fs.readFileSync(filePath);
        const originalSize = inputBuffer.length;

        const pipeline = sharp(inputBuffer);
        const metadata = await pipeline.metadata();

        const optimizedBuffer = await sharp(inputBuffer)
          .resize(MAX_DIMENSION, MAX_DIMENSION, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY, effort: 4 })
          .toBuffer();

        fs.writeFileSync(webpPath, optimizedBuffer);
        fs.unlinkSync(filePath); // Eliminar el original

        convertedCount++;
        const byteDiff = originalSize - optimizedBuffer.length;
        savedBytes += byteDiff;

        const relOriginal = path.relative(path.join(__dirname, '../public'), filePath);
        const relWebp = path.relative(path.join(__dirname, '../public'), webpPath);
        convertedMap[relOriginal] = relWebp;

        const savingsPct = (((originalSize - optimizedBuffer.length) / originalSize) * 100).toFixed(1);
        const origDim = `${metadata.width || '?'}x${metadata.height || '?'}`;
        console.log(`  ✓ ${path.basename(filePath)} (${origDim}) ➔ ${baseName}.webp (${(originalSize / 1024).toFixed(1)} KB ➔ ${(optimizedBuffer.length / 1024).toFixed(1)} KB, -${savingsPct}%)`);
      } catch (err) {
        console.error(`  ❌ Error convirtiendo ${path.basename(filePath)}:`, err.message);
      }
    }
  }

  // 2. Re-optimizar imágenes .webp existentes si son muy grandes o pesadas (> 100 KB)
  if (webpFiles.length > 0) {
    const candidateWebpFiles = webpFiles.filter(f => {
      const stat = fs.statSync(f);
      return stat.size > 80 * 1024;
    });

    if (candidateWebpFiles.length > 0) {
      console.log(`🔍 Inspeccionando ${candidateWebpFiles.length} imágenes WebP existentes potencialmente reducibles...`);
      for (const filePath of candidateWebpFiles) {
        try {
          const inputBuffer = fs.readFileSync(filePath);
          const originalSize = inputBuffer.length;
          const metadata = await sharp(inputBuffer).metadata();

          const exceedsDimension = (metadata.width && metadata.width > MAX_DIMENSION) || (metadata.height && metadata.height > MAX_DIMENSION);
          const isHeavy = originalSize > 120 * 1024;

          if (!exceedsDimension && !isHeavy) continue;

          const optimizedBuffer = await sharp(inputBuffer)
            .resize(MAX_DIMENSION, MAX_DIMENSION, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: WEBP_QUALITY, effort: 4 })
            .toBuffer();

          if (optimizedBuffer.length < originalSize - 2048) {
            fs.writeFileSync(filePath, optimizedBuffer);
            recompressedCount++;
            savedBytes += (originalSize - optimizedBuffer.length);
            const savingsPct = (((originalSize - optimizedBuffer.length) / originalSize) * 100).toFixed(1);
            console.log(`  ✓ ${path.basename(filePath)} (${metadata.width}x${metadata.height}): ${(originalSize / 1024).toFixed(1)} KB ➔ ${(optimizedBuffer.length / 1024).toFixed(1)} KB (-${savingsPct}%)`);
          }
        } catch (err) {
          console.error(`  ❌ Error optimizando ${path.basename(filePath)}:`, err.message);
        }
      }
    }
  }

  // 3. Actualizar referencias en el código fuente (si hubo conversiones a .webp)
  if (Object.keys(convertedMap).length > 0) {
    console.log('\n🔄 Actualizando rutas en el código de /src...');
    updateSourceReferences(convertedMap);
  }

  if (convertedCount === 0 && recompressedCount === 0) {
    console.log('✨ Todas las imágenes ya se encuentran optimizadas. No se modificó ningún archivo.');
  } else {
    console.log(`\n🎉 ¡Optimización finalizada! Se convirtieron ${convertedCount} imágenes y se redujeron ${recompressedCount}. Ahorro total: ${(savedBytes / 1024 / 1024).toFixed(2)} MB.`);
  }
}

convertImages().catch(err => {
  console.error('❌ Error general durante la optimización:', err);
  process.exit(1);
});
