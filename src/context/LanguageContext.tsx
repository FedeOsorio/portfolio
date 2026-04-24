"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations = {
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      contact: "Contacto",
    },
    main: {
      role: "Software Developer",
      specialization: "Desarrollador Backend con visión Full Stack, orientado al diseño de sistemas escalables, código limpio e integración de IA.",
      techStack: "Tech Stack",
    },
    projects: {
      title: "Proyectos Destacados",
      viewProject: "Ver Proyecto",
      demoVideo: "Demo Video",
      items: [
        {
          title: "Kanji Love",
          description: "Plataforma educativa para el aprendizaje de Kanjis japoneses con sistema de gamificación y estudio inteligente.",
        },
        {
          title: "A.S.T.A.",
          description: "SaaS - Sistema de gestión de turnos, agenda de profesionales y clientes con envío de mensajes a través de WhatsApp.",
        },
        {
          title: "KuYi App",
          description: "Aplicación móvil guía sobre el cuidado de Cobayos. Cuenta con sistema de gestión de mascotas y anotador diario con guardado en la nube.",
        },
        {
          title: "IFTS N°26",
          description: "Rediseño y desarrollo del sitio web oficial para el Instituto Superior de Formación Técnica N°26. Experiencia moderna y responsive.",
        },
        {
          title: "La Esquina Literaria",
          description: "Plataforma web para reseñas de libros con autenticación, filtrado y búsqueda. Próxima integración de tienda.",
        },
        {
          title: "Sociedad Anónima Deportiva",
          description: "Sistema de gestión deportiva con roles de usuario/admin e inscripciones a actividades.",
        },
        {
          title: "Kirlia Shop",
          description: "E-commerce especializado en cartas TCG de Pokémon. Gestión eficiente de catálogo.",
        },
        {
          title: "Gestión de Horas",
          description: "Herramienta tipo Trello para seguimiento de tiempos por cliente y proyecto.",
        },
        {
          title: "Pet Shop",
          description: "El proyecto con el que comencé este trayecto, y por eso continúa en este listado.",
        },
      ]
    },
    contact: {
      title: "¿Hablamos?",
      subtitle: "Estoy abierto a nuevas oportunidades y colaboraciones. Podés enviarme un correo a fedee.osorio@gmail.com o encontrarme en LinkedIn.",
    },
    footer: {
      madeWith: "Hecho con NextJS y Tailwind",
    }
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
    },
    main: {
      role: "Software Developer",
      specialization: "Backend Developer with a Full Stack mindset, focused on scalable systems design, clean code, and AI integration.",
      techStack: "Tech Stack",
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
      demoVideo: "Demo Video",
      items: [
        {
          title: "Kanji Love",
          description: "Educational platform for learning Japanese Kanji, featuring gamification and a smart study system.",
        },
        {
          title: "A.S.T.A.",
          description: "SaaS platform for appointment scheduling and client management, featuring WhatsApp messaging integration.",
        },
        {
          title: "KuYi App",
          description: "A specialized mobile guide for guinea pig care, featuring pet management tools and cloud-synced daily journaling.",
        },
        {
          title: "IFTS N°26",
          description: "Redesign and development of the official website for technical institute N°26. Modern and responsive experience.",
        },
        {
          title: "The Literary Corner",
          description: "Web platform for book reviews with authentication, filtering, and search. Future store integration.",
        },
        {
          title: "Sports Corporation",
          description: "Sports management system with user/admin roles and activity registrations.",
        },
        {
          title: "Kirlia Shop",
          description: "E-commerce specialized in Pokémon TCG cards. Efficient catalog management.",
        },
        {
          title: "Hours Management",
          description: "Trello-like tool for tracking time per client and project.",
        },
        {
          title: "Pet Shop",
          description: "The project I started this journey with, which is why it remains on this list.",
        },
      ]
    },
    contact: {
      title: "Let's Talk",
      subtitle: "I am open to new opportunities and collaborations. You can send me an email at fedee.osorio@gmail.com or find me on LinkedIn.",
    },
    footer: {
      madeWith: "Made with NextJS and Tailwind",
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  // Load language from sessionStorage on mount
  useEffect(() => {
    const savedLanguage = sessionStorage.getItem("portfolio-language") as Language;
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to sessionStorage whenever it changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    sessionStorage.setItem("portfolio-language", lang);
  };

  const t = (key: string) => {
    const keys = key.split(".");
    let result: any = translations[language];
    for (const k of keys) {
      if (result[k]) result = result[k];
      else return key;
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
