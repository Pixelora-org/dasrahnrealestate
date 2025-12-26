import { notFound } from "next/navigation";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
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
    <div className="space-y-0">
      {/* Hero Section - Full Screen */}
      <section className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] overflow-hidden">
        <ImagePlaceholder label={`${property.title} - Hero Image Required`} size="full" className="h-full w-full rounded-none absolute inset-0" />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 space-y-1 sm:space-y-2 text-white z-10 max-w-[90%] sm:max-w-[80%] md:max-w-none">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gold">
            {property.location}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{property.title}</h1>
          <p className="text-sm sm:text-base text-white/90">{property.tagline}</p>
        </div>
      </section>

      {/* Overview Section - Golden Background */}
      <section className="w-full bg-gold/10 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <ProjectOverview
            title={property.title}
            description={overviewDescription}
            images={property.gallery}
          />
        </div>
      </section>

      {/* Configuration Section - White Background */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <ProjectConfiguration />
        </div>
      </section>

      {/* MLP Map Design - Golden Background */}
      <section className="w-full bg-gold/10 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <MLPMap />
        </div>
      </section>

      {/* Amenities Section - White Background */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <ProjectAmenities amenities={property.amenities} />
        </div>
      </section>

      {/* Location Map Section - Golden Background */}
      <section className="w-full bg-gold/10 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <LocationMap
            lat={property.coordinates.lat}
            lng={property.coordinates.lng}
            projectTitle={property.title}
          />
        </div>
      </section>

      {/* Gallery Section - White Background */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <ProjectGallery
            externalImages={externalImages}
            planImages={planImages}
          />
        </div>
      </section>
    </div>
  );
}

