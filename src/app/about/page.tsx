import { CompanyOverview } from "@/components/sections/company-overview";
import { MissionVision } from "@/components/sections/mission-vision";
import { ManagementTeam } from "@/components/sections/management-team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Dasara Developers",
  description:
    "Learn about Dasara Developers and our commitment to quality, innovation, and modern living spaces.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      {/* Company Overview Section - White Background */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <CompanyOverview />
        </div>
      </section>

      {/* Mission & Vision Section - Golden Background */}
      <section className="w-full bg-gold/10 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <MissionVision />
        </div>
      </section>

      {/* Management Team Section - White Background */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <ManagementTeam />
        </div>
      </section>
    </div>
  );
}

