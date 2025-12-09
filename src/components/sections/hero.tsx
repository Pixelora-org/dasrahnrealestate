"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SkiperButton } from "@/components/ui/skiper-button";

const heroImages = [
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1900&q=80",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1900&q=80",
];

export function Hero() {
  return (
    <section className="relative mb-16 min-h-[80vh] overflow-hidden rounded-4xl border border-gold/20 md:min-h-[90vh]">
      {/* Skiper UI hero with motion-enhanced typography */}
      <div className="absolute inset-0">
        <Image
          src={heroImages[0]}
          alt="Futuristic residence"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/20 via-night/80 to-night" />
      </div>

      <div className="relative z-10 px-8 py-20 md:px-16">
        <div className="space-y-6 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.4em] text-gold"
          >
            DASARA DEVELOPERS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            A glimpse of
            <span className="text-gold"> grandeur</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="max-w-xl text-base text-white/70 md:text-lg"
          >
            Dasara Developers has established itself as one of the leaders in developing modern living spaces at affordable prices. Innovation, design and quality have been our primary focus in meeting customer expectations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <SkiperButton href="/listings">Our Projects</SkiperButton>
            <SkiperButton href="/contact" variant="ghost">
              Contact Us
            </SkiperButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

