"use client";
import React from "react";

const Contact = () => {
	return (
		<section id="contactID" className="text-gray-400 bg-gray-900 body-font bg-gradient-to-b from-teal-900 via-blue-950 to-slate-950 ">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-5">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contacto</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						¡Podés enviarme un correo a {""}
						<a className="text-blue-400" href="mailto: fedee.osorio@gmail.com">
							fedee.osorio@gmail.com
						</a>
						{""} o encontrarme a través de mi LinkedIn!
					</p>
				</div>
				<div className="text-center text-gray-200 mb-28">
					{/* <i className="fa-brands fa-instagram"></i> */}
					<a href="https://www.linkedin.com/in/fedeosorio/" target="_blank">
						<i className="fa-brands fa-linkedin text-5xl fa-beat-fade"></i>
					</a>
				</div>
				<div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center"></div>
			</div>
		</section>
	);
};

export default Contact;
