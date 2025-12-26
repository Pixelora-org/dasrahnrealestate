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
  const [isVisible, setIsVisible] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(viewportRef, { once: false, margin: "0px" });
  const itemsPerView = 3; // Always show 3 items for the sliding effect

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  // Auto-play functionality with infinite loop
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Loop continuously - go to next, or back to 0 if at end
        return (prev + 1) % properties.length;
      });
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isVisible, properties.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      // Loop to end if at start
      return prev === 0 ? properties.length - 1 : prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      // Loop to start if at end
      return (prev + 1) % properties.length;
    });
  };

  const canGoPrevious = true; // Always allow navigation (looping)
  const canGoNext = true; // Always allow navigation (looping)

  // Calculate slide distance - show current, previous, and next for smooth sliding
  // We'll show 3 items: previous, current (center), next
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
      <div className="text-center space-y-4 mb-8 md:mb-12 px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
          DASARA DEVELOPERS
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-platinum mb-4">
          OUR PROJECTS
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-platinum/70 max-w-2xl mx-auto">
          Discover our premium collection. Our aim is to create an eye to the future, integrating qualities and providing luxury at an affordable price.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          disabled={!canGoPrevious}
          className={`absolute left-0 sm:left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg bg-black/80 backdrop-blur-sm border-2 border-gold/50 text-gold transition-all duration-300 hover:bg-black hover:border-gold hover:scale-110 shadow-2xl hover:shadow-gold/50 ${
            !canGoPrevious ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Previous projects"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 stroke-[2.5]" />
        </button>

        {/* Carousel Viewport */}
        <div
          className="overflow-hidden mx-8 sm:mx-4 md:mx-6 lg:mx-8 py-6 md:py-10"
        >
          <div className="flex items-center justify-center relative h-[400px] sm:h-[500px] md:h-[600px]">
            {properties.map((property, index) => {
              // Show current, previous, and next items for smooth sliding
              const prevIndex = currentIndex === 0 ? properties.length - 1 : currentIndex - 1;
              const nextIndex = (currentIndex + 1) % properties.length;
              
              // Determine position: left, center, or right
              let position: 'left' | 'center' | 'right' | 'hidden' = 'hidden';
              if (index === prevIndex) position = 'left';
              else if (index === currentIndex) position = 'center';
              else if (index === nextIndex) position = 'right';
              
              const isCenter = position === 'center';
              const isVisible = position !== 'hidden';
              
              if (!isVisible) return null;
              
              // Calculate x position for sliding - center should be at 0
              let xPosition = 0;
              if (position === 'left') xPosition = -80; // Off to the left - more spacing
              else if (position === 'center') xPosition = 0; // Centered
              else if (position === 'right') xPosition = 80; // Off to the right - more spacing
              
              return (
                <motion.div
                  key={`${property.id}-${currentIndex}-${index}`}
                  className="absolute w-full max-w-[90%] sm:max-w-md"
                  style={{
                    left: '50%',
                  }}
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${xPosition}%)`,
                    scale: isCenter ? 1.05 : 0.85,
                    y: isCenter ? -10 : 0,
                    opacity: isCenter ? 1 : 0.3,
                    zIndex: isCenter ? 10 : position === 'right' ? 5 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 1,
                  }}
                >
                  <PropertyCard property={property} isCentered={isCenter} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          disabled={!canGoNext}
          className={`absolute right-0 sm:right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg bg-black/80 backdrop-blur-sm border-2 border-gold/50 text-gold transition-all duration-300 hover:bg-black hover:border-gold hover:scale-110 shadow-2xl hover:shadow-gold/50 ${
            !canGoNext ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Next projects"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 stroke-[2.5]" />
        </button>
      </div>

      {/* Dots Indicator */}
      {properties.length > 1 && (
        <div className="flex justify-center gap-2">
          {properties.map((_, index) => (
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