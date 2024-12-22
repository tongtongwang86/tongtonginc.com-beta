"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SuperEllipse from "react-superellipse";
import * as UI from '@/components';

export default function Page3() {
    const [containerHeight, setContainerHeight] = useState<number | null>(null);
    const [containerWidth, setContainerWidth] = useState<string | null>(null);

    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    // Default gradient and navbar colors
    const [dayStartColor, setDayStartColor] = useState("#fbf2e6");
    const [dayEndColor, setDayEndColor] = useState("#fdf7f2");
    const [dayNavbarColor, setDayNavbarColor] = useState("#d5d7f5");

    const [sunsetStartColor, setSunsetStartColor] = useState("#fde9d7");
    const [sunsetEndColor, setSunsetEndColor] = useState("#fbf2e6");
    const [sunsetNavbarColor, setSunsetNavbarColor] = useState("#f6c0c0");

    const [nightStartColor, setNightStartColor] = useState("#f3f3f2");
    const [nightEndColor, setNightEndColor] = useState("transparent");
    const [nightNavbarColor, setNightNavbarColor] = useState("#d5c3f3");

    const [state, setState] = useState({
        gradient: "",
        themeColor: "",
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage the collapse state of the menu

    const updateThemeColor = (color: string) => {
        const themeMeta = document.querySelector('meta[name="theme-color"]');
        if (!themeMeta) {
            const meta = document.createElement("meta");
            meta.setAttribute("name", "theme-color");
            document.head.appendChild(meta);
        }
        document.body.style.backgroundColor = color;
    };

    const calculateGradient = (type: "day" | "sunset" | "night") => {
        if (type === "day") {
            return `radial-gradient(ellipse at bottom, ${dayStartColor} 0%, ${dayEndColor} 100%)`;
        } else if (type === "sunset") {
            return `radial-gradient(ellipse at bottom left, ${sunsetStartColor} 0%, ${sunsetEndColor} 60%)`;
        } else if (type === "night") {
            return `radial-gradient(ellipse at bottom, ${nightStartColor} 0%, ${nightEndColor} 100%)`;
        }
    };

    
    const handleGradientChange = (type: "day" | "sunset" | "night") => {
        const newState = {
            gradient: calculateGradient(type) || "",  // Fallback to an empty string if calculateGradient returns undefined
            themeColor: type === "day" ? dayNavbarColor : type === "sunset" ? sunsetNavbarColor : nightNavbarColor,
        };
        setState(newState);
        updateThemeColor(newState.themeColor);
    };

    useEffect(() => {
        handleGradientChange("day");
    }, []);

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

    const handleImageLoad = () => {
        setLoading(false); // Image loaded, set loading to false
    };

    return (
        <div
            className="relative h-full w-screen transition-all duration-500"
            style={{ backgroundImage: state.gradient }}
        >
            <Image
                src="/assets/homepage/christmas/bg.svg"
                alt="Christmas Background"
                className="absolute bottom-0 w-screen "
                width={1200}
                height={1200}
                priority
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover"
                }} />
            <UI.Snow
                snowflakeCount={200}
                speedMin={0.5}
                speedMax={1.5}
                windSpeedMin={-0.5}
                windSpeedMax={0.5}
                radiusMin={2}
                radiusMax={4}
                timeScale={100}
                horizontalSpeedScale={1}
            />
            <main className="flex flex-col justify-center items-center h-full">

                <div className="flex justify-center items-center min-h-screen">
                    <div
                        className="flex flex-col md:flex-row max-w-[900px] w-[90dvw] gap-4 transition-all duration-500 ease-in-out"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col flex-auto gap-4 overflow-hidden transition-all duration-500 ease-in-out justify-center basis-1/2">
                            <div className="text-center transition-all duration-500 ease-in-out" style={{ width: selectedItem ? "40%" : "100%" }}>
                                <svg viewBox="0 0 43 15" className="w-full h-full drop-shadow-custom">
                                    <text x="50%" y="47%" textAnchor="middle" fontFamily="'Profbens', sans-serif" alignmentBaseline="middle" fontSize="7" lengthAdjust="spacingAndGlyphs" fill="black">
                                        Tongtong.inc
                                    </text>
                                </svg>
                            </div>

                            <SuperEllipse p1={17} p2={50} className="transition-all overflow-hidden bg-white/10 backdrop-blur-lg rounded-2xl" style={{ height: containerHeight ? `${containerHeight}px` : "0px", transition: "height 0.5s ease" }}>
                                {selectedItem && (
                                    <div ref={detailsRef} className="p-6 text-left text-black">
                                        <div className="flex gap-3 justify-between w-full items-center">
                                            <div
                                                className={`rounded-2xl float-left m-2 w-36 h-36 object-cover transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100 overflow-hidden"}`}
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

                                        <div className="flex flex-wrap justify-end gap-3 pt-5 w-full">
                                            {selectedItemDetails?.buttons.map((button, index) => (
                                                <a key={index} href={button.link} className="text-black font-bold bg-white rounded-full px-4 py-2 hover:bg-blue-200 transition duration-300">
                                                    {button.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </SuperEllipse>
                        </div>

                        <div className={`transition-all py-5 duration-500 ease-in-out ${selectedItem ? "basis-1/4" : "basis-1/3"} flex justify-center items-center`}>
                            <ul className="space-y-4 w-full text-black">
                                {items.map((item) => (
                                    <li key={item.id} className="flex justify-center">
                                        <button
                                            onClick={() => handleItemClick(item.name)}
                                            className={`justify-center w-10/12 content-center rounded-2xl overflow-hidden ${selectedItem === item.name ? "transform transition-all scale-110 outline" : ""}`}
                                        >
                                            <SuperEllipse p1={6} p2={20} className={`p-4 bg-white/10 backdrop-blur-lg shadow-lg transition-all duration-500 flex flex-row items-center hover:bg-white/30`}>
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
                                            </SuperEllipse>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* Collapsible Gradient Customize Menu */}
            <div className="absolute bottom-5 left-5 p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg text-black">
                <h2 className="text-lg font-bold mb-2">Customize Gradients</h2>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="mb-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                >
                    {isMenuOpen ? "Hide Menu" : "Show Menu"}
                </button>

                {isMenuOpen && (
                    <div>
                        {/* Day Sliders */}
                        <div className="mb-4">
                            <h3 className="font-medium mb-2">Day Gradient</h3>
                            <div className="flex gap-4">
                                <div>
                                    <label className="text-sm block mb-1">Start Color</label>
                                    <input
                                        type="color"
                                        value={dayStartColor}
                                        onChange={(e) => setDayStartColor(e.target.value)}
                                    />
                                    <div className="text-xs mt-1">{dayStartColor}</div>
                                </div>
                                <div>
                                    <label className="text-sm block mb-1">End Color</label>
                                    <input
                                        type="color"
                                        value={dayEndColor}
                                        onChange={(e) => setDayEndColor(e.target.value)}
                                    />
                                    <div className="text-xs mt-1">{dayEndColor}</div>
                                </div>
                                <div>
                                    <label className="text-sm block mb-1">Navbar Color</label>
                                    <input
                                        type="color"
                                        value={dayNavbarColor}
                                        onChange={(e) => setDayNavbarColor(e.target.value)}
                                    />
                                    <div className="text-xs mt-1">{dayNavbarColor}</div>
                                </div>
                            </div>
                        </div>

                        {/* Sunset Sliders */}
                        <div className="mb-4">
                            <h3 className="font-medium mb-2">Sunset Gradient</h3>
                            <div className="flex gap-4">
                                <div>
                                    <label className="text-sm block mb-1">Start Color</label>
                                    <input
                                        type="color"
                                        value={sunsetStartColor}
                                        onChange={(e) => setSunsetStartColor(e.target.value)}
                                    />
                                    <div className="text-xs mt-1">{sunsetStartColor}</div>
                                </div>
                                <div>
                                    <label className="text-sm block mb-1">End Color</label>
                                    <input
                                        type="color"
                                        value={sunsetEndColor}
                                        onChange={(e) => setSunsetEndColor(e.target.value)}
                                    />
                                    <div className="text-xs mt-1">{sunsetEndColor}</div>
                                </div>
                                <div>
                                    <label className="text-sm block mb-1">Navbar Color</label>
                                    <input
                                        type="color"
                                        value={sunsetNavbarColor}
                                        onChange={(e) => setSunsetNavbarColor(e.target.value)}
                                    />
                                    <div className="text-xs mt-1">{sunsetNavbarColor}</div>
                                </div>
                            </div>
                        </div>

                        {/* Night Sliders */}
                        <div>
                            <h3 className="font-medium mb-2">Night Gradient</h3>
                            <div className="flex gap-4">
                                <div>
                                    <label className="text-sm block mb-1">Start Color</label>
                                    <input
                                        type="color"
                                        value={nightStartColor}
                                        onChange={(e) => setNightStartColor(e.target.value)}
                                    />
                                    <div className="text-xs mt-1">{nightStartColor}</div>
                                </div>
                                <div>
                                    <label className="text-sm block mb-1">End Color</label>
                                    <input
                                        type="color"
                                        value={nightEndColor}
                                        onChange={(e) => setNightEndColor(e.target.value)}
                                    />
                                    <div className="text-xs mt-1">{nightEndColor}</div>
                                </div>
                                <div>
                                    <label className="text-sm block mb-1">Navbar Color</label>
                                    <input
                                        type="color"
                                        value={nightNavbarColor}
                                        onChange={(e) => setNightNavbarColor(e.target.value)}
                                    />
                                    <div className="text-xs mt-1">{nightNavbarColor}</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-between">
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                                onClick={() => handleGradientChange("day")}
                            >
                                Apply Day
                            </button>
                            <button
                                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
                                onClick={() => handleGradientChange("sunset")}
                            >
                                Apply Sunset
                            </button>
                            <button
                                className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
                                onClick={() => handleGradientChange("night")}
                            >
                                Apply Night
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
