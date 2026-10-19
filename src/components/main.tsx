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

const Main: React.FC = () => {
  const { t, language } = useLanguage();
  const [techIndex, setTechIndex] = useState(0);

  const techCategories = [
    {
      id: "backend",
      label: "Backend",
      icon: "fa-server",
      skills: backendSkills,
      borderColor: "border-purple-500/30 hover:border-purple-500/50",
      activeTabBg: "bg-purple-500/25 border-purple-500/50 text-purple-200 shadow-sm",
    },
    {
      id: "frontend",
      label: "Frontend",
      icon: "fa-laptop-code",
      skills: frontendSkills,
      borderColor: "border-teal-500/30 hover:border-teal-500/50",
      activeTabBg: "bg-teal-500/25 border-teal-500/50 text-teal-200 shadow-sm",
    },
    {
      id: "tools",
      label: language === "es" ? "Herramientas y BD" : "Tools & Databases",
      icon: "fa-screwdriver-wrench",
      skills: toolsSkills,
      borderColor: "border-slate-700/60 hover:border-slate-500/60",
      activeTabBg: "bg-slate-800/80 border-slate-600/60 text-slate-200 shadow-sm",
    },
  ];

  const getPillClass = (type: string) => {
    switch (type) {
      case "purple":
        return "bg-purple-500/10 text-purple-300 border-purple-500/25 shadow-[0_0_15px_rgba(168,85,247,0.12)]";
      case "teal":
        return "bg-teal-500/10 text-teal-300 border-teal-500/25 shadow-[0_0_15px_rgba(20,184,166,0.12)]";
      default:
        return "bg-slate-800/60 text-slate-300 border-slate-700/60";
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const headerOffset = 65;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="w-full px-6 md:px-[8.33vw] flex flex-col items-center text-center gap-12 py-12 md:gap-[8vh] md:py-[8vh] relative z-10">

        {/* Elemento 1: H1 + Botones de Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full flex flex-col items-center justify-center text-center gap-5"
        >
          <h1 className="w-full font-graphik text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.15] text-center">
            {t("main.heroTagline") || "La solución que imaginas, es posible"}
          </h1>

          <div className="w-full flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:fedee.osorio@gmail.com"
              className="flex items-center gap-2.5 px-6 py-2.5 bg-purple-500/15 hover:bg-purple-500/25 text-purple-200 rounded-full transition-all border border-purple-500/30 hover:border-purple-500/50 text-xs md:text-sm font-semibold shadow-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              <i className="fa-solid fa-envelope text-sm" />
              <span>fedee.osorio@gmail.com</span>
            </a>
            <a
              href="https://github.com/FedeOsorio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center justify-center w-11 h-11 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full transition-all border border-slate-800 hover:border-slate-600 shadow-sm"
            >
              <i className="fa-brands fa-github text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/fedeosorio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center justify-center w-11 h-11 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full transition-all border border-slate-800 hover:border-teal-500/50 shadow-sm"
            >
              <i className="fa-brands fa-linkedin text-lg" />
            </a>
          </div>
        </motion.div>

        {/* Elemento 2: Nombre, Rol y Breve Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="w-full flex flex-col items-center justify-center text-center gap-2"
        >
          <div className="flex items-center gap-2">
            <span className="text-white font-extrabold text-sm md:text-base tracking-wide">
              Federico Osorio
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 font-bold uppercase tracking-wider text-xs">
              {t("main.role")}
            </span>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-light">
            {t("main.specialization")}
          </p>
        </motion.div>

        {/* Elemento 3: Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="w-full flex flex-col items-center justify-center text-center gap-3"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            {techCategories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setTechIndex(idx)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all border cursor-pointer ${
                  techIndex === idx
                    ? cat.activeTabBg
                    : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                <i className={`fa-solid ${cat.icon} text-[10px]`} />
                {cat.id === "tools" ? (language === "es" ? "Herramientas" : "Tools") : cat.label}
              </button>
            ))}
          </div>

          {/* Skills Pills Card */}
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={techCategories[techIndex].id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`p-4 sm:p-5 rounded-2xl bg-slate-900/40 backdrop-blur-xl border ${techCategories[techIndex].borderColor} transition-colors shadow-xl flex flex-wrap justify-center gap-2`}
              >
                {techCategories[techIndex].skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center justify-center font-medium border transition-transform hover:scale-105 cursor-default ${getPillClass(
                      skill.type
                    )} px-3.5 py-1 text-xs rounded-full`}
                  >
                    {skill.name}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Elemento 4: Explorar Proyectos */}
        <div className="w-full flex justify-center">
          <button
            onClick={scrollToProjects}
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
          >
            <span className="text-[11px] font-semibold tracking-widest uppercase">
              {t("main.scrollDown") || (language === "es" ? "Explorar proyectos" : "Explore projects")}
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-8 h-8 rounded-full border border-slate-800 bg-slate-900/60 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-slate-800/80 transition-all shadow-sm"
            >
              <i className="fa-solid fa-chevron-down text-xs text-purple-400" />
            </motion.div>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Main;
