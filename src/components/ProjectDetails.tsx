"use client";
import React from "react";
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
    <div className="w-full h-full flex flex-col overflow-hidden bg-slate-900">
      <div className="w-full flex items-center justify-between py-3.5 px-5 sm:px-8 border-b border-slate-800/80 bg-slate-900/95 backdrop-blur-md shrink-0 pr-14 sm:pr-16 z-10">
        <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs text-slate-400 uppercase tracking-widest overflow-hidden text-ellipsis whitespace-nowrap min-w-0">
          <button 
            onClick={onBack}
            className="hover:text-purple-400 text-slate-400 transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
          >
            <i className="fa-solid fa-arrow-left text-xs" />
            <span className="hidden sm:inline">{t("projects.details.backButton")}</span>
          </button>
          <span className="text-slate-600 hidden sm:inline">/</span>
          <span className="text-slate-200 font-semibold truncate">{itemInfo.title}</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 h-[36px] px-3.5 bg-slate-950/60 hover:bg-slate-900/90 text-slate-200 hover:text-white text-xs font-semibold rounded-xl transition-all border border-slate-800/80 hover:border-purple-500/50 shadow-sm"
            >
              <i className="fa-solid fa-video text-purple-400 text-xs" />
              <span>{t("projects.demoVideo")}</span>
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 h-[36px] px-3.5 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 hover:border-purple-400 text-purple-200 hover:text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
          >
            <span>{t("projects.viewProject")}</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
          </a>
        </div>
      </div>

      <div className="w-full flex-1 overflow-y-auto px-5 sm:px-8 md:px-10 py-6 sm:py-8 flex flex-col gap-8">
        <div className="w-full flex flex-col gap-2.5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {itemInfo.title}
          </h1>
          <div className="font-mono text-xs sm:text-sm text-purple-400 tracking-wide font-medium">
            {project.subtitle}
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-light mt-1">
            {itemInfo.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-4 border-t border-slate-800/80">
          <div className="flex flex-col gap-2.5 p-5 sm:p-6 rounded-2xl bg-slate-950/50 border border-slate-800/80">
            <h3 className="text-xs font-mono text-rose-400 uppercase tracking-widest font-semibold flex items-center gap-2">
              <i className="fa-solid fa-circle-exclamation text-xs" />
              {t("projects.details.problemTitle")}
            </h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm font-light">
              {itemInfo.problem || "Este proyecto surge como una solución tecnológica para optimizar y modernizar un flujo de trabajo que anteriormente requería procesos manuales extensos o para cubrir una necesidad de mercado específica en su área de aplicación."}
            </p>
          </div>
          
          <div className="flex flex-col gap-2.5 p-5 sm:p-6 rounded-2xl bg-slate-950/50 border border-slate-800/80">
            <h3 className="text-xs font-mono text-teal-400 uppercase tracking-widest font-semibold flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-xs" />
              {t("projects.details.solutionTitle")}
            </h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm font-light">
              {itemInfo.solution || "Se desarrolló un sistema a medida utilizando las herramientas más adecuadas para garantizar escalabilidad, seguridad y una excelente experiencia de usuario, logrando automatizar y facilitar la operativa diaria."}
            </p>
          </div>
        </div>

        {images.length > 0 && (
          <div className="flex flex-col gap-4 pt-4 border-t border-slate-800/80 pb-6">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
              {t("projects.details.galleryTitle")}
            </h3>
            <div className={`grid gap-4 sm:gap-6 ${isMobileProject ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 lg:grid-cols-2"}`}>
              {images.map((imgUrl: string, idx: number) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-slate-800/80 shadow-xl bg-slate-950/60 flex items-center justify-center p-3 hover:border-slate-700 transition-colors">
                  <img 
                    src={imgUrl} 
                    alt={`${itemInfo.title} screenshot ${idx + 1}`} 
                    className="max-h-[460px] w-auto object-contain rounded-xl shadow-md"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
