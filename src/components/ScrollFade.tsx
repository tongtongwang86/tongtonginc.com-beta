"use client";
import React, { useRef, PropsWithChildren } from 'react';
import Image from 'next/image';
import { useIsVisible } from "@/hooks/useIsVisible"; // Adjust the path as needed

const ScrollFade = ({ children }: PropsWithChildren) => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
      <div
        ref={ref1}
        className={`transition-all ease-out transform ${isVisible1
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDuration: '1500ms' }}
      >
        {children}
      </div>
  );
};

export default ScrollFade;
