import { metrics } from "@/data/content";

export function Metrics() {
  return (
    <section className="grid gap-4 rounded-3xl border border-gold/20 bg-gold/10 p-8 md:grid-cols-3">
      {metrics.map((metric) => (
        <div key={metric.id} className="space-y-1">
          <p className="text-3xl font-semibold text-platinum">{metric.value}</p>
          <p className="text-sm uppercase tracking-[0.3em] text-platinum/60">
            {metric.label}
          </p>
          <p className="text-xs text-platinum/50">{metric.detail}</p>
        </div>
      ))}
    </section>
  );
}



