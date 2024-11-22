"use client";

import { useEffect, useState } from "react";

export default function Home() {
  // Gradient options for the page
  const gradients = {
    day: "var(--gradient-day)",
    sunset: "var(--gradient-sunset)",
    night: "var(--gradient-night)",
  };

  // Solid background colors for the body
  const bodyBackgrounds = {
    day: "#1c1d2c",
    sunset: "#000000",
    night: "#000000",
  };

  // State for gradient and body background
  const [state, setState] = useState({
    gradient: "",
    bodyColor: "",
  });

  // Function to determine the gradient and background color based on the time of day
  const calculateTimeBasedState = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
      return { gradient: gradients.day, bodyColor: bodyBackgrounds.day };
    } else if (hour >= 18 && hour < 20) {
      return { gradient: gradients.sunset, bodyColor: bodyBackgrounds.sunset };
    } else {
      return { gradient: gradients.night, bodyColor: bodyBackgrounds.night };
    }
  };

  // Initialize state client-side after the component mounts
  useEffect(() => {
    const initialState = calculateTimeBasedState();
    setState(initialState);
    document.body.style.backgroundColor = initialState.bodyColor;

    // Update background color dynamically every minute
    const interval = setInterval(() => {
      const updatedState = calculateTimeBasedState();
      setState(updatedState);
      document.body.style.backgroundColor = updatedState.bodyColor;
    }, 60 * 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Helper function to check if a gradient is active
  const isActive = (gradient: string) => state.gradient === gradient;

  return (
    <div
      className="h-screen w-screen transition-all duration-500"
      style={{ backgroundImage: state.gradient }}
    >
      <main className="flex flex-col justify-center items-center h-full">
        <h1 className="text-gray-900 dark:text-white text-4xl font-bold mb-8">
          Gradient Background Test
        </h1>

        {/* Button controls */}
        <div className="flex gap-6">
          {/* Day Button */}
          <button
            onClick={() => {
              const newState = { gradient: gradients.day, bodyColor: bodyBackgrounds.day };
              setState(newState);
              document.body.style.backgroundColor = newState.bodyColor;
            }}
            className={`px-6 py-3 rounded-lg text-white font-medium transition-all ${
              isActive(gradients.day)
                ? "bg-green-700 border-4 border-green-500 shadow-lg scale-105"
                : "bg-green-500 hover:bg-green-600 shadow-md"
            }`}
          >
            Day
          </button>

          {/* Sunset Button */}
          <button
            onClick={() => {
              const newState = { gradient: gradients.sunset, bodyColor: bodyBackgrounds.sunset };
              setState(newState);
              document.body.style.backgroundColor = newState.bodyColor;
            }}
            className={`px-6 py-3 rounded-lg text-white font-medium transition-all ${
              isActive(gradients.sunset)
                ? "bg-orange-700 border-4 border-orange-500 shadow-lg scale-105"
                : "bg-orange-500 hover:bg-orange-600 shadow-md"
            }`}
          >
            Sunset
          </button>

          {/* Night Button */}
          <button
            onClick={() => {
              const newState = { gradient: gradients.night, bodyColor: bodyBackgrounds.night };
              setState(newState);
              document.body.style.backgroundColor = newState.bodyColor;
            }}
            className={`px-6 py-3 rounded-lg text-white font-medium transition-all ${
              isActive(gradients.night)
                ? "bg-gray-900 border-4 border-gray-600 shadow-lg scale-105"
                : "bg-gray-700 hover:bg-gray-800 shadow-md"
            }`}
          >
            Night
          </button>
        </div>
      </main>
    </div>
  );
}
