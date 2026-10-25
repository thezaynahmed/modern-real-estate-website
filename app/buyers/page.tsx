import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FilterSidebar } from "@/components/listings/filter-sidebar";
import { PropertyCard, Property } from "@/components/listings/property-card";
import { Search } from "lucide-react";

// Mock DB
const ALL_LISTINGS: Property[] = [
    {
        id: "1",
        title: "The Glass House Estate",
        location: "The Bridle Path, Toronto",
        price: "$5,250,000",
        image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 5,
        baths: 6,
        sqft: "8,500",
        virtualTour: true,
    },
    {
        id: "2",
        title: "Skyline Penthouse",
        location: "Financial District, Downtown Toronto",
        price: "$2,850,000",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 3,
        sqft: "3,200",
        virtualTour: false,
    },
    {
        id: "3",
        title: "Lakeshore Estate",
        location: "Port Credit",
        price: "$7,100,000",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 6,
        baths: 8,
        sqft: "12,000",
        virtualTour: true,
    },
    {
        id: "4",
        title: "Modern Minimalist",
        location: "Mineola",
        price: "$4,150,000",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 4,
        baths: 5,
        sqft: "6,800",
        virtualTour: false,
    }
];

export default function BuyersPage() {
    return (
        <main className="min-h-screen bg-background">
            <SectionWrapper className="pt-24 pb-8 border-b border-border/50 bg-[#121212] text-white">
                <Container>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-4">
                        Curated <span className="italic text-[#C5A059]">Acquisitions.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl">
                        Explore our private collection of the Greater Toronto Area&apos;s most distinguished architectural properties.
                    </p>
                </Container>
            </SectionWrapper>

            <SectionWrapper className="pt-12">
                <Container>
                    {/* Top Bar Navigation */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search by neighborhood, ZIP, or MLS..."
                                className="w-full bg-card border border-border py-4 pl-12 pr-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground shadow-sm"
                            />
                        </div>
                        <div className="w-full md:w-auto flex items-center gap-4 text-sm whitespace-nowrap overflow-x-auto pb-2 md:pb-0">
                            <span className="text-muted-foreground font-semibold uppercase tracking-wider">Sort By:</span>
                            <select className="bg-transparent border-none text-foreground font-medium focus:outline-none focus:ring-0 cursor-pointer text-base">
                                <option>Highest Price</option>
                                <option>Lowest Price</option>
                                <option>Newest Listings</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start relative">
                        <FilterSidebar />

                        <div className="flex-1 w-full grid grid-cols-1 xl:grid-cols-2 gap-8">
                            {ALL_LISTINGS.map((listing) => (
                                <PropertyCard key={listing.id} property={listing} />
                            ))}
                        </div>
                    </div>
                </Container>
            </SectionWrapper>
        </main>
    );
}
