import { ContactSection } from "@/components/sections/contact-info";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Dasara Developers",
  description: "Get in touch with Dasara Developers for inquiries about our projects.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Contact"
        title="Schedule A Site Visit"
        description="Get in touch with us to schedule a site visit or learn more about our projects."
      />
      <ContactSection />
    </div>
  );
}

