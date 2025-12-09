"use client";

import { testimonials } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkiperCard } from "@/components/ui/skiper-card";
import Image from "next/image";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Testimonials"
        title="What our clients say"
        description="Hear from our satisfied customers about their experience with Dasara Developers."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <SkiperCard className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-platinum">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-platinum/60">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-sm text-platinum/80">{testimonial.quote}</p>
            </SkiperCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

