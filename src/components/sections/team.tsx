import { SectionHeading } from "@/components/ui/section-heading";
import { TeamCard } from "@/components/ui/team-card";
import { teamMembers } from "@/data/content";

export function TeamSection() {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Leadership"
        title="Global team of advisors"
        description="Each advisor leads a focused discipline — from cinematic experience to legal orchestration."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>
    </section>
  );
}



