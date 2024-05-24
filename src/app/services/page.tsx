"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
	{
		num: "01",
		title: "Web Development",
		description: "I build websites using modern web technologies like React, Next.js, and Tailwind CSS.",
		href: "",
	},
	{ num: "02", title: "Software Development", description: "I develop web applications using JavaScript, TypeScript, and Python.", href: "" },
	{ num: "03", title: "UI/UX Design", description: "I design user interfaces and user experiences for web applications.", href: "" },

	{ num: "04", title: "Consulting", description: "I provide consulting services for web development and software development.", href: "" },
];

const Services = () => {
	return (
		<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
					className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
				>
					{services.map((service, index) => (
						<div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
							{/* Top */}
							<Link href={service.href}>
								<div className="w-full flex justify-between items-center">
									<div className="text-5xl font-extrabold text-outline-hover dark:text-outline-hover text-transparent group-hover:text-primaryDark group-hover:text-outline-none group-hover:dark:text-primary group-hover:dark:text-outline-none transition-all duration-500">
										{service.num}
									</div>

									<div className="w-[70px] h-[70px] rounded-full bg-accent group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45 duration-50">
										<BsArrowDownRight className="text-primary dark:text-primaryDark text-3xl group-hover:dark:text-primary group-hover:text-primaryDark" />
									</div>
								</div>
								{/* Title  */}
								<h2 className="text-[42px] font-bold leading-none text-primaryDark dark:text-primary group-hover:text-accent transition-all duration-500">
									{service.title}
								</h2>
								{/* Description */}
								<p className="text-accent dark:text-white/50 mt-4">{service.description}</p>
								{/* Border  */}
								<div className="border-b-4 rounded border-secondary dark:border-secondaryDark w-full"></div>
							</Link>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
