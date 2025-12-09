import { PropertyCarousel } from "@/components/listings/property-carousel";
import { GlimpseSection } from "@/components/sections/glimpse-section";
import {
  properties,
} from "@/data/properties";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects — Dasara Developers",
  description: "Explore our premium real estate projects designed with innovation and quality.",
};

export default function ListingsPage() {
  return (
    <div>
      <GlimpseSection />
      <PropertyCarousel properties={properties} />
    </div>
  );
}

