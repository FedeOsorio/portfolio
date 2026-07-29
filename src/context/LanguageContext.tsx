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
    panels: {
      home: "Inicio",
      projects: "Proyectos",
    },
    main: {
      role: "Full Stack Developer",
      specialization: "4+ años en desarrollo profesional para banca digital, y construyendo diversos proyectos en diferentes tecnologías de manera independiente. Como profesional, mi enfoque es la seguridad de la información, la velocidad de respuesta y la escalabilidad.",
      techStack: "Tech Stack",
      contactTitle: "Contacto y redes",
      contactSubtitle: "Estoy abierto a nuevas oportunidades y colaboraciones.",
      madeWith: "Hecho con NextJS y Tailwind",
    },
    projects: {
      title: "Proyectos Destacados",
      viewProject: "Ver Proyecto",
      viewDetails: "Ver Detalle",
      demoVideo: "Demo Video",
      details: {
        problemTitle: "El problema",
        solutionTitle: "La solución",
        techTitle: "Tecnologías utilizadas",
        galleryTitle: "Galería",
        backButton: "Volver a proyectos"
      },
      tabs: {
        individual: "Individuales",
        grupal: "Grupales"
      },
      tags: {
        individual: "Proyecto Individual",
        grupal: "Proyecto Grupal"
      },
      items: [
        {
          title: "Kanji Love",
          description: "Plataforma educativa para el aprendizaje de Kanjis japoneses con sistema de gamificación y estudio inteligente.",
          problem: "Una vez dominados los silabarios, el siguiente y más complejo desafío es el aprendizaje de los Kanji (ideogramas). Existen miles de caracteres, cada uno con múltiples lecturas y significados, lo que requiere un método de estudio inteligente y estructurado para evitar la frustración.",
          solution: "Kanji Love aborda este problema mediante un sistema de estudio inteligente basado en repetición espaciada y gamificación. La plataforma categoriza los Kanjis por niveles (JLPT), ofreciendo ejercicios de escritura, validación de trazos y un seguimiento detallado del progreso del estudiante."
        },
        {
          title: "A.S.T.A.",
          description: "SaaS - Sistema de gestión de turnos, agenda de profesionales y clientes con envío de mensajes a través de WhatsApp.",
        },
        {
          title: "KuYi App",
          description: "Aplicación móvil guía sobre el cuidado de Cobayos. Cuenta con sistema de gestión de mascotas y anotador diario con guardado en la nube.",
          problem: "La información sobre el cuidado específico de cobayos suele estar dispersa o ser contradictoria. Además, los dueños carecen de herramientas centralizadas para llevar un control de salud, alimentación y rutinas diarias de sus mascotas de manera organizada.",
          solution: "KuYi App actúa como una guía móvil especializada y herramienta de gestión. Permite crear perfiles para cada mascota, registrar su peso, salud, recordatorios y un diario sincronizado en la nube mediante Firebase, asegurando que el historial vital nunca se pierda."
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
        {
          title: "Kana Love",
          description: "Plataforma educativa para el aprendizaje de los alfabetos japoneses Hiragana y Katakana con práctica de escritura y cuestionarios.",
          problem: "Aprender los silabarios japoneses (Hiragana y Katakana) es el primer gran obstáculo para cualquier estudiante de japonés. Los métodos tradicionales basados únicamente en repetición visual suelen ser tediosos y no fomentan una retención sólida a largo plazo.",
          solution: "Kana Love transforma el aprendizaje en una experiencia gamificada e interactiva. Incluye lecciones estructuradas, práctica de trazos interactiva en pantalla y un sistema de cuestionarios dinámicos que se adaptan al progreso del usuario para asegurar una memorización efectiva."
        },
        {
          title: "A.S.T.A. Rental",
          description: "SaaS B2B de Gestión Inmobiliaria con arquitectura multi-tenant. Incluye manejo de propiedades, contratos inteligentes, pagos automatizados y un Agente de IA integrado con la API de Meta para envíos de WhatsApp y avisos de mora.",
          problem: "Las agencias inmobiliarias y propietarios independientes a menudo carecen de sistemas centralizados para gestionar contratos, inquilinos y cobros, llevando a procesos manuales y propensos a errores.",
          solution: "A.S.T.A. Rental ofrece una solución integral segura que automatiza el seguimiento de pagos y generación de contratos. Su diferencial es el Agente IA que automatiza la comunicación con inquilinos vía WhatsApp (Meta API) para cobranzas y avisos de mora."
        }
      ]
    },
  },
  en: {
    panels: {
      home: "Home",
      projects: "Projects",
    },
    main: {
      role: "Full Stack Developer",
      specialization: "4+ years of professional experience in digital banking development and building diverse projects across different technologies independently. As a professional, my focus is information security, high performance, and scalability.",
      techStack: "Tech Stack",
      contactTitle: "Contact & Socials",
      contactSubtitle: "Open to new opportunities and collaborations.",
      madeWith: "Made with NextJS and Tailwind",
    },
    projects: {
      title: "Featured Projects",
      viewProject: "Live Site",
      viewDetails: "View Details",
      demoVideo: "Demo Video",
      details: {
        problemTitle: "The Problem",
        solutionTitle: "The Solution",
        techTitle: "Technologies Used",
        galleryTitle: "Gallery",
        backButton: "Back to projects"
      },
      tabs: {
        individual: "Solo Projects",
        grupal: "Team Projects"
      },
      tags: {
        individual: "Solo Project",
        grupal: "Team Project"
      },
      items: [
        {
          title: "Kanji Love",
          description: "Educational platform for learning Japanese Kanji, featuring gamification and a smart study system.",
          problem: "Once the syllabaries are mastered, the next and most complex challenge is learning Kanji (ideograms). There are thousands of characters, each with multiple readings and meanings, requiring a smart and structured study method to avoid frustration.",
          solution: "Kanji Love tackles this issue through a smart study system based on spaced repetition and gamification. The platform categorizes Kanji by level (JLPT), offering writing exercises, stroke validation, and detailed student progress tracking."
        },
        {
          title: "A.S.T.A.",
          description: "SaaS platform for appointment scheduling and client management with automated WhatsApp integration.",
        },
        {
          title: "KuYi App",
          description: "Specialized mobile guide for guinea pig care, featuring pet management tools and cloud-synced daily journaling.",
          problem: "Information about guinea pig care is often scattered or contradictory. Furthermore, owners lack centralized tools to keep an organized record of their pets' health, feeding, and daily routines.",
          solution: "KuYi App acts as a specialized mobile guide and management tool. It allows users to create profiles for each pet, log weight, health, reminders, and a daily journal synced to the cloud via Firebase, ensuring vital history is never lost."
        },
        {
          title: "IFTS N°26",
          description: "Redesign and development of the official website for Technical Institute N°26. Modern and responsive experience.",
        },
        {
          title: "La Esquina Literaria",
          description: "Web platform for book reviews with authentication, filtering, and search. Future store integration.",
        },
        {
          title: "Sociedad Anónima Deportiva",
          description: "Sports management system with user/admin role-based access and activity registration.",
        },
        {
          title: "Kirlia Shop",
          description: "E-commerce specialized in Pokémon TCG cards featuring efficient catalog management.",
        },
        {
          title: "Time Tracking System",
          description: "Kanban-style tool for tracking billable hours and time per client and project.",
        },
        {
          title: "Pet Shop",
          description: "The initial project where I started my development journey, proudly preserved in this list.",
        },
        {
          title: "Kana Love",
          description: "Educational platform for learning Japanese Hiragana and Katakana alphabets with writing practice and quizzes.",
          problem: "Learning the Japanese syllabaries (Hiragana and Katakana) is the first major hurdle for any Japanese student. Traditional methods based solely on visual repetition are often tedious and do not foster solid long-term retention.",
          solution: "Kana Love turns learning into a gamified and interactive experience. It features structured lessons, interactive on-screen stroke practice, and a dynamic quiz system that adapts to user progress to ensure effective memorization."
        },
        {
          title: "A.S.T.A. Rental",
          description: "B2B SaaS Property Management Platform featuring multi-tenant architecture, smart contracts, automated payments, and an AI Agent integrated with Meta API for WhatsApp messaging and late fee notices.",
          problem: "Real estate agencies and independent landlords often lack centralized systems to manage contracts, renters, and collections, leading to manual and error-prone processes.",
          solution: "A.S.T.A. Rental provides a secure, comprehensive solution that automates payment tracking and contract generation. Its core feature is an AI Agent that automates tenant communications via WhatsApp (Meta API) for collections and late fee notices."
        }
      ]
    },
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  // Load language from sessionStorage or fallback to browser system language preference on mount
  useEffect(() => {
    const savedLanguage = sessionStorage.getItem("portfolio-language") as Language;
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    } else {
      const browserLang = typeof navigator !== "undefined" ? (navigator.language || (navigator.languages && navigator.languages[0])) : "";
      if (browserLang) {
        const langCode = browserLang.substring(0, 2).toLowerCase();
        if (langCode === "en") {
          setLanguage("en");
        } else {
          setLanguage("es");
        }
      }
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
