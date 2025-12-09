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
    <div className="space-y-24">
      <CompanyOverview />
      <MissionVision />
      <ManagementTeam />
    </div>
  );
}

