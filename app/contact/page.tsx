import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ContactForm } from "@/components/contact/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <SectionWrapper className="bg-background pt-32 pb-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Left Column: Details */}
                        <div className="flex flex-col space-y-12">
                            <div className="space-y-6">
                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">
                                    Connect with <span className="text-primary italic">Excellence.</span>
                                </h1>
                                <p className="text-muted-foreground text-xl leading-relaxed max-w-md">
                                    Our concierge team is available around the clock to assist you with your luxury acquisition or sale.
                                </p>
                            </div>

                            <div className="space-y-10 pt-8 border-t border-border/50">
                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                        <MapPin className="w-8 h-8 text-primary group-hover:text-background transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl mb-2">Corporate Office</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            100 City Centre Dr<br />
                                            Mississauga, ON L5B 2C9<br />
                                            Canada
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                        <Phone className="w-8 h-8 text-primary group-hover:text-background transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl mb-2">Private Lines</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Domestic: +1 (800) 123-4567<br />
                                            International: +1 (416) 123-4567
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                        <Mail className="w-8 h-8 text-primary group-hover:text-background transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl mb-2">Digital Correspondance</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            General: concierge@curatedestates.ca<br />
                                            Press: media@curatedestates.ca
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                        <Clock className="w-8 h-8 text-primary group-hover:text-background transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl mb-2">Consultation Hours</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Available Mon-Sat, 9AM to 7PM EST.<br />
                                            Available anytime for retained clients via direct line.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div>
                            <ContactForm />
                        </div>

                    </div>
                </Container>
            </SectionWrapper>
        </main>
    );
}
