"use client";

import { TreePine, Flower2, IceCream, Users, PartyPopper, Waves, Trees, Baby, Dumbbell, Briefcase, Mountain, Theater, Leaf, Activity, Target } from "lucide-react";

type AmenityItem = {
  icon: React.ReactNode;
  name: string;
};

const amenityIcons: Record<string, React.ReactNode> = {
  "Fruit garden": <TreePine className="w-6 h-6" />,
  "Basketball court": <Target className="w-6 h-6" />,
  "Butterfly garden": <Flower2 className="w-6 h-6" />,
  "Skating rink": <IceCream className="w-6 h-6" />,
  "Senior citizen park": <Users className="w-6 h-6" />,
  "Outdoor party lawn": <PartyPopper className="w-6 h-6" />,
  "Swimming pool with toddlers pool": <Waves className="w-6 h-6" />,
  "Badminton court": <Activity className="w-6 h-6" />,
  "Parks": <Trees className="w-6 h-6" />,
  "Children play area": <Baby className="w-6 h-6" />,
  "Outdoor Gym": <Dumbbell className="w-6 h-6" />,
  "Outdoor working area": <Briefcase className="w-6 h-6" />,
  "Wall climbing": <Mountain className="w-6 h-6" />,
  "Amphitheatre": <Theater className="w-6 h-6" />,
  "Mini Forest": <Leaf className="w-6 h-6" />,
};

type Props = {
  amenities: string[];
};

export function ProjectAmenities({ amenities }: Props) {
  // Use provided amenities or default list
  const defaultAmenities = [
    "Fruit garden",
    "Basketball court",
    "Butterfly garden",
    "Skating rink",
    "Senior citizen park",
    "Outdoor party lawn",
    "Swimming pool with toddlers pool",
    "Badminton court",
    "Parks",
    "Children play area",
    "Outdoor Gym",
    "Outdoor working area",
    "Wall climbing",
    "Amphitheatre",
    "Mini Forest",
  ];

  const displayAmenities = amenities.length > 0 ? amenities : defaultAmenities;

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-4">
          Amenities
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayAmenities.map((amenity, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-2xl border border-gold/20 bg-gold/10 p-4"
          >
            <div className="text-gold flex-shrink-0">
              {amenityIcons[amenity] || <TreePine className="w-6 h-6" />}
            </div>
            <p className="text-sm font-medium text-platinum">{amenity}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

