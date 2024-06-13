"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaVuejs, FaNodeJs } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, SiHono, SiDrizzle, SiClerk } from "react-icons/si"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

//about data
const about = {
	title: "About Me",
	description:
		"I'm a self-taught software developer with a passion for creating intuitive and user-friendly applications. I have experience working with both front-end and back-end technologies, and I'm always looking to learn new things. When I'm not coding, you can find me spending time with my family, playing video games, or playing basketball at the gym.",
	info: [
		{ fieldName: "Name:", fieldValue: "Nate Tewelde" },
		{ fieldName: "Phone:", fieldValue: "123-456-7890" },
		{ fieldName: "Experience:", fieldValue: "5+ years" },
		{ fieldName: "Location:", fieldValue: "Houston, TX" },
		{ fieldName: "Freelance:", fieldValue: "Available" },
		{ fieldName: "Email:", fieldValue: "natetewelde@gmail.com" },
	],
}

//experience data
const experience = {
	icon: "/assets/resume/badge.svg",
	title: "Experience",
	description:
		"5+ years experience as a self-taught developer, working with various technologies and frameworks, primarly focused on front-end development.",
	items: [
		{ company: "ITA International", position: "Lead Front-End Engineer", duration: "2022-Present" },
		{ company: "Gene by Gene", position: "QA Automation Engineer", duration: "2021-2022" },
		{ company: "Pennebaker", position: "Web Developer", duration: "2020-2021" },
		{ company: "United States Marine Corps", position: "Platoon Sergeant", duration: "2014-2020" },
	],
}

//education data
const education = {
	icon: "/assets/resume/cap.svg",
	title: "Education",
	description:
		"In the process of obtaining my degree as a Computer Science major, with a focus on software development. I have also completed various online courses and tutorials to further my knowledge and skills.",
	items: [
		{ school: "Southern New Hampshire University", degree: "B.S. Computer Science", duration: "In Progress" },
		{ school: "Udemy", degree: "Full-Stack Web Development", duration: "2020" },
		{ school: "Code Academy", degree: "Front-End Development Track", duration: "2019" },
		{ school: "FreeCodeCamp", degree: "Responsive Web Design", duration: "2019" },
		{ school: "Team Treehouse", degree: "Front-End Development Track", duration: "2019" },
	],
}

//skills data
const skills = {
	title: "Skills",
	description:
		"My skills include front-end development, back-end development, and database management. I am proficient in the following technologies:",
	skillList: [
		{ icon: <FaHtml5 />, name: "HTML5" },
		{ icon: <FaCss3 />, name: "CSS3" },
		{ icon: <FaJs />, name: "JavaScript" },
		{ icon: <SiTypescript />, name: "TypeScript" },
		{ icon: <FaReact />, name: "React" },
		{ icon: <FaVuejs />, name: "Vue" },
		{ icon: <SiNextdotjs />, name: "Next.js" },
		{ icon: <SiTailwindcss />, name: "Tailwind CSS" },
		{ icon: <SiPostgresql />, name: "PostgreSQL" },
		{ icon: <SiHono />, name: "Hono" },
		{ icon: <SiDrizzle />, name: "Drizzle" },
		{ icon: <SiClerk />, name: "Clerk" },
	],
}

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="about">About</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
					</TabsList>

					{/* Content */}
					<div className="min-h-[70vh] w-full">
						{/* Experience */}
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="wax-w-[600px] dark:text-white/50 mx-auto xl:mx-0">{experience.description}</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => (
											<li
												key={index}
												className="dark:bg-secondaryDark bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
											>
												<span className="text-accent">{item.duration}</span>
												<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
												<div className="flex items-center gap-3">
													<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
													<p className="text-accent dark:text-white/60">{item.company}</p>
												</div>
											</li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* About */}
						<TabsContent value="about" className="w-full text-center xl:text-left">
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] dark:text-white/50 mx-auto xl:mx-0">{about.description}</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item, index) => (
										<li className="flex items-center justify-center xl:justify-start gap-4" key={index}>
											<span className="text-accent dark:text-white/60">{item.fieldName}</span>
											<span className="text-xl">{item.fieldValue}</span>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>

						{/* Education */}
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="wax-w-[600px] dark:text-white/50 mx-auto xl:mx-0">{education.description}</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => (
											<li
												key={index}
												className="dark:bg-secondaryDark bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
											>
												<span className="text-accent">{item.duration}</span>
												<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
												<div className="flex items-center gap-3">
													<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
													<p className="text-accent dark:text-white/60">{item.school}</p>
												</div>
											</li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* Skills */}
						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold ">{skills.title}</h3>
									<p className="max-w-[600px] dark:text-white/50 mx-auto xl:mx-0 ">{skills.description}</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 ">
									{skills.skillList.map((skill, index) => (
										<li key={index}>
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className="w-full h-[150px] bg-secondary dark:bg-secondaryDark rounded-xl flex justify-center items-center group">
														<div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
													</TooltipTrigger>
													<TooltipContent>
														<p className="capitalize">{skill.name}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	)
}

export default Resume
