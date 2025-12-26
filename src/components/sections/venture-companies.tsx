"use client";

import { ventureCompanies } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { motion } from "framer-motion";

export function VentureCompanies() {
  return (
    <section className="space-y-10 sm:space-y-12">
      <SectionHeading
        eyebrow="Ventures"
        title="Our Venture Companies"
        description="Explore our strategic partnerships and venture companies that complement our vision of creating exceptional living and working spaces."
        className="text-center"
      />
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {ventureCompanies.map((company, index) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="w-full"
          >
            {/* Company Image - Full Screen */}
            <div className="w-full h-64 sm:h-80 md:h-96 mb-6 sm:mb-8">
              <ImagePlaceholder 
                label={`${company.name} - Image Required`} 
                size="full" 
                className="h-full w-full rounded-none" 
              />
            </div>
            {/* Company Info */}
            <div className="space-y-4 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gold">
                {company.name}
              </h3>
              <p className="text-sm sm:text-base text-platinum/70 leading-relaxed">
                {company.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

