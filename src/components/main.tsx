"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const backendSkills = [
  { name: "Java", type: "purple" },
  { name: "Spring Boot", type: "purple" },
  { name: "Node.js", type: "purple" },
  { name: "Express", type: "purple" },
  { name: "Nest.js", type: "purple" },
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
  { name: "Prisma", type: "neutral" },
  { name: "PostgreSQL", type: "neutral" },
  { name: "MongoDB", type: "neutral" },
  { name: "Redis", type: "neutral" },
  { name: "RabbitMQ", type: "neutral" },
  { name: "Docker", type: "neutral" },
  { name: "Linux", type: "neutral" },
  { name: "Git", type: "neutral" },
  { name: "LLM Integration", type: "neutral" },
  { name: "AI Agents", type: "neutral" },
];

const Main = () => {
  const { t, language } = useLanguage();

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

  const renderSkillsRow = (skills: any[], delayOffset: number) => (
    <div className="flex flex-wrap justify-start gap-2 md:gap-2.5 w-full">
      {skills.map((skill, index) => (
        <motion.span
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{
            duration: 0.4,
            delay: delayOffset + (index * 0.03),
            scale: { type: "spring", stiffness: 300, damping: 10 }
          }}
          className={`flex items-center justify-center text-center font-semibold border shadow-sm cursor-default transition-colors ${getPillClass(skill.type)}
            px-3 py-1 text-[10px] md:text-xs rounded-full`}
        >
          {skill.name}
        </motion.span>
      ))}
    </div>
  );

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + index * 0.12,
        duration: 0.6,
        ease: "easeOut" as const
      }
    })
  };

  return (
    <div className="w-full flex-1 flex flex-col justify-center pt-8 md:pt-12 pb-16 md:pb-20 relative">
      <div className="container mx-auto px-6 lg:px-8 relative z-10 flex-grow flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Intro and Contact */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className="text-purple-400 font-bold tracking-[0.25em] uppercase text-xs md:text-sm mb-3">
                  Federico Osorio
                </p>
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight">
                  Full Stack{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400">
                    Developer
                  </span>
                </h1>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 font-light max-w-lg">
                  {t("main.specialization")}
                </p>

                {/* Contact Section */}
                <div className="space-y-4 border-t border-slate-700/50 pt-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    {t("main.contactTitle")}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="mailto:fedee.osorio@gmail.com"
                      className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/40 hover:bg-slate-700/60 text-purple-300 hover:text-purple-200 rounded-full transition-all border border-purple-500/20 hover:border-purple-500/40 text-xs md:text-sm font-semibold shadow-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                    >
                      <i className="fa-solid fa-envelope text-sm" />
                      <span>fedee.osorio@gmail.com</span>
                    </a>
                    <a
                      href="https://github.com/FedeOsorio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 bg-slate-800/40 hover:bg-slate-700/60 text-white rounded-full transition-all border border-slate-700/50 hover:border-slate-400/50 hover:shadow-sm"
                    >
                      <i className="fa-brands fa-github text-lg" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/fedeosorio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 bg-slate-800/40 hover:bg-slate-700/60 text-white rounded-full transition-all border border-slate-700/50 hover:border-teal-500/50 hover:shadow-sm"
                    >
                      <i className="fa-brands fa-linkedin text-lg" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Skills Cards */}
            <div className="lg:col-span-7 flex flex-col justify-center w-full">
              <div className="flex flex-col gap-4 md:gap-5 w-full">

                {/* Backend Card */}
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="p-5 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/40 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex flex-col gap-3 group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                      <i className="fa-solid fa-server text-sm" />
                    </div>
                    <span className="font-bold text-sm text-slate-200 tracking-wide">
                      Backend
                    </span>
                  </div>
                  {renderSkillsRow(backendSkills, 0.3)}
                </motion.div>

                {/* Frontend Card */}
                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="p-5 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-teal-500/20 hover:border-teal-500/40 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex flex-col gap-3 group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 group-hover:scale-110 transition-transform">
                      <i className="fa-solid fa-laptop-code text-sm" />
                    </div>
                    <span className="font-bold text-sm text-slate-200 tracking-wide">
                      Frontend
                    </span>
                  </div>
                  {renderSkillsRow(frontendSkills, 0.4)}
                </motion.div>

                {/* Tools & DBs Card */}
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="p-5 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-slate-700/40 hover:border-slate-500/40 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex flex-col gap-3 group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800/40 text-slate-400 group-hover:scale-110 transition-transform">
                      <i className="fa-solid fa-screwdriver-wrench text-sm" />
                    </div>
                    <span className="font-bold text-sm text-slate-200 tracking-wide">
                      {language === "es" ? "Herramientas y Base de Datos" : "Tools & Databases"}
                    </span>
                  </div>
                  {renderSkillsRow(toolsSkills, 0.5)}
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-4 md:bottom-6 left-0 w-full text-center text-xs text-slate-500">
        © 2026 - {t("main.madeWith")}
      </div>
    </div>
  );
};

export default Main;
