"use client";
import React from "react";

const Main = () => {
	return (
		<section id="mainID" className="flex content-center text-gray-400 bg-gradient-to-b from-slate-950 via-blue-950 to-blue-950 body-font">
			<div className="container mx-auto flex px-5 py-32 mt-18 lg:mt-0 md:flex-row flex-col items-center -mt-14">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-4 font-medium text-white">
						Hola, soy ¡Federico Osorio!
					</h1>
					<p className="mb-8 leading-relaxed">
						Soy de Buenos Aires, Argentina, tengo 28 años y cuento con más de 6 años de experiencia en el rubro IT. <br /> Hace 2 años
						ingresé en el mundo de la programación y actualmente me desempeño como desarrollador fullstack en ASJ-Servicios.
					</p>
					<div className="flex justify-center">
						<div>
							<a href="https://github.com/FedeOsorio" target="_blank">
								<button className="inline-flex text-gray-100 h-12 bg-gray-800 border-0 items-center px-5 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
									<i className="fa-brands fa-github fa-2xl" />
								</button>
							</a>
						</div>
						<div>
							<a href="https://www.linkedin.com/in/fedeosorio/" target="_blank">
								<button className="ml-4 inline-flex text-gray-100 h-12 bg-gray-800 border-0 items-center px-5 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
									<i className="fa-brands fa-linkedin fa-2xl" />
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:w-full">
					<img className="object-cover object-center rounded" alt="hero" src="img/profile.png" />
				</div>
			</div>
		</section>
	);
};

export default Main;
