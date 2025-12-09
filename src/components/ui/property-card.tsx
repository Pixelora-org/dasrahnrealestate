import type { Property } from "@/types/property";
import Image from "next/image";
import Link from "next/link";

type Props = {
  property: Property;
};

export function PropertyCard({ property }: Props) {
  return (
    <Link href={`/properties/${property.slug}`} className="block h-full">
      <div className="flex h-full flex-col gap-5 rounded-3xl overflow-hidden">
        <div className="relative h-64 overflow-hidden rounded-3xl">
          <Image
            src={property.heroImage}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={property.featured}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
          <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-platinum">
            {property.status}
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              {property.type}
            </span>
            <span className="text-sm text-platinum/70">{property.location}</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-platinum">
              {property.title}
            </h3>
            <p className="text-sm text-platinum/60">{property.tagline}</p>
          </div>
          <div className="flex items-center justify-between text-sm text-platinum/70">
            <span className="text-lg font-semibold text-gold">
              {property.priceLabel}
            </span>
            <span>
              {property.beds} bd · {property.baths} ba · {property.area.toLocaleString()}
              {" "}
              sqft
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}



