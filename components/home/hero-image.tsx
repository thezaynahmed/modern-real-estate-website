"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
    "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
];

export function HeroImage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const imageWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Entrance Animation
            gsap.fromTo(containerRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 2, ease: "power2.out", delay: 0.1 }
            );

            gsap.fromTo(imageWrapperRefs.current[0],
                { scale: 1.05 },
                { scale: 1, duration: 2, ease: "power3.out" }
            );

            // Parallax Effect
            gsap.to(imageWrapperRefs.current, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });
        }, containerRef);

        // Initial opacity
        imageWrapperRefs.current.forEach((el, idx) => {
            if (el) gsap.set(el, { opacity: idx === 0 ? 1 : 0 });
        });

        return () => ctx.revert();
    }, []);

    const isAnimatingRef = useRef(false);

    const goToSlide = (index: number) => {
        if (index === currentIndex || isAnimatingRef.current) return;
        const currentWrapper = imageWrapperRefs.current[currentIndex];
        const nextWrapper = imageWrapperRefs.current[index];

        if (!currentWrapper || !nextWrapper) {
            setCurrentIndex(index);
            return;
        }

        isAnimatingRef.current = true;
        gsap.killTweensOf([currentWrapper, nextWrapper]);

        const tl = gsap.timeline({
            onComplete: () => {
                isAnimatingRef.current = false;
            }
        });

        tl.to(currentWrapper, { opacity: 0, duration: 0.8, ease: "power2.inOut", zIndex: 1 }, 0);
        tl.fromTo(nextWrapper, { opacity: 0, scale: 1.05, zIndex: 2 }, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.inOut" }, 0);

        setCurrentIndex(index);
    };

    const nextSlide = () => goToSlide((currentIndex + 1) % IMAGES.length);
    const prevSlide = () => goToSlide((currentIndex - 1 + IMAGES.length) % IMAGES.length);

    return (
        <div ref={containerRef} className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[80vh] bg-muted overflow-hidden md:rounded-l-3xl shadow-2xl">
            {IMAGES.map((src, idx) => (
                <div key={idx} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                    <div
                        ref={(el) => { imageWrapperRefs.current[idx] = el; }}
                        className="w-full h-full relative"
                        style={{ zIndex: idx === 0 ? 2 : 1 }}
                    >
                        <Image
                            src={src}
                            alt={`Luxury Property ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={idx === 0}
                        />
                    </div>
                </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none mix-blend-multiply" />

            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-30 flex gap-3">
                <button
                    onClick={prevSlide}
                    aria-label="Previous property image"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    aria-label="Next property image"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
            </div>
        </div>
    );
}
