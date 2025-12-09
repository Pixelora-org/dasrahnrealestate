"use client";

import Image from "next/image";

type Props = {
  mapImage?: string;
};

export function MLPMap({ mapImage }: Props) {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-platinum mb-4">
          MLP Map Design
        </h2>
      </div>

      <div className="rounded-3xl border border-gold/20 bg-gold/10 p-6 overflow-hidden">
        <div className="relative h-96 w-full rounded-2xl overflow-hidden">
          {mapImage ? (
            <Image
              src={mapImage}
              alt="MLP Map Design"
              fill
              className="object-contain"
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-white/50">
              <p className="text-platinum/50">MLP Map Design</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

