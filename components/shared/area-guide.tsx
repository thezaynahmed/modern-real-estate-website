import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Coffee, School, Leaf, MapPin } from "lucide-react";

interface AreaGuideProps {
    areaName: string;
    marketStats: { avgPrice: string; activeListings: number; avgDays: number };
    localHighlights: { icon: string; title: string; description: string }[];
    description: string;
}

export function AreaGuide({ areaName, marketStats, localHighlights, description }: AreaGuideProps) {
    const getIcon = (type: string) => {
        switch (type) {
            case "coffee": return <Coffee className="w-8 h-8 text-primary" />;
            case "school": return <School className="w-8 h-8 text-primary" />;
            case "parks": return <Leaf className="w-8 h-8 text-primary" />;
            default: return <MapPin className="w-8 h-8 text-primary" />;
        }
    };

    return (
        <main className="min-h-screen">
            <SectionWrapper className="bg-muted pt-32 pb-xl relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={`https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80`}
                        alt={areaName}
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <Container className="relative z-10 text-center">
                    <h1 className="font-serif text-6xl md:text-8xl text-foreground mb-6">
                        {areaName}
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </Container>
            </SectionWrapper>

            <SectionWrapper>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Average Price</p>
                                <p className="text-4xl font-serif text-foreground">{marketStats.avgPrice}</p>
                            </div>
                            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Active Listings</p>
                                <p className="text-4xl font-serif text-foreground">{marketStats.activeListings}</p>
                            </div>
                            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border md:col-span-2">
                                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Avg Days on Market</p>
                                <p className="text-4xl font-serif text-foreground">{marketStats.avgDays}</p>
                            </div>
                        </div>

                        {/* Google Map Placeholder */}
                        <div className="w-full h-full min-h-[400px] bg-muted/50 rounded-2xl border border-border flex items-center justify-center flex-col shadow-inner">
                            <MapPin className="w-16 h-16 text-primary mb-4 animate-bounce" />
                            <p className="font-serif text-xl tracking-tight text-foreground/50">Google Maps Integration Here</p>
                        </div>

                    </div>

                    <h3 className="font-serif text-4xl text-center mb-16">Local Highlights</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {localHighlights.map((highlight, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center space-y-4 p-8 bg-card rounded-2xl shadow-sm border border-border transition-all hover:border-primary/50">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                                    {getIcon(highlight.icon)}
                                </div>
                                <h4 className="font-serif text-2xl">{highlight.title}</h4>
                                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                            </div>
                        ))}
                    </div>

                </Container>
            </SectionWrapper>
        </main>
    );
}
