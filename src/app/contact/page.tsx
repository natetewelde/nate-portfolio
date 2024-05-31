"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";

const FormSchema = z.object({
	firstname: z.string().min(2, { message: "First name must at least contain 2 character(s)." }),
	lastname: z.string().min(2, { message: "Last name must at least contain 2 character(s)." }),
	email: z.string().email(),
	service: z.enum(["web", "software", "ui", "consult"]),
	message: z
		.string()
		.min(10, { message: "Message must be at least 10 character(s)." })
		.max(1000, { message: "Message cannot exceed 1000 character(s)." }),
});

const Contact = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: { firstname: "", lastname: "", email: "", message: "" },
		mode: "onChange",
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		setIsSubmitting(true);
		setErrorMessage("");
		setSuccessMessage("");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				const errorText = await response.text();

				throw new Error(`Error: ${response.status} - ${errorText}`);
			}

			await new Promise((resolve) => setTimeout(resolve, 2000));

			const result = await response.json();
			setSuccessMessage(result.message);
		} catch (error) {
			if (error instanceof Error) {
				setErrorMessage(error.message);
			} else {
				setErrorMessage("An error occurred while sending the message.");
			}
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
			<div className="container mx-auto">
				<div className="flex w-full justify-center">
					{/* Form */}
					<div className="xl:w-[54%] order-2 xl:order-none">
						<Form {...form}>
							<form className="flex flex-col gap-6 p-10 bg-secondary dark:bg-[#27272c] rounded-xl shadow-md" onSubmit={form.handleSubmit(onSubmit)}>
								<h3 className="text-4xl text-accent">Let's Work Together</h3>
								<p className="dark:text-white/60">Feel free to reach out to me if you'd like to start a conversation about your next project!</p>
								{/* Input */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
									<FormField
										control={form.control}
										name="firstname"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input placeholder="First Name" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="lastname"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input placeholder="Last Name" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								{/* Select */}
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input placeholder="Email" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="service"
									render={({ field }) => (
										<FormItem>
											<Select onValueChange={field.onChange}>
												<FormControl>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Select a service"></SelectValue>
													</SelectTrigger>
												</FormControl>
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
											<FormMessage />
										</FormItem>
									)}
								/>
								{/* Textarea */}
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Textarea className="resize-none" rows={5} placeholder="Type your message here." {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								{/* Button */}
								<Button type="submit" size="md" className="max-w-40">
									{isSubmitting ? (
										<>
											Sending <Loader className="ml-2  animate-spin" />
										</>
									) : (
										"Send Message"
									)}
								</Button>
								{successMessage && <p className="text-green-500">{successMessage}</p>}
								{errorMessage && <p className="text-red-700">{errorMessage}</p>}
							</form>
						</Form>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
