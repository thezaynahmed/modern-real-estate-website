"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        quote: "The level of discretion and market knowledge provided was unparalleled. A truly seamless acquisition of our Lorne Park estate.",
        author: "James T.",
        role: "Private Client"
    },
    {
        quote: "They understand that true luxury lives in the precise details. Every property shown was an architectural masterpiece.",
        author: "Elena R.",
        role: "Architectural Designer"
    },
    {
        quote: "Curated Estates redefined our advisory experience. Their access to discrete off-market opportunities across the GTA delivered exactly what we needed.",
        author: "Michael & Sarah W.",
        role: "Sellers"
    },
    {
        quote: "Acquiring a penthouse through their team was effortless. A sophisticated, consultative approach without the typical noise.",
        author: "David L.",
        role: "Investor"
    }
];

export function TestimonialsTicker() {
    return (
        <SectionWrapper className="bg-[#121212] py-24 overflow-hidden border-y border-white/5 dark:border-[#121212]">
            <div className="mb-16 text-center px-4">
                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#F5F5F7]">Client Dialogues</h2>
                <div className="w-12 h-px bg-[#C5A059] mx-auto"></div>
            </div>

            <div className="relative flex whitespace-nowrap overflow-hidden py-4 w-full max-w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] group">
                <motion.div
                    className="flex gap-8 px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // 30s per loop
                    }}
                >
                    {/* Duplicate array to ensure smooth infinite scroll */}
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => (
                        <div
                            key={idx}
                            className="w-[300px] sm:w-[400px] md:w-[600px] inline-flex flex-col bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 md:p-12 shrink-0 whitespace-normal transition-colors hover:border-[#C5A059]/40"
                        >
                            <Quote className="text-[#C5A059]/40 w-10 h-10 mb-6" />
                            <p className="text-[#F5F5F7] text-lg md:text-xl font-serif italic mb-8 leading-relaxed">
                                &quot;{item.quote}&quot;
                            </p>
                            <div className="mt-auto">
                                <p className="font-medium text-[#C5A059] uppercase tracking-wider text-sm">{item.author}</p>
                                <p className="text-white/60 text-sm mt-1">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
