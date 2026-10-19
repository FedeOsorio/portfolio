"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ProjectDetails from "./ProjectDetails";

const projectsData = [
  {
    id: 10,
    type: "individual",
    category: "web",
    image: "img/asta-rental.jpg",
    link: "https://github.com/fedeosorio",
    github: "https://github.com/FedeOsorio/asta-rental",
    subtitle: "Next.js 14 - Node.js - Drizzle - PostgreSQL",
  },
  {
    id: 9,
    type: "individual",
    category: "mobile",
    images: [
      "img/proyectos/kanalove_1.jpg",
      "img/proyectos/kanalove_2.jpg",
      "img/proyectos/kanalove_3.jpg",
    ],
    link: "https://play.google.com/store/apps/details?id=com.kuyi.kanalove",
    subtitle: "React Native - Expo - Firebase",
  },
  {
    id: 0,
    type: "individual",
    category: "mobile",
    images: [
      "img/proyectos/kanji_1.jpg",
      "img/proyectos/kanji_2.jpg",
      "img/proyectos/kanji_3.jpg",
    ],
    link: "https://play.google.com/store/apps/details?id=com.kuyi.kanjilove",
    subtitle: "React Native - Expo - Firebase",
  },
  {
    id: 1,
    type: "individual",
    category: "web",
    image: "img/asta.jpg",
    link: "https://asta-next.vercel.app/turnos",
    subtitle: "Next.js - PostgreSQL - NeonDB",
  },
  {
    id: 2,
    type: "individual",
    category: "mobile",
    images: [
      "img/proyectos/kuyi_1.jpg",
      "img/proyectos/kuyi_2.jpg",
      "img/proyectos/kuyi_3.jpg",
    ],
    link: "https://play.google.com/store/apps/details?id=com.fedeosorio.KuYiApp",
    subtitle: "React Native - Expo - Firebase",
  },
  {
    id: 3,
    type: "grupal",
    category: "web",
    image: "img/ifts26.jpg",
    link: "https://ifts26.netlify.app/",
    subtitle: "Angular",
  },
  {
    id: 4,
    type: "grupal",
    category: "web",
    image: "img/esquinaLiteraria.jpg",
    link: "https://esquina-literaria.vercel.app/",
    subtitle: "React - Express - MongoDB",
  },
  {
    id: 5,
    type: "grupal",
    category: "web",
    image: "img/sad.jpg",
    link: "https://github.com/JuanPabloRomero00/SAD",
    subtitle: "React - Express - MongoDB",
  },
  {
    id: 6,
    type: "legacy",
    category: "web",
    image: "img/kirliaShop.jpg",
    link: "https://kirlia-shop.netlify.app/",
    subtitle: "Angular - Express - MongoDB",
  },
  {
    id: 7,
    type: "grupal",
    category: "web",
    image: "img/gestionDeHoras.jpg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7087109171837308928/",
    subtitle: "Angular - Spring Boot - MySQL",
    demo: "https://drive.google.com/file/d/1H2IHyVaOT5eUjUIk49yhFPDeXkB5vYHu/view?usp=drive_link",
  },
  {
    id: 8,
    type: "legacy",
    category: "web",
    image: "img/petShop.jpg",
    link: "https://fedeosorio.github.io/petShop/",
    subtitle: "React - Firebase",
  },
];

const isMobileApp = (subtitle: string) => {
  const sub = subtitle.toLowerCase();
  return sub.includes("react native") || sub.includes("expo");
};

