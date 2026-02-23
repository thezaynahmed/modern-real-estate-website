import { AboutHero } from "@/components/about/about-hero";
import { StoryGrid } from "@/components/about/story-grid";
import { Timeline } from "@/components/about/timeline";
import { ValuesGrid } from "@/components/about/values-grid";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* 1. The Human Hero */}
            <AboutHero />

            {/* 2. The Narrative Bento Grid */}
            <StoryGrid />

            {/* 3. The Precision Timeline */}
            <Timeline />

            {/* 4. Values & Trust */}
            <ValuesGrid />

            {/* 5. Final CTA */}
            <section className="py-24 md:py-32 bg-[#121212] text-white">
                <Container className="max-w-3xl text-center space-y-8">
                    <p className="text-[#C5A059] font-medium tracking-widest text-sm uppercase">The Next Step</p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                        Ready to start your{" "}
                        <span className="italic text-[#C5A059]">next chapter</span>?
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
                        Whether you&apos;re acquiring your dream home or maximizing the return on your most
                        valuable asset, the conversation starts here.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link href="/contact">
                            <Button variant="cta" size="lg" className="px-10 text-lg shadow-[0_0_30px_rgba(197,160,89,0.15)]">
                                Book a Private Consultation
                            </Button>
                        </Link>
                        <Link href="/buyers">
                            <Button variant="outline" size="lg" className="px-10 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                                View My Portfolio
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </main>
    );
}
