import React from "react";

const Skills = () => {
	return (
		<section id="skillsID" className="text-gray-400 bg-gradient-to-b from-blue-950 via-blue-950 to-sky-950 body-font flex h-screen">
			<div className="container my-auto mx-auto flex flex-row justify-start flex-wrap">
				<div className="flex w-3/4 mt-8 mb-40 flex-col text-white">
					<h1 className="mx-auto sm:text-3xl text-2xl font-medium text-center title-font text-white lg:w-1/3 lg:mb-0 mb-4 text-center">
						Stack Principal
					</h1>
					<div className="flex flex-wrap mt-6 justify-center w-full">
						<div className="md:p-2 p-1">
							<span>Angular</span>
							<img alt="gallery" className="h-16 mt-1 mx-auto object-cover object-center block" src="img/angular.png" />
						</div>
						<div className="md:p-2 p-1 ml-10">
							<span>CSS / SCSS</span>
							<img alt="gallery" className="h-16 mt-1 mx-auto object-cover object-center block" src="img/css-3.png" />
						</div>
						<div className="md:p-2 p-1 ml-10">
							<span>Spring Boot</span>
							<img alt="gallery" className="h-16 mt-1 mx-auto object-cover object-center block" src="img/spring.png" />
						</div>
						<div className="md:p-2 p-1 ml-10">
							<span>MySQL</span>
							<img alt="gallery" className="h-16 mt-1 mx-auto object-cover object-center block" src="img/sql.png" />
						</div>
						<div className="md:p-2 p-1 ml-5 text-center">
							<span>Oracle BPM</span>
							<img alt="gallery" className="h-16 w-36 mx-auto object-fit object-center block" src="img/bpm.svg" />
						</div>
					</div>
					{/*<p className="text-center">Tecnologías que utilizo actualmente</p>*/}
				</div>
				<div className="flex flex-col sm: w-1/4 h-200 text-white mt-6">
					<h2 className="mx-auto sm:mt-4 text-2xl font-medium text-center title-font text-white lg:mb-0 mb-4 text-center">Herramientas</h2>
					<div className="md:p-2 p-1 flex flex-col mx-auto text-center">
						<span className="mb-1">Git</span>
						<img alt="gallery" className="h-16 mx-auto object-cover object-center block" src="img/git2.png" />
					</div>
					<div className="md:p-2 p-1 flex flex-col mx-auto text-center">
						<span className="mb-1">GitHub</span>
						<img alt="gallery" className="h-16 mx-auto object-cover object-center block" src="img/github.png" />
					</div>
					<div className="md:p-2 p-1 flex flex-col mx-auto text-center">
						<span className="mb-1">Jira</span>
						<img alt="gallery" className="h-16 mx-auto object-cover w-16 object-center block" src="img/jira.png"></img>
					</div>
					<div className="md:p-2 p-1 flex flex-col mx-auto text-center">
						<span className="mb-1">Docker</span>
						<img alt="gallery" className="h-14 mx-auto object-fill object-center block" src="img/docker.png"></img>
					</div>
				</div>
				<div className="flex flex-col flex-wrap w-3/4">
					<h3 className="mx-auto sm:text-xl -mt-44 font-medium text-center title-font text-white lg:mb-0 mb-4 text-center">
						Habilidades complementarias
					</h3>
					<p className="pl-14 mt-1">
						Además del Stack al que me dedico actualmente, también cuento con conocimiento de las siguientes tecnologías:
					</p>
					<div className="flex justify-center text-white mt-2">
						<div className="md:p-2 p-1 flex flex-col mx-auto text-center">
							<span>TypeScript</span>
							<img alt="gallery" className="h-16 mt-1 mx-auto object-cover object-center block" src="img/typescript.png" />
						</div>
						<div className="md:p-2 p-1 flex flex-col mx-auto text-center">
							<span>React</span>
							<img alt="gallery" className="h-16 mt-1 mx-auto object-cover object-center block" src="img/atom.png" />
						</div>
						<div className="md:p-2 p-1 flex flex-col mx-auto text-center">
							<span>NextJS</span>
							<img alt="gallery" className="h-16 mt-1 mx-auto object-cover object-center block" src="img/nextjs.png" />
						</div>
						<div className="md:p-2 p-1 flex flex-col mx-auto text-center">
							<span>Tailwind</span>
							<img alt="gallery" className="h-14 mt-2 mx-auto object-fit object-center block" src="img/tailwind.png" />
						</div>
						<div className="md:p-2 p-1 flex flex-col mx-auto text-center">
							<span>MongoDB</span>
							<img alt="gallery" className="h-16 mt-1 mx-auto object-cover object-center block" src="img/mongodb.png" />
						</div>
						<div className="md:p-2 p-1 flex flex-col mx-auto text-center">
							<span>Express / NodeJS</span>
							<img alt="gallery" className="h-16 mx-auto object-cover object-center block" src="img/nodejs.png" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
