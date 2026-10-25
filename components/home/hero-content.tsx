"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroContent() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal animation
            gsap.fromTo(".reveal-text",
                { y: 80, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
            );
            gsap.fromTo(".reveal-line",
                { scaleX: 0, transformOrigin: "left" },
                { scaleX: 1, duration: 1.2, ease: "power4.out", delay: 0.8 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el.querySelector('.magnetic-inner'), {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.6,
            ease: "power2.out"
        });
    };

    const handleMagneticLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const el = e.currentTarget;
        gsap.to(el.querySelector('.magnetic-inner'), {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
        });
    };

    return (
        <div ref={containerRef} className="flex flex-col justify-center space-y-8 px-6 md:px-0 py-12 md:py-0 z-10 relative h-full">
            <div className="overflow-hidden pb-1">
                <div className="reveal-text inline-flex items-center gap-4 text-[#C5A059] font-serif italic tracking-[0.15em] text-sm md:text-base">
                    <span className="reveal-line w-12 h-[1px] bg-[#C5A059] block"></span>
                    Exceptional Properties
                </div>
            </div>

            <div className="overflow-hidden pb-2">
                <h1 className="reveal-text font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.15] text-foreground tracking-tight">
                    Luxury Living{" "}
                    <br className="hidden sm:block" />
                    <span className="font-light">in </span>
                    <span className="italic text-[#C5A059]">Toronto</span>.
                </h1>
            </div>

            <div className="overflow-hidden pt-2 pb-2">
                <p className="reveal-text text-muted-foreground text-lg md:text-xl max-w-[440px] leading-relaxed font-sans">
                    Discover a curated portfolio of the most prestigious architectural estates and penthouses across the Greater Toronto Area.
                </p>
            </div>

            <div className="overflow-hidden pt-6">
                <Link
                    href="/buyers"
                    className="reveal-text inline-flex items-center text-sm font-medium uppercase tracking-[0.2em] text-foreground group relative p-4 -ml-4"
                    onMouseMove={handleMagneticMove}
                    onMouseLeave={handleMagneticLeave}
                >
                    <span className="magnetic-inner flex items-center gap-6">
                        <span className="relative pb-1">
                            View Collection
                            <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></span>
                        </span>
                        <div className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center transition-colors group-hover:bg-[#C5A059]/10 group-hover:border-[#C5A059]/40">
                            <ArrowRight className="w-5 h-5 text-[#C5A059] group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                    </span>
                </Link>
            </div>
        </div>
    );
}
