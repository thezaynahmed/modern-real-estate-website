"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/shared/container";

export function Footer() {
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!footerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".footer-reveal",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 85%",
                    },
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="bg-[#121212] text-[#F5F5F7] pt-24 pb-12 border-t border-white/5 dark:border-[#121212]">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Bio */}
                    <div className="footer-reveal flex flex-col space-y-4">
                        <Link href="/" className="font-serif text-3xl font-bold tracking-tighter inline-block text-white">
                            Curated <span className="text-primary italic font-normal">Estates</span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-[280px]">
                            Curating exceptional properties for those who appreciate understated elegance, high-end design, and uncompromising quality in modern real estate.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-reveal flex flex-col space-y-4 lg:ml-auto">
                        <h4 className="font-serif text-xl font-medium text-white">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/buyers" className="hover:text-primary transition-colors">Exclusive Listings</Link></li>
                            <li><Link href="/sellers" className="hover:text-primary transition-colors">Sell Your Property</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Journal & Blog</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">Market FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Featured & Guides */}
                    <div className="footer-reveal flex flex-col space-y-4 lg:ml-auto">
                        <h4 className="font-serif text-xl font-medium text-white">Featured</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link href="/penthouses" className="hover:text-primary transition-colors">Penthouses</Link></li>
                            <li><Link href="/estates" className="hover:text-primary transition-colors">Private Estates</Link></li>
                            <li><Link href="/waterfront" className="hover:text-primary transition-colors">Waterfront</Link></li>
                        </ul>
                        <h4 className="font-serif text-xl font-medium text-white pt-4">Area Guides</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link href="/guides/mississauga" className="hover:text-primary transition-colors">Mississauga</Link></li>
                            <li><Link href="/guides/oakville" className="hover:text-primary transition-colors">Oakville</Link></li>
                            <li><Link href="/guides/toronto" className="hover:text-primary transition-colors">Toronto</Link></li>
                            <li><Link href="/guides/muskoka" className="hover:text-primary transition-colors">Muskoka</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-reveal flex flex-col space-y-4 lg:ml-auto">
                        <h4 className="font-serif text-xl font-medium text-white">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li>
                                <a href="tel:+18001234567" className="hover:text-primary transition-colors flex items-center gap-3">
                                    <span className="text-primary/70 font-medium">T</span>
                                    <span>+1 (800) 123-4567</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:concierge@curatedestates.ca" className="hover:text-primary transition-colors flex items-center gap-3">
                                    <span className="text-primary/70 font-medium tracking-widest">E</span>
                                    <span>concierge@curatedestates.ca</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://maps.google.com/?q=100+City+Centre+Dr,+Mississauga,+ON+L5B+2C9" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-start gap-3">
                                    <span className="text-primary/70 font-medium mt-1">A</span>
                                    <span className="leading-relaxed">100 City Centre Dr<br />Mississauga, ON L5B 2C9</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-reveal flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40">
                    <p>&copy; {new Date().getFullYear()} Curated Estates Real Estate & Mortgage. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
