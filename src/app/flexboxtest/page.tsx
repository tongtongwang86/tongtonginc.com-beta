"use client";
import { useState, useRef, useEffect } from "react";

export default function Page3() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<string | null>(null);

  const detailsRef = useRef<HTMLDivElement>(null);

  const items = [
    { id: 1, name: "Item 1", description: "This is a short description for Item 1." },
    { id: 2, name: "Item 2", description: "This is a short description for Item 2." },
    { id: 3, name: "Item 3", description: "This is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for ItemThis is a long description for Item 3." },
    { id: 4, name: "Item 4", description: "This is a short description for Item 4." },
  ];

  const selectedItemDetails = items.find((item) => item.name === selectedItem);

  const handleItemClick = (itemName: string) => {
    setSelectedItem((prev) => (prev === itemName ? null : itemName));
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target as HTMLElement).closest("button")) {
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    // Adjust the height of the details container when the selected item changes
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

  return (
    <div
      className="flex justify-center items-center min-h-screen p-4 bg-gray-100"
      onClick={handleOutsideClick}
    >
      <div
        className="flex flex-col md:flex-row max-w-[900px] w-[90dvw] rounded-lg shadow-lg overflow-hidden bg-white gap-4 p-6 transition-all duration-500 ease-in-out"
        style={{
          width: containerWidth, // Dynamically set width
        }}
        onClick={(e) => e.stopPropagation()} // Prevent click propagation within the content
      >
        {/* Box 1 and Details Pane */}
        <div
          className={`flex flex-col flex-auto gap-4 transition-all duration-500 ease-in-out ${
            selectedItem ? "justify-center" : "justify-center"
          }`}
        >
          {/* Box 1 */}
          <div
            className={`bg-green-500 text-white rounded-md text-center transition-all duration-500 ease-in-out`}
            style={{
              width: selectedItem ? "40%" : "100%", // Smooth height animation
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

          {/* Animated Details Panel */}
          <div
            className="transition-all duration-500 ease-in-out overflow-hidden"
            style={{
              height: containerHeight !== null ? `${containerHeight}px` : 0,
            }}
          >
            {selectedItem && (
              <div
                ref={detailsRef}
                className="p-6 bg-gray-200 rounded-md text-center shadow-md"
              >
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
          } p-4 bg-blue-500 rounded-md flex justify-center items-center`}
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
