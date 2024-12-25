"use client";
import React, { useRef } from 'react';
import { useIsVisible } from "@/hooks/useIsVisible"; // Adjust the path as needed

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollFade: React.FC<ScrollFadeProps> = ({ children, className = "" }) => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
      <div
        ref={ref1}
        className={`transition-all ease-out transform ${isVisible1
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
        } ${className}`}
        style={{ transitionDuration: '1500ms' }}
      >
        {children}
      </div>
  );
};

export default ScrollFade;
