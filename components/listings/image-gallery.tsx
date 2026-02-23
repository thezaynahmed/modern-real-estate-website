"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface ImageGalleryProps {
    images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + images.length) % images.length);
        }
    };

    return (
        <>
            <div className="grid grid-cols-4 gap-4 rounded-3xl overflow-hidden aspect-[2/1] relative">
                <div
                    className="col-span-4 md:col-span-3 row-span-2 relative group cursor-pointer"
                    onClick={() => setSelectedImage(0)}
                >
                    <img src={images[0]} alt="Property High Res 1" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    <Maximize2 className="absolute top-6 right-6 text-white w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                </div>

                {images.slice(1, 3).map((img, idx) => (
                    <div
                        key={idx}
                        className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer overflow-hidden"
                        onClick={() => setSelectedImage(idx + 1)}
                    >
                        <img src={img} alt={`Property High Res ${idx + 2}`} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                ))}

                <button
                    className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-md px-6 py-3 rounded-full font-medium text-sm border border-border/50 hover:bg-background transition-colors text-foreground shadow-sm"
                    onClick={() => setSelectedImage(0)}
                >
                    View All {images.length} Photos
                </button>
            </div>

            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur flex flex-col items-center justify-center"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-50 p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-50 p-4"
                            onClick={handlePrev}
                        >
                            <ChevronLeft className="w-12 h-12" />
                        </button>

                        <button
                            className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-50 p-4"
                            onClick={handleNext}
                        >
                            <ChevronRight className="w-12 h-12" />
                        </button>

                        <motion.img
                            key={selectedImage}
                            src={images[selectedImage]}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            alt={`Property High Res ${selectedImage + 1}`}
                        />

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tracking-widest uppercase">
                            {selectedImage + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
