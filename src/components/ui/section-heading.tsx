import { clsx } from "clsx";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: Props) {
  return (
    <div className={clsx("max-w-3xl space-y-3", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold text-platinum md:text-4xl">{title}</h2>
      {description && <p className="text-base text-platinum/70">{description}</p>}
    </div>
  );
}



