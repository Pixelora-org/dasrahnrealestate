"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function CompanyOverview() {
  return (
    <section className="space-y-10 sm:space-y-12 md:space-y-16">
      <div className="text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8">
          Over a decade of experience
        </h1>
      </div>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center">
        {/* Two photos on the left - Full screen */}
        <div className="space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-64 sm:h-80 md:h-96"
          >
            <ImagePlaceholder label="Company Image 1 Required" size="full" className="h-full w-full rounded-none" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-64 sm:h-80 md:h-96"
          >
            <ImagePlaceholder label="Company Image 2 Required" size="full" className="h-full w-full rounded-none" />
          </motion.div>
        </div>

        {/* Text content on the right - Center aligned */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6 text-center"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-3 sm:mb-4">
              Company Overview
            </h2>
            <p className="text-base sm:text-lg text-black/70 leading-relaxed">
              Dasara Developers was launched in 2010 with a vision to provide affordable and quality housing options to individuals and families. We have grown significantly over the years and have become known for our commitment to customer satisfaction. Our motto is "Together we grow", which reflects our belief in the importance of working collaboratively with our customers and stakeholders to create a flourishing community where innovation and sustainability are at the forefront of every project we undertake. We strive to make a difference in the lives of our customers by designing homes that cater to their needs and aspirations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

