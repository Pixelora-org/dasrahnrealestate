"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

type Props = {
  externalImages: string[];
  planImages: string[];
};

export function ProjectGallery({ externalImages, planImages }: Props) {
  // Combine all images into one gallery
  const allImages = [...externalImages, ...planImages];

  return (
    <section className="space-y-8 sm:space-y-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 sm:mb-8">
          GALLERY
        </h2>
      </div>

      {/* Gallery Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {allImages.map((image, index) => (
          <div
            key={index}
            className="w-full"
          >
            <ImagePlaceholder 
              label={`Gallery Image ${index + 1} Required`} 
              size="md" 
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

