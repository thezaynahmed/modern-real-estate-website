"use client";

import { Container } from "@/components/shared/container";
import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";
import { SearchBar } from "./search-bar";

export function HeroSection() {
    return (
        <section className="relative pt-6 md:pt-12 lg:pt-16 pb-16 md:pb-24 bg-background overflow-visible">
            <Container className="px-0 md:px-6 lg:px-12 max-w-[1400px] w-full relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 lg:gap-16 items-center">

                    <div className="w-full h-full order-last md:order-first">
                        <HeroContent />
                    </div>

                    <div className="w-full h-full relative z-0 md:rounded-3xl overflow-hidden order-first md:order-last">
                        <HeroImage />
                    </div>

                </div>
            </Container>

            {/* Search Bar - Natural flow on mobile, floating bridge on desktop */}
            <div className="relative mt-8 md:mt-0 md:absolute md:left-0 md:right-0 md:bottom-0 z-40 px-4 md:px-6 xl:px-0 max-w-5xl mx-auto flex justify-center w-full md:translate-y-1/2">
                <div className="w-full">
                    <SearchBar />
                </div>
            </div>
        </section>
    );
}
