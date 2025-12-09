"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Property } from "@/types/property";
import { PropertyCard } from "@/components/ui/property-card";
import { SkiperButton } from "@/components/ui/skiper-button";

type Props = {
  properties: Property[];
  minPrice: number;
  maxPrice: number;
  locations: string[];
  types: string[];
};

export function PropertyGrid({
  properties,
  minPrice,
  maxPrice,
  locations,
  types,
}: Props) {
  const [visibleCount, setVisibleCount] = useState(6);

  const paginated = properties.slice(0, visibleCount);
  const hasMore = properties.length > visibleCount;

  return (
    <div className="space-y-10">
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {paginated.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <PropertyCard property={property} />
          </motion.div>
        ))}
      </motion.div>

      {hasMore && (
        <div className="flex justify-center">
          <SkiperButton onClick={() => setVisibleCount((prev) => prev + 6)}>
            Load More
          </SkiperButton>
        </div>
      )}
    </div>
  );
}

