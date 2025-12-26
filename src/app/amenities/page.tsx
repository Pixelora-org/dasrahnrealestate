import { AmenitiesContent } from "./amenities-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amenities — Dasara Developers",
  description: "Explore the premium amenities offered across all Dasara Developers projects designed for modern living.",
};

export default function AmenitiesPage() {
  return <AmenitiesContent />;
}

