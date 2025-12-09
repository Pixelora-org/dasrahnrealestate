"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ImageGallery({
  images,
  propertyTitle,
}: {
  images: string[];
  propertyTitle: string;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {images.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          viewport={{ once: true }}
          className={index === 0 ? "md:col-span-2" : undefined}
        >
          <div className="relative h-64 overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt={`${propertyTitle} gallery image ${index + 1}`}
              fill
              sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width:768px) 100vw, 33vw"}
              className="object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

