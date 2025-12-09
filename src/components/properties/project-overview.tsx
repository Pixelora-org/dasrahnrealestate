"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  images: string[];
};

export function ProjectOverview({ title, description, images }: Props) {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-4">
          Overview
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        {/* Text on the left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gold">
            {title}
          </h3>
          <p className="text-lg text-platinum/70 leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Images on the right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {images.slice(0, 2).map((image, index) => (
            <div
              key={index}
              className="relative h-64 w-full overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

