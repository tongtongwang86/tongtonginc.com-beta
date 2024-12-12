"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface HVideoScrollProps {
  children: ReactNode[]; // Accepts an array of React elements as slides
}

export default function HVideoScroll({
  children: slides,
}: HVideoScrollProps) {
  const [curr, setCurr] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);

  const slideCount = slides.length;

  // Calculate the effective slide width for partial slides (75% width)
  const getSlideWidth = () => {
    return carouselRef.current ? carouselRef.current.offsetWidth * 0.75 : 0;
  };

  // Navigate to the previous slide
  const prev = () => {
    setCurr((curr) => (curr > 0 ? curr - 1 : curr));
  };

  // Navigate to the next slide
  const next = () => {
    setCurr((curr) => (curr < slideCount - 1 ? curr + 1 : curr));
  };

  // Scroll to the current slide position programmatically
  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      const slideWidth = getSlideWidth(); // Use partial slide width
      const offset = curr * slideWidth;

      carousel.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [curr]);

  // Handle wheel scrolling for carousel navigation
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
    }, 200); // Delay ensures smoother scrolling
  };

  // Snap to the nearest slide after scroll stops
  useEffect(() => {
    const carousel = carouselRef.current;

    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const slideWidth = getSlideWidth();
        const newIndex = Math.round((carousel?.scrollLeft ?? 0) / slideWidth);
        setCurr(newIndex);
      }, 200);
    };

    carousel?.addEventListener("scroll", handleScroll);

    return () => {
      carousel?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Center the first slide on component mount
  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      const slideWidth = getSlideWidth();
      carousel.scrollTo({
        left: curr * slideWidth,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative w-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
        onWheel={handleWheel}
      >
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none snap-center px-2 py-4 w-9/12" // Partial width slide
            >
              <div className="relative w-full bg-black rounded-3xl overflow-hidden outline scale-90">
                {slide}
              </div>
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
