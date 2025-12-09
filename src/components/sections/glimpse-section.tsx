"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SkiperButton } from "@/components/ui/skiper-button";

export function GlimpseSection() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full grid gap-8 md:grid-cols-2 md:items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-platinum">
          A glimpse of grandeur
        </h1>
        <p className="text-lg text-platinum/70 leading-relaxed">
          Bhavisha Homes has established itself as one of the leaders in developing modern living spaces at affordable prices. Innovation, design and quality have been our primary focus in meeting customer expectations. Following current market trends in our development projects, we also move with the times and create aesthetically modern constructions.
        </p>
        <div>
          <SkiperButton href="/about" variant="primary">
            Know More
          </SkiperButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-96 w-full overflow-hidden rounded-3xl"
      >
        <Image
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
          alt="Modern building architecture"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>
      </div>
    </section>
  );
}

