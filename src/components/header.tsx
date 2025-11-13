"use client";
import React, { useEffect, useRef } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const Header = () => {
	const scrollPosition = useScrollPosition();
	const mainScrollRef = useRef<HTMLElement | null>(null);
	const skillScrollRef = useRef<HTMLElement | null>(null);
	const projectScrollRef = useRef<HTMLElement | null>(null);
	const contactScrollRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		// Comprueba si estamos en el lado del cliente antes de acceder a document
		mainScrollRef.current = document.querySelector("#mainID");
		skillScrollRef.current = document.querySelector("#skillsID");
		projectScrollRef.current = document.querySelector("#projectsID");
		contactScrollRef.current = document.querySelector("#contactID");
	}, []);

	const scrollToElement = (elementRef: any) => {
		if (elementRef.current) {
			elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<header
			className={`sticky top-0 z-50 transition-shadow  ${
				scrollPosition > 1 ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter " : "shadow-none bg-slate-950 "
			}`}>
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
					<h2 className="rounded-xl text-4xl">FO</h2>
					<div className="flex flex-col">
						<span className="ml-3 text-xl leading-6">Federico</span>
						<span className="ml-3 text-xl leading-6">Osorio</span>
					</div>
				</a>
				<div className="mx-auto text-2xl font-medium h-10 align-center flex items-center">Desarrollador Full-Stack</div>
				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
					<a className="mr-5 hover:text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
						Inicio
					</a>
					<a className="mr-5 hover:text-white cursor-pointer" onClick={() => scrollToElement(skillScrollRef)}>
						Habilidades
					</a>
					<a className="mr-5 hover:text-white cursor-pointer" onClick={() => scrollToElement(projectScrollRef)}>
						Proyectos
					</a>
					<a className="mr-5 hover:text-white cursor-pointer" onClick={() => scrollToElement(contactScrollRef)}>
						Contacto
					</a>
				</nav>
			</div>
		</header>
	);
};
export default Header;
