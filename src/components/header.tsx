"use client";
import React, { useEffect, useRef, useState } from "react";

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
    const scrollPosition = useScrollPosition();
    const mainScrollRef = useRef<HTMLElement | null>(null);
    const skillScrollRef = useRef<HTMLElement | null>(null);
    const projectScrollRef = useRef<HTMLElement | null>(null);
    const contactScrollRef = useRef<HTMLElement | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        mainScrollRef.current = document.querySelector("#mainID");
        skillScrollRef.current = document.querySelector("#skillsID");
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
            className={`sticky top-0 z-50 transition-shadow 
            ${scrollPosition > 1 ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter " : "shadow-none bg-slate-950 "}`}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center header-container">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 header-logo">
                    <h2 className="rounded-xl text-4xl">FO</h2>
                    <div className="flex flex-col">
                        <span className="ml-3 text-xl leading-6">Federico</span>
                        <span className="ml-3 text-xl leading-6">Osorio</span>
                    </div>
                </a>
                
                {/* Título - Se ocultará en móvil con CSS */}
                <div className="mx-auto text-2xl font-medium h-10 align-center flex items-center header-title">Desarrollador Full-Stack</div>
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

                <nav className={` flex flex-wrap header-nav ${isMenuOpen ? "is-open" : ""}`}>
                    <a className="lg:ml-40 hover:text-white cursor-pointer nav-link" onClick={scrollToTop}>
                        Inicio
                    </a>
                    <a className="lg:ml-5 hover:text-white cursor-pointer nav-link" onClick={() => scrollToElement(skillScrollRef)}>
                        Habilidades
                    </a>
                    <a className="lg:ml-5 hover:text-white cursor-pointer nav-link" onClick={() => scrollToElement(projectScrollRef)}>
                        Proyectos
                    </a>
                    <a className="lg:ml-5 hover:text-white cursor-pointer nav-link" onClick={() => scrollToElement(contactScrollRef)}>
                        Contacto
                    </a>
                </nav>
            </div>
        </header>
    );
};
export default Header;