"use client";

import { ImagePlaceholder } from "@/components/ui/image-placeholder";

type Props = {
  mapImage?: string;
};

export function MLPMap({ mapImage }: Props) {
  return (
    <section className="space-y-6 sm:space-y-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
          MLP Map Design
        </h2>
      </div>

      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <ImagePlaceholder label="MLP Map Design - Image Required" size="full" className="h-full w-full rounded-none" />
      </div>
    </section>
  );
}

