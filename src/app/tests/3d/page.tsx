"use client";
import dynamic from 'next/dynamic';
import * as UI from '@/components';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { TextEffect } from '@/components/motion-ui/text-effect';

export default function threed() {
  const arButtons = [
    { title: "Iron Holder", usdzFile: "/models/3d/ironholder.usdz" },
    { title: "Keyboard Exploded", usdzFile: "/models/3d/KeyboardExploded.usdz" },
    { title: "Maxwell", usdzFile: "/models/3d/maxwell.usdz" },
    { title: "Revolute V2.2 Magnetics", usdzFile: "/models/3d/RevoluteV2.2 magnetics.usdz" },
    { title: "Revolute V2.2", usdzFile: "/models/3d/RevoluteV2.2.usdz" },
    { title: "Visionpro", usdzFile: "/models/3d/apple-vision-pro.usdz" },
    { title: "plant", usdzFile: "/models/3d/plant.usdz" },
    { title: "plant2", usdzFile: "/models/3d/plant2.usdz" },
    { title: "pod", usdzFile: "/models/3d/pod.usdz" },
    { title: "herousdz", usdzFile: "/models/3d/herousd.usdz" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {arButtons.map((button, index) => (
        <div 
          key={index} 
          className="bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-3xl p-4 flex flex-col items-center"
        >
          <h3 className="text-lg font-semibold mb-2">{button.title}</h3>
          <UI.ARButton usdzFile={button.usdzFile} />
        </div>
      ))}
    </div>
  );
}
