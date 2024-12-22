"use client"; // Ensure this component is treated as client-side only
import { useEffect, useState, useRef } from "react";

// Type for a box's state
interface BoxState {
  x: number;
  y: number;
  originX: number;
  originY: number;
  dx: number; // Velocity X
  dy: number; // Velocity Y
}

interface CursorPosition {
  x: number;
  y: number;
}

export default function Page3() {
  const numBoxes = 10; // Number of floating boxes
  const boxWidth = 64; // Width of the floating boxes (16rem / 4 = 64px)
  const boxHeight = 64; // Height of the floating boxes (8rem / 4 = 32px)

  // Parameters for forces and distances
  const [originForce, setOriginForce] = useState<number>(0.012); // Spring constant
  const [damping, setDamping] = useState<number>(0.26); // Damping factor
  const [cursorForce, setCursorForce] = useState<number>(0.05);
  const [cursorEffectDistance, setCursorEffectDistance] = useState<number>(80);

  // Initialize state for window size (client-side only)
  const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null);

  const cursorPosition = useRef<CursorPosition | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize boxes after the client-side window size is available
  const [boxes, setBoxes] = useState<BoxState[]>([]);

  // Update window size on client side
  useEffect(() => {
    // Only run on the client side (window is available)
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set the initial window size
    handleResize();

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array, runs only once when the component mounts

  // Initialize boxes after the window size is available
  useEffect(() => {
    if (windowSize) {
      setBoxes(
        Array.from({ length: numBoxes }, () => {
          const originX = Math.random() * windowSize.width;
          const originY = Math.random() * windowSize.height;

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
    }
  }, [windowSize]); // Run when window size changes

  // Update physics using requestAnimationFrame
  useEffect(() => {
    const updatePositions = () => {
      setBoxes((prev) =>
        prev.map((box) => {
          const centerX = box.x + boxWidth / 2;
          const centerY = box.y + boxHeight / 2;

          const dxToOrigin = box.originX - centerX;
          const dyToOrigin = box.originY - centerY;

          const forceToOriginX = dxToOrigin * originForce;
          const forceToOriginY = dyToOrigin * originForce;

          const dampingForceX = -damping * box.dx;
          const dampingForceY = -damping * box.dy;

          let totalForceX = forceToOriginX + dampingForceX;
          let totalForceY = forceToOriginY + dampingForceY;

          if (cursorPosition.current) {
            const dxToCursor = cursorPosition.current.x - centerX;
            const dyToCursor = cursorPosition.current.y - centerY;
            const distanceToCursor = Math.sqrt(dxToCursor ** 2 + dyToCursor ** 2);

            if (distanceToCursor < cursorEffectDistance) {
              const effectStrength = cursorForce * (1 - distanceToCursor / cursorEffectDistance);
              totalForceX += dxToCursor * effectStrength;
              totalForceY += dyToCursor * effectStrength;
            }
          }

          const newDX = box.dx + totalForceX;
          const newDY = box.dy + totalForceY;

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

      animationFrameRef.current = requestAnimationFrame(updatePositions);
    };

    if (windowSize) {
      animationFrameRef.current = requestAnimationFrame(updatePositions);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [originForce, damping, cursorForce, cursorEffectDistance, windowSize]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    cursorPosition.current = { x: e.clientX, y: e.clientY };
  };

  if (!windowSize) {
    return <div>Loading...</div>; // Optional: Show a loading indicator until window size is available
  }

  return (
    <div className="relative w-full h-screen bg-green-500" onMouseMove={handleMouseMove}>
      {/* Floating boxes and anchor points */}
      {boxes.map((box, index) => {
        const centerX = box.x + boxWidth / 2;
        const centerY = box.y + boxHeight / 2;

        return (
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

            {/* Floating box as an image */}
            <img
              src="/assets/boxphysicstest/cat.png"
              alt={`Floating box ${index + 1}`}
              className="absolute"
              style={{
                left: `${box.x}px`,
                top: `${box.y}px`,
                width: `${boxWidth}px`, // Ensure image width is capped by boxWidth
                height: `${boxHeight}px`, // Ensure image height is capped by boxHeight
             
            
                boxShadow: "none", // Optional: Remove any box shadow effects
              }}
            />
          </div>
        );
      })}

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
