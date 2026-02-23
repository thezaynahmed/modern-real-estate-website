"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().min(10, { message: "Phone number is required." }),
    date: z.string().nonempty({ message: "Date is required." }),
    time: z.string().nonempty({ message: "Time is required." }),
    message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ScheduleShowing() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
        alert("Showing scheduled!");
    };

    return (
        <div className="bg-background border border-border/50 rounded-2xl p-8 shadow-sm">
            <h3 className="font-serif text-2xl mb-2">Schedule a Showing</h3>
            <p className="text-muted-foreground text-sm mb-8">Discuss this property with our Luxury Specialists.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <input
                        {...register("name")}
                        placeholder="Full Name"
                        className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <input
                            {...register("phone")}
                            placeholder="Phone"
                            className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Email"
                            className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <input
                            {...register("date")}
                            type="date"
                            className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        {errors.date && <p className="text-destructive text-sm">{errors.date.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <input
                            {...register("time")}
                            type="time"
                            className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        {errors.time && <p className="text-destructive text-sm">{errors.time.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <textarea
                        {...register("message")}
                        placeholder="Message (Optional)"
                        rows={4}
                        className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                </div>

                <Button type="submit" variant="cta" className="w-full h-14 text-lg">
                    Request Tour
                </Button>
            </form>
        </div>
    );
}
