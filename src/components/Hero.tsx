"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const checkVideoPlayback = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          setShowFallback(true);
        });
      }
    };

    checkVideoPlayback();
  }, []);

  return (
    <div className="w-full h-full max-w-4xl mx-auto mt-8"
    style={{ aspectRatio: "1080 / 800" }}>
      {showFallback ? (
        <Image
          src="/assets/revolute/poster/herofull.webp"
          alt="Hero Poster"
          className="w-full"
          width={1080}
        height={800}
        />
      ) : (
        <video
          ref={videoRef}
          muted
          autoPlay
          poster="/assets/revolute/poster/hero.webp"
          src="/assets/revolute/poster/hero.mp4"
          style={{ width: "100%", height: "100%" }}
          controls={false} // Remove playback controls
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.play();
            }
          }} // Optional: Handle click to play the video
        />
      )}
    </div>
  );
};

export default HeroSection;