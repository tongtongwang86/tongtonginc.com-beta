"use client";
import { useState, useRef, useEffect } from "react";

export default function Page3() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<string | null>(null);

  const detailsRef = useRef<HTMLDivElement>(null);

  const items = [
    { id: 1, name: "Item 1", description: "This is a short description for Item 1." },
    { id: 2, name: "Item 2", description: "This is a shortItem" },
    { id: 3, name: "Item 3", description: "This or Item 3." },
    { id: 4, name: "Item 4", description: "This is a longer description for Item 4 s s  s s s s songer description for Item 4 s s  s s s s songer description for Item 4 s s  s s s s songer description for Item 4 s s  s s s s songer description for Item 4 s s  s s s s songer description for Item 4 s s  s s s s songer description for Item 4 s s  s s s s songer description for Item 4 s s  s s s s songer description for Item 4 s s  s s s s songer description for Item 4 s s  s s s s songer description for Item 4 s s  s s s s s 4 s s  s s s s s 4 s s  s s s s s." },
  ];

  const selectedItemDetails = items.find((item) => item.name === selectedItem);

  const handleItemClick = (itemName: string) => {
    setSelectedItem((prev) => (prev === itemName ? null : itemName));
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      detailsRef.current &&
      !detailsRef.current.contains(e.target as Node) &&
      !(e.target as HTMLElement).closest("button")
    ) {
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    // Adjust the height of the details container dynamically
    if (detailsRef.current) {
      setContainerHeight(detailsRef.current.scrollHeight);
    } else {
      setContainerHeight(null); // Reset height when no item is selected
    }

    // Dynamically adjust the width based on the selected item's description length
    if (selectedItem) {
      setContainerWidth("75%"); // When an item is selected, reduce the width
    } else {
      setContainerWidth("100%"); // Full width when no item is selected
    }
  }, [selectedItem]);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="flex justify-center items-center min-h-screen "
      
    >
      <div
        className="flex flex-col ou md:flex-row max-w-[900px] w-[90dvw]  bg-white gap-4  transition-all duration-500 ease-in-out"
      
        onClick={(e) => e.stopPropagation()} // Prevent click propagation within the content
      >
        {/* Box 1 and Details Pane */}
        <div className="flex flex-col bg-red-500 flex-auto gap-4 overflow-hidden transition-all duration-500 ease-in-out justify-center basis-1">
          {/* Box 1 */}
          <div
            className="bg-green-500 text-center transition-all duration-500 ease-in-out"
            style={{
              width: selectedItem ? "40%" : "100%", // Smooth height animation
            }}
          >
            {/* SVG to fit text dynamically */}
            <svg viewBox="0 0 43 15" className="w-full h-full drop-shadow-custom">
              <text
                x="50%"
                y="47%"
                textAnchor="middle"
                fontFamily="'Profbens', sans-serif"
                alignmentBaseline="middle"
                fontSize="7"
                lengthAdjust="spacingAndGlyphs"
                fill="var(--logocolor)"
              >
                Tongtong.inc
              </text>
            </svg>
          </div>

          {/* Animated Details Panel */}
          <div
            className="transition-all overflow-hidden bg-red-300 rounded-lg"
            style={{
              height: containerHeight ? `${containerHeight}px` : "0px", // Dynamic height
              transition: "height 0.5s ease",
            }}
          >
            {selectedItem && (
              <div ref={detailsRef} className="text-wrap opacity-100 transition-opacity p-4">
                <h2 className="text-xl font-bold">{selectedItem}</h2>
                <p className="mt-2 text-wrap text-gray-700">{selectedItemDetails?.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar List */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            selectedItem ? "basis-1/4" : "basis-1/3"
          }  bg-blue-500 flex justify-center items-center`}
        >
          <ul className="space-y-4 w-full">
            {items.map((item) => (
              <li key={item.id} className="flex justify-center">
                <button
                  onClick={() => handleItemClick(item.name)}
                  className={`w-3/4 max-w-xs min-w-[200px] text-center p-4 rounded-lg bg-white/40 backdrop-blur-md shadow-lg hover:bg-white/50 transition-transform duration-300 ${
                    selectedItem === item.name ? "transform scale-110" : ""
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
