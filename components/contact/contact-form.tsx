"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    firstName: z.string().min(2, { message: "Required." }),
    lastName: z.string().min(2, { message: "Required." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().min(10, { message: "Required." }),
    topic: z.string().nonempty({ message: "Topic is required." }),
    message: z.string().min(10, { message: "Please provide more details." }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
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
        alert("Message sent securely. A Curated Estates advisor will contact you within 24 hours.");
    };

    return (
        <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm h-full flex flex-col justify-center">
            <h3 className="font-serif text-3xl mb-2">Direct Inquiry</h3>
            <p className="text-muted-foreground mb-8">All communications are completely confidential.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <input
                            {...register("firstName")}
                            placeholder="First Name"
                            className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        {errors.firstName && <p className="text-destructive text-sm">{errors.firstName.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <input
                            {...register("lastName")}
                            placeholder="Last Name"
                            className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        {errors.lastName && <p className="text-destructive text-sm">{errors.lastName.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Email"
                            className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <input
                            {...register("phone")}
                            placeholder="Phone"
                            className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
                    </div>
                </div>

                <div className="space-y-2 relative">
                    <select
                        {...register("topic")}
                        className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                        <option value="">Nature of Inquiry</option>
                        <option value="buy">Acquiring a Property</option>
                        <option value="sell">Selling a Property</option>
                        <option value="investment">Investment Opportunities</option>
                        <option value="press">Press & Media</option>
                    </select>
                    {errors.topic && <p className="text-destructive text-sm">{errors.topic.message}</p>}
                </div>

                <div className="space-y-2">
                    <textarea
                        {...register("message")}
                        placeholder="Message Details"
                        rows={5}
                        className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                    {errors.message && <p className="text-destructive text-sm">{errors.message.message}</p>}
                </div>

                <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg mt-4"
                >
                    {isSubmitting ? "Encrypting & Sending..." : "Send Confidential Message"}
                </Button>
            </form>
        </div>
    );
}
