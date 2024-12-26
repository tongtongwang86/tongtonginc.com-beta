"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const HeroSection: React.FC = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Image loaded state
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Video loaded state
  const [showFallback, setShowFallback] = useState(false); // Fallback image state
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isImageLoaded) {
      const video = videoRef.current;
      if (video) {
        video.load(); // Start loading the video
      }
    }
  }, [isImageLoaded]);

  useEffect(() => {
    if (isVideoLoaded && videoRef.current) {
      videoRef.current
        .play()
        .catch(() => {
          setShowFallback(true); // Show fallback if video cannot play
        });
    }
  }, [isVideoLoaded]);

  return (
    <div className="w-full h-full max-w-4xl mx-auto mt-8 aspect-[1080/800] relative">
      {/* Render the initial image */}
      <Image
        src="/assets/revolute/poster/hero.webp"
        alt="Decorative Hero Poster"
        className={`w-full h-full aspect-[1080/800]  transition-opacity duration-500 ${
          isVideoLoaded || showFallback ? "opacity-0" : "opacity-100"
        }`}
        width={1080}
        height={800}
        priority
        onLoadingComplete={() => setIsImageLoaded(true)} // Mark the image as loaded
      />

      {/* Render the video */}
      <video
        ref={videoRef}
        src="/assets/revolute/poster/hero.mp4"
        muted
        aria-hidden="true"
        className={`w-full h-full aspect-[1080/800]  absolute top-0 left-0 transition-opacity duration-500 ${
          isVideoLoaded && !showFallback ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)} // Mark the video as loaded
      />

      {/* Render the fallback image if video fails */}
      {showFallback && (
        <Image
          src="/assets/revolute/poster/herofull.webp"
          alt="Fallback Hero Poster"
          className={`w-full h-full aspect-[1080/800]  absolute top-0 left-0 transition-opacity duration-500  ${
            showFallback ? "opacity-100" : "opacity-0"
          }`}
          width={1080}
          height={800}
        />
      )}
    </div>
  );
};

export default HeroSection;
