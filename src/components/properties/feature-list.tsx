export function FeatureList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="space-y-3 rounded-3xl border border-gold/20 bg-gold/10 p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-gold">
        {title}
      </p>
      <ul className="space-y-2 text-sm text-platinum/70">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}



