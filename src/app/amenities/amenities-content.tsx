"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { properties } from "@/data/properties";
import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function AmenitiesContent() {
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
            className="glass-panel p-4 sm:p-6 md:p-8 lg:p-12"
          >
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-platinum">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-gold">{project.location}</p>
                </div>
                <p className="text-sm sm:text-base text-platinum/70">{project.description}</p>
                
                <div>
                  <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-gold">
                    Amenities
                  </h3>
                  <ul className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                    {project.amenities.map((amenity, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-platinum/80"
                      >
                        <span className="text-gold">✓</span>
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="w-full">
                <ImagePlaceholder label={`${project.title} - Image Required`} size="md" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

