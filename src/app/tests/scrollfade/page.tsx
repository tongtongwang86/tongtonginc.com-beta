"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible"; // Adjust the path as needed

const Page: React.FC = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef<HTMLDivElement>(null);
  const isVisible5 = useIsVisible(ref5);

  return (
    <div className="space-y-10">
      <div className="h-screen">a</div>
      <div
        ref={ref1}
        className={`transition-all ease-out duration-700 transform ${
          isVisible1
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-3xl font-bold text-center">Section 1</h1>
      </div>

      <div
        ref={ref2}
        className={`transition-all ease-out duration-700 transform ${
          isVisible2
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-3xl font-bold text-center">Section 2</h1>
      </div>

      <div
        ref={ref3}
        className={`transition-all ease-out duration-700 transform ${
          isVisible3
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-3xl font-bold text-center">Section 3</h1>
      </div>

      
    </div>
  );
};

export default Page;
