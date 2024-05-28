"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
	{
		icon: <FaPhoneAlt />,
		title: "Phone",
		text: "+1 234 567 890",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		text: "natetewelde@gmail.com",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Location",
		text: "Houston, TX",
	},
];

const Contact = () => {
	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					{/* Form */}
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form className="flex flex-col gap-6 p-10 bg-secondary dark:bg-[#27272c] rounded-xl shadow-md" action="">
							<h3 className="text-4xl text-accent">Let's Work Together</h3>
							<p className="dark:text-white/60">Feel free to reach out to me if you'd like to start a conversation about your next project!</p>
							{/* Input */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input type="firstname" placeholder="First Name" />
								<Input type="lastname" placeholder="Last Name" />
								<Input type="email" placeholder="Email" />
								<Input type="phonenumber" placeholder="Phone Number" />
							</div>
							{/* Select */}
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a service"></SelectValue>
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Select a Service</SelectLabel>
										<SelectItem value="web">Web Development</SelectItem>
										<SelectItem value="software">Software Development</SelectItem>
										<SelectItem value="ui">UI/UX Design</SelectItem>
										<SelectItem value="consult">Consulting</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							{/* Textarea */}
							<Textarea className="h-[200px]" placeholder="Type your message here." />
							{/* Button */}
							<Button size="md" className="max-w-40">
								Send Message
							</Button>
						</form>
					</div>
					{/* Info */}
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => (
								<li key={index} className="flex items-center gap-6">
									<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary dark:bg-[#27272c] text-accent rounded-md flex items-center justify-center">
										<div className="text-[28px]">{item.icon}</div>
									</div>
									<div className="flex-1">
										<p className="dark:text-white/60 text-black/60">{item.title}</p>
										<h3 className="text-xl">{item.text}</h3>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
