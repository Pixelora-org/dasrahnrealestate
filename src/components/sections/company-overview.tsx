"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function CompanyOverview() {
  return (
    <section className="space-y-16">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-platinum mb-8">
          Over a decade of experience
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        {/* Two photos on the left */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 w-full overflow-hidden rounded-3xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
              alt="Modern building"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 w-full overflow-hidden rounded-3xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury building"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>

        {/* Text content on the right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Company Overview
            </h2>
            <p className="text-lg text-platinum/70 leading-relaxed">
              Bhavisha homes was launched in 2010 with a vision to provide affordable and quality housing options to individuals and families and has grown significantly over the years and have become known for our commitment to customer satisfaction. Our motto is "Together we grow", which reflects our belief in the importance of working collaboratively with our customers and stakeholders to create a flourishing community where innovation and sustainability are at the forefront of every project we undertake. We strive to make a difference in the lives of our customers by designing homes that cater to their needs and aspirations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

