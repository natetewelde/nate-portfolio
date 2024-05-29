import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

//Providers
import { ThemeProvider } from "@/providers/ThemeProvider";

const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsMono",
	preload: false,
});

export const metadata: Metadata = {
	title: "Nate Tewelde | Software Developer",
	description: "I excel at crafting elegant digitial experiences and I am proficient in various programming languages and technologies.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={jetBrainsMono.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Header />
					<StairTransition />
					<PageTransition>{children}</PageTransition>
				</ThemeProvider>
			</body>
		</html>
	);
}
