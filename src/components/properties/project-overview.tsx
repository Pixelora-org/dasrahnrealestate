"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

type Props = {
  title: string;
  description: string;
  images: string[];
};

export function ProjectOverview({ title, description, images }: Props) {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Overview
        </h2>
      </div>

      <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:items-center">
        {/* Text centered */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 md:space-y-6 text-center lg:text-left"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
            {title}
          </h3>
          <p className="text-base sm:text-lg text-black/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
            {description}
          </p>
        </motion.div>

        {/* Images on the right - Full screen */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 w-full"
        >
          {images.slice(0, 2).map((image, index) => (
            <div
              key={index}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80"
            >
              <ImagePlaceholder label={`${title} - Image ${index + 1} Required`} size="full" className="h-full w-full rounded-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

