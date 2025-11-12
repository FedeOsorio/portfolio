"use client";
import React, { useRef } from "react";

const Projects = () => {
  return (
    <section id="projectsID" 
      className="text-gray-400 body-font bg-gradient-to-b from-sky-950 via-sky-950 to-teal-900 flex"
    >
      <div className="container mx-auto px-5 py-10 mt-12">
        <div className="mb-10 text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Mis Proyectos
          </h1>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded"></div>
        </div>
        <div className="flex flex-wrap -m-4">
			<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <a href="https://ifts26.netlify.app/" target="_blank">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg cursor-pointer hover:scale-110 ease-out duration-200 min-h-full">
                <img
                  className="w-full h-48 rounded object-cover object-center mb-6"
                  src="img/ifts26.jpg" 
                  alt="IFTS N°26 Website"
                />
                <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                  Angular
                </h3>
                <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium title-font mt-2 mb-2">
                  IFTS N°26
                </h2>
                <p className="leading-relaxed text-justify">
                  Rediseño y desarrollo del sitio web oficial para el Instituto
                  Superior de Formación Técnica N°26, ubicado en Estados Unidos
                  3141, CABA. <br/>Implementado únicamente con Angular para ofrecer
                  una experiencia moderna y responsive a los usuarios.
                </p>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <a href="https://esquina-literaria.vercel.app/" target="_blank">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg cursor-pointer hover:scale-110 ease-out duration-200 min-h-full">
                <img
                  className="w-full h-48 rounded object-cover object-center mb-6"
                  src="img/esquinaLiteraria.jpg" 
                  alt="Esquina Literaria"
                />
                <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                  React - Express - MongoDB
                </h3>
                <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium title-font mt-2 mb-2">
                  La Esquina Literaria
                </h2>
                <p className="leading-relaxed text-justify">
                  Plataforma web que permite publicar reseñas de libros, 
				  con funcionalidades de registro y
                  login de usuarios, filtrado y búsqueda de libros. 
				  <br/>Los invitados pueden visualizar todas las reseñas publicadas, 
				  que incluyen comentarios y promedio de puntuación. 
				  <br/>Próximamente se integrará la tienda de libros.
                </p>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
		  	<a href="https://github.com/JuanPabloRomero00/SAD" target="_blank">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg hover:scale-110 ease-out duration-200 min-h-full">
              <img
                className="w-full h-48 rounded object-cover object-center mb-6"
                src="img/sad.jpg" 
                alt="Sociedad Anónima Deportiva"
              />
              <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                React - Express - MongoDB
              </h3>
              <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium title-font mt-2 mb-2">
                Sociedad Anónima Deportiva
              </h2>
              <p className="leading-relaxed text-justify">
                Proyecto desarrollado en el IFTS N°16. Incluye sistema de
                registro/login, paneles de usuario y administrador con
                diferentes permisos, y la capacidad de
                inscribirse en las diversas actividades deportivas ofrecidas.
              </p>
            </div>
			</a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <a href="https://kirlia-shop.netlify.app/" target="_blank">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg cursor-pointer hover:scale-110 ease-out duration-200 min-h-full">
                <img
                  className="w-full h-48 rounded object-cover object-center mb-6"
                  src="img/kirliaShop.jpg"
                  alt="Kirlia Shop"
                />
                <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                  Angular - Express - MongoDB
                </h3>
                <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium title-font mt-2 mb-2">
                  Kirlia Shop
                </h2>
                <p className="leading-relaxed text-justify">
                  Una tienda online especializada en Cartas TCG de Pokémon.
                  Desarrollado con Angular para el frontend y Express para el
                  backend, utilizando MongoDB como base de datos para una
                  gestión eficiente del catálogo.
                </p>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <a href="https://github.com/FedeOsorio/tusRecetas" target="_blank">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg cursor-pointer hover:scale-110 ease-out duration-200 min-h-full">
                <img
                  className="w-full h-48 rounded object-cover object-center mb-6"
                  src="img/tusRecetas.jpg"
                  alt="Tus Recetas"
                />
                <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                  Angular - Spring Boot - MySQL
                </h3>
                <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium title-font mt-2 mb-2">
                  Tus Recetas
                </h2>
                <p className="leading-relaxed text-justify">
                  Proyecto full-stack creado durante el Bootcamp de ASJ
                  Servicios. Permite a los usuarios encontrar, publicar y
                  compartir recetas de cocina. Incorpora un sistema de registro
                  de usuarios y seguridad en la autenticación.
                </p>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg hover:scale-110 ease-out duration-200 min-h-full">
              <a
                className="cursor-pointer"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7087109171837308928/"
                target="_blank"
              >
                <img
                  className="w-full h-48 rounded object-cover object-center mb-6"
                  src="img/gestionDeHoras.jpg"
                  alt="Gestión de Horas"
                />
                <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                  Angular - Spring Boot - MySQL
                </h3>
              </a>
              <div className="flex items-center justify-between">
                <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium title-font mt-2 mb-2">
                  Gestión de Horas
                </h2>
              </div>
              <p className="leading-relaxed text-justify">
                Proyecto estilo Trello con amplias funcionalidades para la
                gestión de tiempo. Permite registrar las horas trabajadas en
                las tareas asignadas a usuarios específicos, ofreciendo una visión
                precisa del tiempo invertido por cliente y por proyecto.
              </p>
			  <div className="flex flex-col flex-start mt-2">
			               <a
                  className="text-blue-500 font-medium"
                  target="_blank"
                  href="https://drive.google.com/file/d/1H2IHyVaOT5eUjUIk49yhFPDeXkB5vYHu/view?usp=drive_link"
                >
                  Video DEMO
                </a>
				</div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg hover:scale-110 ease-out duration-200 min-h-full">
              <a
                className="cursor-pointer"
                href="https://fedeosorio.github.io/petShop/"
                target="_blank"
              >
                <img
                  className="w-full h-48 rounded object-cover object-center mb-6"
                  src="img/petShop.jpg"
                  alt="Pet Shop"
                />
                <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                  React - Javascript - Firebase
                </h3>
                <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium title-font mt-2 mb-2">
                  Pet Shop
                </h2>
              </a>
              <p className="leading-relaxed text-justify">
                E-commerce con carrito de compras, desarrollado como examen
                final para los cursos de React y JavaScript en Coderhouse.
                Utiliza Firebase para la persistencia de datos y autenticación.
              </p>
              <div className="flex flex-col flex-start mt-2">
                <a
                  className="text-blue-400 font-medium"
                  target="_blank"
                  href="https://github.com/FedeOsorio/coderApp"
                >
                  Código React
                </a>
                <a
                  className="text-yellow-300 font-medium"
                  href="https://github.com/FedeOsorio/petShop"
                  target="_blank"
                >
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
