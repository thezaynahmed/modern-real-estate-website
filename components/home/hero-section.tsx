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

            {/* Floating Search Bar */}
            <div className="absolute left-0 right-0 -bottom-8 md:bottom-0 z-40 px-4 md:px-6 xl:px-0 max-w-5xl mx-auto flex justify-center w-full md:translate-y-1/2">
                <div className="w-full">
                    <SearchBar />
                </div>
            </div>
        </section>
    );
}
