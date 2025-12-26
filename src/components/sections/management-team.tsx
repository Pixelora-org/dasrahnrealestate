"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const managementTeam = [
  {
    id: "1",
    name: "John Smith",
    role: "CEO",
    photo: "Image Required",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "CTO",
    photo: "Image Required",
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "CFO",
    photo: "Image Required",
  },
  {
    id: "4",
    name: "Emily Davis",
    role: "COO",
    photo: "Image Required",
  },
  {
    id: "5",
    name: "David Wilson",
    role: "Head of Sales",
    photo: "Image Required",
  },
  {
    id: "6",
    name: "Lisa Anderson",
    role: "Head of Marketing",
    photo: "Image Required",
  },
];

export function ManagementTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
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

  // Calculate slide distance - for mobile (itemsPerView = 1), move exactly 100% per item
  // For other sizes, account for the gap properly
  const slideDistance = itemsPerView === 1 
    ? currentIndex * 100 
    : currentIndex * (100 / itemsPerView);

  return (
    <section className="space-y-8 sm:space-y-12">
      <div className="text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          Management Team
        </h2>
      </div>

      <div className="relative px-8 sm:px-12 md:px-16">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          disabled={!canGoPrevious}
          className={`absolute left-0 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 border border-gold/40 text-gold transition-all duration-300 hover:bg-gold/30 hover:scale-110 shadow-lg ${
            !canGoPrevious ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Previous team member"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Carousel Viewport */}
        <div className="overflow-hidden mx-8 sm:mx-12 md:mx-16">
          <motion.div
            className="flex gap-4 sm:gap-6"
            style={{
              gap: itemsPerView === 1 ? '0' : undefined,
            }}
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
                  width: itemsPerView === 1 
                    ? '100%' 
                    : `calc((100% - ${(itemsPerView - 1) * 1.5}rem) / ${itemsPerView})`,
                }}
              >
                <div className="flex flex-col items-center space-y-4 sm:space-y-6 w-full">
                  <div className="w-full h-64 sm:h-80 md:h-96">
                    <ImagePlaceholder label={`${member.name} Photo`} size="full" className="h-full w-full rounded-none" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-black">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-gold font-semibold">{member.role}</p>
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
          className={`absolute right-0 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 border border-gold/40 text-gold transition-all duration-300 hover:bg-gold/30 hover:scale-110 shadow-lg ${
            !canGoNext ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Next team member"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
}