// Tarjeta Apple.com: Imagen a pantalla completa de la celda de la grilla
const ProjectCard: React.FC<{
  project: (typeof projectsData)[0];
  itemInfo: { title: string; description: string };
  onOpenDetails: (id: number) => void;
  language: string;
  t: (key: string) => any;
}> = ({ project, itemInfo, onOpenDetails, language, t }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const images = project.images || (project.image ? [project.image] : []);
  const isMobile = isMobileApp(project.subtitle);

  // Auto-rotar capturas si tiene más de una
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[310px] sm:h-[340px] md:h-[370px] lg:h-[395px] rounded-xl md:rounded-2xl overflow-hidden group bg-slate-900 transition-all duration-500 shadow-2xl flex flex-col justify-between p-4 sm:p-5 md:p-6 text-center">
      {/* Background Image: Maximize 100% of the grid cell without cropping out of bounds */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={images[activeImgIndex] || images[0]}
          alt={`${itemInfo.title} preview`}
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        />
        {/* Apple-style gradient vignette for clear headline and action button contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/35 to-slate-950/90 group-hover:via-slate-950/25 transition-colors duration-500" />
      </div>

      {/* Top Header: Category, Title and Subtitle */}
      <div className="flex flex-col items-center gap-1 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest backdrop-blur-md border border-white/10 bg-slate-950/60 text-slate-300 shadow-sm">
          {isMobile
            ? language === "es"
              ? "App Móvil"
              : "Mobile App"
            : project.type === "grupal"
            ? language === "es"
              ? "Proyecto Grupal"
              : "Team Project"
            : "Web / SaaS"}
        </div>

        {/* Project Title (Apple headline) */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug drop-shadow-md">
          {itemInfo.title}
        </h3>

        {/* Technologies Subtitle */}
        <p className="font-mono text-[11px] sm:text-xs text-purple-300 font-semibold tracking-wide drop-shadow-sm">
          {project.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-[11px] sm:text-xs text-slate-200 font-light max-w-md w-full text-center line-clamp-1 leading-relaxed drop-shadow-sm">
          {itemInfo.description}
        </p>

        {/* Multi-image thumbnail dots for mobile apps */}
        {images.length > 1 && (
          <div className="flex items-center gap-1.5 pt-1 px-2 py-0.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveImgIndex(dotIdx)}
                aria-label={`Ver imagen ${dotIdx + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                  activeImgIndex === dotIdx
                    ? "bg-purple-400 w-3"
                    : "bg-slate-500/80 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom Actions: Apple-like Pill Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 relative z-10 pt-2">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-md hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] flex items-center gap-1.5"
        >
          <span>{t("projects.viewProject")}</span>
          <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
        </a>

        <button
          onClick={() => onOpenDetails(project.id)}
          className="px-4 py-1.5 rounded-full bg-slate-950/70 hover:bg-slate-900 text-slate-200 hover:text-white font-semibold text-xs backdrop-blur-md border border-white/20 hover:border-white/40 transition-all shadow-sm cursor-pointer"
        >
          <span>{t("projects.viewDetails")}</span>
        </button>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="w-8 h-8 rounded-full bg-slate-950/70 hover:bg-slate-900 text-slate-300 hover:text-white border border-white/20 hover:border-white/40 backdrop-blur-md flex items-center justify-center transition-all shadow-sm"
            title="GitHub"
          >
            <i className="fa-brands fa-github text-xs" />
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Video Demo"
            className="w-8 h-8 rounded-full bg-slate-950/70 hover:bg-slate-900 text-slate-300 hover:text-white border border-white/20 hover:border-white/40 backdrop-blur-md flex items-center justify-center transition-all shadow-sm"
            title={t("projects.demoVideo")}
          >
            <i className="fa-solid fa-video text-[10px]" />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const projectItems = t("projects.items") as { title: string; description: string }[];
  const [filter, setFilter] = useState<"all" | "mobile" | "web" | "grupal">("all");
  const [page, setPage] = useState(0);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "all") return true;
    if (filter === "mobile") return isMobileApp(p.subtitle);
    if (filter === "web") return !isMobileApp(p.subtitle) && p.type !== "grupal";
    if (filter === "grupal") return p.type === "grupal" || p.type === "legacy";
    return true;
  });

  // Reset page when category changes
  useEffect(() => {
    setPage(0);
  }, [filter]);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  // Manejar Escape para cerrar modal de detalles
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProjectId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const selectedProject = selectedProjectId !== null
    ? projectsData.find((p) => p.id === selectedProjectId)
    : null;
  const selectedItemInfo = selectedProject
    ? projectItems[selectedProject.id] || { title: "", description: "" }
    : { title: "", description: "" };

  return (
    <div className="w-full flex flex-col pt-2 pb-3 sm:pb-4 px-6 md:px-[8.33vw]">
      {/* Top Header: Compact and aligned top-left */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3">
        <div className="flex flex-col items-start text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {t("projects.title")}
          </h2>
        </div>

        {/* Category Filter Pills & 2x2 Page Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center p-1 bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-800">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-purple-500/30 text-purple-200 border border-purple-500/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {language === "es" ? "Todos" : "All"}
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "mobile"
                  ? "bg-purple-500/30 text-purple-200 border border-purple-500/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {language === "es" ? "Apps Móviles" : "Mobile Apps"}
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "web"
                  ? "bg-purple-500/30 text-purple-200 border border-purple-500/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Web / SaaS
            </button>
            <button
              onClick={() => setFilter("grupal")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "grupal"
                  ? "bg-purple-500/30 text-purple-200 border border-purple-500/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {language === "es" ? "Grupales" : "Team"}
            </button>
          </div>

          {/* Pagination buttons if more than 4 projects */}
          {totalPages > 1 && (
            <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-full border border-slate-800">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                aria-label="Página anterior"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  page === 0
                    ? "text-slate-600 cursor-not-allowed"
                    : "text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
                }`}
              >
                <i className="fa-solid fa-chevron-left text-xs" />
              </button>
              <span className="text-xs font-mono text-slate-400 px-2">
                {page + 1}/{totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                aria-label="Página siguiente"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  page === totalPages - 1
                    ? "text-slate-600 cursor-not-allowed"
                    : "text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
                }`}
              >
                <i className="fa-solid fa-chevron-right text-xs" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Apple.com 2x2 Grid Layout: Exactly 4 projects filling full horizontal width */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3.5 w-full">
          {currentProjects.map((project) => {
            const itemInfo = projectItems[project.id] || { title: "", description: "" };
            return (
              <ProjectCard
                key={project.id}
                project={project}
                itemInfo={itemInfo}
                onOpenDetails={(id) => setSelectedProjectId(id)}
                language={language}
                t={t}
              />
            );
          })}
        </div>
      </div>

      {/* Modal / Overlay for ProjectDetails */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-xl p-4 sm:p-6 md:p-10 flex items-center justify-center"
            onClick={() => setSelectedProjectId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl relative"
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedProjectId(null)}
                className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Cerrar modal"
              >
                <i className="fa-solid fa-xmark text-sm" />
              </button>

              <ProjectDetails
                project={selectedProject}
                itemInfo={selectedItemInfo}
                onBack={() => setSelectedProjectId(null)}
                isMobileProject={isMobileApp(selectedProject.subtitle)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
