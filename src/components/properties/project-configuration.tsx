"use client";

import { Building2, Layers, Car, ArrowUpDown } from "lucide-react";
import { motion } from "framer-motion";

type ConfigItem = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

type Props = {
  flats?: number;
  floors?: number;
  parking?: string;
  lifts?: number;
};

export function ProjectConfiguration({ flats, floors, parking, lifts }: Props) {
  const configItems: ConfigItem[] = [
    {
      icon: <Building2 className="w-6 h-6" />,
      label: "No. of Flats",
      value: flats ? `${flats} Flats` : "253 Flats",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      label: "No. of Floors",
      value: floors ? `${floors} Floors` : "8 Floors",
    },
    {
      icon: <Car className="w-6 h-6" />,
      label: "Parking",
      value: parking || "Basement + Ground",
    },
    {
      icon: <ArrowUpDown className="w-6 h-6" />,
      label: "Lifts",
      value: lifts ? `${lifts}` : "6",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-black mb-4">
          CONFIGURATION
        </h2>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {configItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-gold/30 bg-gradient-to-br from-gold/20 to-gold/5 p-6 sm:p-8 text-center space-y-3 sm:space-y-4 hover:border-gold/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-center">
              <div className="rounded-full bg-gold/20 p-3 sm:p-4 group-hover:bg-gold/30 transition-colors">
                <div className="text-gold">{item.icon}</div>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-black/60 mb-2">{item.label}</p>
              <p className="text-xl sm:text-2xl font-bold text-gold">{item.value}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

