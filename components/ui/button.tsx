"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import gsap from "gsap";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border border-[0.5px] border-primary/40 bg-transparent shadow-sm hover:bg-primary/10 hover:border-primary transition ease-out duration-300 text-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                primary: "bg-[#C5A059] text-[#121212] font-semibold hover:bg-[#B39050] transition-colors shadow-md",
                cta: "bg-gradient-to-r from-[#C5A059] to-[#D4B375] text-[#121212] font-semibold shadow-lg border-none"
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-14 rounded-md px-10 text-base",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, onMouseEnter, onMouseLeave, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        // Internal ref for GSAP animations
        const internalRef = React.useRef<HTMLButtonElement>(null);

        // Merge provided ref and internal ref
        const mergedRef = React.useCallback(
            (node: HTMLButtonElement) => {
                internalRef.current = node;
                if (typeof ref === "function") {
                    ref(node);
                } else if (ref) {
                    (ref as React.MutableRefObject<HTMLButtonElement>).current = node;
                }
            },
            [ref]
        );

        const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (variant === "cta" && internalRef.current) {
                gsap.to(internalRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out" });
            }
            onMouseEnter?.(e);
        };

        const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (variant === "cta" && internalRef.current) {
                gsap.to(internalRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
            }
            onMouseLeave?.(e);
        };

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={mergedRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
