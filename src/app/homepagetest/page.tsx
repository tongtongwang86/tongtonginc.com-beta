"use client";
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import SuperEllipse from "react-superellipse";



export default function Page3() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<string | null>(null);

  const detailsRef = useRef<HTMLDivElement>(null);

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
      photo: "/assets/homepage/hero/Other.png",
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

  const gradients = {
    day: "var(--gradient-day)",
    sunset: "var(--gradient-sunset)",
    night: "var(--gradient-night)",
  };

  // Theme colors for the meta tag and body background
  const themeColors = {
    day: "var(--navbar-day)",
    sunset: "var(--navbar-sunset)",
    night: "var(--navbar-night)",
  };

  // State for gradient and theme color
  const [state, setState] = useState({
    gradient: "",
    themeColor: "",
  });

  // Function to resolve CSS variables to their computed values
  const resolveCSSVariable = (color: string) => {
    return color.startsWith("var(")
      ? getComputedStyle(document.documentElement).getPropertyValue(
          color.slice(4, -1).trim()
        )
      : color;
  };

  // Function to update the <meta> tag and body background color
  const updateThemeColor = (color: string) => {
    const resolvedColor = resolveCSSVariable(color).trim();

    // Update <meta> tag
    let themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeMeta) {
      themeMeta = document.createElement("meta");
      themeMeta.setAttribute("name", "theme-color");
      document.head.appendChild(themeMeta);
    }
    themeMeta.setAttribute("content", resolvedColor);

    // Update body background color
    document.body.style.backgroundColor = resolvedColor;
  };

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

  // Function to handle light/dark mode changes
  const handleAppearanceChange = () => {
    const updatedState = calculateTimeBasedState();
    setState(updatedState);
    updateThemeColor(updatedState.themeColor);
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

    // Add event listener for system light/dark mode changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleAppearanceChange);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      mediaQuery.removeEventListener("change", handleAppearanceChange);
    };
  }, []);

  // Helper function to check if a gradient is active
  const isActive = (gradient: string) => state.gradient === gradient;


  return (
    <div
    className="h-screen w-screen transition-all duration-500"
    style={{ backgroundImage: state.gradient }}
  >
    <main className="flex flex-col justify-center items-center h-full">
    
    <div
      className="flex justify-center items-center min-h-screen "

    >
      <div
        className="flex flex-col ou md:flex-row max-w-[900px] w-[90dvw]   gap-4  transition-all duration-500 ease-in-out"

        onClick={(e) => e.stopPropagation()} // Prevent click propagation within the content
      >
        {/* Box 1 and Details Pane */}

        <div className="flex flex-col  flex-auto gap-4 overflow-hidden transition-all duration-500 ease-in-out justify-center basis-1/2">
          {/* Box 1 */}
          <div
            className=" text-center transition-all duration-500 ease-in-out"
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

          <SuperEllipse
            p1={17} p2={50}
            className="transition-all overflow-hidden bg-white/10 backdrop-blur-lg  rounded-2xl"
            style={{
              height: containerHeight ? `${containerHeight}px` : "0px", // Dynamic height
              transition: "height 0.5s ease",
            }}

          >




            {selectedItem && (
              <div ref={detailsRef} className="p-6  text-left ">
                <div className="items-start">
                  <Image
                    src={selectedItemDetails?.photo || ""}
                    alt=""
                    className="rounded-2xl float-left m-2 w-36 h-36 object-cover"
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






          </SuperEllipse>
        </div>


        {/* Sidebar List */}
        <div
          className={`transition-all  duration-500 ease-in-out ${selectedItem ? "basis-1/4" : "basis-1/3"
            }  flex justify-center items-center `}
        >
          <ul className="space-y-4 w-full  ">
            {items.map((item) => (
              <li key={item.id} className={`flex justify-center  `}

              >


                <button
                  onClick={() => handleItemClick(item.name)}
                  className={`justify-center w-10/12 content-center rounded-2xl overflow-hidden ${selectedItem === item.name ? " transform transition-all scale-110 outline" : ""} `}




                >
                  <SuperEllipse
                    p1={6} p2={20}

                    className={`  p-4 bg-white/10 backdrop-blur-lg shadow-lg transition-all duration-500 flex flex-row items-center hover:bg-white/30 $ `}
                  >




                    <Image
                      src={item.icon}
                      alt=""
                      className=" aspect-auto w-9 object-cover"
                      width="100"
                      height="100"
                      style={{ filter: "var(--svg-icon)" }}

                    />


                    <div className="text-xl w-full">{item.name}</div>


                  </SuperEllipse>

                </button>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    </main>
    </div>
  );
}
