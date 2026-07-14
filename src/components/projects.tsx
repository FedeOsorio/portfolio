"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const projectsData = [
  {
    id: 9,
    type: "individual",
    images: [
      "img/proyectos/kanalove_1.jpg",
      "img/proyectos/kanalove_2.jpg",
      "img/proyectos/kanalove_3.jpg"
    ],
    link: "https://play.google.com/store/apps/details?id=com.kuyi.kanalove",
    subtitle: "React Native - Expo - Firebase",
  },
  {
    id: 0,
    type: "individual",
    images: [
      "img/proyectos/kanji_1.jpg",
      "img/proyectos/kanji_2.jpg",
      "img/proyectos/kanji_3.jpg"
    ],
    link: "https://play.google.com/store/apps/details?id=com.kuyi.kanjilove",
    subtitle: "React Native - Expo - Firebase",
  },
  {
    id: 1,
    type: "individual",
    image: "img/asta.jpg",
    link: "https://asta-next.vercel.app/turnos",
    subtitle: "Next.js - PostgreSQL - NeonDB",
  },
  {
    id: 2,
    type: "individual",
    images: [
      "img/proyectos/kuyi_1.jpg",
      "img/proyectos/kuyi_2.jpg",
      "img/proyectos/kuyi_3.jpg"
    ],
    link: "https://play.google.com/store/apps/details?id=com.fedeosorio.KuYiApp",
    subtitle: "React Native - Expo - Firebase",
  },
  {
    id: 3,
    type: "grupal",
    image: "img/ifts26.jpg",
    link: "https://ifts26.netlify.app/",
    subtitle: "Angular",
  },
  {
    id: 4,
    type: "grupal",
    image: "img/esquinaLiteraria.jpg",
    link: "https://esquina-literaria.vercel.app/",
    subtitle: "React - Express - MongoDB",
  },
  {
    id: 5,
    type: "grupal",
    image: "img/sad.jpg",
    link: "https://github.com/JuanPabloRomero00/SAD",
    subtitle: "React - Express - MongoDB",
  },
  {
    id: 6,
    type: "legacy",
    image: "img/kirliaShop.jpg",
    link: "https://kirlia-shop.netlify.app/",
    subtitle: "Angular - Express - MongoDB",
  },
  {
    id: 7,
    type: "grupal",
    image: "img/gestionDeHoras.jpg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7087109171837308928/",
    subtitle: "Angular - Spring Boot - MySQL",
    demo: "https://drive.google.com/file/d/1H2IHyVaOT5eUjUIk49yhFPDeXkB5vYHu/view?usp=drive_link"
  },
  {
    id: 8,
    type: "legacy",
    image: "img/petShop.jpg",
    link: "https://fedeosorio.github.io/petShop/",
    subtitle: "React - Firebase",
  },
];

const isMobileApp = (subtitle: string) => {
  const sub = subtitle.toLowerCase();
  return sub.includes("react native") || sub.includes("expo");
};

interface ProjectsProps {
  isActive?: boolean;
  isMobile?: boolean;
  setActivePanel?: (panel: "home" | "projects") => void;
}

