"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import PanelTab from "./PanelTab";
import Main from "./main";
import Projects from "./projects";
import Header from "./header";

const PortfolioShell = () => {
  const { t, language } = useLanguage();
  const [activePanel, setActivePanel] = useState<"home" | "projects">("home");
  const [isMobile, setIsMobile] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [isMobile]);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Header />
      {isMobile ? (
        <div className="w-full flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            {activePanel === "home" ? (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-full overflow-y-auto flex flex-col"
              >
                <Main setActivePanel={setActivePanel} isMobile={true} />
              </motion.div>
            ) : (
              <motion.div
                key="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-full overflow-y-auto flex flex-col"
              >
                <Projects isActive={true} isMobile={true} setActivePanel={setActivePanel} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div ref={containerRef} className="flex w-full flex-1 overflow-hidden flex-row relative">
          
          {/* HOME PANEL CONTAINER (Desktop) */}
          <motion.div
            animate={{
              width: activePanel === "home" ? "calc(100% - 80px)" : "80px",
            }}
            transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
            className="relative overflow-hidden flex-shrink-0 h-full"
          >
            <div className="absolute top-0 left-0 w-[calc(100vw-80px)] h-full">
              <div className="w-full h-full overflow-y-auto flex flex-col">
                 <Main setActivePanel={setActivePanel} isMobile={false} />
              </div>
            </div>
            
            {/* Home Tab Overlay */}
            <div 
               className={`absolute top-0 right-0 w-[80px] h-full z-20 transition-opacity duration-300 ${activePanel === "home" ? "opacity-0 delay-0 pointer-events-none" : "opacity-100 delay-300"}`}
            >
               <PanelTab
                 label={t("panels.home")}
                 onClick={() => setActivePanel("home")}
                 position="left"
                 isActive={activePanel === "home"}
               />
            </div>
          </motion.div>

          {/* PROJECTS PANEL CONTAINER (Desktop) */}
          <motion.div
            animate={{
              width: activePanel === "projects" ? "calc(100% - 80px)" : "80px",
            }}
            transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
            className="relative overflow-hidden flex-shrink-0 h-full"
          >
            <div className="absolute top-0 left-0 w-[calc(100vw-80px)] h-full">
              <div className="w-full h-full overflow-y-auto flex flex-col">
                 <Projects isActive={activePanel === "projects"} isMobile={false} setActivePanel={setActivePanel} />
              </div>
            </div>
            
            {/* Projects Tab Overlay */}
            <div 
               className={`absolute top-0 left-0 w-[80px] h-full z-20 transition-opacity duration-300 ${activePanel === "projects" ? "opacity-0 delay-0 pointer-events-none" : "opacity-100 delay-300"}`}
            >
               <PanelTab
                 label={t("panels.projects")}
                 onClick={() => setActivePanel("projects")}
                 position="right"
                 isActive={activePanel === "projects"}
                 shouldPulse={activePanel === "home"}
               />
            </div>
          </motion.div>

          {/* Neon Beam Border animation (Desktop, activePanel === "home" only) */}
          {activePanel === "home" && dimensions.width > 0 && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-30">
              <defs>
                <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="50%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#2dd4bf" />
                </linearGradient>
              </defs>
              
              <path
                d={`M 0 1 L ${dimensions.width} 1`}
                fill="none"
                stroke="url(#neonGradient)"
                strokeWidth="1.5"
                className="opacity-15"
              />
              <path
                d={`M ${dimensions.width - 80} 1 L ${dimensions.width - 80} ${dimensions.height}`}
                fill="none"
                stroke="url(#neonGradient)"
                strokeWidth="1.5"
                className="opacity-15"
              />

              {/* Animated beam */}
              <path
                d={`M 0 1 L ${dimensions.width - 80} 1 L ${dimensions.width - 80} ${dimensions.height}`}
                fill="none"
                stroke="url(#neonGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="neon-beam-path"
                style={{
                  filter: "drop-shadow(0 0 3px #c084fc) drop-shadow(0 0 8px #60a5fa)",
                }}
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioShell;
