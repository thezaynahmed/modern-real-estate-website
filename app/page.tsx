import { HeroSection } from "@/components/home/hero-section";
import { FeaturedListings } from "@/components/home/featured-listings";
import { TestimonialsTicker } from "@/components/home/testimonials-ticker";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedListings />
      <TestimonialsTicker />
    </div>
  );
}
