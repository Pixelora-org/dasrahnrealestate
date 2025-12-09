import { Hero } from "@/components/sections/hero";
import { FeaturedProperties } from "@/components/sections/featured-properties";
import { Testimonials } from "@/components/sections/testimonials";
import { featuredProperties } from "@/data/properties";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedProperties properties={featuredProperties} />
      <Testimonials />
    </div>
  );
}
