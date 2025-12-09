"use client";

import { SkiperCard } from "@/components/ui/skiper-card";
import { SkiperButton } from "@/components/ui/skiper-button";

type Props = {
  min: number;
  max: number;
  value: number;
  location: string;
  propertyType: string;
  locations: string[];
  types: string[];
  onChange: (filters: {
    price: number;
    location: string;
    propertyType: string;
  }) => void;
};

export function PropertyFilter({
  min,
  max,
  value,
  location,
  propertyType,
  locations,
  types,
  onChange,
}: Props) {
  const handleReset = () =>
    onChange({ price: max, location: "All", propertyType: "All" });

  return (
    <SkiperCard className="flex flex-col gap-6 lg:flex-row lg:items-end">
      <div className="flex-1 space-y-3">
        <label className="text-sm text-white/70">Max Price</label>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(event) =>
            onChange({
              price: Number(event.target.value),
              location,
              propertyType,
            })
          }
          className="w-full accent-gold"
        />
        <p className="text-sm text-white/60">
          Up to{" "}
          <span className="font-semibold text-white">
            ${Math.round(value / 100000) / 10}M
          </span>
        </p>
      </div>

      <div className="flex-1 space-y-3">
        <label className="text-sm text-white/70">Location</label>
        <select
          value={location}
          onChange={(event) =>
            onChange({
              price: value,
              location: event.target.value,
              propertyType,
            })
          }
          className="w-full rounded-2xl border border-white/20 bg-night/70 px-4 py-3 text-sm outline-none focus:border-gold"
        >
          <option value="All">Anywhere</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 space-y-3">
        <label className="text-sm text-white/70">Property Type</label>
        <select
          value={propertyType}
          onChange={(event) =>
            onChange({
              price: value,
              location,
              propertyType: event.target.value,
            })
          }
          className="w-full rounded-2xl border border-white/20 bg-night/70 px-4 py-3 text-sm outline-none focus:border-gold"
        >
          <option value="All">All Collections</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <SkiperButton className="w-full lg:w-auto" onClick={handleReset}>
        Reset
      </SkiperButton>
    </SkiperCard>
  );
}



