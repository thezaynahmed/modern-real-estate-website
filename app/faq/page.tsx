"use client";

import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

const FAQAccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn("border-b border-border/50 bg-card rounded-2xl mb-4 px-6 overflow-hidden data-[state=open]:shadow-lg transition-all", className)}
        {...props}
    />
));
FAQAccordionItem.displayName = "FAQAccordionItem";

const FAQAccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center justify-between py-6 font-serif text-2xl md:text-3xl font-medium transition-all text-foreground text-left group",
                className
            )}
            {...props}
        >
            {children}
            <div className="relative w-8 h-8 flex items-center justify-center shrink-0 ml-4 rounded-full border border-border group-data-[state=open]:bg-primary group-data-[state=open]:text-background transition-colors duration-300">
                <Plus className="h-5 w-5 absolute transition-opacity duration-300 group-data-[state=open]:opacity-0" />
                <Minus className="h-5 w-5 absolute opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100" />
            </div>
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
FAQAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const FAQAccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-lg transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("pb-8 text-muted-foreground leading-relaxed", className)}>{children}</div>
    </AccordionPrimitive.Content>
));
FAQAccordionContent.displayName = AccordionPrimitive.Content.displayName;

const faqs = [
    {
        q: "How have down payment requirements evolved in the 2026 luxury market?",
        a: "In 2026, the threshold for unstructured high-ratio mortgages shifted. Properties valued over $3M typically require a minimum 25% down payment, though our private banking affiliates offer structured equity solutions that can leverage existing portfolios to reduce liquid capital requirements."
    },
    {
        q: "What should I anticipate for closing costs on a $5M+ estate?",
        a: "Closing protocols have become more sophisticated. Expect between 3.5% to 5.2% in total closing costs. This includes land transfer taxes (both provincial and municipal if applicable in Toronto boundaries), elite legal representation, and mandatory appraisal variances. We provide a detailed architectural audit prior to closing."
    },
    {
        q: "How does Curated Estates handle discrete, off-market acquisitions?",
        a: "Our advisory coordinates private sales through a direct network of verified property owners, family offices, and retained legal counsel. Over 40% of our transactions never list publicly on MLS. Acquisitions proceed through private viewings under bilateral non-disclosure agreements.",
    },
    {
        q: "Is an architectural inspection necessary for a newly built modern custom?",
        a: "Absolutely. 2026 building codes introduced stringent net-zero environmental compliances. While new builds showcase pristine aesthetics, our partnered structural engineers audit HVAC acoustic dampening, foundation micromovements, and smart-home security integration before you commit."
    }
];

export default function FAQPage() {
    return (
        <main className="min-h-screen">
            <SectionWrapper className="bg-background pt-32 pb-24">
                <Container className="max-w-4xl mx-auto">
                    <div className="text-center mb-20 space-y-6">
                        <h1 className="font-serif text-5xl md:text-7xl">
                            Market <span className="text-primary italic">Inquiries.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Answers regarding the 2026 regulatory landscape, capital requirements, and our discrete acquisition processes.
                        </p>
                    </div>

                    <AccordionPrimitive.Root type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <FAQAccordionItem key={i} value={`item-${i}`}>
                                <FAQAccordionTrigger>{faq.q}</FAQAccordionTrigger>
                                <FAQAccordionContent>{faq.a}</FAQAccordionContent>
                            </FAQAccordionItem>
                        ))}
                    </AccordionPrimitive.Root>
                </Container>
            </SectionWrapper>
        </main>
    );
}
