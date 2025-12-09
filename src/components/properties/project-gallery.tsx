"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  externalImages: string[];
  planImages: string[];
};

export function ProjectGallery({ externalImages, planImages }: Props) {
  const [activeTab, setActiveTab] = useState<"external" | "plans">("external");

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-8">
          GALLERY
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setActiveTab("external")}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeTab === "external"
              ? "bg-gold text-white"
              : "bg-gold/10 text-platinum border border-gold/20 hover:bg-gold/20"
          }`}
        >
          External
        </button>
        <button
          onClick={() => setActiveTab("plans")}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeTab === "plans"
              ? "bg-gold text-white"
              : "bg-gold/10 text-platinum border border-gold/20 hover:bg-gold/20"
          }`}
        >
          Plans
        </button>
      </div>

      {/* Gallery Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {(activeTab === "external" ? externalImages : planImages).map(
          (image, index) => (
            <div
              key={index}
              className="relative h-64 w-full overflow-hidden rounded-2xl group cursor-pointer"
            >
              <Image
                src={image}
                alt={`${activeTab === "external" ? "External" : "Plan"} image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          )
        )}
      </motion.div>
    </section>
  );
}

