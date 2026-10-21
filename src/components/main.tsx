"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { smoothScrollTo } from "@/utils/scroll";

const backendSkills = [
  { name: "Java", type: "purple" },
  { name: "Spring Boot", type: "purple" },
  { name: "Node.js", type: "purple" },
  { name: "Nest.js", type: "purple" },
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
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("fedee.osorio@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

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


  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const headerOffset = 65;
      const elementPosition = el.getBoundingClientRect().top;
      const targetY = elementPosition + window.pageYOffset - headerOffset;
      smoothScrollTo(targetY, 850);
    }
  };

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="w-full px-6 md:px-[8.33vw] flex flex-col items-center text-center pt-[50px] pb-[50px]  relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full flex flex-col items-center gap-8 md:gap-10"
        >
          <div className="w-full flex flex-col items-center text-center max-w-4xl mx-auto gap-4 md:gap-5">
            <h1 className="font-graphik text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white tracking-tight leading-[1.12]">
              {language === "es" ? "La solución que imaginas," : "The solution you imagine,"}{" "}
              <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400">
                {language === "es" ? "es posible." : "is possible."}
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl font-light leading-relaxed">
              {t("main.specialization")}
            </p>
          </div>

          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 text-left items-stretch">
            <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 p-5 sm:p-6 md:p-7 backdrop-blur-xl flex flex-col justify-between shadow-xl transition-all duration-300 gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-purple-400">
                  {language === "es" ? "Ingeniería de Software" : "Software Engineering"}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-[1.65rem] font-extrabold text-white tracking-tight leading-snug">
                  <span>{language === "es" ? "Construcción de productos" : "Building scalable"}</span>
                  <br />
                  <span className="italic font-serif font-normal text-purple-300">
                    {language === "es" ? "escalables." : "solutions."}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed min-h-[3.75rem] sm:min-h-[4rem] flex items-start">
                  {language === "es"
                    ? "Desarrollo fullstack y móvil centrado en seguridad de la información, velocidad de respuesta y arquitectura limpia."
                    : "Fullstack and mobile development focused on information security, high response speed, and clean architecture."}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex flex-wrap items-center gap-2">
                  {techCategories.map((cat, idx) => (
                    <button
                      key={cat.id}
                      onClick={() => setTechIndex(idx)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all border cursor-pointer ${techIndex === idx
                        ? "bg-slate-900/90 border-purple-500/60 text-white shadow-sm"
                        : "bg-slate-950/60 text-slate-400 border-slate-800/80 hover:bg-slate-900/80 hover:text-slate-200 hover:border-slate-700"
                        }`}
                    >
                      <i className={`fa-solid ${cat.icon} text-[11px]`} />
                      <span>{cat.id === "tools" ? (language === "es" ? "Herramientas" : "Tools") : cat.label}</span>
                    </button>
                  ))}
                </div>

                <div className="relative w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={techCategories[techIndex].id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="p-3 sm:p-3.5 rounded-2xl bg-slate-950/40 backdrop-blur-xl border border-slate-800/80 transition-colors flex flex-wrap gap-1.5"
                    >
                      {techCategories[techIndex].skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/60 hover:bg-slate-900/90 border transition-all text-xs font-medium cursor-default shadow-sm ${skill.type === "purple"
                            ? "border-slate-800/80 hover:border-purple-500/50 text-slate-200 hover:text-white"
                            : skill.type === "teal"
                              ? "border-slate-800/80 hover:border-teal-500/50 text-slate-200 hover:text-white"
                              : "border-slate-800/80 hover:border-slate-600 text-slate-300 hover:text-white"
                            }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${skill.type === "purple"
                              ? "bg-purple-400"
                              : skill.type === "teal"
                                ? "bg-teal-400"
                                : "bg-slate-400"
                              }`}
                          />
                          <span className="tracking-tight">{skill.name}</span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-pink-500/40 p-5 sm:p-6 md:p-7 backdrop-blur-xl flex flex-col justify-between shadow-xl transition-all duration-300 gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-pink-400">
                  {language === "es" ? "Contacto Directo" : "Direct Contact"}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-[1.65rem] font-extrabold text-white tracking-tight leading-snug">
                  <span>{language === "es" ? "Iniciemos tu próximo" : "Start your next"}</span>
                  <br />
                  <span className="italic font-serif font-normal text-rose-300">
                    {language === "es" ? "desafío." : "project."}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed min-h-[3.75rem] sm:min-h-[4rem] flex items-start">
                  {language === "es"
                    ? "Abierto a oportunidades laborales, freelance o por proyecto, mantenimiento, migración o nuevos proyectos."
                    : "Open to full-time engineering roles, freelance or contract work, system maintenance, migrations, or new products."}
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="h-[38px] w-full flex items-center justify-between px-3 rounded-xl bg-slate-950/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-purple-500/40 transition-all text-slate-200 hover:text-white group">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=fedee.osorio@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors grow h-full"
                  >
                    <i className="fa-solid fa-envelope text-purple-400 text-xs shrink-0 w-4 text-center" />
                    <span className="text-xs font-semibold">Email</span>
                  </a>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handleCopyEmail}
                      title={language === "es" ? "Copiar correo" : "Copy email"}
                      aria-label="Copiar correo"
                      className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-purple-300 transition-colors py-0.5 px-2 rounded-md hover:bg-slate-800 cursor-pointer"
                    >
                      <i className={`fa-solid ${copied ? "fa-check text-green-400" : "fa-copy text-[10px]"}`} />
                      <span className="text-[10px] font-mono">{copied ? (language === "es" ? "Copiado" : "Copied") : (language === "es" ? "Copiar" : "Copy")}</span>
                    </button>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=fedee.osorio@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 group-hover:text-slate-300 transition-colors flex items-center justify-center"
                      title="Gmail"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                    </a>
                  </div>
                </div>

                <a
                  href="https://github.com/FedeOsorio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[38px] w-full flex items-center justify-between px-3 rounded-xl bg-slate-950/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 transition-all text-slate-200 hover:text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <i className="fa-brands fa-github text-white text-xs shrink-0 w-4 text-center" />
                    <span className="text-xs font-semibold">GitHub</span>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/fedeosorio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[38px] w-full flex items-center justify-between px-3 rounded-xl bg-slate-950/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-blue-500/40 transition-all text-slate-200 hover:text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <i className="fa-brands fa-linkedin text-blue-400 text-xs shrink-0 w-4 text-center" />
                    <span className="text-xs font-semibold">LinkedIn</span>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <button
              onClick={scrollToProjects}
              className="group flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            >
              <span className="text-[11px] font-semibold tracking-widest uppercase">
                {t("main.scrollDown") || (language === "es" ? "Explorar proyectos" : "Explore projects")}
              </span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="w-7 h-7 rounded-full border border-slate-800 bg-slate-900/60 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-slate-800/80 transition-all shadow-sm"
              >
                <i className="fa-solid fa-chevron-down text-xs text-purple-400" />
              </motion.div>
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Main;
