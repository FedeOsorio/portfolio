"use client";
import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollPosition;
};

const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    const scrollPosition = useScrollPosition();
    const mainScrollRef = useRef<HTMLElement | null>(null);
    const projectScrollRef = useRef<HTMLElement | null>(null);
    const contactScrollRef = useRef<HTMLElement | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        mainScrollRef.current = document.querySelector("#mainID");
        projectScrollRef.current = document.querySelector("#projectsID");
        contactScrollRef.current = document.querySelector("#contactID");
    }, []);

    const scrollToElement = (elementRef: React.RefObject<HTMLElement>) => {
        if (elementRef.current) {
            elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-500 border-b 
            ${scrollPosition > 1 ? "shadow-lg bg-[#020617]/80 backdrop-blur-xl border-white/10" : "shadow-none bg-transparent border-transparent"}`}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center header-container">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 header-logo">
                    <h2 className="rounded-xl text-4xl">FO</h2>
                    <div className="flex flex-col">
                        <span className="ml-3 text-xl leading-6">Federico</span>
                        <span className="ml-3 text-xl leading-6">Osorio</span>
                    </div>
                </a>

                <div className="mx-auto text-2xl font-medium align-center flex items-center header-title">
                    <span>
                        Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400">Developer</span>
                    </span>
                </div>
                <button
                    className="hamburger-menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Abrir menú"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hamburger-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hamburger-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
                {isMenuOpen && (
                    <div
                        className="nav-overlay"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                )}

                <nav className={`flex items-center header-nav ${isMenuOpen ? "is-open" : ""}`}>
                    <a className="lg:w-28 text-center hover:text-white cursor-pointer nav-link transition-all" onClick={scrollToTop}>
                        {t("nav.home")}
                    </a>
                    <a className="lg:w-28 text-center hover:text-white cursor-pointer nav-link transition-all" onClick={() => scrollToElement(projectScrollRef)}>
                        {t("nav.projects")}
                    </a>
                    <a className="lg:w-28 text-center hover:text-white cursor-pointer nav-link transition-all" onClick={() => scrollToElement(contactScrollRef)}>
                        {t("nav.contact")}
                    </a>
                </nav>
                <div className="lg:ml-20 flex items-center bg-slate-800/40 rounded-lg p-1 border border-slate-700/50 w-20 justify-center transition-all">
                    <button
                        onClick={() => setLanguage("es")}
                        className={`flex-1 py-1 text-xs font-bold rounded transition-all ${language === "es" ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"}`}
                    >
                        ES
                    </button>
                    <button
                        onClick={() => setLanguage("en")}
                        className={`flex-1 py-1 text-xs font-bold rounded transition-all ${language === "en" ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"}`}
                    >
                        EN
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;