"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MissionVision() {
  return (
    <section className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-4">
          Our Mission & Vision
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Mission/Vision text on left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 rounded-3xl bg-gold/10 p-8"
        >
          <h3 className="text-2xl font-semibold text-gold">Our Vision</h3>
          <p className="text-lg text-platinum/70 leading-relaxed">
            At Bhavisha Homes, our vision is to provide affordable and sustainable housing solutions that cater to the diverse needs and preferences of homebuyers in India. We aim to create homes that prioritise factors such as price, product quality, location, security, privacy, and amenities, ensuring that each homebuyer finds their ideal living space.
          </p>
        </motion.div>

        {/* Founder photo and info on right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-6 rounded-3xl bg-gold/10 p-8"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-gold/30">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Surineni Prasad Naidu"
              fill
              className="object-cover"
              sizes="256px"
            />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-platinum">
              Surineni Prasad Naidu
            </h3>
            <p className="text-lg text-gold font-semibold">
              Founder - Bhavisha Homes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

