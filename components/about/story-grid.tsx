"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/shared/container";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, BarChart3, MapPin } from "lucide-react";

export function StoryGrid() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".story-card",
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 75%",
                    },
                }
            );
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 md:py-32 bg-background" ref={gridRef}>
            <Container>
                <div className="text-center mb-20 space-y-4">
                    <p className="text-[#C5A059] font-medium tracking-widest text-sm uppercase">Our Story</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                        The Pillars of <span className="italic text-[#C5A059]">Curated Estates</span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">

                    {/* Mission — spans 2 cols */}
                    <Card className="story-card md:col-span-2 border-border/50 bg-card rounded-2xl shadow-sm overflow-hidden group hover:border-[#C5A059]/30 transition-colors duration-500">
                        <CardContent className="p-10 md:p-14 flex flex-col justify-between h-full min-h-[320px]">
                            <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/10 flex items-center justify-center mb-8">
                                <Lightbulb className="w-7 h-7 text-[#C5A059]" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-serif text-3xl text-foreground">The Philosophy of Curated Estates</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                                    We believe that true luxury doesn&apos;t announce itself — it&apos;s felt. Our approach
                                    strips away the noise. No flashy sales pitches. No generic marketing. What remains is a
                                    quiet, dedicated team of specialists who understand that the most profound investment of
                                    your life deserves discretion, deep market insight, and an uncompromising dedication to
                                    your unique vision.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Financial Edge */}
                    <Card className="story-card border-border/50 bg-[#121212] text-white rounded-2xl shadow-sm overflow-hidden group hover:border-[#C5A059]/30 transition-colors duration-500">
                        <CardContent className="p-10 flex flex-col justify-between h-full min-h-[320px]">
                            <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/10 flex items-center justify-center mb-8">
                                <BarChart3 className="w-7 h-7 text-[#C5A059]" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-serif text-2xl text-white">The Financial Edge</h3>
                                <p className="text-white/60 leading-relaxed">
                                    Structured financing and mortgage advisory are integrated directly into our acquisition workflow. By aligning lending terms with property valuation early, transactions protect liquidity and streamline closing timelines.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Local Roots */}
                    <Card className="story-card border-border/50 bg-card rounded-2xl shadow-sm overflow-hidden group hover:border-[#C5A059]/30 transition-colors duration-500">
                        <CardContent className="p-10 flex flex-col justify-between h-full min-h-[320px]">
                            <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/10 flex items-center justify-center mb-8">
                                <MapPin className="w-7 h-7 text-[#C5A059]" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-serif text-2xl text-foreground">Local Intelligence, Global Reach</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our advisory focuses on prime submarkets across Downtown Toronto, the lakefront, and surrounding estate enclaves. We track micro-market inventory, off-market private sales, and zoning shifts to guide buyers and sellers with verifiable local data.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Stats card */}
                    <Card className="story-card md:col-span-2 border-border/50 bg-gradient-to-r from-[#C5A059]/5 to-transparent rounded-2xl shadow-sm overflow-hidden">
                        <CardContent className="p-10 md:p-14">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div className="space-y-2">
                                    <p className="font-serif text-4xl md:text-5xl text-foreground">7+</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Years Experience</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-serif text-4xl md:text-5xl text-foreground">$120M</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Transaction Volume</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-serif text-4xl md:text-5xl text-foreground">14</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Avg. Days to Close</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-serif text-4xl md:text-5xl text-foreground">98%</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Ask Price Achieved</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </Container>
        </section>
    );
}
