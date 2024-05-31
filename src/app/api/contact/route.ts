import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
	try {
		const body = await req.json();
		console.log(body);

		return NextResponse.json({ message: "Message sent successfully." });
	} catch (error) {
		console.error("Error sending email:", error);
		return new Response("Error sending email.", { status: 500 });
	}
};
