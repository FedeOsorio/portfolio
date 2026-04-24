"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const skills = [
  { name: "Java", type: "purple" },
  { name: "Spring Boot", type: "purple" },
  { name: "Node.js", type: "purple" },
  { name: "Prisma", type: "purple" },
  { name: "TypeScript", type: "teal" },
  { name: "Angular", type: "teal" },
  { name: "React.js", type: "teal" },
  { name: "React Native", type: "teal" },

  { name: "Next.js", type: "neutral" },
  { name: "LLM Integration", type: "neutral" },
  { name: "AI Agents", type: "neutral" },
  { name: "Kafka", type: "neutral" },
  { name: "RabbitMQ", type: "neutral" },
  { name: "Redis", type: "neutral" },
  { name: "PostgreSQL", type: "neutral" },
  { name: "MongoDB", type: "neutral" },
  { name: "Docker", type: "neutral" },
  { name: "Unix", type: "neutral" },
  { name: "Git", type: "neutral" },
];

const Main = () => {
  const { t } = useLanguage();
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

  return (
    <section id="mainID" className="relative min-h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xl mb-4">Federico Osorio</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight">
              Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400">Developer</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              {t("main.specialization")}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <a href="https://github.com/FedeOsorio" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800/40 hover:bg-slate-700/60 text-white rounded-full transition-all border border-slate-700/50 hover:border-purple-500/50">
                <i className="fa-brands fa-github text-xl" />
                <span className="font-medium">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/fedeosorio/" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800/40 hover:bg-slate-700/60 text-white rounded-full transition-all border border-slate-700/50 hover:border-teal-500/50">
                <i className="fa-brands fa-linkedin text-xl" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                {t("main.techStack")}
              </h3>
              <div className="grid grid-cols-4 gap-2 md:flex md:flex-wrap md:justify-center md:gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + (index * 0.05),
                      scale: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                    className={`flex items-center justify-center text-center font-semibold border shadow-sm cursor-default transition-colors ${getPillClass(skill.type)}
                      h-10 text-[9px] rounded-lg
                      md:h-auto md:w-auto md:px-4 md:py-1.5 md:text-sm md:rounded-full`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Main;
