"use client";
import React from "react";

const Footer = () => {
	return (
		<footer className="text-gray-400 bg-slate-950 body-font">
			<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
				<a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
					<h2 className="rounded-xl text-4xl">FO</h2>
					<div className="flex flex-col">
						<span className="ml-3 text-xl leading-6">Federico</span>
						<span className="ml-3 text-xl leading-6">Osorio</span>
					</div>
				</a>
				<p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
					© 2025 - Hecho con NextJS y Tailwind
				</p>
				<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
					<div className="h-10">
						<a href="https://github.com/FedeOsorio" target="_blank">
							<i className="fa-brands fa-github fa-bounce fa-2xl"></i>
						</a>
						<a href="https://www.linkedin.com/in/fedeosorio/" target="_blank">
							<i className="ml-2 fa-brands fa-linkedin fa-2xl"></i>
						</a>
					</div>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
