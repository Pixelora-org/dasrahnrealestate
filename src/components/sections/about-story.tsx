import { SkiperCard } from "@/components/ui/skiper-card";

const storyPoints = [
  "Dasara Developers has established itself as one of the leaders in developing modern living spaces at affordable prices.",
  "Innovation, design and quality have been our primary focus in meeting customer expectations.",
  "Following current market trends in our development projects, we also move with the times and create aesthetically modern constructions.",
];

export function AboutStory() {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4 rounded-3xl bg-gold/10 p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">
          Our Story
        </p>
        <h2 className="text-4xl font-semibold text-platinum">
          Building the future of modern living
        </h2>
        <p className="text-platinum/70">
          At Dasara Developers, we believe in sustainability, advanced technological progress, the importance of craftsmanship, and building a strong customer relationship. Our aim is to create an eye to the future, integrating qualities and providing luxury at an affordable price.
        </p>
      </div>
      <div className="space-y-4">
        {storyPoints.map((point) => (
          <SkiperCard key={point}>
            <p className="text-sm text-platinum/80">{point}</p>
          </SkiperCard>
        ))}
      </div>
    </section>
  );
}



