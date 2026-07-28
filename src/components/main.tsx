"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const backendSkills = [
  { name: "Java", type: "purple" },
  { name: "Spring Boot", type: "purple" },
  { name: "Node.js", type: "purple" },
  { name: "Express", type: "purple" },
  { name: "Nest.js", type: "purple" },
  { name: "GraphQL", type: "purple" },
  { name: "Prisma", type: "purple" },
  { name: "Drizzle", type: "purple" },
  { name: "Redis", type: "purple" },
  { name: "RabbitMQ", type: "purple" },
];

const frontendSkills = [
  { name: "TypeScript", type: "teal" },
  { name: "Angular", type: "teal" },
  { name: "React.js", type: "teal" },
  { name: "React Native", type: "teal" },
  { name: "Expo", type: "teal" },
  { name: "Next.js", type: "teal" },
];

const toolsSkills = [
  { name: "PostgreSQL", type: "neutral" },
  { name: "MongoDB", type: "neutral" },
  { name: "Docker", type: "neutral" },
  { name: "Linux", type: "neutral" },
  { name: "Git", type: "neutral" },
  { name: "CI/CD", type: "neutral" },
  { name: "LLM Integration", type: "neutral" },
  { name: "AI Agents", type: "neutral" },
];

interface MainProps {
  setActivePanel?: (panel: "home" | "projects") => void;
  isMobile?: boolean;
}

const Main: React.FC<MainProps> = ({ setActivePanel, isMobile = false }) => {
  const { t, language } = useLanguage();
  const [techIndex, setTechIndex] = useState(0);

  const techCategories = [
    {
      id: "backend",
      label: "Backend",
      icon: "fa-server",
      skills: backendSkills,
      borderColor: "border-purple-500/20 hover:border-purple-500/40",
      badgeBg: "bg-purple-500/10 text-purple-400",
      activeTabBg: "bg-purple-500/25 border-purple-500/40 text-purple-200 shadow-sm",
    },
    {
      id: "frontend",
      label: "Frontend",
      icon: "fa-laptop-code",
      skills: frontendSkills,
      borderColor: "border-teal-500/20 hover:border-teal-500/40",
      badgeBg: "bg-teal-500/10 text-teal-400",
      activeTabBg: "bg-teal-500/25 border-teal-500/40 text-teal-200 shadow-sm",
    },
    {
      id: "tools",
      label: language === "es" ? "Herramientas y Base de Datos" : "Tools & Databases",
      icon: "fa-screwdriver-wrench",
      skills: toolsSkills,
      borderColor: "border-slate-700/40 hover:border-slate-500/40",
      badgeBg: "bg-slate-800/40 text-slate-400",
      activeTabBg: "bg-slate-800/60 border-slate-600/50 text-slate-200 shadow-sm",
    },
  ];

  const getPillClass = (type: string) => {
    switch (type) {
      case "purple":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]";
      case "teal":
        return "bg-teal-500/10 text-teal-400 border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.1)]";
      default:
        return "bg-slate-800/40 text-slate-400 border-slate-700/50";
    }
  };

  const renderSkillsRow = (skills: any[]) => (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 w-full">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className={`flex items-center justify-center text-center font-semibold border shadow-sm cursor-default transition-colors ${getPillClass(skill.type)} px-3.5 py-1 md:px-4 md:py-1.5 text-[11px] md:text-[13px] rounded-2xl`}
        >
          {skill.name}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`w-full flex-1 flex flex-col relative my-auto
      ${isMobile ? "justify-start pt-6" : "justify-center py-4 md:py-6"}
    `}>
      <div className="w-full px-6 md:pl-[calc(3rem+80px)] md:pr-12 lg:pl-[calc(8rem+80px)] lg:pr-32 xl:pl-[calc(12rem+80px)] xl:pr-48 relative z-10 flex-grow flex flex-col justify-center">
        <div className="w-full mx-auto flex flex-col gap-6 lg:gap-8">

          {/* Top Section: Intro and Contact */}
          <div className="w-full flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between gap-3 mb-3 w-full">
                <p className="text-purple-400 font-bold tracking-[0.25em] uppercase text-sm md:text-base leading-none m-0 flex items-center h-8">
                  Federico Osorio
                </p>
                {isMobile && setActivePanel && (
                  <motion.button
                    onClick={() => setActivePanel("projects")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded bg-purple-500/20 text-purple-300 hover:text-purple-200 border border-purple-500/30 text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all hover:bg-purple-500/30 leading-none h-8 shadow-sm"
                  >
                    <i className="fa-solid fa-briefcase text-[10px]" />
                    <span className="leading-none">{language === "es" ? "Proyectos" : "Projects"}</span>
                  </motion.button>
                )}
              </div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white mb-6 tracking-tighter leading-[1.05]">
                Full Stack{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400">
                  Developer
                </span>
              </h1>

              <p className="text-sm md:text-base xl:text-lg text-slate-300 leading-relaxed mb-8 font-light max-w-[55ch]">
                {t("main.specialization")}
              </p>

              {/* Contact Section - Centered */}
              <div className="space-y-3 border-t border-slate-700/50 pt-5 flex flex-col items-center text-center">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  {t("main.contactTitle")}
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="mailto:fedee.osorio@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800/40 hover:bg-slate-700/60 text-purple-300 hover:text-purple-200 rounded-full transition-all border border-purple-500/20 hover:border-purple-500/40 text-xs md:text-sm font-semibold shadow-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                  >
                    <i className="fa-solid fa-envelope text-sm" />
                    <span>fedee.osorio@gmail.com</span>
                  </a>
                  <a
                    href="https://github.com/FedeOsorio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-slate-800/40 hover:bg-slate-700/60 text-white rounded-full transition-all border border-slate-700/50 hover:border-slate-400/50 hover:shadow-sm"
                  >
                    <i className="fa-brands fa-github text-lg" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fedeosorio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-slate-800/40 hover:bg-slate-700/60 text-white rounded-full transition-all border border-slate-700/50 hover:border-teal-500/50 hover:shadow-sm"
                  >
                    <i className="fa-brands fa-linkedin text-lg" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section: Reserved Outer Area with Flexible 1/2 Row Card */}
          <div className="w-full flex flex-col gap-3 min-h-[180px] md:min-h-[190px] flex-none justify-start">
            <div className="flex flex-wrap items-center justify-between gap-3 flex-none">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 hidden sm:block">
                {t("main.techStack")}
              </h3>

              {/* Category Pills / Navigation Tabs */}
              <div className="flex items-center gap-2 md:gap-3">
                {techCategories.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => setTechIndex(idx)}
                    className={`px-4 py-1.5 rounded-md text-xs md:text-[13px] font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                      techIndex === idx
                        ? cat.activeTabBg
                        : "bg-slate-900/30 text-slate-400 border-slate-800/60 hover:text-slate-200 hover:border-slate-700"
                    }`}
                  >
                    {cat.id === "tools" ? (language === "es" ? "Herramientas" : "Tools") : cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Reserved Outer Space */}
            <div className="relative w-full min-h-[135px] md:min-h-[145px] flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={techCategories[techIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                  className={`p-4 md:p-5 rounded-2xl bg-slate-900/40 backdrop-blur-md border ${techCategories[techIndex].borderColor} transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex flex-col gap-3 group w-full h-auto`}
                >

                  {renderSkillsRow(techCategories[techIndex].skills)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
