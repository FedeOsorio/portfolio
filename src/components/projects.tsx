"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const projectsData = [
  {
    image: "img/kanjiLove.jpg",
    link: "https://play.google.com/store/apps/details?id=com.kuyi.kanjilove",
    subtitle: "React Native - Expo - Firebase",
  },
  {
    image: "img/asta.jpg",
    link: "https://asta-next.vercel.app/turnos",
    subtitle: "Next.js - PostgreSQL - NeonDB",
  },
  {
    image: "img/kuyiApp.jpg",
    link: "https://play.google.com/store/apps/details?id=com.fedeosorio.KuYiApp",
    subtitle: "React Native - Expo - Firebase",
  },
  {
    image: "img/ifts26.jpg",
    link: "https://ifts26.netlify.app/",
    subtitle: "Angular",
  },
  {
    image: "img/esquinaLiteraria.jpg",
    link: "https://esquina-literaria.vercel.app/",
    subtitle: "React - Express - MongoDB",
  },
  {
    image: "img/sad.jpg",
    link: "https://github.com/JuanPabloRomero00/SAD",
    subtitle: "React - Express - MongoDB",
  },
  {
    image: "img/kirliaShop.jpg",
    link: "https://kirlia-shop.netlify.app/",
    subtitle: "Angular - Express - MongoDB",
  },
  {
    image: "img/gestionDeHoras.jpg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7087109171837308928/",
    subtitle: "Angular - Spring Boot - MySQL",
    demo: "https://drive.google.com/file/d/1H2IHyVaOT5eUjUIk49yhFPDeXkB5vYHu/view?usp=drive_link"
  },
  {
    image: "img/petShop.jpg",
    link: "https://fedeosorio.github.io/petShop/",
    subtitle: "React - Firebase",
  },
];

const Projects = () => {
  const { t } = useLanguage();
  const projectItems = t("projects.items");

  return (
    <section id="projectsID" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 mt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("projects.title")}</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col bg-slate-900/40 rounded-2xl overflow-hidden border border-slate-800/50 hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.image}
                  alt={projectItems[index]?.title || ""}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2 block">
                  {project.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {projectItems[index]?.title || ""}
                </h3>
                {projectItems[index]?.note && (
                  <p className="text-[10px] font-bold uppercase tracking-wider text-purple-400/80 mb-3 italic">
                    <i className="fa-solid fa-heart mr-1"></i> {projectItems[index].note}
                  </p>
                )}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {projectItems[index]?.description || ""}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-white text-sm font-medium flex items-center gap-2 group/link"
                  >
                    {t("projects.viewProject")}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover/link:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors"
                    >
                      {t("projects.demoVideo")}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

