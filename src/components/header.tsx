"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { smoothScrollTo } from "@/utils/scroll";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollTo = (id: string) => {
    if (id === "home") {
      smoothScrollTo(0, 750);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 65;
      const elementPosition = el.getBoundingClientRect().top;
      const targetY = elementPosition + window.pageYOffset - headerOffset;
      smoothScrollTo(targetY, 850);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl transition-all">
      <div className="w-full flex py-3 px-6 md:px-[8.33vw] justify-between items-center">
        {/* Brand / Name */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-4 text-left text-white group cursor-pointer"
        >
          <div className="flex flex-col">
            <span className="text-lg md:text-xl leading-tight font-extrabold tracking-tight group-hover:text-purple-300 transition-colors">
              Federico Osorio
            </span>
          </div>
          <div className="hidden sm:flex flex-col pl-4 border-l border-slate-800 justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 font-bold tracking-widest text-[11px] uppercase">
              {t("main.role")}
            </span>
          </div>
        </button>

        {/* Navigation and Language Switcher */}
        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden sm:flex items-center gap-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <button
              onClick={() => scrollTo("home")}
              className="hover:text-purple-300 transition-colors cursor-pointer"
            >
              {language === "es" ? "Inicio" : "Home"}
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="hover:text-teal-300 transition-colors cursor-pointer"
            >
              {language === "es" ? "Proyectos" : "Projects"}
            </button>
          </nav>

          <div className="flex items-center bg-slate-900/80 rounded-full p-1 border border-slate-800 w-24 justify-center shadow-inner">
            <button
              onClick={() => setLanguage("es")}
              className={`flex-1 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                language === "es"
                  ? "bg-purple-500/30 text-purple-200 border border-purple-500/40 shadow-sm"
                  : "text-slate-400 hover:text-white border border-transparent"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`flex-1 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                language === "en"
                  ? "bg-purple-500/30 text-purple-200 border border-purple-500/40 shadow-sm"
                  : "text-slate-400 hover:text-white border border-transparent"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Neon Beam traveling border at bottom of header */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-teal-500/15" />
        <div className="neon-horizontal-beam" />
      </div>
    </header>
  );
};

export default Header;
