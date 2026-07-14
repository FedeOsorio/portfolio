"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <header className="relative w-full z-50 flex-none border-b border-slate-700/50 bg-slate-950/70 backdrop-blur-xl">
            <div className="container mx-auto flex py-4 px-5 justify-between items-center">
                <div className="flex title-font font-medium items-center text-white">
                    <h2 className="rounded-xl text-4xl">FO</h2>
                    <div className="flex flex-col">
                        <span className="ml-3 text-xl leading-6">Federico</span>
                        <span className="ml-3 text-xl leading-6">Osorio</span>
                    </div>
                    <div className="hidden md:flex flex-col ml-6 pl-6 border-l border-slate-700/50 justify-center mt-1">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 font-bold tracking-widest text-xs uppercase">Full Stack Developer</span>
                    </div>
                </div>

                <div className="flex items-center bg-slate-800/60 rounded p-1 border border-slate-700/40 w-24 justify-center transition-all shadow-md">
                    <button
                        onClick={() => setLanguage("es")}
                        className={`flex-1 py-1 text-xs font-bold rounded transition-all cursor-pointer ${language === "es" ? "bg-purple-500/30 text-purple-200 border border-purple-500/40 shadow-sm" : "text-slate-400 hover:text-white border border-transparent"}`}
                    >
                        ES
                    </button>
                    <button
                        onClick={() => setLanguage("en")}
                        className={`flex-1 py-1 text-xs font-bold rounded transition-all cursor-pointer ${language === "en" ? "bg-purple-500/30 text-purple-200 border border-purple-500/40 shadow-sm" : "text-slate-400 hover:text-white border border-transparent"}`}
                    >
                        EN
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;
