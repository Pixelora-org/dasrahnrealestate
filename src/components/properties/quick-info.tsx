import type { Property } from "@/types/property";

export function QuickInfo({ property }: { property: Property }) {
  const items = [
    { label: "Price", value: property.priceLabel },
    { label: "Beds", value: `${property.beds}` },
    { label: "Baths", value: `${property.baths}` },
    { label: "Interior", value: `${property.area.toLocaleString()} sqft` },
    property.lotSize ? { label: "Lot", value: `${property.lotSize} acres` } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="grid gap-4 rounded-3xl border border-gold/20 bg-gold/10 p-6 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-xs uppercase tracking-[0.3em] text-platinum/50">
            {item.label}
          </p>
          <p className="text-lg font-semibold text-platinum">{item.value}</p>
        </div>
      ))}
    </div>
  );
}



