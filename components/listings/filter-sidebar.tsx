"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export function FilterSidebar() {
    return (
        <aside className="w-full md:w-80 shrink-0 bg-background border border-border/50 rounded-2xl p-6 shadow-sm sticky top-28">
            <div className="flex items-center justify-between mb-8 border-b border-border/50 pb-4">
                <h2 className="font-serif text-2xl">Filters</h2>
                <Button variant="link" className="text-xs text-muted-foreground hover:text-primary p-0 h-auto">
                    Reset All
                </Button>
            </div>

            <Accordion type="multiple" defaultValue={["price", "beds", "baths"]} className="w-full">
                <AccordionItem value="price">
                    <AccordionTrigger className="text-lg">Price Range</AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 space-y-6">
                        <Slider defaultValue={[2000000]} max={10000000} step={100000} />
                        <div className="flex items-center justify-between text-sm text-muted-foreground font-medium">
                            <span>$1M</span>
                            <span className="text-primary font-bold text-base">$2M+</span>
                            <span>$10M+</span>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="beds">
                    <AccordionTrigger className="text-lg">Bedrooms</AccordionTrigger>
                    <AccordionContent className="pt-2 pb-6">
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, "4+"].map((bed) => (
                                <button
                                    key={bed}
                                    className="py-2 px-3 border border-border/50 rounded-lg text-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all focus:ring-1 focus:ring-primary focus:outline-none"
                                >
                                    {bed}
                                </button>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="baths" className="border-none">
                    <AccordionTrigger className="text-lg">Bathrooms</AccordionTrigger>
                    <AccordionContent className="pt-2 pb-2">
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, "4+"].map((bath) => (
                                <button
                                    key={bath}
                                    className="py-2 px-3 border border-border/50 rounded-lg text-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all focus:ring-1 focus:ring-primary focus:outline-none"
                                >
                                    {bath}
                                </button>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Button variant="cta" className="w-full mt-8 h-12">
                Apply Filters
            </Button>
        </aside>
    );
}
