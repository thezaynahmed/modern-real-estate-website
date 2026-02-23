import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PropertyCard, Property } from "@/components/listings/property-card";

const PENTHOUSES: Property[] = [
    {
        id: "ph-1",
        title: "The Pinnacle Sky Suite",
        location: "Absolute World Towers, Mississauga",
        price: "$3,850,000",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 4,
        sqft: "4,200",
        virtualTour: true,
    },
    {
        id: "ph-2",
        title: "The Observatory Residence",
        location: "City Centre, Mississauga",
        price: "$2,990,000",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 2,
        baths: 3,
        sqft: "3,100",
        virtualTour: false,
    },
    {
        id: "ph-3",
        title: "Harbour View Penthouse",
        location: "Port Credit, Mississauga",
        price: "$4,650,000",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 4,
        baths: 5,
        sqft: "5,800",
        virtualTour: true,
    },
    {
        id: "ph-4",
        title: "Cloudtop Loft",
        location: "Square One District",
        price: "$1,950,000",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 2,
        baths: 2,
        sqft: "2,400",
        virtualTour: false,
    },
];

export default function PenthousesPage() {
    return (
        <main className="min-h-screen bg-background">
            <SectionWrapper className="pt-24 pb-8 bg-[#121212] text-white">
                <Container>
                    <p className="text-[#C5A059] font-medium tracking-widest text-sm uppercase mb-4">Featured Collection</p>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-4">
                        Penthouses
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl">
                        Elevated living at its finest. Our curated penthouse collection offers unparalleled skyline views, private terraces, and bespoke interiors across the GTA.
                    </p>
                </Container>
            </SectionWrapper>

            <SectionWrapper>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {PENTHOUSES.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </Container>
            </SectionWrapper>
        </main>
    );
}
