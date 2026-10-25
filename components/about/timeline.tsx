"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/shared/container";

const MILESTONES = [
    {
        year: "2019",
        title: "Analytical Foundations",
        description:
            "Built a career in complex system architecture, developing a rigorous foundation in data-driven decision making and risk assessment. This engineering mindset became the cornerstone of my unique approach to market analysis.",
    },
    {
        year: "2021",
        title: "Financial Architecture",
        description:
            "Mastered the intricate mechanics of mortgage debt and capital structuring. Spent years consulting on high-stakes asset management, learning exactly how to leverage creative financing to unlock equity and drive portfolio growth.",
    },
    {
        year: "2023",
        title: "The Integrated Model",
        description:
            "Recognized a critical gap in the luxury market: buyers were being served by agents who lacked financial depth. Pioneered an integrated model that fuses high-end property acquisition with sophisticated mortgage strategy.",
    },
    {
        year: "2024",
        title: "Curated Estates Established",
        description:
            "Established the Curated Estates advisory model focused on discrete property sourcing and tailored mortgage architecture across Downtown Toronto and the Greater Toronto Area.",
    },
    {
        year: "2026",
        title: "Digital Portfolio Release",
        description:
            "Engineered the modern web platform as a demonstration of high-density real estate design, GSAP ScrollTrigger performance, and full Next.js App Router capabilities.",
    },
];

export function Timeline() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Animate the vertical line drawing
            gsap.fromTo(
                ".timeline-line",
                { scaleY: 0, transformOrigin: "top" },
                {
                    scaleY: 1,
                    duration: 2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        end: "bottom 70%",
                        scrub: 1,
                    },
                }
            );

            // Stagger timeline items
            gsap.fromTo(
                ".timeline-item",
                { x: -40, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 65%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 md:py-32 bg-muted/30" ref={sectionRef}>
            <Container className="max-w-4xl">
                <div className="text-center mb-20 space-y-4">
                    <p className="text-[#C5A059] font-medium tracking-widest text-sm uppercase">The Journey</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                        Precision <span className="italic text-[#C5A059]">Timeline</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="timeline-line absolute left-6 md:left-8 top-0 bottom-0 w-px bg-[#C5A059]/40" />

                    <div className="space-y-16">
                        {MILESTONES.map((milestone, idx) => (
                            <div key={idx} className="timeline-item relative pl-16 md:pl-20">
                                {/* Dot on the line */}
                                <div className="absolute left-[18px] md:left-[26px] top-1 w-4 h-4 rounded-full bg-background border-2 border-[#C5A059] z-10" />

                                <div className="space-y-3">
                                    <span className="inline-block bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                                        {milestone.year}
                                    </span>
                                    <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
