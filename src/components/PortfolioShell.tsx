"use client";
import React from "react";
import Header from "./header";
import Main from "./main";
import Projects from "./projects";
import { useLanguage } from "@/context/LanguageContext";

const PortfolioShell = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen flex flex-col relative text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      {/* Background ambient lighting effects (Apple-like subtle glow) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] -left-40 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px]" />
      </div>

      {/* Sticky Apple-like Glass Header */}
      <Header />

      {/* Main Single-Scroll Experience */}
      <main className="w-full flex-1 flex flex-col relative z-10">
        {/* Section 1: Hero Home */}
        <section
          id="home"
          className="w-full pt-16 flex flex-col items-center scroll-mt-16"
        >
          <Main />
        </section>

        {/* Section 2: Projects Showcase */}
        <section
          id="projects"
          className="w-full bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950/80 scroll-mt-16"
        >
          <Projects />
        </section>
      </main>

      {/* Apple-style Footer */}
      <footer className="w-full border-t border-slate-800/60 bg-slate-950/60 backdrop-blur-md py-8 px-6 md:px-[8.33vw] relative z-10">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">Federico Osorio</span>
            <span>•</span>
            <span>{t("main.role")}</span>
          </div>
          <p className="font-light">
            {t("main.madeWith")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioShell;
