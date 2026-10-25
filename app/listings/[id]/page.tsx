import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ImageGallery } from "@/components/listings/image-gallery";
import { MortgageCalculator } from "@/components/listings/mortgage-calculator";
import { ScheduleShowing } from "@/components/listings/schedule-showing";
import { BedDouble, Bath, Square, Car, Ruler } from "lucide-react";

// Mock data fetcher
async function getProperty(id: string) {
    return {
        id,
        title: "The Glass House Estate",
        location: "The Bridle Path, Toronto",
        price: "$5,250,000",
        description: "An architectural estate in Toronto's Bridle Path enclave. Floor-to-ceiling glass facades integrate living spaces with private landscaped grounds. The kitchen features marble finishes and concealed appliances, while the primary suite includes a private balcony overlooking mature woodland.",
        beds: 5,
        baths: 6,
        sqft: "8,500",
        lotSize: "1.2 Acres",
        garage: "4 Cars",
        images: [
            "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        ]
    };
}

export default async function ListingDetail({ params }: { params: Promise<{ id: string }> }) {
    const propertyId = (await params).id;
    const property = await getProperty(propertyId);

    return (
        <SectionWrapper className="pt-8">
            <Container>
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
                    <div className="space-y-2">
                        <p className="text-primary font-medium tracking-widest text-sm uppercase">{property.location}</p>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">{property.title}</h1>
                    </div>
                    <div className="text-left md:text-right">
                        <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Asking Price</p>
                        <p className="font-serif text-3xl md:text-4xl text-foreground">{property.price}</p>
                    </div>
                </div>

                {/* Framing Gallery */}
                <div className="mb-16">
                    <ImageGallery images={property.images} />
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">

                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Quick Specs */}
                        <div className="flex flex-wrap items-center gap-8 py-6 border-y border-border/50">
                            <div className="flex items-center gap-3">
                                <BedDouble className="w-6 h-6 text-primary" />
                                <div>
                                    <p className="text-lg font-medium">{property.beds}</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Beds</p>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-border/50 hidden sm:block"></div>
                            <div className="flex items-center gap-3">
                                <Bath className="w-6 h-6 text-primary" />
                                <div>
                                    <p className="text-lg font-medium">{property.baths}</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Baths</p>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-border/50 hidden sm:block"></div>
                            <div className="flex items-center gap-3">
                                <Square className="w-6 h-6 text-primary" />
                                <div>
                                    <p className="text-lg font-medium">{property.sqft}</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Sq. Ft.</p>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-border/50 hidden sm:block"></div>
                            <div className="flex items-center gap-3">
                                <Ruler className="w-6 h-6 text-primary" />
                                <div>
                                    <p className="text-lg font-medium">{property.lotSize}</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Lot Size</p>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-border/50 hidden sm:block"></div>
                            <div className="flex items-center gap-3">
                                <Car className="w-6 h-6 text-primary" />
                                <div>
                                    <p className="text-lg font-medium">{property.garage}</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Garage</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-3xl">Property Overview</h2>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                {property.description}
                            </p>
                        </div>

                        <MortgageCalculator />

                    </div>

                    {/* Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28">
                            <ScheduleShowing />
                        </div>
                    </div>

                </div>
            </Container>
        </SectionWrapper>
    );
}
