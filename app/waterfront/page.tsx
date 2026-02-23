import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PropertyCard, Property } from "@/components/listings/property-card";

const WATERFRONT: Property[] = [
    {
        id: "wf-1",
        title: "Lakeshore Estate",
        location: "Port Credit, Mississauga",
        price: "$7,100,000",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 6,
        baths: 8,
        sqft: "12,000",
        virtualTour: true,
    },
    {
        id: "wf-2",
        title: "The Harbour Residence",
        location: "Lakeview, Mississauga",
        price: "$4,800,000",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 5,
        baths: 6,
        sqft: "7,400",
        virtualTour: true,
    },
    {
        id: "wf-3",
        title: "Sunset Cove Villa",
        location: "Clarkson, Mississauga",
        price: "$5,500,000",
        image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 5,
        baths: 6,
        sqft: "9,200",
        virtualTour: false,
    },
    {
        id: "wf-4",
        title: "Marina Point Penthouse",
        location: "Port Credit Marina",
        price: "$3,200,000",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 4,
        sqft: "4,600",
        virtualTour: false,
    },
];

export default function WaterfrontPage() {
    return (
        <main className="min-h-screen bg-background">
            <SectionWrapper className="pt-24 pb-8 bg-[#121212] text-white">
                <Container>
                    <p className="text-[#C5A059] font-medium tracking-widest text-sm uppercase mb-4">Featured Collection</p>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-4">
                        Waterfront
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl">
                        Wake up to unobstructed lake views. Our waterfront portfolio offers the most coveted shoreline properties and marina residences in Mississauga.
                    </p>
                </Container>
            </SectionWrapper>

            <SectionWrapper>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {WATERFRONT.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </Container>
            </SectionWrapper>
        </main>
    );
}
