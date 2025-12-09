export type Property = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  location: string;
  price: number;
  priceLabel: string;
  type: "Villa" | "Penthouse" | "Estate" | "Residence" | "Retreat";
  status: "For Sale" | "Private Listing" | "Coming Soon";
  featured: boolean;
  beds: number;
  baths: number;
  area: number;
  lotSize?: number;
  heroImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
};



