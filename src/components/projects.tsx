"use client";
import React, { useRef } from "react";

const Projects = () => {
	return (
		<section id="projectsID" className="text-gray-400 body-font bg-gradient-to-b from-sky-950 via-sky-950 to-teal-900 flex">
			<div className="container mx-auto px-5 py-10 mt-12">
				<div className="mb-10 text-center">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Mis Proyectos</h1>
					<div className="h-1 w-20 bg-blue-500 mx-auto rounded"></div>
				</div>
				<div className="flex flex-wrap -m-4">
					<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
						<a href="https://www.kirlia-shop.com.ar" target="_blank">
							<div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg cursor-pointer hover:scale-110 ease-out duration-200 min-h-full">
								<img className="w-full h-auto rounded object-cover object-center mb-6" src="img/kirliaShop.jpg" alt="content" />
								<h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">Angular - Express - MongoDB</h3>
								<h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium title-font mt-2 mb-2">
									Kirlia Shop
								</h2>
								<p className="leading-relaxed text-justify">
									Mi último proyecto, una tienda online de Cartas TCG de Pokémon, realizado en Angular y Express con base de datos en
									MongoDB.
								</p>
							</div>
						</a>
					</div>
					<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
						<a href="https://github.com/FedeOsorio/tusRecetas" target="_blank">
							<div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg cursor-pointer hover:scale-110 ease-out duration-200 min-h-full">
								<img className="w-full h-auto rounded object-cover object-center mb-6" src="img/tusRecetas.jpg" alt="content" />
								<h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">Angular - Spring Boot - MySQL</h3>
								<h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium title-font mt-2 mb-2">
									Tus Recetas
								</h2>
								<p className="leading-relaxed text-justify">
									Proyecto realizado durante el Bootcamp de mi actual empresa, ASJ Servicios, en este sitio se pueden encontrar y publicar
									recetas de cocina, cuenta con registro de usuario y seguridad en la autenticación.
								</p>
							</div>
						</a>
					</div>
					<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
						<div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg hover:scale-110 ease-out duration-200 min-h-full">
							<a
								className="cursor-pointer"
								href="https://www.linkedin.com/feed/update/urn:li:activity:7087109171837308928/"
								target="_blank">
								<img className="w-full h-auto rounded object-cover object-center mb-6" src="img/gestionDeHoras.jpg" alt="content" />
								<h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">Angular - Spring Boot - MySQL</h3>
							</a>
							<div className="flex items-center">
								<h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium title-font mt-2 mb-2">
									Gestión de Horas
								</h2>
								<a
									className="text-blue-500 font-medium ml-16"
									target="_blank"
									href="https://drive.google.com/file/d/1H2IHyVaOT5eUjUIk49yhFPDeXkB5vYHu/view?usp=drive_link">
									Video DEMO
								</a>
							</div>
							<p className="leading-relaxed text-justify">
								Proyecto estilo Trello con amplias funcionalidades. Permite cargar las horas trabajadas en las tareas asignadas a un
								determinado usuario, lo cual proporciona una visión precisa de las horas invertidas por cliente y por proyecto.
							</p>
						</div>
					</div>
					<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
						<div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg hover:scale-110 ease-out duration-200 min-h-full">
							<a className="cursor-pointer" href="https://fedeosorio.github.io/petShop/" target="_blank">
								<img className="w-full h-auto rounded object-cover object-center mb-6" src="img/petShop.jpg" alt="content" />
								<h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">React - Javascript - Firebase</h3>
								<h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium title-font mt-2 mb-2">
									Pet Shop
								</h2>
							</a>
							<p className="leading-relaxed text-justify">
								Sitio realizado como exámen final en los cursos de React y Javascript de Coderhouse. E-commerce con carrito.
							</p>
							<div className="flex flex-col flex-start">
								<a className="text-blue-400 font-medium mt-2" target="_blank" href="https://github.com/FedeOsorio/coderApp">
									Código React
								</a>
								<a className="text-yellow-300 font-medium mt-2" href="https://github.com/FedeOsorio/petShop" target="_blank">
									Código Javascript
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
