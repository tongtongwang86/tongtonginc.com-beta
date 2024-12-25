"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { useIsVisible } from "@/hooks/useIsVisible"; // Adjust the path as needed

const MagneticRotaryEncoder = () => {
  const ref7 = useRef<HTMLDivElement>(null);
  const isVisible7 = useIsVisible(ref7);

  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center gap-6 p-10"
      style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}
    >
      <div
        ref={ref7}
        className={`text-left flex-shrink basis-3/6 transition-all ease-out transform ${isVisible7
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDuration: '1500ms' }}
      >
        <div className="text-6xl font-sans font-semibold" style={{ color: '#f4f4f4' }}>
          Magnetic Rotary Encoder
        </div>
        <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>
          A Non-Contact magnetic encoder measures the absolute position of Revolute to sub-degree accuracy.
          Combined with a bearing, physical wear would be significantly reduced, revolute can withstand
          whatever life throws at it.
        </span>
      </div>

      <Image
        src="/assets/revolute/poster/magneticenc.png"
        alt="outside"
        width={400}
        height={500}
        className="rounded-lg flex-grow basis-4/6"
      />
    </div>
  );
};

export default MagneticRotaryEncoder;
