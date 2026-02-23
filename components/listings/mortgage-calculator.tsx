"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function MortgageCalculator() {
    const [price, setPrice] = useState(2500000);
    const [downPayment, setDownPayment] = useState(500000);
    const [rate, setRate] = useState(5.5);
    const [years, setYears] = useState(30);

    const calculateMortgage = () => {
        const principal = price - downPayment;
        const monthlyRate = rate / 100 / 12;
        const numberOfPayments = years * 12;

        if (monthlyRate === 0) return principal / numberOfPayments;

        const monthlyPayment =
            (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

        return monthlyPayment;
    };

    const monthlyPayment = calculateMortgage();

    return (
        <div className="bg-card p-8 rounded-2xl border border-border mt-12 shadow-sm">
            <h3 className="font-serif text-2xl mb-6">Mortgage Calculator</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Property Price ($)</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full bg-background border border-border p-3 rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Down Payment ($)</label>
                        <input
                            type="number"
                            value={downPayment}
                            onChange={(e) => setDownPayment(Number(e.target.value))}
                            className="w-full bg-background border border-border p-3 rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Interest Rate (%)</label>
                            <input
                                type="number"
                                step="0.1"
                                value={rate}
                                onChange={(e) => setRate(Number(e.target.value))}
                                className="w-full bg-background border border-border p-3 rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Loan Term (Years)</label>
                            <input
                                type="number"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className="w-full bg-background border border-border p-3 rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-background rounded-xl p-8 flex flex-col justify-center border border-border/50">
                    <p className="text-muted-foreground mb-4 uppercase tracking-widest text-sm font-medium">Estimated Monthly Payment</p>
                    <p className="font-serif text-5xl text-foreground mb-4">
                        ${Math.round(monthlyPayment).toLocaleString()}
                    </p>
                    <div className="w-full h-px bg-border/50 my-6"></div>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between text-muted-foreground">
                            <span>Principal Amount:</span>
                            <span className="text-foreground font-medium">${(price - downPayment).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                            <span>Total Interest:</span>
                            <span className="text-foreground font-medium">${Math.round((monthlyPayment * years * 12) - (price - downPayment)).toLocaleString()}</span>
                        </div>
                    </div>
                    <Button variant="outline" className="w-full mt-6">Get Pre-Approved</Button>
                </div>
            </div>
        </div>
    );
}
