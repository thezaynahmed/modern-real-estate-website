"use client";

import { Search, MapPin, Building2, CircleDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SearchBar() {
    return (
        <div className="bg-[#121212]/70 xl:bg-background/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 md:p-8 w-full flex flex-col md:flex-row items-center gap-6 relative z-30 overflow-hidden">
            {/* Glossy overlay effect built natively */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-50 Mix-blend-overlay"></div>

            <div className="flex-1 w-full relative group">
                <label className="text-[10px] font-semibold text-white/50 xl:text-muted-foreground uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> Location
                </label>
                <input
                    type="text"
                    placeholder="Mississauga, ON"
                    className="w-full bg-transparent border-b border-white/10 xl:border-border/50 pb-3 text-white xl:text-foreground text-xl focus:outline-none focus:border-[#C5A059] placeholder:text-white/30 xl:placeholder:text-muted-foreground/30 font-serif transition-colors"
                />
            </div>

            <div className="hidden md:block w-px h-16 bg-white/10 xl:bg-border/50 mx-4"></div>

            <div className="flex-1 w-full relative group">
                <label className="text-[10px] font-semibold text-white/50 xl:text-muted-foreground uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                    <Building2 className="w-3 h-3" /> Property Type
                </label>
                <select className="w-full bg-transparent border-b border-white/10 xl:border-border/50 pb-3 text-white xl:text-foreground text-xl focus:outline-none focus:border-[#C5A059] appearance-none cursor-pointer font-serif transition-colors">
                    <option value="luxury" className="bg-[#121212] text-white">Luxury Estate</option>
                    <option value="penthouse" className="bg-[#121212] text-white">Penthouse</option>
                    <option value="waterfront" className="bg-[#121212] text-white">Waterfront Property</option>
                </select>
            </div>

            <div className="hidden md:block w-px h-16 bg-white/10 xl:bg-border/50 mx-4"></div>

            <div className="flex-1 w-full relative group">
                <label className="text-[10px] font-semibold text-white/50 xl:text-muted-foreground uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                    <CircleDollarSign className="w-3 h-3" /> Price Range
                </label>
                <select className="w-full bg-transparent border-b border-white/10 xl:border-border/50 pb-3 text-white xl:text-foreground text-xl focus:outline-none focus:border-[#C5A059] appearance-none cursor-pointer font-serif transition-colors">
                    <option value="1m-3m" className="bg-[#121212] text-white">$1M - $3M</option>
                    <option value="3m-5m" className="bg-[#121212] text-white">$3M - $5M</option>
                    <option value="5m+" className="bg-[#121212] text-white">$5M+</option>
                </select>
            </div>

            <Button variant="cta" size="lg" className="w-full md:w-auto mt-4 md:mt-0 px-10 h-16 rounded-xl shadow-[0_0_20px_rgba(197,160,89,0.2)] text-lg">
                <Search className="mr-3 w-5 h-5" /> Explore
            </Button>
        </div>
    );
}
