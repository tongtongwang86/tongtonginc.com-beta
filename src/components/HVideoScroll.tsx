"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface HVideoScrollProps {
  children: ReactNode[]; // Accepts an array of React elements as slides
  autoSlide?: boolean; // Optional autoSlide prop
  autoSlideInterval?: number; // Optional autoSlide interval in milliseconds
}

export default function HVideoScroll({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: HVideoScrollProps) {
  const [curr, setCurr] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);

  const slideCount = slides.length;

  // Handle navigation to previous or next slide
  const prev = () => {
    setCurr((curr) => (curr === 0 ? slideCount - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slideCount - 1 ? 0 : curr + 1));
  };

  // Scroll to the current slide index programmatically
  useEffect(() => {
    const carousel = carouselRef.current;
    const slideWidth = carousel?.offsetWidth ? carousel.offsetWidth * 0.8 : 0;

    if (carousel) {
      carousel.scrollTo({
        left: curr * slideWidth,
        behavior: "smooth",
      });
    }
  }, [curr]);

  // Handle mouse wheel scrolling to move carousel
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;

    if (event.deltaY > 0) {
      next();
    } else {
      prev();
    }

    clearTimeout(scrollTimeoutRef.current as NodeJS.Timeout);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 150);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  // Snap to nearest slide after scroll stops
  useEffect(() => {
    const carousel = carouselRef.current;

    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const slideWidth = carousel?.offsetWidth ? carousel.offsetWidth * 0.8 : 0;
        const newIndex = Math.round((carousel?.scrollLeft ?? 0) / slideWidth);
        setCurr(newIndex);
      }, 150);
    };

    carousel?.addEventListener("scroll", handleScroll);

    return () => {
      carousel?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full mx-auto">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative w-full overflow-x-auto snap-x snap-mandatory"
        style={{
          scrollBehavior: "smooth",
          overflowY: "hidden",
          overflowX: "auto", // Make sure horizontal scroll is enabled but hidden
        }}
        onWheel={handleWheel}
      >
        {/* Hide scrollbar for WebKit */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none; /* Hide scrollbar for WebKit browsers */
          }

          div {
            scrollbar-width: none; /* Hide scrollbar for Firefox */
          }
        `}</style>

        <div className="flex" style={{ minWidth: "100%" }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none snap-start"
              style={{
                width: "80%", // Each slide takes up 80% of the container width
                marginRight: "10px", // Space between slides
                border: "2px solid #ccc", // Border around each slide
                borderRadius: "8px", // Optional: rounded corners for the slides
                padding: "10px", // Optional: padding inside the slide
              }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Buttons below the carousel */}
      <div className="flex justify-end items-center mt-4">
        <button
          onClick={prev}
          className="p-2 bg-gray-400 rounded-full shadow hover:bg-gray-500 mr-2"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-2 bg-gray-400 rounded-full shadow hover:bg-gray-500"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
