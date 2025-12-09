import { SkiperCard } from "@/components/ui/skiper-card";
import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    title: "Innovation",
    description:
      "Following current market trends in our development projects, we move with the times and create aesthetically modern constructions.",
  },
  {
    title: "Quality",
    description:
      "Quality has been our primary focus in meeting customer expectations. We ensure every project meets the highest standards.",
  },
  {
    title: "Design",
    description:
      "We blend design intelligence with modern aesthetics to create living spaces that are both beautiful and functional.",
  },
];

export function WhyChoose() {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Our commitment to excellence"
        description="At Dasara Developers, we believe in sustainability, advanced technological progress, the importance of craftsmanship, and building a strong customer relationship."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <SkiperCard key={pillar.title}>
            <h3 className="text-xl font-semibold text-platinum">{pillar.title}</h3>
            <p className="mt-3 text-platinum/70">{pillar.description}</p>
          </SkiperCard>
        ))}
      </div>
    </section>
  );
}



