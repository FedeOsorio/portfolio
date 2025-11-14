import React from "react";

const Skills = () => {
    return (
        <section id="skillsID" className="text-gray-400 bg-gradient-to-b from-blue-950 via-blue-950 to-sky-950 body-font flex lg:h-screen skills-section-mobile">
            <div className="container mx-auto flex flex-row justify-start flex-wrap skills-container-mobile">
                <div className="flex w-3/4 my-auto flex-col text-white skills-main-column-mobile">
                    <h1 className="mx-auto sm:text-3xl text-2xl font-medium text-center title-font text-white lg:w-1/3 lg:mb-0 mb-4 text-center skills-title-mobile">
                        MAIN STACK
                    </h1>
                    <div className="flex flex-wrap mt-6 justify-center w-full gap-x-8 gap-y-6 skills-grid-mobile">
                        <div className="flex flex-col items-center w-32 md:p-2 p-1 tech-item transition duration-300 ease-in-out hover:scale-115">
                            <span>Angular</span>
                            <img alt="gallery" className="h-20 mt-1 object-contain" src="img/angular.png" />
                        </div>
                        <div className="flex flex-col items-center w-32 md:p-2 p-1 transition duration-300 ease-in-out hover:scale-115">
                            <span>Spring Boot</span>
                            <img alt="gallery" className="h-20 mt-1 object-contain" src="img/spring.png" />
                        </div>
                        <div className="flex flex-col items-center w-32 md:p-2 p-1 transition duration-300 ease-in-out hover:scale-115">
                            <span>PostgreSQL</span>
                            <img alt="gallery" className="h-20 mt-1 object-contain" src="img/sql.png" />
                        </div>
                        <div className="flex flex-col items-center w-32 md:p-2 p-1 transition duration-300 ease-in-out hover:scale-115">
                            <span>Oracle BPM</span>
                            <img alt="gallery" className="h-20 mt-1 object-contain" src="img/bpm.svg" />
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap w-full mt-10">
                        <h3 className="mx-auto lg:text-2xl text-xl font-medium text-center title-font text-white lg:mb-0 mb-4 text-center">
                            MERN
                        </h3>
                        <div className="flex flex-wrap justify-center text-white mt-2 gap-x-8 skills-grid-mobile">
                            <div className="md:p-2 p-1 flex flex-col items-center w-32 transition duration-300 ease-in-out hover:scale-115">
                                <span>MongoDB</span>
                                <img alt="gallery" className="h-16 mt-1 object-contain" src="img/mongodb.png" />
                            </div>
                            <div className="md:p-2 p-1 flex flex-col items-center w-32 transition duration-300 ease-in-out hover:scale-115">
                                <span>Express</span>
                                <img alt="gallery" className="h-16 object-contain" src="img/express.png" />
                            </div>
                            <div className="md:p-2 p-1 flex flex-col items-center w-32 transition duration-300 ease-in-out hover:scale-115">
                                <span>React</span>
                                <img alt="gallery" className="h-16 mt-1 object-contain" src="img/atom.png" />
                            </div>
                            <div className="md:p-2 p-1 flex flex-col items-center w-32 transition duration-300 ease-in-out hover:scale-115">
                                <span>NodeJS</span>
                                <img alt="gallery" className="h-16 object-contain" src="img/nodejs.png" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap w-full mt-10">
                        <h3 className="mx-auto sm:text-xl font-medium text-center title-font text-white lg:mb-0 mb-4 text-center">
                            Habilidades complementarias
                        </h3>
                        <div className="flex flex-wrap justify-center text-white mt-2 gap-x-8 skills-grid-mobile">
                            <div className="md:p-2 p-1 flex flex-col items-center w-32 transition duration-300 ease-in-out hover:scale-115">
                                <span>TypeScript</span>
                                <img alt="gallery" className="h-16 mt-1 object-contain" src="img/typescript.png" />
                            </div>
                            <div className="flex flex-col items-center w-32 md:p-2 p-1 transition duration-300 ease-in-out hover:scale-115">
                                <span>CSS / SCSS</span>
                                <img alt="gallery" className="h-16 mt-1 object-contain" src="img/css-3.png" />
                            </div>
                            <div className="md:p-2 p-1 flex flex-col items-center w-32 transition duration-300 ease-in-out hover:scale-115">
                                <span>React Native</span>
                                <img alt="gallery" className="h-16 mt-1 object-contain" src="img/native.png" />
                            </div>
                            <div className="md:p-2 p-1 flex flex-col items-center w-32 transition duration-300 ease-in-out hover:scale-115">
                                <span>NextJS</span>
                                <img alt="gallery" className="h-16 mt-1 object-contain" src="img/nextjs.png" />
                            </div>
                            <div className="md:p-2 p-1 flex flex-col items-center w-32 transition duration-300 ease-in-out hover:scale-115">
                                <span>Tailwind</span>
                                <img alt="gallery" className="h-14 mt-2 object-contain" src="img/tailwind.png" />
                            </div>
                            <div className="md:p-2 p-1 flex flex-col items-center w-32 transition duration-300 ease-in-out hover:scale-115">
                                <span>Figma</span>
                                <img alt="gallery" className="h-14 mt-2 object-contain" src="img/figma.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col my-auto items-center sm:w-1/4 text-white skills-tools-column-mobile">
                    <h2 className="mx-auto text-2xl font-medium text-center title-font text-white lg:mb-0 text-center mb-4">
                        Herramientas
                    </h2>
                    <div className="flex flex-wrap justify-center w-full gap-x-8 gap-y-6 skills-grid-mobile lg:flex-col lg:w-auto lg:gap-y-0">
                        <div className="md:p-2 p-1 flex flex-col items-center w-32 lg:w-auto transition duration-300 ease-in-out hover:scale-115">
                            <span className="mb-1">Git</span>
                            <img alt="gallery" className="h-16 object-contain" src="img/git2.png" />
                        </div>
                        <div className="md:p-2 p-1 flex flex-col items-center w-32 lg:w-auto transition duration-300 ease-in-out hover:scale-115">
                            <span className="mb-1">GitHub</span>
                            <img alt="gallery" className="h-16 object-contain" src="img/github.png" />
                        </div>
                        <div className="md:p-2 p-1 flex flex-col items-center w-32 lg:w-auto transition duration-300 ease-in-out hover:scale-115">
                            <span className="mb-1">Jira</span>
                            <img alt="gallery" className="h-16 w-16 object-contain" src="img/jira.png"></img>
                        </div>
                        <div className="md:p-2 p-1 flex flex-col items-center w-32 lg:w-auto transition duration-300 ease-in-out hover:scale-115">
                            <span className="mb-1">Postman</span>
                            <img alt="gallery" className="h-16 w-16 object-contain" src="img/postman-logo.png"></img>
                        </div>
                        <div className="md:p-2 p-1 flex flex-col items-center w-32 lg:w-auto transition duration-300 esase-in-out hover:scale-115">
                            <span className="mb-1">Docker</span>
                            <img alt="gallery" className="h-14 object-contain" src="img/docker.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;