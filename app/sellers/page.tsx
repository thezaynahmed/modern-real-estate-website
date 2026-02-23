import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { HomeValuationForm } from "@/components/sellers/home-valuation-form";
import { CheckCircle2 } from "lucide-react";

export default function SellersPage() {
    return (
        <main className="min-h-screen">
            <SectionWrapper className="bg-[#121212] pt-32 pb-48 text-center text-white relative">
                <Container className="max-w-4xl relative z-10">
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6">
                        Maximize Your <br /> <span className="italic text-[#C5A059]">Portfolio Return.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 mb-12">
                        Curated Estates provides discrete representation and targeted marketing for distinguished property portfolios.
                    </p>
                </Container>
            </SectionWrapper>

            <div className="-mt-32 relative z-20 pb-24">
                <Container>
                    <HomeValuationForm />
                </Container>
            </div>

            <SectionWrapper className="bg-background pt-12 pb-24">
                <Container className="max-w-5xl">
                    <h2 className="font-serif text-4xl text-center mb-16">The Curated Advantage</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: "Global Off-Market Network", desc: "Gain access to a highly vetted database of international buyers looking for exclusive Canadian real estate." },
                            { title: "Architectural Staging", desc: "We provide bespoke staging and styling to ensure your property resonates with high-net-worth individuals." },
                            { title: "Cinematic Media Production", desc: "Award-winning videography and photography that captures the visceral emotion and scale of your property." },
                            { title: "Discrete Negotiation", desc: "Fierce, uncompromised negotiation ensuring the highest absolute return while maintaining your complete privacy." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 p-8 bg-card rounded-2xl border border-border shadow-sm">
                                <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <h4 className="font-serif text-2xl mb-2">{item.title}</h4>
                                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </SectionWrapper>
        </main>
    );
}
