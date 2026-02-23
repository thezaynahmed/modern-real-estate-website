"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { ShieldCheck, Scale, Compass, Eye, Heart, Zap } from "lucide-react";

const VALUES = [
    {
        icon: ShieldCheck,
        title: "Integrity",
        description: "Every interaction is built on radical honesty and transparency. No hidden agendas.",
    },
    {
        icon: Scale,
        title: "Precision",
        description: "Data-driven decisions. Every valuation, negotiation, and strategy is surgically precise.",
    },
    {
        icon: Compass,
        title: "Discretion",
        description: "Your business stays your business. Complete confidentiality through every transaction.",
    },
    {
        icon: Eye,
        title: "Vision",
        description: "We see opportunity where others see walls. Tomorrow\u2019s market, analyzed today.",
    },
    {
        icon: Heart,
        title: "Empathy",
        description: "We listen first. Understanding your story is the foundation of every recommendation.",
    },
    {
        icon: Zap,
        title: "Execution",
        description: "Speed without sacrifice. We move fast because our preparation is second to none.",
    },
];

export function ValuesGrid() {
    return (
        <section className="py-24 md:py-32 bg-background">
            <Container>
                <div className="text-center mb-20 space-y-4">
                    <p className="text-[#C5A059] font-medium tracking-widest text-sm uppercase">What We Stand For</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                        Our <span className="italic text-[#C5A059]">Values</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {VALUES.map((value, idx) => (
                        <motion.div
                            key={idx}
                            className="relative group bg-card border border-border/50 rounded-2xl p-8 overflow-hidden cursor-default transition-colors duration-500 hover:border-[#C5A059]/40"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                        >
                            {/* Gold expanding glow on hover */}
                            <motion.div
                                className="absolute inset-0 bg-[#C5A059]/5 rounded-2xl"
                                initial={{ scale: 0, opacity: 0 }}
                                whileHover={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                style={{ transformOrigin: "center" }}
                            />

                            <div className="relative z-10 space-y-5">
                                <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/10 flex items-center justify-center group-hover:bg-[#C5A059]/20 transition-colors duration-500">
                                    <value.icon className="w-7 h-7 text-[#C5A059]" />
                                </div>
                                <h3 className="font-serif text-2xl text-foreground">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
