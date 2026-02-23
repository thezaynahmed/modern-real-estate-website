"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    address: z.string().min(5, { message: "Property Address is required." }),
    propertyType: z.string().nonempty({ message: "Property Type is required." }),
    beds: z.string().nonempty({ message: "Bedrooms are required." }),
    baths: z.string().nonempty({ message: "Bathrooms are required." }),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().min(10, { message: "Phone number is required." }),
    timeline: z.string().nonempty({ message: "Selling timeline is required." }),
});

type FormValues = z.infer<typeof formSchema>;

export function HomeValuationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert("Valuation form submitted! A luxury specialist will contact you shortly.");
    };

    return (
        <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-sm max-w-3xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl mb-4 text-center">Request a Market Valuation</h3>
            <p className="text-muted-foreground text-center mb-10 text-lg">
                Discover the true value of your estate in today&apos;s high-end market.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Section 1: Property Details */}
                <div className="space-y-6">
                    <h4 className="font-serif text-2xl border-b border-border/50 pb-2">1. Property Assets</h4>

                    <div className="space-y-2">
                        <input
                            {...register("address")}
                            placeholder="Full Property Address"
                            className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors text-lg"
                        />
                        {errors.address && <p className="text-destructive text-sm">{errors.address.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2 relative">
                            <select
                                {...register("propertyType")}
                                className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors appearance-none text-lg"
                            >
                                <option value="">Property Type</option>
                                <option value="luxury-estate">Luxury Estate</option>
                                <option value="modern-custom">Modern Custom Build</option>
                                <option value="waterfront">Waterfront Property</option>
                                <option value="penthouse">Penthouse</option>
                            </select>
                            {errors.propertyType && <p className="text-destructive text-sm">{errors.propertyType.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <input
                                {...register("beds")}
                                type="number"
                                placeholder="Beds"
                                className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors text-lg"
                            />
                            {errors.beds && <p className="text-destructive text-sm">{errors.beds.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <input
                                {...register("baths")}
                                type="number"
                                step="0.5"
                                placeholder="Baths"
                                className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors text-lg"
                            />
                            {errors.baths && <p className="text-destructive text-sm">{errors.baths.message}</p>}
                        </div>
                    </div>
                </div>

                {/* Section 2: Contact Information */}
                <div className="space-y-6 pt-4">
                    <h4 className="font-serif text-2xl border-b border-border/50 pb-2">2. Contact Details</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <input
                                {...register("name")}
                                placeholder="Full Name"
                                className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors text-lg"
                            />
                            {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-2 relative">
                            <select
                                {...register("timeline")}
                                className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors appearance-none text-lg"
                            >
                                <option value="">Selling Timeline</option>
                                <option value="asap">ASAP (1-30 Days)</option>
                                <option value="1-3-months">1-3 Months</option>
                                <option value="3-6-months">3-6 Months</option>
                                <option value="just-curious">Just Curious</option>
                            </select>
                            {errors.timeline && <p className="text-destructive text-sm">{errors.timeline.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors text-lg"
                            />
                            {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <input
                                {...register("phone")}
                                placeholder="Phone Number"
                                className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors text-lg"
                            />
                            {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
                        </div>
                    </div>
                </div>

                <Button
                    type="submit"
                    variant="cta"
                    disabled={isSubmitting}
                    className="w-full h-16 text-xl tracking-wide mt-8 shadow-2xl"
                >
                    {isSubmitting ? "Analyzing Market Data..." : "Reveal Valuation"}
                </Button>
            </form>
        </div>
    );
}
