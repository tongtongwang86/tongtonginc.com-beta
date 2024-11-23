"use client";

import { useState } from "react";

export default function Page3() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[900px] w-[90dvw] bg-white p-6 shadow-md rounded-md flex flex-row flex-wrap md:flex-nowrap gap-4">

        {/* Box 1 and Details Box in a Column */}
        <div className="flex flex-col flex-auto basis-60 gap-4 transition-all duration-300">
          {/* Box 1 */}
          <div
            className={`bg-green-500 text-white p-4 rounded-md text-center ${
              showDetails ? "h-20" : "h-40"
            }`}
            style={{
              fontSize: showDetails
                ? "clamp(10px, 4vw, 30px)" // Smaller when details show
                : "clamp(10px, 5vw, 50px)", // Larger when no details
              transition: "all 0.3s ease",
            }}
          >
            {/* SVG to fit text dynamically */}
            <svg viewBox="0 0 43 13" className="w-full h-full drop-shadow-custom">
              <text
                x="50%"
                y="40%"
                textAnchor="middle"
                fontFamily="'Profbens', sans-serif"
                alignmentBaseline="middle"
                fontSize="8"
                lengthAdjust="spacingAndGlyphs"
                fill="var(--logocolor)"
              >
                Tongtong.inc
              </text>
            </svg>
          </div>

          {/* Details Box */}
          {showDetails && (
            <div className="bg-gray-200 p-6 rounded-md text-center text-black flex-grow">
              Details 
            </div>
          )}
        </div>

        {/* Box 2 */}
        <div className="flex-auto basis-40 bg-blue-500 text-white p-4 rounded-md text-center">
          <div>Box 2</div>
          <button
            onClick={() => setShowDetails((prev) => !prev)}
            className="mt-4 bg-white text-blue-500 px-3 py-2 rounded-md hover:bg-gray-100"
          >
            {showDetails ? "Hide Details" : "Add Details"}
          </button>
        </div>

      </div>
    </div>
  );
}
