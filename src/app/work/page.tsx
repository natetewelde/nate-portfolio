"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
	{
		num: "01",
		category: "frontend",
		title: "Fairfield Geotechnologies",
		description: "Using Craft CMS, and Vue we created a component based website for Fairfield Geotechnologies.",
		stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Vue" }],
		image: "/assets/work/fairfield.png",
		live: "https://fairfieldgeo.com/",
		type: "public",
	},
	{
		num: "02",
		category: "frontend",
		title: "Nine Energy",
		description: "Using Craft CMS, and Vue we created a component based website for Nine Energy.",
		stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Vue" }],
		image: "/assets/work/nine.png",
		live: "https://nineenergyservice.com/",
		type: "public",
	},
	{
		num: "03",
		category: "frontend",
		title: "BKV Corp",
		description: "Using Craft CMS, and Vue we created a component based website for BKV Corp.",
		stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Vue" }],
		image: "/assets/work/bkv.png",
		live: "https://bkvcorp.com/",
		type: "public",
	},
	{
		num: "04",
		category: "frontend",
		title: "PathSim",
		description:
			"Built using React, PathSim is a web application that allows users to create network model graphs. This project is confidential and cannot be demoed.",
		stack: [{ name: "Material UI" }, { name: "React" }],
		image: "/assets/work/confidential.png",
		type: "confidential",
		live: "",
	},
	{
		num: "05",
		category: "frontend",
		title: "Resource Calculator Data Editor",
		description:
			"Built using React, Typescript, and Material UI, this project is a data editor for cost estimation and analysis. This project is confidential and cannot be demoed.",
		stack: [{ name: "Typescript" }, { name: "React" }, { name: "Material UI" }],
		image: "/assets/work/confidential.png",
		type: "confidential",
		live: "",
	},
	{
		num: "06",
		category: "frontend",
		title: "Portfolio",
		description: "Built using Next.js, this portfolio is a showcase of my work and skills.",
		stack: [{ name: "Typescript" }, { name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
		image: "/assets/work/portfolio.png",
		live: "",
		type: "public",
	},
];

const Work = () => {
	const [project, setProject] = useState(projects[0]);

	const handleSlideChange = (swiper: any) => {
		//get current slide index
		const currentSlide = swiper.activeIndex;
		//update project state based on current slide index
		setProject(projects[currentSlide]);
	};
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[30px] h-[50%]">
							{/* Outline Num */}
							<div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
							{/* Project Title */}
							<h2 className="text-[42px] font-bold leading-none dark:text-white group-hover:text-accent transition-all duration-500 capitalize">
								{project.title}
							</h2>
							{/* Project Description */}
							<p className="dark:text-white/60">{project.description}</p>
							{/* Project Stack */}
							<ul className="flex gap-4 capitalize">
								{project.stack.map((item, index) => (
									<li key={index} className="text-xl text-accent">
										{item.name}
										{index !== project.stack.length - 1 && ","}
									</li>
								))}
							</ul>
							{/* Border */}
							<div className="border border-accent dark:border-white/20 mt-[-20px]"></div>
							{/* Buttons */}
							<div className="flex items-center gap-4">
								{/* Live Project Button */}
								{project.type === "public" && (
									<Link href={project.live} target="_blank">
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-accent  dark:bg-white/5 flex justify-center items-center group">
													<BsArrowUpRight className="text-white text-3xl group-hover:dark:text-accent group-hover:text-primaryDark" />
												</TooltipTrigger>
												<TooltipContent>
													<p>Live Site</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
								)}
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
							{projects.map((item, index) => (
								<SwiperSlide key={index}>
									<div className="h-[460px] relative group flex justify-center items-center bg-transparent">
										{/* Overlay */}
										<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 rounded-md z-10"></div>
										{/* Image */}
										<div className="relative h-full w-full shadow-md">
											<Image src={project.image} className="object-cover rounded-md" fill alt={project.title} />
										</div>
									</div>
								</SwiperSlide>
							))}
							{/* Buttons */}
							<WorkSliderBtns
								containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
								btnStyles="xl:dark:bg-white/5 bg-accent dark:hover:bg-accent hover:text-primaryDark hover:bg-secondary text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Work;
