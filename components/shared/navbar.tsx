"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { y: -30, opacity: 0, filter: "blur(10px)" },
                { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out", delay: 0.1 }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
            {/* Top Demo Context Banner */}
            <div className="bg-[#121212] text-white/75 border-b border-white/10 py-1.5 px-4 text-center text-[11px] font-mono tracking-wider flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] inline-block"></span>
                <span>Portfolio Concept Demo &bull; Built by Zain Ahmed &bull; Next.js 16 App Router &bull; GSAP ScrollTrigger &bull; Fictional Listings</span>
            </div>

            <Container className="flex h-20 items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/" className="font-serif text-2xl font-bold tracking-tighter flex items-center gap-3">
                        <span>Curated <span className="text-primary italic font-normal">Estates</span></span>
                        <span className="hidden sm:inline-flex text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border border-primary/30 text-primary bg-primary/5">Demo</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <div
                            className="relative py-4"
                            onMouseEnter={() => setMegaMenuOpen(true)}
                            onMouseLeave={() => setMegaMenuOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1 hover:text-primary transition-colors py-2"
                                aria-expanded={megaMenuOpen}
                            >
                                Properties <ChevronDown className="h-4 w-4" />
                            </button>

                            <AnimatePresence>
                                {megaMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-full left-0 pt-2 w-[480px] z-50"
                                    >
                                        <div className="rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl p-6 shadow-2xl">
                                            <div className="grid grid-cols-2 gap-8">
                                                <div className="space-y-4">
                                                    <h4 className="font-serif font-medium text-lg border-b border-border pb-2 text-foreground">Explore</h4>
                                                    <div className="flex flex-col gap-3">
                                                        <Link href="/buyers" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Buy a Property</Link>
                                                        <Link href="/buyers" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Rentals & Leases</Link>
                                                        <Link href="/sellers" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Sell Your Property</Link>
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <h4 className="font-serif font-medium text-lg border-b border-border pb-2 text-foreground">Featured</h4>
                                                    <div className="flex flex-col gap-3">
                                                        <Link href="/penthouses" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Penthouses</Link>
                                                        <Link href="/estates" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Private Estates</Link>
                                                        <Link href="/waterfront" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Waterfront</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <Link href="/about" className="hover:text-primary transition-colors py-2">About</Link>
                        <Link href="/blog" className="hover:text-primary transition-colors py-2">Journal</Link>
                        <Link href="/faq" className="hover:text-primary transition-colors py-2">FAQ</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors py-2">Contact</Link>
                    </nav>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/contact">
                        <Button variant="cta">Book a Consultation</Button>
                    </Link>
                </div>

                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden border-b bg-background/95 backdrop-blur-xl absolute top-full left-0 w-full"
                    >
                        <div className="flex flex-col space-y-4 p-6">
                            <Link href="/buyers" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Properties</Link>
                            <Link href="/sellers" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Sell</Link>
                            <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>About Us</Link>
                            <Link href="/blog" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Journal</Link>
                            <Link href="/faq" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>FAQ</Link>
                            <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
                            <hr className="border-border/50 my-2" />
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <Button variant="cta" className="w-full">Book a Consultation</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
