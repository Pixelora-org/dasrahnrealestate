import { clsx } from "clsx";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function SkiperCard({ children, className }: Props) {
  return (
    <div
      className={clsx(
        "skiper-card group relative overflow-hidden rounded-3xl border border-gold/20 bg-gold/10 p-6 text-platinum shadow-skiper-lg transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-gold/20 hover:shadow-md",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-card-sheen opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

