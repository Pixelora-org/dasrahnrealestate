"use client";

import { Building2, Layers, Car, ArrowUpDown } from "lucide-react";

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
        <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-4">
          CONFIGURATION
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {configItems.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-gold/20 bg-gold/10 p-6 text-center space-y-4"
          >
            <div className="flex justify-center text-gold">{item.icon}</div>
            <div>
              <p className="text-sm text-platinum/60 mb-2">{item.label}</p>
              <p className="text-xl font-bold text-platinum">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

