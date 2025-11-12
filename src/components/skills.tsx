import React from "react";

const Skills = () => {
	return (
		<section
			id="skillsID"
			className="text-gray-400 bg-gradient-to-b from-blue-950 via-blue-950 to-sky-950 body-font flex h-screen"
		>
			<div className="container my-auto mx-auto flex flex-row justify-start flex-wrap">
				<div className="flex w-3/4 mt-8 mb-10 flex-col text-white">
					<h1 className="mx-auto sm:text-3xl text-2xl font-medium text-center title-font text-white lg:w-1/3 lg:mb-0 mb-4 text-center">
						MAIN STACK
					</h1>
					<div className="flex flex-wrap mt-6 justify-center w-full gap-x-8 gap-y-6">
						<div className="flex flex-col items-center w-32 md:p-2 p-1">
							<span>Angular</span>
							<img
								alt="gallery"
								className="h-20 mt-1 object-contain"
								src="img/angular.png"
							/>
						</div>
						<div className="flex flex-col items-center w-32 md:p-2 p-1">
							<span>CSS / SCSS</span>
							<img
								alt="gallery"
								className="h-20 mt-1 object-contain"
								src="img/css-3.png"
							/>
						</div>
						<div className="flex flex-col items-center w-32 md:p-2 p-1">
							<span>Spring Boot</span>
							<img
								alt="gallery"
								className="h-20 mt-1 object-contain"
								src="img/spring.png"
							/>
						</div>
						<div className="flex flex-col items-center w-32 md:p-2 p-1">
							<span>PostgreSQL</span>
							<img
								alt="gallery"
								className="h-20 mt-1 object-contain"
								src="img/sql.png"
							/>
						</div>
						<div className="flex flex-col items-center w-32 md:p-2 p-1">
							<span>Oracle BPM</span>
							<img
								alt="gallery"
								className="h-20 mt-1 object-contain"
								src="img/bpm.svg"
							/>
						</div>
					</div>
					<div className="flex flex-col flex-wrap w-full mt-10">
						<h3 className="mx-auto sm:text-2xl font-medium text-center title-font text-white lg:mb-0 mb-4 text-center">
							MERN
						</h3>
						<div className="flex justify-center text-white mt-2 gap-x-8">
							<div className="md:p-2 p-1 flex flex-col items-center">
								<span>MongoDB</span>
								<img
									alt="gallery"
									className="h-16 mt-1 object-contain"
									src="img/mongodb.png"
								/>
							</div>
							<div className="md:p-2 p-1 flex flex-col items-center w-28">
								<span>Express</span>
								<img
									alt="gallery"
									className="h-16 object-contain"
									src="img/express.png"
								/>
							</div>
							<div className="md:p-2 p-1 flex flex-col items-center w-28">
								<span>React</span>
								<img
									alt="gallery"
									className="h-16 mt-1 object-contain"
									src="img/atom.png"
								/>
							</div>
							<div className="md:p-2 p-1 flex flex-col items-center w-28">
								<span>NodeJS</span>
								<img
									alt="gallery"
									className="h-16 object-contain"
									src="img/nodejs.png"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-col flex-wrap w-full mt-10">
						<h3 className="mx-auto sm:text-xl font-medium text-center title-font text-white lg:mb-0 mb-4 text-center">
							Habilidades complementarias
						</h3>
						<div className="flex justify-center text-white mt-2 gap-x-8">
							<div className="md:p-2 p-1 flex flex-col items-center w-28">
								<span>TypeScript</span>
								<img
									alt="gallery"
									className="h-16 mt-1 object-contain"
									src="img/typescript.png"
								/>
							</div>
							<div className="md:p-2 p-1 flex flex-col items-center w-28">
								<span>React Native</span>
								<img
									alt="gallery"
									className="h-16 mt-1 object-contain"
									src="img/native.png"
								/>
							</div>
							<div className="md:p-2 p-1 flex flex-col items-center w-28">
								<span>NextJS</span>
								<img
									alt="gallery"
									className="h-16 mt-1 object-contain"
									src="img/nextjs.png"
								/>
							</div>
							<div className="md:p-2 p-1 flex flex-col items-center w-28">
								<span>Tailwind</span>
								<img
									alt="gallery"
									className="h-14 mt-2 object-contain"
									src="img/tailwind.png"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center sm:w-1/4 h-200 text-white mt-6">
					<h2 className="mx-auto sm:mt-4 text-2xl font-medium text-center title-font text-white lg:mb-0 mb-4 text-center">
						Herramientas
					</h2>
					<div className="md:p-2 p-1 flex flex-col items-center">
						<span className="mb-1">Git</span>
						<img
							alt="gallery"
							className="h-16 object-contain"
							src="img/git2.png"
						/>
					</div>
					<div className="md:p-2 p-1 flex flex-col items-center">
						<span className="mb-1">GitHub</span>
						<img
							alt="gallery"
							className="h-16 object-contain"
							src="img/github.png"
						/>
					</div>
					<div className="md:p-2 p-1 flex flex-col items-center">
						<span className="mb-1">Jira</span>
						<img
							alt="gallery"
							className="h-16 w-16 object-contain"
							src="img/jira.png"
						></img>
					</div>
					<div className="md:p-2 p-1 flex flex-col items-center">
						<span className="mb-1">Docker</span>
						<img
							alt="gallery"
							className="h-14 object-contain"
							src="img/docker.png"
						></img>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;