const Projects: React.FC<ProjectsProps> = ({ isActive, isMobile = false, setActivePanel }) => {
  const { t, language } = useLanguage();
  const projectItems = t("projects.items") as { title: string; description: string }[];
  const [projectType, setProjectType] = useState<"individual" | "grupal">("individual");
  const [subType, setSubType] = useState<"mobile" | "web">("mobile");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [innerImageIndex, setInnerImageIndex] = useState(0);

  // Reset carousel to Kana Love when projects panel becomes inactive
  useEffect(() => {
    if (!isActive) {
      setProjectType("individual");
      setSubType("mobile");
      setCurrentIndex(0);
      setInnerImageIndex(0);
    }
  }, [isActive]);

  // Determine available subtypes dynamically
  const availableSubTypes = Array.from(
    new Set(
      projectsData
        .filter(p => p.type === projectType)
        .map(p => isMobileApp(p.subtitle) ? "mobile" : "web")
    )
  ) as ("mobile" | "web")[];

  const filteredProjects = projectsData.filter(p => {
    if (p.type !== projectType) return false;
    if (projectType === "individual") {
      const isMobile = isMobileApp(p.subtitle);
      return subType === "mobile" ? isMobile : !isMobile;
    }
    return true;
  });

  // Reset indices when changing category or subtype or current project
  useEffect(() => {
    const available = Array.from(
      new Set(
        projectsData
          .filter(p => p.type === projectType)
          .map(p => isMobileApp(p.subtitle) ? "mobile" : "web")
      )
    ) as ("mobile" | "web")[];
    
    if (available.length > 0 && !available.includes(subType)) {
      setSubType(available[0]);
    }
    setCurrentIndex(0);
    setInnerImageIndex(0);
  }, [projectType]);

  useEffect(() => {
    setCurrentIndex(0);
    setInnerImageIndex(0);
  }, [subType]);

  useEffect(() => {
    setInnerImageIndex(0);
  }, [currentIndex]);

  const handleNext = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  useEffect(() => {
    if (!isActive) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredProjects.length, isActive]);

  const currentProject = filteredProjects[currentIndex];
  const currentItemInfo = currentProject ? (projectItems[currentProject.id] || {}) : { title: "", description: "" };

  const currentImages = currentProject
    ? (currentProject.images || (currentProject.image ? [currentProject.image] : []))
    : [];
  const currentImage = currentImages[innerImageIndex] || "";
  const isMobileProject = currentProject ? isMobileApp(currentProject.subtitle) : false;

  // Autoplay inner images slideshow (resets on manual selection or arrow click)
  useEffect(() => {
    if (!currentProject || !currentProject.images || currentProject.images.length <= 1) return;
    const interval = setInterval(() => {
      setInnerImageIndex(prev => (prev + 1) % currentProject.images!.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [currentProject, currentIndex, innerImageIndex]);

  return (
    <div className={`w-full flex-1 flex flex-col relative px-4 md:px-16 overflow-x-hidden
      ${isMobile ? "justify-start py-6" : "justify-center py-8 md:py-12"}
    `}>
      {isMobile ? (
        <div className="w-full flex flex-col gap-6 max-w-2xl mx-auto pb-12 pt-2">
          <div className="flex items-center justify-between gap-3 mb-2 border-b border-slate-700/50 pb-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none flex items-center h-8">
              {t("projects.title")}
            </h2>
            {isMobile && setActivePanel && (
              <motion.button
                onClick={() => setActivePanel("home")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded bg-purple-500/20 text-purple-300 hover:text-purple-200 border border-purple-500/30 text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all hover:bg-purple-500/30 leading-none h-8 shadow-sm"
              >
                <i className="fa-solid fa-house text-[10px]" />
                <span className="leading-none">{language === "es" ? "Inicio" : "Home"}</span>
              </motion.button>
            )}
          </div>
          
          <div className="flex flex-col gap-6">
            {projectsData.map((project) => {
              const itemInfo = projectItems[project.id] || { title: "", description: "" };
              const projectImages = project.images || (project.image ? [project.image] : []);
              
              return (
                <div 
                  key={project.id}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md p-5 flex flex-col gap-4 shadow-xl"
                >
                  {/* Card Header */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {itemInfo.title}
                      </h3>
                      
                      {/* Tag pill */}
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border flex-shrink-0
                        ${project.type === "individual" 
                          ? "bg-purple-500/10 text-purple-400 border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.15)]" 
                          : project.type === "grupal"
                            ? "bg-teal-500/10 text-teal-400 border-teal-500/20 shadow-[0_0_10px_rgba(20,184,166,0.15)]"
                            : "bg-slate-800/40 text-slate-400 border-slate-700/50"
                        }
                      `}>
                        {project.type === "individual" 
                          ? t("projects.tags.individual") 
                          : project.type === "grupal"
                            ? t("projects.tags.grupal")
                            : (language === "en" ? "Legacy Project" : "Proyecto Legacy")
                        }
                      </span>
                    </div>
                    
                    <div className="text-xs text-slate-400 font-mono tracking-wide">
                      {project.subtitle}
                    </div>
                  </div>
                  
                  {/* Screenshots gallery */}
                  {projectImages.length > 0 && (
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory">
                      {projectImages.map((imgUrl, idx) => (
                        <div 
                          key={idx} 
                          className="flex-shrink-0 snap-center max-w-[85%] flex items-center justify-center"
                        >
                          <img 
                            src={imgUrl} 
                            alt={`${itemInfo.title} screenshot ${idx + 1}`}
                            className="h-64 object-contain rounded-xl border border-slate-800/80 shadow-md bg-slate-950/20"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Description */}
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                    {itemInfo.description}
                  </p>
                  
                  {/* Buttons */}
                  <div className="flex items-center gap-2.5 mt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow py-2 bg-purple-500/30 border border-purple-500/40 text-purple-200 hover:bg-purple-500/40 hover:border-purple-500/60 text-xs font-semibold rounded flex items-center justify-center gap-1.5 transition-all shadow-md"
                    >
                      <span>{t("projects.viewProject")}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                    
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700/60 text-slate-300 hover:text-white text-xs font-semibold rounded transition-all border border-slate-700/60"
                      >
                        {t("projects.demoVideo")}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="container mx-auto relative z-10 flex-grow flex flex-col justify-center">
        <div className="w-full max-w-6xl mx-auto relative">
          
          {/* Floating navigation arrows (Desktop only, active panel only, relative to max-w-6xl) */}
          {isActive && filteredProjects.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute -left-4 lg:-left-10 xl:-left-16 2xl:-left-24 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/50 hover:bg-slate-800/80 text-slate-400 hover:text-white transition-all backdrop-blur-md hidden lg:flex cursor-pointer shadow-lg"
                aria-label="Previous project"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              <button
                onClick={handleNext}
                className="absolute -right-4 lg:-right-10 xl:-right-16 2xl:-right-24 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/50 hover:bg-slate-800/80 text-slate-400 hover:text-white transition-all backdrop-blur-md hidden lg:flex cursor-pointer shadow-lg"
                aria-label="Next project"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}
          
          {/* Header section with Category Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-700/50 pb-5">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                {t("projects.title")}
              </h2>
              
              {/* Sub-tabs for Projects (Constant-height wrapper to prevent shifting) */}
              <div className="flex items-center gap-3 mt-3 h-7">
                {availableSubTypes.includes("mobile") && (
                  <button
                    onClick={() => setSubType("mobile")}
                    disabled={availableSubTypes.length === 1}
                    className={`px-4 py-1 rounded text-[10px] font-bold uppercase tracking-wider transition-all border 
                      ${availableSubTypes.length === 1 
                        ? "cursor-default border-slate-700/40 text-slate-400 bg-slate-800/20" 
                        : (subType === "mobile" 
                          ? "cursor-pointer bg-purple-500/30 border-purple-500/45 text-purple-200 shadow-sm" 
                          : "cursor-pointer bg-slate-800/30 border-slate-700/40 text-slate-400 hover:text-slate-200 hover:border-slate-600/50"
                        )
                      }
                    `}
                  >
                    {language === "en" ? "Mobile Apps" : "Apps Móviles"}
                  </button>
                )}
                {availableSubTypes.includes("web") && (
                  <button
                    onClick={() => setSubType("web")}
                    disabled={availableSubTypes.length === 1}
                    className={`px-4 py-1 rounded text-[10px] font-bold uppercase tracking-wider transition-all border 
                      ${availableSubTypes.length === 1 
                        ? "cursor-default border-slate-700/40 text-slate-400 bg-slate-800/20" 
                        : (subType === "web" 
                          ? "cursor-pointer bg-purple-500/30 border-purple-500/45 text-purple-200 shadow-sm" 
                          : "cursor-pointer bg-slate-800/30 border-slate-700/40 text-slate-400 hover:text-slate-200 hover:border-slate-600/50"
                        )
                      }
                    `}
                  >
                    {language === "en" ? "Websites" : "Sitios Web"}
                  </button>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2 flex-none self-start md:self-center">
              <button 
                onClick={() => setProjectType("individual")}
                className={`px-4 py-2 rounded text-xs font-bold transition-all border cursor-pointer
                  ${projectType === "individual" 
                    ? "bg-purple-500/30 border-purple-500/40 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)]" 
                    : "bg-slate-800/40 border-slate-700/40 text-slate-400 hover:text-white hover:border-slate-600/50"
                  }
                `}
              >
                {t("projects.tabs.individual")}
              </button>
              <button 
                onClick={() => setProjectType("grupal")}
                className={`px-4 py-2 rounded text-xs font-bold transition-all border cursor-pointer
                  ${projectType === "grupal" 
                    ? "bg-teal-500/30 border-teal-500/40 text-teal-200 shadow-[0_0_15px_rgba(20,184,166,0.2)]" 
                    : "bg-slate-800/40 border-slate-700/40 text-slate-400 hover:text-white hover:border-slate-600/50"
                  }
                `}
              >
                {t("projects.tabs.grupal")}
              </button>
            </div>
          </div>

          {/* Grid Layout (4 cols text, 8 cols giant screenshot) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative min-h-[300px] md:min-h-[420px] lg:min-h-[480px]">

            {/* Left Column: Spacious Product Info (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-center text-left relative z-10">
              <AnimatePresence mode="wait">
                {currentProject ? (
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Project Title */}
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                      {currentItemInfo.title}
                    </h3>

                    {/* Tech details subtitle (Larger font size) */}
                    <div className="text-sm md:text-base text-slate-400 font-mono tracking-wide mb-6">
                      {currentProject.subtitle}
                    </div>

                    {/* Project Description (Fixed height to stabilize layout) */}
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 font-light max-w-xl h-24 md:h-20 overflow-y-auto scrollbar-none">
                      {currentItemInfo.description}
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-purple-500/30 border border-purple-500/40 text-purple-200 hover:bg-purple-500/40 hover:border-purple-500/60 text-xs md:text-sm font-semibold rounded flex items-center gap-2 transition-all shadow-md hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                      >
                        <span>{t("projects.viewProject")}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                      
                      {currentProject.demo && (
                        <a
                          href={currentProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 bg-slate-800/50 hover:bg-slate-700/60 text-slate-300 hover:text-white text-xs md:text-sm font-semibold rounded transition-all border border-slate-700/60 hover:border-slate-500"
                        >
                          {t("projects.demoVideo")}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-slate-400 font-light text-sm">
                    {language === "en" ? "No projects found in this section." : "No se encontraron proyectos en esta sección."}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Giant Screenshot Showcase (8 cols) - Balanced Width & Height */}
            <div className="lg:col-span-8 flex items-center justify-center w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden relative z-10">
              <AnimatePresence mode="wait">
                {currentProject && (
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full h-full flex justify-center items-center"
                  >
                    {/* Unified widescreen screenshot container (no forced phone shape, no background/border container) */}
                    <div className="w-full h-full relative overflow-hidden mx-auto">
                      
                      {/* Sliding horizontal strip for screenshots */}
                      <motion.div
                        className="flex h-full w-full"
                        animate={{ x: `-${innerImageIndex * 100}%` }}
                        transition={{ type: "spring", stiffness: 260, damping: 26 }}
                      >
                        {currentImages.map((imgUrl, idx) => (
                          <div key={idx} className="w-full h-full flex-shrink-0 flex items-center justify-center">
                            <img 
                              src={imgUrl} 
                              alt={`${currentItemInfo.title} screenshot ${idx + 1}`} 
                              className="max-w-full max-h-full object-contain rounded-2xl border border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            />
                          </div>
                        ))}
                      </motion.div>
                      
                      {/* Screenshot Carousel Navigation Controls (Always visible if multiple screenshots exist) */}
                      {currentImages.length > 1 && (
                        <>
                          {/* Left button */}
                          <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setInnerImageIndex(prev => (prev - 1 + currentImages.length) % currentImages.length);
                            }}
                            className={`absolute top-1/2 -translate-y-1/2 p-2 rounded bg-slate-950/75 border border-slate-600/80 text-slate-300 hover:text-white transition-all z-20 cursor-pointer shadow-md hover:bg-slate-900/80
                              ${isMobileProject 
                                ? "left-[8%] sm:left-[12%] md:left-[16%] lg:left-[20%] xl:left-[22%]" 
                                : "left-4 sm:left-6 md:left-8"
                              }
                            `}
                            aria-label="Previous screenshot"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                          </button>
                          
                          {/* Right button */}
                          <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setInnerImageIndex(prev => (prev + 1) % currentImages.length);
                            }}
                            className={`absolute top-1/2 -translate-y-1/2 p-2 rounded bg-slate-950/75 border border-slate-600/80 text-slate-300 hover:text-white transition-all z-20 cursor-pointer shadow-md hover:bg-slate-900/80
                              ${isMobileProject 
                                ? "right-[8%] sm:right-[12%] md:right-[16%] lg:right-[20%] xl:right-[22%]" 
                                : "right-4 sm:right-6 md:right-8"
                              }
                            `}
                            aria-label="Next screenshot"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                          </button>
                          
                          {/* Inner Dot Indicators */}
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                            {currentImages.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setInnerImageIndex(idx);
                                }}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === innerImageIndex ? "bg-white w-3" : "bg-white/40"}`}
                                aria-label={`Go to screenshot ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Bottom Pagination controls (Sleek circular dots with active animated sliding spring ring) */}
          <div className="flex justify-center items-center h-8 mt-6 md:mt-8 z-20 gap-1">
            {isActive && filteredProjects.length > 1 && filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="relative flex items-center justify-center w-6 h-6 group cursor-pointer"
                aria-label={`Go to project slide ${idx + 1}`}
              >
                {/* Active animated sliding spring ring */}
                {idx === currentIndex && (
                  <motion.span
                    layoutId="activeProjectIndicator"
                    className={`absolute inset-0 rounded-full border bg-opacity-10 backdrop-blur-[1px]
                      ${projectType === "individual"
                        ? "border-purple-500/50 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.25)]"
                        : "border-teal-500/50 bg-teal-500/10 shadow-[0_0_8px_rgba(20,184,166,0.25)]"
                      }
                    `}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                
                {/* Core pagination dot */}
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 z-10
                    ${idx === currentIndex
                      ? (projectType === "individual" ? "bg-purple-400 shadow-[0_0_6px_#c084fc] scale-125" : "bg-teal-400 shadow-[0_0_6px_#2dd4bf] scale-125")
                      : "bg-slate-600/80 group-hover:bg-slate-400 group-hover:scale-125"
                    }
                  `}
                />
              </button>
            ))}
          </div>

        </div>
      </div>
    )}
  </div>
);
};

export default Projects;
