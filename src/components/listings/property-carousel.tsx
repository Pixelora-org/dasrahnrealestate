"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import type { Property } from "@/types/property";
import { PropertyCard } from "@/components/ui/property-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  properties: Property[];
};

export function PropertyCarousel({ properties }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(viewportRef, { once: false, margin: "0px" });
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, properties.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  // Calculate slide distance
  const slideDistance = currentIndex * (100 / itemsPerView);

  if (!isVisible) {
    return (
      <div 
        ref={viewportRef} 
        className="h-0"
        style={{ minHeight: '100vh' }}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-12 py-20"
    >
      {/* Centered Header */}
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-platinum mb-4">
          OUR PROJECTS
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="relative px-12">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          disabled={!canGoPrevious}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 border border-gold/40 text-gold transition-all duration-300 hover:bg-gold/30 hover:scale-110 shadow-lg ${
            !canGoPrevious ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Previous projects"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Carousel Viewport */}
        <div
          className="overflow-hidden"
        >
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
            {properties.map((property) => (
              <div
                key={property.id}
                className="flex-shrink-0"
                style={{
                  width: `calc((100% - ${(itemsPerView - 1) * 1.5}rem) / ${itemsPerView})`,
                }}
              >
                <PropertyCard property={property} />
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
          aria-label="Next projects"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      {maxIndex > 0 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-gold"
                  : "w-2 bg-gold/30 hover:bg-gold/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

