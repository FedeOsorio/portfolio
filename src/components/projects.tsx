"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ProjectDetails from "./ProjectDetails";

const projectsData = [
  {
    id: 11,
    type: "individual",
    category: "mobile",
    images: [
      "img/proyectos/yomi_1.webp",
      "img/proyectos/yomi_2.webp",
    ],
    link: "https://play.google.com/store/apps/details?id=com.kuyi.yomi",
    subtitle: "React Native - Expo - FSRS - Drizzle - SQLite",
  },
  {
    id: 12,
    type: "individual",
    category: "web",
    image: "img/proyectos/dollar-api.webp",
    link: "https://dollar-api-java.onrender.com/swagger-ui/index.html",
    subtitle: "Java 21 - Spring Boot - Redis - Resilience4j",
  },
  {
    id: 10,
    type: "individual",
    category: "web",
    image: "img/asta-rental.webp",
    link: "https://github.com/fedeosorio",
    github: "https://github.com/FedeOsorio/asta-rental",
    subtitle: "Next.js 14 - Node.js - Drizzle - PostgreSQL",
  },
  {
    id: 9,
    type: "individual",
    category: "mobile",
    images: [
      "img/proyectos/kanalove_1.webp",
      "img/proyectos/kanalove_2.webp",
      "img/proyectos/kanalove_3.webp",
    ],
    link: "https://play.google.com/store/apps/details?id=com.kuyi.kanalove",
    subtitle: "React Native - Expo - Firebase",
  },
  {
    id: 0,
    type: "individual",
    category: "mobile",
    images: [
      "img/proyectos/kanji_1.webp",
      "img/proyectos/kanji_2.webp",
      "img/proyectos/kanji_3.webp",
    ],
    link: "https://play.google.com/store/apps/details?id=com.kuyi.kanjilove",
    subtitle: "React Native - Expo - Firebase",
  },
  {
    id: 1,
    type: "individual",
    category: "web",
    image: "img/asta.webp",
    link: "https://asta-next.vercel.app/turnos",
    subtitle: "Next.js - PostgreSQL - NeonDB",
  },
  {
    id: 2,
    type: "individual",
    category: "mobile",
    images: [
      "img/proyectos/kuyi_1.webp",
      "img/proyectos/kuyi_2.webp",
      "img/proyectos/kuyi_3.webp",
    ],
    link: "https://play.google.com/store/apps/details?id=com.fedeosorio.KuYiApp",
    subtitle: "React Native - Expo - Firebase",
  },
  {
    id: 3,
    type: "grupal",
    category: "web",
    image: "img/ifts26.webp",
    link: "https://ifts26.netlify.app/",
    subtitle: "Angular",
  },
  {
    id: 7,
    type: "grupal",
    category: "web",
    image: "img/gestionDeHoras.webp",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7087109171837308928/",
    subtitle: "Angular - Spring Boot - MySQL",
    demo: "https://drive.google.com/file/d/1H2IHyVaOT5eUjUIk49yhFPDeXkB5vYHu/view?usp=drive_link",
  },
  {
    id: 8,
    type: "legacy",
    category: "web",
    image: "img/petShop.webp",
    link: "https://fedeosorio.github.io/petShop/",
    subtitle: "React - Firebase",
  },
];

