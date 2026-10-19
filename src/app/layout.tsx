import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Federico Osorio | Software Engineer",
	description: "Software Engineer especializado en sistemas escalables, rendimiento y desarrollo de aplicaciones modernas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" className="scroll-smooth">
			<head>
				<Script src="https://kit.fontawesome.com/1deb382228.js" crossOrigin="anonymous"></Script>
			</head>
			<body className="font-graphik flex flex-col min-h-screen text-slate-100 antialiased">
				<LanguageProvider>
					<div className="w-full flex-1">
						{children}
					</div>
				</LanguageProvider>
			</body>
		</html>
	);
}
