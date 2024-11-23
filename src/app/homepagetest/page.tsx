"use client";
import { useState } from "react";

export default function Page3() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

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

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target as HTMLElement).closest("button")) {
      setSelectedItem(null);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen p-4"
      onClick={handleContainerClick}
    >
      <div className="flex flex-col md:flex-row max-w-[900px] w-[90dvw] rounded-lg shadow-lg overflow-hidden">
        {/* Detail View */}
        <div
          className={`flex flex-col transition-all duration-500 ease-in-out ${
            selectedItem ? "flex-[2] justify-start" : "flex-[1] justify-center"
          } items-center`}
        >
          {/* Placeholder */}
          <div
            className={`w-full flex justify-center items-center transition-all duration-500 ${
              selectedItem ? "h-[120px]" : "h-[150px]"
            }`}
          >
            <p
  className="font-bold text-center font-ProfBens outline "
  style={{
    color: "var(--logoHover)", // This will override any default browser styling
    fontSize: selectedItem ? "clamp(2rem, 5vw, 3rem)" : "clamp(2rem, 10vw, 6rem)",
    lineHeight: "1.6",
    transition: "all 0.5s ease",
  }}
>
  Tongtong.inc
</p>
          </div>

          {/* Detail Content */}
          {selectedItem && (
            <div className="p-8 bg-white/50 backdrop-blur-md shadow-lg rounded-lg w-full max-w-lg text-center">
              <h2 className="text-3xl font-bold">{selectedItem}</h2>
              <p className="mt-4 text-sm">{selectedItemDetails?.description}</p>
            </div>
          )}
        </div>

        {/* List View */}
        <div className="flex-1 p-6 flex justify-center items-center">
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
