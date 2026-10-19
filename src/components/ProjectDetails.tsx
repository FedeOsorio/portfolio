"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectDetailsProps {
  project: any;
  itemInfo: { title: string; description: string; problem?: string; solution?: string };
  onBack: () => void;
  isMobileProject: boolean;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, itemInfo, onBack, isMobileProject }) => {
  const { t } = useLanguage();
  const images = project.images || (project.image ? [project.image] : []);

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden relative bg-slate-950/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full min-h-full flex flex-col py-8 px-6 md:px-[8.33vw]"
      >
      {/* Top Bar / Breadcrumb */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400 uppercase tracking-widest">
          <button 
            onClick={onBack}
            className="hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <i className="fa-solid fa-arrow-left" />
            {t("projects.details.backButton")}
          </button>
          <span>/</span>
          <span className="text-slate-200">{itemInfo.title}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 bg-slate-800/50 hover:bg-slate-700/60 text-slate-300 hover:text-white text-[10px] md:text-xs font-semibold rounded transition-all border border-slate-700/60 uppercase tracking-wider"
            >
              <i className="fa-solid fa-video" />
              {t("projects.demoVideo")}
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 bg-purple-500/30 border border-purple-500/40 text-purple-200 hover:bg-purple-500/40 hover:border-purple-500/60 text-[10px] md:text-xs font-semibold rounded transition-all shadow-md uppercase tracking-wider"
          >
            <i className="fa-solid fa-external-link-alt" />
            {t("projects.viewProject")}
          </a>
        </div>
      </div>

      {/* Header Section */}
      <div className="w-full flex flex-col gap-3 py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
          {itemInfo.title}
        </h1>
        <div className="font-mono text-sm md:text-base text-purple-400 tracking-wide">
          {project.subtitle}
        </div>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
          {itemInfo.description}
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col gap-10 border-t border-slate-800/80 pt-8">
        
        {/* Placeholder text blocks for Problem/Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest">
              {t("projects.details.problemTitle")}
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {itemInfo.problem || "Este proyecto surge como una solución tecnológica para optimizar y modernizar un flujo de trabajo que anteriormente requería procesos manuales extensos o para cubrir una necesidad de mercado específica en su área de aplicación."}
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest">
              {t("projects.details.solutionTitle")}
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {itemInfo.solution || "Se desarrolló un sistema a medida utilizando las herramientas más adecuadas para garantizar escalabilidad, seguridad y una excelente experiencia de usuario, logrando automatizar y facilitar la operativa diaria."}
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        {images.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest">
              {t("projects.details.galleryTitle")}
            </h3>
            <div className={`grid gap-6 ${isMobileProject ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1 lg:grid-cols-2"}`}>
              {images.map((imgUrl: string, idx: number) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-slate-800/80 shadow-lg bg-slate-900/50 flex items-center justify-center p-2">
                  <img 
                    src={imgUrl} 
                    alt={`${itemInfo.title} screenshot ${idx + 1}`} 
                    className="max-h-[500px] w-auto object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
      </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
