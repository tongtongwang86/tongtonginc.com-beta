"use client";
// app/page3/page.tsx
import { useEffect, useState, useRef } from "react";

export default function Page3() {
  const numBoxes = 10; // Number of floating boxes

  // Parameters for forces and distances
  const [originForce, setOriginForce] = useState(0.05); // Spring constant
  const [damping, setDamping] = useState(0.1); // Damping factor
  const [cursorForce, setCursorForce] = useState(0.01);
  const [cursorEffectDistance, setCursorEffectDistance] = useState(150);

  const cursorPosition = useRef<{ x: number; y: number } | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [boxes, setBoxes] = useState(
    Array.from({ length: numBoxes }, () => {
      const originX = Math.random() * window.innerWidth;
      const originY = Math.random() * window.innerHeight;

      return {
        x: originX,
        y: originY,
        originX, // Fixed anchor point
        originY, // Fixed anchor point
        dx: 0, // Velocity X
        dy: 0, // Velocity Y
      };
    })
  );

  // Update physics using requestAnimationFrame
  useEffect(() => {
    const updatePositions = () => {
      setBoxes((prev) =>
        prev.map((box) => {
          // Displacement from the anchor point
          const dxToOrigin = box.originX - box.x;
          const dyToOrigin = box.originY - box.y;

          // Spring force toward the anchor (F = -k * displacement)
          const forceToOriginX = dxToOrigin * originForce;
          const forceToOriginY = dyToOrigin * originForce;

          // Damping force (F = -d * velocity)
          const dampingForceX = -damping * box.dx;
          const dampingForceY = -damping * box.dy;

          // Total forces
          let totalForceX = forceToOriginX + dampingForceX;
          let totalForceY = forceToOriginY + dampingForceY;

          // Apply cursor attraction if the cursor is within effect distance
          if (cursorPosition.current) {
            const dxToCursor = cursorPosition.current.x - box.x;
            const dyToCursor = cursorPosition.current.y - box.y;
            const distanceToCursor = Math.sqrt(dxToCursor ** 2 + dyToCursor ** 2);

            if (distanceToCursor < cursorEffectDistance) {
              const effectStrength = cursorForce * (1 - distanceToCursor / cursorEffectDistance);
              totalForceX += dxToCursor * effectStrength;
              totalForceY += dyToCursor * effectStrength;
            }
          }

          // Update velocities
          const newDX = box.dx + totalForceX;
          const newDY = box.dy + totalForceY;

          // Update positions
          const newX = box.x + newDX;
          const newY = box.y + newDY;

          return {
            ...box,
            x: newX,
            y: newY,
            dx: newDX,
            dy: newDY,
          };
        })
      );

      // Schedule the next frame
      animationFrameRef.current = requestAnimationFrame(updatePositions);
    };

    animationFrameRef.current = requestAnimationFrame(updatePositions);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [originForce, damping, cursorForce, cursorEffectDistance]);

  const handleMouseMove = (e: React.MouseEvent) => {
    cursorPosition.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <div className="relative w-full h-screen bg-gray-900" onMouseMove={handleMouseMove}>
      {/* Main centered element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 bg-blue-500 text-white font-bold text-center flex items-center justify-center rounded-lg shadow-lg">
          Center
        </div>
      </div>

      {/* Floating boxes and anchor points */}
      {boxes.map((box, index) => (
        <div key={index}>
          {/* Anchor point */}
          <div
            className="absolute w-2 h-2 bg-yellow-500 rounded-full"
            style={{
              left: `${box.originX}px`,
              top: `${box.originY}px`,
              transform: "translate(-50%, -50%)",
            }}
          ></div>

          {/* Floating box */}
          <div
            className="absolute w-16 h-8 bg-red-500 text-white font-medium flex items-center justify-center rounded shadow-lg"
            style={{
              transform: `translate(${box.x}px, ${box.y}px)`,
            }}
          >
            Box {index + 1}
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-5 left-5 bg-gray-800 p-4 rounded-lg shadow-lg text-white">
        <div className="mb-4">
          <label className="block mb-2">Origin Force (Spring Constant): {originForce}</label>
          <input
            type="range"
            min="0.01"
            max="0.2"
            step="0.01"
            value={originForce}
            onChange={(e) => setOriginForce(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Damping (Critical Damping Factor): {damping}</label>
          <input
            type="range"
            min="0.01"
            max="0.5"
            step="0.01"
            value={damping}
            onChange={(e) => setDamping(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Cursor Force: {cursorForce}</label>
          <input
            type="range"
            min="0.001"
            max="0.05"
            step="0.001"
            value={cursorForce}
            onChange={(e) => setCursorForce(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-2">Cursor Effect Distance: {cursorEffectDistance} px</label>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={cursorEffectDistance}
            onChange={(e) => setCursorEffectDistance(parseInt(e.target.value, 10))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
