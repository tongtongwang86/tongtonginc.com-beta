"use client";
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import { HStack } from "@/components";

export default function Page3() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Updated items array with buttons for each item
  const items = [
    {
      id: 1,
      name: "Revolute",
      description: "Revolute, a compact and versatile jog wheel the size of a keyboard key, it supports bluetooth and is fully wireless. Use it to improve your workflows like automating brush size, scrubbing in a timeline, or repeatedly pressing a key quickly in a game.",
      icon: "/assets/homepage/icons/Revolute.svg",
      photo: "/assets/homepage/hero/Revolute.png",
      buttons: [
        { label: "Learn More", link: "/revolute" },
        { label: "hi", link: "/revolute" },
        { label: "Buy Now", link: "/revolute-buy" }
      ]
    },
    {
      id: 2,
      name: "Cloud",
      description: "Login page for Tongtong.inc cloud.",
      icon: "/assets/homepage/icons/Cloud.svg",
      photo: "/assets/homepage/hero/Cloud.png",
      buttons: [
        { label: "Learn More", link: "/cloud" },
        { label: "Sign Up", link: "/cloud-signup" }
      ]
    },
    {
      id: 4,
      name: "ECA",
      description: "I run two extracurricular classes, 3D Artmaking and Electronics engineering.",
      icon: "/assets/homepage/icons/ECA.svg",
      photo: "/assets/homepage/hero/ECA.png",
      buttons: [
        { label: "View Classes", link: "/eca-classes" },
        { label: "Contact", link: "/eca-contact" }
      ]
    },
    {
      id: 5,
      name: "About",
      description: "Learn about the mastermind behind all these shenanigans.",
      icon: "/assets/homepage/icons/About.svg",
      photo: "/assets/homepage/hero/About.png",
      buttons: [
        { label: "About Me", link: "/about" },
        { label: "Portfolio", link: "/portfolio" }
      ]
    },
    {
      id: 6,
      name: "Other",
      description: "Here are some other cool pages.",
      icon: "/assets/homepage/icons/Other.svg",
      photo: "/assets/homepage/hero/Revolute.png",
      buttons: [
        { label: "3D", link: "/3D" },
        { label: "SnapTest", link: "/boxphysicssnaptest" },
        { label: "backgroundTest", link: "/backgroundtest" },
        { label: "gallaryTest", link: "/gallarytest" },
        { label: "Page1", link: "/page1" },
        { label: "Page2", link: "/page2" },
        { label: "Page3", link: "/page3" },
        { label: "Page3", link: "/page4" },
      ]
    },
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
    <div className="flex justify-center items-center min-h-screen">
      <div
        className={`flex flex-col md:flex-row max-w-[900px] w-[90dvw] gap-4 transition-all ease-in-out duration-500`}
      >
        {/* Left Section */}
        <div
          className={`flex flex-col flex-auto gap-4 transition-all duration-500 ease-in-out ${selectedItem ? "justify-center" : "justify-center"
            }`}
        >
          {/* Logo Box */}
          <div
            className={`p-2 text-center transition-all duration-500 ease-in-out`}
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
              <div className="p-6 bg-white/30 backdrop-blur-md text-left">
                <div className="items-start">
                  <Image
                    src={selectedItemDetails?.photo || ""}
                    alt=""
                    className="float-left m-2 w-36 h-36 object-cover"
                    width="100"
                    height="100"
                  />
                  <div className="items w-full">
                    <h2 className="w-full text-5xl text-center">{selectedItem}</h2>
                    <p className="mt-3 mx-4 text-xl">{selectedItemDetails?.description}</p>

                    
                  </div>
                </div>

                {/* Buttons positioned at the bottom-right */}
<div className="flex flex-wrap justify-end gap-3 pt-5 w-full">
  {selectedItemDetails?.buttons.map((button, index) => (
    <a
      key={index}
      href={button.link}
      className="text-black font-bold bg-white rounded-full px-4 py-2 hover:bg-blue-200 transition duration-300"
    >
      {button.label}
    </a>
  ))}
</div>

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
                  className={`w-3/4 max-w-xs min-w-[200px] text-center p-4 rounded-xl bg-white/30 backdrop-blur-md shadow-lg transition-transform duration-300 flex flex-row items-center ${selectedItem === item.name ? "transform scale-110 bg-white/55 " : ""
                    }`}
                >



                  <Image
                    src={item.icon}
                    alt=""
                    className="aspect-auto w-9 object-cover"
                    width="100"
                    height="100"
                   style={{ filter: "var(--svg-icon)" }}

                  />
                  <div className="text-xl w-full">{item.name}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
