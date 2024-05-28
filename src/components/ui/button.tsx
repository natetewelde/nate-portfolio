import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
	{
		variants: {
			variant: {
				default: "bg-accent text-primary dark:text-primary dark:hover:text-accent hover:bg-primary hover:text-accent",
				primary: "bg-primaryDark text-primary",
				outline: "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primaryDark",
			},
			size: {
				default: "h-[44px] px-6",
				md: "h-[48px] px-6",
				lg: "h-[56px] px-6 text-sm uppercase tracking-[2px]",
				icon: "h-[44px] w-[44px] p-0",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";
	return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
