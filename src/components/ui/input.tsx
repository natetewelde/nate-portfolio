import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				"flex h-[48px] w-full rounded-md border border-black/10 dark:border-white/10  dark:focus:border-accent  bg-primary dark:bg-primaryDark px-4 py-5 text-base dark:placeholder:text-white/60 outline-none",
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input };
