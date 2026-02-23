import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

import React from "react";

export const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-16 md:py-24 lg:py-32 overflow-hidden", className)}
                {...props}
            >
                {children}
            </section>
        );
    }
);
SectionWrapper.displayName = "SectionWrapper";
