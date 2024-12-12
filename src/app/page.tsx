"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SuperEllipse from "react-superellipse";
import * as UI from '@/components';

export default function Page3() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Track image loading state

  const detailsRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      id: 1,
      name: "Revolute",
      description:
        "Revolute, a compact and versatile jog wheel the size of a keyboard key, it supports bluetooth and is fully wireless. Use it to improve your workflows like automating brush size, scrubbing in a timeline, or repeatedly pressing a key quickly in a game.",
      icon: "/assets/homepage/icons/Revolute.svg",
      photo: "/assets/homepage/hero/Revolute.png",
      buttons: [
        { label: "Learn More", link: "https://depricated.tongtonginc.com/revolute" },
      ],
    },
    {
      id: 2,
      name: "Cloud",
      description: "Login page for Tongtong.inc cloud.",
      icon: "/assets/homepage/icons/Cloud.svg",
      photo: "/assets/homepage/hero/Cloud.svg",
      buttons: [
        { label: "Login", link: "https://cloud.tongtonginc.com" },

      ],
    },
    {
      id: 4,
      name: "ECA",
      description: "I run two extracurricular classes, 3D Artmaking and Electronics engineering.",
      icon: "/assets/homepage/icons/ECA.svg",
      photo: "/assets/homepage/hero/ECA.svg",
      buttons: [
        { label: "View Classes", link: "/eca" },
      ],
    },
    {
      id: 5,
      name: "About",
      description: "Learn about the mastermind behind all these shenanigans.",
      icon: "/assets/homepage/icons/About.svg",
      photo: "/assets/homepage/hero/About.png",
      buttons: [
        { label: "About Me", link: "https://depricated.tongtonginc.com/about" },
      ],
    },
    {
      id: 6,
      name: "Other",
      description: "Here are some development test pages.",
      icon: "/assets/homepage/icons/Other.svg",
      photo: "/assets/homepage/hero/Other.svg",
      buttons: [
        { label: "backgroundTest", link: "/backgroundtest" },
        { label: "Page1", link: "/page1" },
        { label: "Page2", link: "/boxphysicssnaptest" },
        { label: "Page3", link: "/page3" },
        { label: "Revolute", link: "/revolute" },
        { label: "flexboxtest", link: "/flexboxtest" },
        { label: "lesson2", link: "/electronics/lesson2" },
      ],
    },
  ];
  const selectedItemDetails = items.find((item) => item.name === selectedItem);

  const handleItemClick = (itemName: string) => {
    setSelectedItem((prev) => (prev === itemName ? null : itemName));
    setLoading(true); // Reset loading state when selecting a new item
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

  const themeColors = {
    day: "var(--navbar-day)",
    sunset: "var(--navbar-sunset)",
    night: "var(--navbar-night)",
  };

  const [state, setState] = useState({
    gradient: "",
    themeColor: "",
  });

  const resolveCSSVariable = (color: string) => {
    return color.startsWith("var(")
      ? getComputedStyle(document.documentElement).getPropertyValue(color.slice(4, -1).trim())
      : color;
  };

  const updateThemeColor = (color: string) => {
    const resolvedColor = resolveCSSVariable(color).trim();

    let themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeMeta) {
      themeMeta = document.createElement("meta");
      themeMeta.setAttribute("name", "theme-color");
      document.head.appendChild(themeMeta);
    }
    themeMeta.setAttribute("content", resolvedColor);

    document.body.style.backgroundColor = resolvedColor;
  };

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

  const handleAppearanceChange = () => {
    const updatedState = calculateTimeBasedState();
    setState(updatedState);
    updateThemeColor(updatedState.themeColor);
  };

  useEffect(() => {
    const initialState = calculateTimeBasedState();
    setState(initialState);
    updateThemeColor(initialState.themeColor);

    const interval = setInterval(() => {
      const updatedState = calculateTimeBasedState();
      setState(updatedState);
      updateThemeColor(updatedState.themeColor);
    }, 60 * 1000);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleAppearanceChange);

    return () => {
      clearInterval(interval);
      mediaQuery.removeEventListener("change", handleAppearanceChange);
    };
  }, []);

