"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

//Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
	const { setTheme } = useTheme();

	return (
		<header className="py-8 xl:py-12 text-primaryDark dark:text-primary">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo */}
				<Link href={"/"}>
					<h1 className="text-4xl font-semibold">
						Nate<span className="text-accent">.</span>
					</h1>
				</Link>
				{/* Desktop Nav */}
				<div className="hidden xl:flex items-center gap-8 ">
					<Nav />
					<Link href={"/contact"}>
						<Button variant="outline" className="dark:hover:text-primary">
							Hire Me
						</Button>
					</Link>
				</div>

				{/* Mobile Nav */}
				<div className="xl:hidden">
					<MobileNav />
				</div>
				{/* Dark Mode Toggle */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon" className="focus:outline-none hover:text-primary">
							<Sun fill="#0284c7" className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
							<Moon fill="#0284c7" className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="bg-primary dark:bg-primaryDark border-accent dark:border-accent">
						<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
};

export default Header;
