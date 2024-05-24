"use client";

/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

//Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					{/* Left Text */}
					<div className="text-center xl:text-left order-2 xl:order-none">
						<span className="text-xl">Software Developer</span>
						<h1 className="h1">
							Hello I'm <br />{" "}
							<span className="text-accent typewriter-container">
								<Typewriter words={["Nate Tewelde", "a Father", "a Marine", "a Gamer"]} loop typeSpeed={70} deleteSpeed={80} delaySpeed={2000} />
							</span>
						</h1>
						<p className="max-w-[500px] mb-9 text-primaryDark dark:text-white/80">
							I excel at crafting elegant digitial experiences and I am proficient in various programming languages and technologies.
						</p>
						{/* Download CV and Socials*/}
						<div className="flex flex-col xl:flex-row items-center gap-8">
							<Button variant="outline" size="lg" className="uppercase flex items-center gap-2 dark:hover:text-primary">
								<span>Download CV</span>
								<FiDownload className="text-xl" />
							</Button>
							<div className="mb-8 xl:mb-0">
								<Socials
									containerStyles="flex gap-6"
									iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primaryDark hover:transition-all duration-500 dark:hover:text-primary"
								/>
							</div>
						</div>
					</div>
					{/* Right Image */}
					<div className="order-1 xl:order-none mb-8 xl:mb-0">
						<Photo />
					</div>
				</div>
			</div>
			<Stats />
		</section>
	);
};

export default Home;
