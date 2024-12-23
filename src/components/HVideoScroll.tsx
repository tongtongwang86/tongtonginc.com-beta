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
    <div className="relative w-full h-full ">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative w-full overflow-x-scroll snap-x snap-mandatory scroll-smooth hideScrollbar"
        
        style={{
          msOverflowStyle: "none", // IE and Edge
          scrollbarWidth: "none", // Firefox
        }}
      >
        <style>
          {` 
          .hideScrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, and Opera */
          }
          `}
        </style>
        <div className="flex" style={{ paddingLeft: 'calc(50vw - 150px)' }}> {/* Adjust paddingLeft */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none snap-center px-2 py-4 w-full" 

            >
              <div className="relative max-w-screen-xl  bg-black rounded-[30px] overflow-hidden outline outline-3 outline-[#7070703b] scale-90 ">
                {slide}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons below the carousel */}
      
      <div className="flex justify-end items-center  mx-auto mb-8" style={{ maxWidth: '100em' }}>
        <button
          onClick={prev}
          className="p-2 bg-[#ffffff28] backdrop-blur-2xl rounded-full shadow-visionpro hover:bg-[#ffffff3e] hover:scale-110  mr-4 transition-all duration-150"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-2 bg-[#ffffff28] backdrop-blur-2xl rounded-full shadow-visionpro hover:bg-[#ffffff3e] hover:scale-110  mr-10 transition-all duration-150"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>


   
   
    </div>
  );
}
