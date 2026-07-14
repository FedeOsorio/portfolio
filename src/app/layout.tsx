import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Federico Osorio | Full Stack Developer",
	description: "Full Stack Developer especializado en sistemas escalables, rendimiento y desarrollo de aplicaciones modernas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<head>
				<Script src="https://kit.fontawesome.com/1deb382228.js" crossOrigin="anonymous"></Script>
			</head>
			<body className={`${inter.className} flex flex-col h-screen overflow-hidden`}>
				<LanguageProvider>
					<div className="flex-1 relative overflow-hidden w-full">
						{children}
					</div>
				</LanguageProvider>
			</body>
		</html>
	);
}
