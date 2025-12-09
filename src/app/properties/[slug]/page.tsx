import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getPropertyBySlug,
  properties,
} from "@/data/properties";
import { ProjectOverview } from "@/components/properties/project-overview";
import { ProjectConfiguration } from "@/components/properties/project-configuration";
import { MLPMap } from "@/components/properties/mlp-map";
import { ProjectAmenities } from "@/components/properties/project-amenities";
import { LocationMap } from "@/components/properties/location-map";
import { ProjectGallery } from "@/components/properties/project-gallery";

type Props = {
  params: Promise<{ slug: string }> | { slug: string };
};

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const property = getPropertyBySlug(resolvedParams.slug);
  if (!property) {
    return { title: "Project — Dasara Developers" };
  }
  return {
    title: `${property.title} — Dasara Developers`,
    description: property.tagline,
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const property = getPropertyBySlug(resolvedParams.slug);
  if (!property) notFound();

  // Split gallery into external and plans (for now, use gallery for both)
  const externalImages = property.gallery.slice(0, Math.ceil(property.gallery.length / 2));
  const planImages = property.gallery.slice(Math.ceil(property.gallery.length / 2));

  // Enhanced description for overview
  const overviewDescription = property.description || 
    `Welcome to ${property.title}, a heaven of luxurious living and unparalleled elegance. Discover a residence that transcends expectations and offers a lifestyle beyond compare. With a commitment to excellence and attention to detail, ${property.title} presents a collection of exquisite apartments that redefine opulence.`;

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden rounded-4xl">
        <Image
          src={property.heroImage}
          alt={property.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 space-y-2 text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            {property.location}
          </p>
          <h1 className="text-4xl font-semibold">{property.title}</h1>
          <p className="text-white/90">{property.tagline}</p>
        </div>
      </div>

      {/* Overview Section */}
      <ProjectOverview
        title={property.title}
        description={overviewDescription}
        images={property.gallery}
      />

      {/* Configuration Section */}
      <ProjectConfiguration />

      {/* MLP Map Design */}
      <MLPMap />

      {/* Amenities Section */}
      <ProjectAmenities amenities={property.amenities} />

      {/* Location Map Section */}
      <LocationMap
        lat={property.coordinates.lat}
        lng={property.coordinates.lng}
      />

      {/* Gallery Section */}
      <ProjectGallery
        externalImages={externalImages}
        planImages={planImages}
      />
    </div>
  );
}

