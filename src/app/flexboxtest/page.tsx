"use client";
import { useState, useRef, useEffect } from "react";

export default function Page3() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const items = [
    { id: 1, name: "Item 1", description: "This is a short description for Item 1." },
    { id: 2, name: "Item 2", description: "This is a short description for Item 2." },
    { id: 3, name: "Item 3", description: "This is a long description for Item 3." },
    { id: 4, name: "Item 4", description: "This is a short description for Item 4." },
  ];

  const selectedItemDetails = items.find((item) => item.name === selectedItem);

  const handleItemClick = (itemName: string) => {
    setSelectedItem((prev) => (prev === itemName ? null : itemName));
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      detailsRef.current &&
      !detailsRef.current.contains(e.target as Node) &&
      !(e.target as HTMLElement).closest("button")
    ) {
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    if (detailsRef.current) {
      setContainerHeight(detailsRef.current.scrollHeight);
    } else {
      setContainerHeight(null);
    }
  }, [selectedItem]);

  // Add event listener to detect outside clicks
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div
        className={`flex flex-col md:flex-row max-w-[900px] w-[90dvw]   gap-4  transition-all ease-in-out duration-500`}
      >
        {/* Left Section */}
        <div
          className={`flex flex-col flex-auto gap-4 transition-all duration-500 ease-in-out ${
            selectedItem ? "justify-center" : "justify-center"
          }`}
        >
          {/* Logo Box */}
          <div
            className={` p-2 text-center transition-all duration-500 ease-in-out`}
            style={{
              width: selectedItem ? "40%" : "100%",
            }}
          >
            <svg viewBox="0 0 43 13" className="w-full h-full drop-shadow-custom">
              <text
                x="50%"
                y="40%"
                textAnchor="middle"
                fontFamily="'Profbens', sans-serif"
                alignmentBaseline="middle"
                fontSize="7px"
                lengthAdjust="spacingAndGlyphs"
                fill="var(--logocolor)"
              >
                Tongtong.inc
              </text>
            </svg>
          </div>

          {/* Animated Details Panel */}
          <div
            ref={detailsRef}
            className="transition-all rounded-2xl duration-500 ease-in-out overflow-hidden"
            style={{
              height: selectedItem ? `${containerHeight}px` : 0,
              opacity: selectedItem ? 1 : 0,
            }}
          >
            {selectedItem && (
              <div className="p-6   bg-white/30 backdrop-blur-md text-center ">
                <h2 className="text-xl font-bold">{selectedItem}</h2>
                <p className="mt-2 text-gray-700">{selectedItemDetails?.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar List */}
        <div
          className={`flex-auto transition-all duration-500 ease-in-out ${
            selectedItem ? "basis-28" : "basis-40"
          } p-1 rounded-md flex justify-center items-center`}
        >
          <ul className="space-y-4 w-full">
            {items.map((item) => (
              <li key={item.id} className="flex justify-center">
                <button
                  onClick={() => handleItemClick(item.name)}
                  className={`w-3/4 max-w-xs min-w-[200px] text-center p-4 rounded-xl bg-white/30 backdrop-blur-md shadow-lg transition-transform duration-300  ${
                    selectedItem === item.name ? "transform scale-110 bg-white/55 " : ""
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
