import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method Not Allowed" });
	}

	const { firstname, lastname, email, service, message } = req.body;

	try {
		await resend.emails.send({
			from: email,
			to: "natetewelde@gmail.com",
			subject: `Contact Form Submission from ${firstname} ${lastname}`,
			text: `
                Name: ${firstname} ${lastname}
                Email: ${email}
                Service: ${service}
                Message: ${message}`,
		});

		res.status(200).json({ message: "Email sent successfully" });
	} catch (error) {
		res.status(500).json({ message: "Something went wrong. Please try again later" });
	}
}
