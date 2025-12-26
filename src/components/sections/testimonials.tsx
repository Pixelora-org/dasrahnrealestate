"use client";

import { testimonials } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkiperCard } from "@/components/ui/skiper-card";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="space-y-10">
      <div className="max-w-3xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
          Testimonials
        </p>
        <h2 className="text-3xl font-semibold text-platinum md:text-4xl">What our clients say</h2>
        <p className="text-base text-platinum/70">Hear from our satisfied customers about their experience with Dasara Developers.</p>
      </div>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <SkiperCard className="space-y-4 sm:space-y-6 bg-gold/10 border-gold/20 p-4 sm:p-6">
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className="h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0">
                  <ImagePlaceholder label="Client Photo Required" size="sm" className="rounded-full h-full w-full" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-platinum text-base sm:text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-platinum/60 mt-1">{testimonial.title}</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs sm:text-sm text-platinum/80 leading-relaxed text-center italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </SkiperCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


