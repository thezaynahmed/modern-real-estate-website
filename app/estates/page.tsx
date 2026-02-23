import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PropertyCard, Property } from "@/components/listings/property-card";

const ESTATES: Property[] = [
    {
        id: "est-1",
        title: "The Glass House Estate",
        location: "Lorne Park, Mississauga",
        price: "$5,250,000",
        image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 5,
        baths: 6,
        sqft: "8,500",
        virtualTour: true,
    },
    {
        id: "est-2",
        title: "The Georgian Manor",
        location: "Mineola West, Mississauga",
        price: "$7,900,000",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 7,
        baths: 9,
        sqft: "14,200",
        virtualTour: true,
    },
    {
        id: "est-3",
        title: "Ravine Edge Compound",
        location: "Erindale, Mississauga",
        price: "$6,100,000",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 6,
        baths: 7,
        sqft: "11,000",
        virtualTour: false,
    },
    {
        id: "est-4",
        title: "Modern Minimalist Villa",
        location: "Mineola East, Mississauga",
        price: "$4,150,000",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 4,
        baths: 5,
        sqft: "6,800",
        virtualTour: false,
    },
];

export default function EstatesPage() {
    return (
        <main className="min-h-screen bg-background">
            <SectionWrapper className="pt-24 pb-8 bg-[#121212] text-white">
                <Container>
                    <p className="text-[#C5A059] font-medium tracking-widest text-sm uppercase mb-4">Featured Collection</p>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-4">
                        Private Estates
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl">
                        Gated compounds, sprawling acreage, and architectural masterpieces set within the most exclusive enclaves of the Greater Toronto Area.
                    </p>
                </Container>
            </SectionWrapper>

            <SectionWrapper>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {ESTATES.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </Container>
            </SectionWrapper>
        </main>
    );
}
