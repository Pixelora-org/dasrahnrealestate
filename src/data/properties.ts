import data from "./properties.json";
import type { Property } from "@/types/property";

export const properties = data as Property[];

export const featuredProperties = properties.filter((property) => property.featured);

export const priceCeiling = Math.max(...properties.map((property) => property.price));
export const priceFloor = Math.min(...properties.map((property) => property.price));

export const propertyTypes = Array.from(new Set(properties.map((property) => property.type)));
export const propertyLocations = Array.from(
  new Set(properties.map((property) => property.location)),
);

export const getPropertyBySlug = (slug: string) =>
  properties.find((property) => property.slug === slug);



