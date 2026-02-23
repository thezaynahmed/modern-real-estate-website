"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "@/components/shared/container";
import { Award } from "lucide-react";
import Image from "next/image";

export function AboutHero() {
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image zoom-out on load
            gsap.fromTo(
                imageRef.current,
                { scale: 1.15, opacity: 0 },
                { scale: 1, opacity: 1, duration: 2, ease: "power3.out", delay: 0.2 }
            );
            // Text stagger reveal
            gsap.fromTo(
                ".about-hero-reveal",
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.4 }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative bg-background overflow-hidden">
            <Container className="px-0 md:px-6 lg:px-12 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh] items-center">

                    {/* Portrait Side */}
                    <div className="relative h-[60vh] md:h-full overflow-hidden bg-muted order-first">
                        <div ref={imageRef} className="absolute inset-0 w-full h-full">
                            <Image
                                src="/images/advisor.jpg"
                                alt="Advisory Director Portrait"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            {/* Subtle texture overlay */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div ref={textRef} className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0 space-y-8">
                        <div className="about-hero-reveal inline-flex items-center gap-3 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-full px-5 py-2.5 w-fit">
                            <Award className="w-4 h-4 text-[#C5A059]" />
                            <span className="text-[#C5A059] text-xs font-semibold uppercase tracking-[0.2em]">7+ Years of Professional Excellence</span>
                        </div>

                        <h1 className="about-hero-reveal font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-foreground">
                            Architecting Exceptional{" "}
                            <span className="italic text-[#C5A059]">Real Estate</span>{" "}
                            Experiences.
                        </h1>

                        <p className="about-hero-reveal text-muted-foreground text-lg leading-relaxed max-w-lg">
                            Where financial precision meets an intimate understanding of luxury markets. Curated Estates was built for clients who demand more than a transaction — they demand a strategist who understands the intersection of capital and estate.
                        </p>

                        <div className="about-hero-reveal flex items-center gap-8 pt-4">
                            <div>
                                <p className="font-serif text-3xl text-foreground">150+</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest">Clients Served</p>
                            </div>
                            <div className="w-px h-12 bg-border/50"></div>
                            <div>
                                <p className="font-serif text-3xl text-foreground">$120M+</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest">Portfolio Value</p>
                            </div>
                            <div className="w-px h-12 bg-border/50"></div>
                            <div>
                                <p className="font-serif text-3xl text-foreground">98%</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest">Client Retention</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
