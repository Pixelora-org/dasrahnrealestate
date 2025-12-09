"use client";

import type { Property } from "@/types/property";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { PropertyCard } from "@/components/ui/property-card";

type Props = {
  properties: Property[];
};

export function FeaturedProperties({ properties }: Props) {
  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Our Projects"
        title="Discover our premium collection"
        description="Our aim is to create an eye to the future, integrating qualities and providing luxury at an affordable price."
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
        }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {properties.map((property) => (
          <motion.div
            key={property.id}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <PropertyCard property={property} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}



