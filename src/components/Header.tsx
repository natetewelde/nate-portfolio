"use client";

import Link from "next/link";
import { Button } from "./ui/button";

//Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
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
				<div className="xl:hidden order-2">
					<MobileNav />
				</div>
				{/* Dark Mode Toggle */}
				<DarkModeToggle />
			</div>
		</header>
	);
};

export default Header;
