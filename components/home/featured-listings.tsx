import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PROPERTIES = [
    {
        title: "The Glass House",
        location: "Lorne Park, Mississauga",
        price: "$5,250,000",
        image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        size: "large" // spans 2 columns
    },
    {
        title: "Skyline Penthouse",
        location: "City Centre",
        price: "$2,850,000",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        size: "normal"
    },
    {
        title: "Lakeshore Estate",
        location: "Port Credit",
        price: "$7,100,000",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        size: "normal"
    },
    {
        title: "Modern Minimalist",
        location: "Mineola",
        price: "$4,150,000",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        size: "large"
    }
];

export function FeaturedListings() {
    return (
        <SectionWrapper className="pt-24 md:pt-44 bg-background">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="font-serif text-4xl md:text-5xl">Curated Collection</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Explore our most exclusive residential offerings, selected for architectural distinction, prime locations, and uncompromising craftsmanship.
                        </p>
                    </div>
                    <Button variant="outline" className="shrink-0">
                        View All Properties
                    </Button>
                </div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
                    {PROPERTIES.map((prop, idx) => (
                        <Card
                            key={idx}
                            className={cn(
                                "group relative overflow-hidden border-none rounded-2xl shadow-xl",
                                prop.size === 'large' ? "lg:col-span-2" : "col-span-1"
                            )}
                        >
                            <img
                                src={prop.image}
                                alt={prop.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                            <CardContent className="absolute inset-0 flex flex-col justify-end p-8 z-10 w-full h-full">
                                <div className="translate-y-4 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-primary font-medium tracking-widest text-xs uppercase mb-2 drop-shadow-md">
                                        {prop.location}
                                    </p>
                                    <h3 className="font-serif text-3xl text-white mb-2 drop-shadow-md">{prop.title}</h3>
                                    <div className="flex items-center justify-between mt-6">
                                        <span className="text-xl text-white font-light">{prop.price}</span>
                                        <Button variant="cta" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    );
}
