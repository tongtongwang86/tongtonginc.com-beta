"use client";

import React, { useEffect, useRef } from "react";

interface SnowfallCanvasProps {
  snowflakeCount: number;
  speedMin: number;
  speedMax: number;
  windSpeedMin: number;
  windSpeedMax: number;
  radiusMin: number;
  radiusMax: number;
  timeScale?: number; // Optional prop to adjust the speed
  horizontalSpeedScale?: number; // New prop to adjust horizontal drift speed
}

const SnowfallCanvas: React.FC<SnowfallCanvasProps> = ({
  snowflakeCount,
  speedMin,
  speedMax,
  windSpeedMin,
  windSpeedMax,
  radiusMin,
  radiusMax,
  timeScale = 2, // Default scaling factor to 2x (can be adjusted)
  horizontalSpeedScale = 2, // Default horizontal speed scaling factor (can be adjusted)
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosition = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const flakesRef = useRef<any[]>([]);
  const mouseVelocity = useRef<{ x: number; y: number }>({ x: 0, y: 0 }); // To store mouse velocity for smoother transition
  const lastFrameTime = useRef<number>(performance.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize snowflakes only once
    if (flakesRef.current.length === 0) {
      const flakesArray = Array.from({ length: snowflakeCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (radiusMax - radiusMin) + radiusMin,
        speed: Math.random() * (speedMax - speedMin) + speedMin,
        opacity: Math.random() * 0.5 + 0.3,
        velX: Math.random() * (windSpeedMax - windSpeedMin) + windSpeedMin,
        velY: Math.random() * (speedMax - speedMin) + speedMin,
        step: 0,
        stepSize: Math.random() / 30,
      }));

      flakesRef.current = flakesArray;
    }

    const flakesArray = flakesRef.current;

    const reset = (flake: any) => {
      flake.x = Math.random() * canvas.width;
      flake.y = 0;
      flake.size = Math.random() * (radiusMax - radiusMin) + radiusMin;
      flake.speed = Math.random() * (speedMax - speedMin) + speedMin;
      flake.velY = flake.speed;
      flake.velX = Math.random() * (windSpeedMax - windSpeedMin) + windSpeedMin;
      flake.opacity = Math.random() * 0.5 + 0.3;
    };

    const smoothMove = (currentVel: number, targetVel: number, damping: number) => {
      return currentVel + (targetVel - currentVel) * damping;
    };

    const snow = () => {
      const currentTime = performance.now();
      const deltaTime = (currentTime - lastFrameTime.current) / 1000; // Convert to seconds
      lastFrameTime.current = currentTime;

      // Apply timeScale to deltaTime to control animation speed
      const scaledDeltaTime = deltaTime * timeScale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mX, y: mY } = mousePosition.current;

      // Calculate smooth velocity towards mouse position
      mouseVelocity.current.x = smoothMove(mouseVelocity.current.x, mX, 0.1); // Damping factor 0.1
      mouseVelocity.current.y = smoothMove(mouseVelocity.current.y, mY, 0.1); // Damping factor 0.1

      for (let i = 0; i < flakesArray.length; i++) {
        const flake = flakesArray[i];
        const minDist = 150;
        const x2 = flake.x;
        const y2 = flake.y;
        const dist = Math.sqrt((x2 - mouseVelocity.current.x) ** 2 + (y2 - mouseVelocity.current.y) ** 2);

        if (dist < minDist) {
          const force = minDist / (dist * dist);
          const xcomp = (mouseVelocity.current.x - x2) / dist;
          const ycomp = (mouseVelocity.current.y - y2) / dist;
          const deltaV = force / 2;

          flake.velX -= deltaV * xcomp;
          flake.velY -= deltaV * ycomp;
        } else {
          flake.velX *= 0.98;
          if (flake.velY <= flake.speed) flake.velY = flake.speed;
          flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
        }

        // Apply scaled deltaTime to vertical movement
        flake.y += flake.velY * scaledDeltaTime;
        
        // Apply horizontalSpeedScale to horizontal movement (velX)
        flake.x += flake.velX * scaledDeltaTime * horizontalSpeedScale;

        if (flake.y >= canvas.height || flake.y <= 0 || flake.x >= canvas.width || flake.x <= 0) {
          reset(flake);
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowColor = "rgba(255,255,255,1)";
        ctx.shadowBlur = flake.opacity * 20;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
      }

      requestAnimationFrame(snow);
    };

    snow();

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    snowflakeCount,
    speedMin,
    speedMax,
    windSpeedMin,
    windSpeedMax,
    radiusMin,
    radiusMax,
    timeScale, // Include timeScale in dependencies
    horizontalSpeedScale, // Include horizontalSpeedScale in dependencies
  ]);

  return (
    <div className="absolute top-0 left-0 overflow-hidden w-full h-screen z-0">
      <canvas ref={canvasRef} className="absolute top-0 left-0"></canvas>
    </div>
  );
};

export default SnowfallCanvas;
