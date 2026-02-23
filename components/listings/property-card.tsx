"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BedDouble, Bath, Square, PlayCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface Property {
    id: string;
    title: string;
    location: string;
    price: string;
    image: string;
    beds: number;
    baths: number;
    sqft: string;
    virtualTour?: boolean;
}

export function PropertyCard({ property }: { property: Property }) {
    return (
        <Card className="group overflow-hidden rounded-2xl border-none shadow-lg bg-card transition-all duration-300 hover:shadow-2xl">
            <Link href={`/listings/${property.id}`} className="block relative overflow-hidden aspect-[4/3]">
                <img
                    src={property.image}
                    alt={property.title}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {property.virtualTour && (
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground shadow-sm">
                        <PlayCircle className="w-4 h-4 text-primary" />
                        Virtual Tour
                    </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                    <p className="text-white text-3xl font-light">{property.price}</p>
                </div>
            </Link>

            <CardContent className="p-6">
                <p className="text-primary font-medium tracking-widest text-xs uppercase mb-2">
                    {property.location}
                </p>
                <Link href={`/listings/${property.id}`}>
                    <h3 className="font-serif text-2xl text-foreground mb-4 truncate hover:text-primary transition-colors">{property.title}</h3>
                </Link>

                <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border/50 pt-4">
                    <div className="flex items-center gap-2">
                        <BedDouble className="w-4 h-4 text-primary/70" />
                        <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Bath className="w-4 h-4 text-primary/70" />
                        <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Square className="w-4 h-4 text-primary/70" />
                        <span>{property.sqft} sqft</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
