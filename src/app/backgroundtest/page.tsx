"use client";

import { useEffect, useState } from "react";

export default function Home() {
  // Gradient options for the page
  const gradients = {
    day: "var(--gradient-day)",
    sunset: "var(--gradient-sunset)",
    night: "var(--gradient-night)",
  };

  // Theme colors for the meta tag
  const themeColors = {
    day: "#1c1d2c",
    sunset: "#000000",
    night: "#000000",
  };

  // State for gradient and theme color
  const [state, setState] = useState({
    gradient: "",
    themeColor: "",
  });

  // Function to determine the gradient and theme color based on the time of day
  const calculateTimeBasedState = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
      return { gradient: gradients.day, themeColor: themeColors.day };
    } else if (hour >= 18 && hour < 20) {
      return { gradient: gradients.sunset, themeColor: themeColors.sunset };
    } else {
      return { gradient: gradients.night, themeColor: themeColors.night };
    }
  };

  // Function to update the theme color meta tag
  const updateThemeColor = (color: string) => {
    let themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeMeta) {
      themeMeta = document.createElement("meta");
      themeMeta.setAttribute("name", "theme-color");
      document.head.appendChild(themeMeta);
    }
    themeMeta.setAttribute("content", color);
  };

  // Initialize state client-side after the component mounts
  useEffect(() => {
    const initialState = calculateTimeBasedState();
    setState(initialState);
    updateThemeColor(initialState.themeColor);

    // Update theme color dynamically every minute
    const interval = setInterval(() => {
      const updatedState = calculateTimeBasedState();
      setState(updatedState);
      updateThemeColor(updatedState.themeColor);
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
          Dynamic Theme Color
        </h1>

        {/* Button controls */}
        <div className="flex gap-6">
          {/* Day Button */}
          <button
            onClick={() => {
              const newState = { gradient: gradients.day, themeColor: themeColors.day };
              setState(newState);
              updateThemeColor(newState.themeColor);
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
              const newState = { gradient: gradients.sunset, themeColor: themeColors.sunset };
              setState(newState);
              updateThemeColor(newState.themeColor);
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
              const newState = { gradient: gradients.night, themeColor: themeColors.night };
              setState(newState);
              updateThemeColor(newState.themeColor);
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
