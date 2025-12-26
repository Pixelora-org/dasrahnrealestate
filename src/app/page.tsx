import { PropertyCarousel } from "@/components/listings/property-carousel";
import { Testimonials } from "@/components/sections/testimonials";
import { VentureCompanies } from "@/components/sections/venture-companies";
import { properties } from "@/data/properties";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects — Dasara Developers",
  description: "Explore our premium real estate projects designed with innovation and quality.",
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Projects Section with Golden Background - Full Width */}
      <section className="w-full bg-gold/10 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <PropertyCarousel properties={properties} />
        </div>
      </section>
      
      {/* Testimonials Section with White Background - Full Width */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Testimonials />
        </div>
      </section>

      {/* Venture Companies Section with Golden Background - Full Width */}
      <section className="w-full bg-gold/10 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <VentureCompanies />
        </div>
      </section>
    </div>
  );
}
