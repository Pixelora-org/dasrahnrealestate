"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const managementTeam = [
  {
    id: "1",
    name: "John Smith",
    role: "CEO",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "CTO",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "CFO",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "4",
    name: "Emily Davis",
    role: "COO",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "5",
    name: "David Wilson",
    role: "Head of Sales",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "6",
    name: "Lisa Anderson",
    role: "Head of Marketing",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
];

export function ManagementTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(2);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, managementTeam.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const slideDistance = currentIndex * (100 / itemsPerView);

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-4">
          Management Team
        </h2>
      </div>

      <div className="relative px-12">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          disabled={!canGoPrevious}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 border border-gold/40 text-gold transition-all duration-300 hover:bg-gold/30 hover:scale-110 shadow-lg ${
            !canGoPrevious ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Previous team member"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Carousel Viewport */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `-${slideDistance}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {managementTeam.map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0"
                style={{
                  width: `calc((100% - ${(itemsPerView - 1) * 1.5}rem) / ${itemsPerView})`,
                }}
              >
                <div className="flex flex-col items-center space-y-4 rounded-3xl bg-gold/10 p-6">
                  <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-gold/30">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-platinum">{member.name}</h3>
                    <p className="text-sm text-gold font-semibold">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          disabled={!canGoNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 border border-gold/40 text-gold transition-all duration-300 hover:bg-gold/30 hover:scale-110 shadow-lg ${
            !canGoNext ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Next team member"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

