"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
];

export function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        // Initial setup
        gsap.set(imageRefs.current, { opacity: 0, scale: 1.1 });
        if (imageRefs.current[0]) {
            gsap.set(imageRefs.current[0], { opacity: 1, scale: 1 });
        }
    }, []);

    const goToSlide = (index: number) => {
        if (index === currentIndex) return;

        const currentImg = imageRefs.current[currentIndex];
        const nextImg = imageRefs.current[index];

        const tl = gsap.timeline();

        // Outgoing
        if (currentImg) {
            tl.to(currentImg, {
                opacity: 0,
                scale: 1.05,
                duration: 1,
                ease: "power2.inOut",
                zIndex: 1
            }, 0);
        }

        // Incoming
        if (nextImg) {
            tl.fromTo(nextImg,
                { opacity: 0, scale: 1.1, zIndex: 2 },
                { opacity: 1, scale: 1, duration: 1, ease: "power2.inOut" },
                0
            );
        }

        setCurrentIndex(index);
    };

    const nextSlide = () => goToSlide((currentIndex + 1) % IMAGES.length);
    const prevSlide = () => goToSlide((currentIndex - 1 + IMAGES.length) % IMAGES.length);

    return (
        <div ref={containerRef} className="relative w-full h-[60vh] md:h-[80vh] bg-muted overflow-hidden rounded-2xl md:rounded-l-3xl md:rounded-r-none">
            {IMAGES.map((src, idx) => (
                <img
                    key={idx}
                    ref={(el) => { imageRefs.current[idx] = el; }}
                    src={src}
                    alt={`Luxury Property ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ zIndex: idx === 0 ? 2 : 1 }}
                />
            ))}
            <div className="absolute inset-0 bg-black/20 z-10" />

            <div className="absolute bottom-8 right-8 z-30 flex gap-4">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
