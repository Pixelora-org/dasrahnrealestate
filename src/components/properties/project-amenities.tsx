"use client";

import { TreePine, Flower2, IceCream, Users, PartyPopper, Waves, Trees, Baby, Dumbbell, Briefcase, Mountain, Theater, Leaf, Activity, Target } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

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
    <section className="space-y-8 sm:space-y-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          Amenities
        </h2>
      </div>

      {/* Amenities List with Images */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {displayAmenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl sm:rounded-2xl border border-gold/20 bg-gold/10 overflow-hidden hover:border-gold/40 transition-all duration-300"
          >
            {/* Image Section */}
            <div className="w-full h-40 sm:h-48 md:h-56">
              <ImagePlaceholder 
                label={`${amenity} - Image Required`} 
                size="full" 
                className="h-full w-full rounded-none" 
              />
            </div>
            {/* Text Section */}
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4">
              <div className="text-gold flex-shrink-0">
                {amenityIcons[amenity] || <TreePine className="w-5 h-5 sm:w-6 sm:h-6" />}
              </div>
              <p className="text-xs sm:text-sm font-medium text-black">{amenity}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

