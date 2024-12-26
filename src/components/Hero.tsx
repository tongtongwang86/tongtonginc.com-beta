"use client";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full h-full max-w-4xl mx-auto mt-8" style={{ aspectRatio: "1080 / 800" }}>
      <Image
        src="/assets/revolute/poster/hero.webp"
        alt="Hero Poster"
        className="w-full"
        width={1080}
        height={800}
      />
    </div>
  );
};

export default HeroSection;