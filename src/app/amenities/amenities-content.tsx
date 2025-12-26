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
        className="text-center"
      />
      
      <div className="space-y-0">
        {properties.map((project, index) => (
          <motion.section
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className={`w-full py-12 sm:py-16 md:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gold/10'}`}
          >
            <div className="container mx-auto px-4 sm:px-6">
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:items-center">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-gold">{project.location}</p>
                  </div>
                  <p className="text-sm sm:text-base text-black/70">{project.description}</p>
                  
                  <div>
                    <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-gold">
                      Amenities
                    </h3>
                    <ul className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                      {project.amenities.map((amenity, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-black/80"
                        >
                          <span className="text-gold">✓</span>
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="w-full h-64 sm:h-80 md:h-96">
                  <ImagePlaceholder 
                    label={`${project.title} - Image Required`} 
                    size="full" 
                    className="h-full w-full rounded-none" 
                  />
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}

