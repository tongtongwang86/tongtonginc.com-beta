"use client";

import React, { ReactNode, CSSProperties, useEffect } from "react";

interface BodyContainerProps {
  children: ReactNode; // Content inside the container
  className?: string; // Custom CSS or Tailwind classes
  style?: CSSProperties; // Optional inline styles for extra customization
  navColor?: string; // Navigation bar color (gradient start)
  backgroundColor?: string; // Background color of the body container
  logoColor?: string; // Logo text color
  hoverShadowColor?: string; // Hover drop-shadow color
}

const BodyContainer: React.FC<BodyContainerProps> = ({
  children,
  className = "",
  style,
  navColor = "#161925", // Default nav gradient start color
  backgroundColor = "#1c1d2c", // Default body background color
  logoColor = "#ded2b4", // Default logo color
  hoverShadowColor = "rgba(222, 210, 180, 0.8)", // Default hover shadow color
}) => {


  const dropoffStyle: CSSProperties = {
    width: "100dvw",
    backgroundImage: `linear-gradient(#5f583700, ${backgroundColor} 60%, ${navColor})`,
    minHeight: "6em",
    marginTop: "-6em",
  };

  // Function to set the <meta name="theme-color"> tag dynamically
  const setThemeColor = (color: string) => {
    let themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeMeta) {
      themeMeta = document.createElement("meta");
      themeMeta.setAttribute("name", "theme-color");
      document.head.appendChild(themeMeta);
    }
    themeMeta.setAttribute("content", color);
  };

  // Set the theme color and body background color on page load
  useEffect(() => {
    // Set the meta theme color
    setThemeColor(navColor);

    // Set the body background color
    document.body.style.backgroundColor = navColor;
  }, [navColor]); // Effect runs when backgroundColor changes

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 z-10 w-full flex items-start h-15 backdrop-blur-lg backdrop-brightness-100 group`}
        style={{
          background: `linear-gradient(to bottom, ${navColor}, #24253900)`,
        }}
      >
        <a
          href="https://tongtonginc.com/"
          className="p-6 text-4xl font-bold font-ProfBens transition duration-200 ease-in-out hover:scale-105"
          style={{
            color: logoColor,
          }}
        >
          {/* Add hover drop shadow dynamically */}
          <span
            className="transition duration-200 ease-in-out"
            style={{
              transition: "text-shadow 0.2s ease-in-out",
            }}
          >
            Tongtong.inc
          </span>
        </a>

        <style jsx>{`
          a:hover span {
            text-shadow: 0 0 24px ${hoverShadowColor};
          }
        `}</style>
      </nav>

      {/* Body Container */}
      <div
      style={{background: backgroundColor }}
       className={`flex flex-col items-center justify-center min-h-screen ${className}`}
       >
        <div className="pt-24"></div>
        <div
        className="w-full"
        style={{all: 'unset'}}
        >
    {children}

        </div>
        
        
        <div className="pt-24"></div>
      </div>

      {/* Dropoff Gradient */}
      <div className="dropoff" style={dropoffStyle}></div>
    </>
  );
};

export default BodyContainer;