// Helper function to check if a gradient is active
  const isActive = (gradient: string) => state.gradient === gradient;

  const handleImageLoad = () => {
    setLoading(false); // Image loaded, set loading to false
  };

  return (
    (<div className="relative h-full w-screen transition-all duration-500 " style={{ backgroundImage: state.gradient }}>
      <Image
        // Path relative to the public folder
        src="/assets/homepage/christmas/bg.svg"
        alt="Christmas Background"
        className="absolute bottom-0 w-screen "
        width={1200}
        // Cover the entire container
        height={1200}
        // Optional: Use this if the image is critical for loading above-the-fold
        priority
        style={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "cover"
        }} />
      <UI.Snow
        snowflakeCount={50}        // Number of snowflakes
        speedMin={0.2}              // Minimum falling speed
        speedMax={1}              // Maximum falling speed
        windSpeedMin={-0.5}         // Minimum horizontal speed (wind)
        windSpeedMax={0.5}          // Maximum horizontal speed (wind)
        radiusMin={2}               // Minimum radius (size)
        radiusMax={4}               // Maximum radius (size)
        timeScale={100}
        horizontalSpeedScale={1} 
      />
      <main className="flex flex-col justify-center items-center h-full  ">


        <div className="flex justify-center items-center min-h-screen">
          <div
            className="flex flex-col ou md:flex-row max-w-[900px] w-[90dvw] gap-4 transition-all duration-500 ease-in-out"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation within the content
          >
            {/* Box 1 and Details Pane */}
            <div className="flex flex-col flex-auto gap-4 overflow-hidden transition-all duration-500 ease-in-out justify-center basis-1/2">
             {/* Box 1 */}
              <div className="text-center transition-all duration-500 ease-in-out" style={{ width: selectedItem ? "40%" : "100%" }}>
                <svg viewBox="0 0 43 15" className="w-full h-full drop-shadow-custom">
                  <text x="50%" y="47%" textAnchor="middle" fontFamily="'Profbens', sans-serif" alignmentBaseline="middle" fontSize="7" lengthAdjust="spacingAndGlyphs" fill="var(--logocolor)">
                    Tongtong.inc
                  </text>
                </svg>
              </div>

              {/* Animated Details Panel */}
              <SuperEllipse p1={17} p2={50} className="transition-all  bg-white/10 backdrop-blur-lg rounded-2xl" style={{ height: containerHeight ? `${containerHeight}px` : "0px", transition: "height 0.5s ease" }}>
              <div className="rounded-[45px] shadow-visionprohome transition-all ">
                {selectedItem && (
                  <div ref={detailsRef} className="p-6 text-left">
                    <div className="items-start">
                      <div
                        className={`rounded-2xl float-left m-2 w-36 h-36 object-cover transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100 "}`}
                      >
                        <Image
                          src={selectedItemDetails?.photo || ""}
                          alt=""
                          className="w-full"
                          width={100}
                          height={100}
                          onLoadingComplete={handleImageLoad}
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "cover"
                          }} />
                      </div>
                      <div className="items w-full">
                        <h2 className="w-full text-5xl text-center">{selectedItem}</h2>
                        <p className="mt-3 mx-4 text-xl">{selectedItemDetails?.description}</p>
                      </div>
                    </div>

                    {/* Buttons positioned at the bottom-right */}
                    <div className="flex flex-wrap justify-end gap-3 pt-5 w-full">
                      {selectedItemDetails?.buttons.map((button, index) => (
                        <a key={index} href={button.link} className="text-black font-bold bg-white rounded-full px-4 py-2 hover:bg-blue-200 transition duration-300">
                          {button.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                </div>
              </SuperEllipse>
            </div>

            {/* Sidebar List */}
            <div className={`transition-all py-5 duration-500 ease-in-out ${selectedItem ? "basis-1/4" : "basis-1/3"} flex justify-center items-center`}>
              <ul className="space-y-4 w-full">
                {items.map((item) => (
                  <li key={item.id} className="flex justify-center">
                    <button
                      onClick={() => handleItemClick(item.name)}
                      className={`justify-center w-10/12 content-center rounded-2xl  overflow-hidden ${selectedItem === item.name ? "transform transition-all scale-110 outline" : ""}`}
                    >
                      <SuperEllipse p1={6} p2={20} className={` bg-white/10 backdrop-blur-lg  transition-all duration-500 hover:bg-white/30 `}>

                      <div className="w-full  items-center p-4 flex flex-row rounded-2xl shadow-visionprohome transition-all">
                        <Image
                          src={item.icon}
                          alt=""
                          className="aspect-auto w-9 object-cover"
                          width={100}
                          height={100}
                          style={{
                            filter: "var(--svg-icon)",
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "cover"
                          }} />
                        <div className="text-xl w-full">{item.name}</div>
                        </div>



                      </SuperEllipse>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>)
  );
}
