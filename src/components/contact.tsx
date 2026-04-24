"use client";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contactID" className="py-48 min-h-[70vh] flex items-center relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t("contact.title")}</h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            {t("contact.subtitle")}
          </p>
          
          <div className="flex justify-center items-center">
            <a 
              href="https://www.linkedin.com/in/fedeosorio/" 
              target="_blank"
              className="group relative p-4 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <i className="fa-brands fa-linkedin text-5xl text-blue-400 group-hover:scale-110 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
