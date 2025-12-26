"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function MissionVision() {
  return (
    <section className="space-y-8 sm:space-y-12">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          Our Mission & Vision
        </h2>
      </div>

      <div className="grid gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2 lg:items-center justify-items-center max-w-5xl mx-auto">
        {/* Mission/Vision text on left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6 rounded-2xl sm:rounded-3xl bg-gold/10 p-6 sm:p-8 w-full"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gold">Our Vision</h3>
          <p className="text-base sm:text-lg text-black/70 leading-relaxed">
            At Dasara Developers, our vision is to provide affordable and sustainable housing solutions that cater to the diverse needs and preferences of homebuyers in India. We aim to create homes that prioritise factors such as price, product quality, location, security, privacy, and amenities, ensuring that each homebuyer finds their ideal living space.
          </p>
        </motion.div>

        {/* Founder photo and info on right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-4 sm:space-y-6 w-full"
        >
          <div className="w-full h-64 sm:h-80 md:h-96">
            <ImagePlaceholder label="Founder Photo Required" size="full" className="h-full w-full rounded-none" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-black">
              Surineni Prasad Naidu
            </h3>
            <p className="text-base sm:text-lg text-gold font-semibold">
              Founder - Dasara Developers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

