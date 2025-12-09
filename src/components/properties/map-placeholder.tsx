"use client";

import { motion } from "framer-motion";

type Props = {
  lat: number;
  lng: number;
};

export function MapPlaceholder({ lat, lng }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-panel mt-10 flex flex-col gap-2 p-6 text-platinum"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Map</p>
      <p className="text-sm text-platinum/70">
        Interactive map showing the property location.
      </p>
      <p className="text-lg font-semibold text-platinum">
        {lat.toFixed(3)}, {lng.toFixed(3)}
      </p>
      <div className="mt-4 h-48 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 via-white to-gold-light/10" />
    </motion.div>
  );
}



