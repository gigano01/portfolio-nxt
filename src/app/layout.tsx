import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import "normalize.css";
import "@/styles/fonts.css"
import "@/styles/globals.css";

// 
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="nl">
			<SpeedInsights />
			<head>
				<link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
			</head>
			<body>{children}</body>
		</html>
	);
}

export const metadata: Metadata = {
	title: "Noahs Portfolio",
	description: "Noah's portfolio",

}
