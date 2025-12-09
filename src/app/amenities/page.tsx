"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { properties } from "@/data/properties";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AmenitiesPage() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Amenities"
        title="Premium Amenities for Modern Living"
        description="Each of our projects is designed with carefully curated amenities to enhance your lifestyle and provide the ultimate living experience."
      />
      
      <div className="space-y-20">
        {properties.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-8 md:p-12"
          >
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-semibold text-platinum md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-gold">{project.location}</p>
                </div>
                <p className="text-platinum/70">{project.description}</p>
                
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gold">
                    Amenities
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {project.amenities.map((amenity, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-platinum/80"
                      >
                        <span className="text-gold">✓</span>
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