const isMobileApp = (subtitle: string) => {
  const sub = subtitle.toLowerCase();
  return sub.includes("react native") || sub.includes("expo");
};

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

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-[450px] sm:h-[470px] md:h-[490px] rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-purple-950/20 transition-all duration-300 group relative overflow-hidden">
      <div className="flex flex-col gap-2 text-left w-full z-10">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-purple-400">
            {isMobile ? (language === "es" ? "App Móvil" : "Mobile App") : "Web"}
          </span>
          <span className="text-[11px] font-mono text-purple-300/90 font-medium truncate max-w-[60%] text-right">
            {project.subtitle}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-[1.65rem] font-extrabold text-white tracking-tight leading-snug">
          {itemInfo.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 font-light line-clamp-2 leading-relaxed">
          {itemInfo.description}
        </p>
      </div>

      <div className="relative w-full flex-1 min-h-[170px] sm:min-h-[190px] my-3 rounded-2xl overflow-hidden border border-slate-800/90 bg-slate-950/70 shadow-inner flex items-center justify-center group-hover:border-purple-500/30 transition-all">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={images[activeImgIndex] || images[0]}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover blur-2xl opacity-20 scale-125"
          />
          <div className="absolute inset-0 bg-slate-950/30" />
        </div>

        <AnimatePresence mode="wait">
          <motion.img
            key={images[activeImgIndex] || images[0]}
            src={images[activeImgIndex] || images[0]}
            alt={`${itemInfo.title} preview`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative max-h-full max-w-full object-contain p-2.5 rounded-xl group-hover:scale-[1.02] transition-transform duration-500 z-10 drop-shadow-md"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 h-5 sm:h-6 px-2.5 sm:px-3 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-800/90 flex items-center justify-center gap-1.5 shadow-md">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIndex(dotIdx);
                }}
                aria-label={`Ver imagen ${dotIdx + 1}`}
                className={`p-0 m-0 border-0 outline-none block leading-none transition-all duration-300 cursor-pointer shrink-0 ${
                  activeImgIndex === dotIdx
                    ? "bg-purple-400 w-4 h-1.5 rounded-full shadow-sm"
                    : "bg-slate-600 hover:bg-slate-400 w-1.5 h-1.5 rounded-full"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 pt-1 w-full z-10">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-[38px] rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 hover:border-purple-400 text-purple-200 hover:text-white font-semibold text-xs transition-all shadow-sm flex items-center justify-center gap-2"
        >
          <span>{t("projects.viewProject")}</span>
          <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
        </a>

        <button
          onClick={() => onOpenDetails(project.id)}
          className="flex-1 h-[38px] rounded-xl bg-slate-950/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 text-slate-200 hover:text-white font-semibold text-xs transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{t("projects.viewDetails")}</span>
        </button>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="w-[38px] h-[38px] rounded-xl bg-slate-950/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-sm shrink-0"
            title="GitHub"
          >
            <i className="fa-brands fa-github text-sm" />
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Video Demo"
            className="w-[38px] h-[38px] rounded-xl bg-slate-950/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-purple-500/50 text-purple-300 hover:text-white flex items-center justify-center transition-all shadow-sm shrink-0"
            title={t("projects.demoVideo")}
          >
            <i className="fa-solid fa-video text-xs" />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const projectItems = t("projects.items") as { title: string; description: string }[];
  const [filter, setFilter] = useState<"all" | "mobile" | "web">("all");
  const [page, setPage] = useState(0);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "all") return true;
    if (filter === "mobile") return isMobileApp(p.subtitle);
    if (filter === "web") return !isMobileApp(p.subtitle);
    return true;
  });

  useEffect(() => {
    setPage(0);
  }, [filter]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedProjectId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProjectId]);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

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
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3">
        <div className="flex flex-col items-start text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {t("projects.title")}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center p-1 bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-800">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${filter === "all"
                ? "bg-purple-500/30 text-purple-200 border border-purple-500/40 shadow-sm"
                : "text-slate-400 hover:text-white"
                }`}
            >
              {language === "es" ? "Todos" : "All"}
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${filter === "mobile"
                ? "bg-purple-500/30 text-purple-200 border border-purple-500/40 shadow-sm"
                : "text-slate-400 hover:text-white"
                }`}
            >
              {language === "es" ? "Apps Móviles" : "Mobile Apps"}
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${filter === "web"
                ? "bg-purple-500/30 text-purple-200 border border-purple-500/40 shadow-sm"
                : "text-slate-400 hover:text-white"
                }`}
            >
              Web
            </button>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-full border border-slate-800">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Página anterior"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${page === 0
                ? "text-slate-600 cursor-not-allowed"
                : "text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
                }`}
            >
              <i className="fa-solid fa-chevron-left text-xs" />
            </button>
            <span className="text-xs font-mono text-slate-400 px-2">
              {page + 1}/{Math.max(1, totalPages)}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(Math.max(1, totalPages) - 1, p + 1))}
              disabled={page >= totalPages - 1}
              aria-label="Página siguiente"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${page >= totalPages - 1
                ? "text-slate-600 cursor-not-allowed"
                : "text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
                }`}
            >
              <i className="fa-solid fa-chevron-right text-xs" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3.5 w-full md:min-h-[920px] lg:min-h-[994px]">
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
          {Array.from({ length: Math.max(0, itemsPerPage - currentProjects.length) }).map((_, idx) => (
            <div
              key={`empty-slot-${idx}`}
              aria-hidden="true"
              className="hidden md:block w-full h-[450px] sm:h-[470px] md:h-[490px] invisible pointer-events-none"
            />
          ))}
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-xl p-3 sm:p-5 md:p-8 flex items-center justify-center"
                onClick={() => setSelectedProjectId(null)}
              >
                <motion.div
                  initial={{ scale: 0.96, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.96, opacity: 0, y: 15 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-5xl h-[86vh] max-h-[820px] bg-slate-900 border border-slate-800/90 rounded-2xl md:rounded-3xl shadow-2xl relative flex flex-col overflow-hidden"
                >
                  <button
                    onClick={() => setSelectedProjectId(null)}
                    className="absolute top-3 right-3 sm:top-3.5 sm:right-4 z-30 w-8 h-8 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 flex items-center justify-center transition-all cursor-pointer shadow-md"
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
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};

export default Projects;
