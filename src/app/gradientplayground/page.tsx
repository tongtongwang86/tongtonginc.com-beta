"use client";
import React, { useState } from "react";
import * as UI from "@/components";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Lesson2 = () => {
   // State for first inset shadow
   const [inset1Horizontal, setInset1Horizontal] = useState(1);
   const [inset1Vertical, setInset1Vertical] = useState(1.5);
   const [inset1Blur, setInset1Blur] = useState(2);
   const [inset1Spread, setInset1Spread] = useState(0);
   const [inset1Color, setInset1Color] = useState("#fff9");
 
   // State for second inset shadow
   const [inset2Horizontal, setInset2Horizontal] = useState(-0.5);
   const [inset2Vertical, setInset2Vertical] = useState(-0.75);
   const [inset2Blur, setInset2Blur] = useState(2);
   const [inset2Spread, setInset2Spread] = useState(0);
   const [inset2Color, setInset2Color] = useState("#ffffff4d");
 
   // State for non-inset main shadow
   const [mainHorizontal, setMainHorizontal] = useState(0);
   const [mainVertical, setMainVertical] = useState(0.6);
   const [mainBlur, setMainBlur] = useState(0.6);
   const [mainColor, setMainColor] = useState("#0000002e");
 
   // State for third shadow
   const [thirdHorizontal, setThirdHorizontal] = useState(0);
   const [thirdVertical, setThirdVertical] = useState(2.28);
   const [thirdBlur, setThirdBlur] = useState(2.28);
   const [thirdColor, setThirdColor] = useState("#00000029");
 
   // State for fourth shadow
   const [fourthHorizontal, setFourthHorizontal] = useState(0);
   const [fourthVertical, setFourthVertical] = useState(10);
   const [fourthBlur, setFourthBlur] = useState(10);
   const [fourthColor, setFourthColor] = useState("#00000010");
 
  // Box shadow style based on current state
  const boxShadowStyle = {
    boxShadow: `
      inset ${inset1Horizontal}px ${inset1Vertical}px ${inset1Blur}px ${inset1Spread}px ${inset1Color},
      inset ${inset2Horizontal}px ${inset2Vertical}px ${inset2Blur}px ${inset2Spread}px ${inset2Color},
      ${mainHorizontal}px ${mainVertical}px ${mainBlur}px -1.25px ${mainColor},
      ${thirdHorizontal}px ${thirdVertical}px ${thirdBlur}px -2.5px ${thirdColor},
      ${fourthHorizontal}px ${fourthVertical}px ${fourthBlur}px -3.75px ${fourthColor}
    `,
  };

  // Generate CSS for CopyToClipboard
  const boxShadowCSS = `
    box-shadow: 
      inset ${inset1Horizontal}px ${inset1Vertical}px ${inset1Blur}px ${inset1Spread}px ${inset1Color},
      inset ${inset2Horizontal}px ${inset2Vertical}px ${inset2Blur}px ${inset2Spread}px ${inset2Color},
      ${mainHorizontal}px ${mainVertical}px ${mainBlur}px -1.25px ${mainColor},
      ${thirdHorizontal}px ${thirdVertical}px ${thirdBlur}px -2.5px ${thirdColor},
      ${fourthHorizontal}px ${fourthVertical}px ${fourthBlur}px -3.75px ${fourthColor};
  `.trim();

  return (
    <UI.BodyContainer
      navColor="var(--background)"
      backgroundColor="var(--background2)"
      logoColor="var(--logocolor)"
      hoverShadowColor="var(--logoHover)"
    >
      <div className="flex align-middle items-center w-screen justify-center">
        <Image
          src="https://images.unsplash.com/photo-1615118265620-d8decf628275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80"
          alt="Apple Champs Elysees Boardroom"
          layout="intrinsic"
          width={400}
          height={500}
          className="rounded-lg"
        />

        <div className="absolute">
          <div
            style={boxShadowStyle}
            className="w-36 h-36 rounded-2xl backdrop-blur-md bg-[#d5c9c90b] text-white"
          ></div>
          <div
            className="w-10 h-10 rounded-full backdrop-blur-md bg-[#d5c9c90b] text-white"
            style={boxShadowStyle}
          ></div>
        </div>

        <div
          className="w-36 h-10 rounded-full backdrop-blur-md bg-[#d5c9c90b] text-white"
          style={boxShadowStyle}
        ></div>



<div className="w-36 h-10 rounded-full backdrop-blur-md  bg-[#d5c9c90b] text-white " style={boxShadowStyle}></div>

<div className="w-10 h-10 rounded-full backdrop-blur-md  bg-[#d5c9c90b] text-white " style={boxShadowStyle}></div>

</div>

      <div className="text-center mt-8">
        <h3 className="text-xl font-semibold mb-4">Adjust Box Shadow</h3>

         {/* First Inset Shadow */}
         <h4>First Inset Shadow</h4>
        <div>
          <label>Horizontal Offset:</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={inset1Horizontal}
            onChange={(e) => setInset1Horizontal(parseFloat(e.target.value))}
          />
          <span>{inset1Horizontal}px</span>
        </div>
        <div>
          <label>Vertical Offset:</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={inset1Vertical}
            onChange={(e) => setInset1Vertical(parseFloat(e.target.value))}
          />
          <span>{inset1Vertical}px</span>
        </div>
        <div>
          <label>Blur Radius:</label>
          <input
            type="range"
            min="0"
            max="50"
            step="0.01"
            value={inset1Blur}
            onChange={(e) => setInset1Blur(parseFloat(e.target.value))}
          />
          <span>{inset1Blur}px</span>
        </div>
        <div>
          <label>Spread Radius:</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={inset1Spread}
            onChange={(e) => setInset1Spread(parseFloat(e.target.value))}
          />
          <span>{inset1Spread}px</span>
        </div>
        <div>
          <label>Color:</label>
          <input
            type="color"
            value={inset1Color}
            onChange={(e) => setInset1Color(e.target.value)}
          />
        </div>

        {/* Second Inset Shadow */}
        <h4>Second Inset Shadow</h4>
        <div>
          <label>Horizontal Offset:</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={inset2Horizontal}
            onChange={(e) => setInset2Horizontal(parseFloat(e.target.value))}
          />
          <span>{inset2Horizontal}px</span>
        </div>
        <div>
          <label>Vertical Offset:</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={inset2Vertical}
            onChange={(e) => setInset2Vertical(parseFloat(e.target.value))}
          />
          <span>{inset2Vertical}px</span>
        </div>
        <div>
          <label>Blur Radius:</label>
          <input
            type="range"
            min="0"
            max="50"
            step="0.01"
            value={inset2Blur}
            onChange={(e) => setInset2Blur(parseFloat(e.target.value))}
          />
          <span>{inset2Blur}px</span>
        </div>
        <div>
          <label>Spread Radius:</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={inset2Spread}
            onChange={(e) => setInset2Spread(parseFloat(e.target.value))}
          />
          <span>{inset2Spread}px</span>
        </div>
        <div>
          <label>Color:</label>
          <input
            type="color"
            value={inset2Color}
            onChange={(e) => setInset2Color(e.target.value)}
          />
        </div>

        {/* Sliders for Main Shadow */}
        <h4>Main Shadow</h4>
        <div>
          <label>Horizontal Offset:</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={mainHorizontal}
            onChange={(e) => setMainHorizontal(parseFloat(e.target.value))}
          />
          <span>{mainHorizontal}px</span>
        </div>
        <div>
          <label>Vertical Offset:</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={mainVertical}
            onChange={(e) => setMainVertical(parseFloat(e.target.value))}
          />
          <span>{mainVertical}px</span>
        </div>
        <div>
          <label>Blur Radius:</label>
          <input
            type="range"
            min="0"
            max="50"
            step="0.01"
            value={mainBlur}
            onChange={(e) => setMainBlur(parseFloat(e.target.value))}
          />
          <span>{mainBlur}px</span>
        </div>

        {/* Sliders for Third Shadow */}
        <h4>Third Shadow</h4>
        <div>
          <label>Horizontal Offset:</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={thirdHorizontal}
            onChange={(e) => setThirdHorizontal(parseFloat(e.target.value))}
          />
          <span>{thirdHorizontal}px</span>
        </div>
        <div>
          <label>Vertical Offset:</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={thirdVertical}
            onChange={(e) => setThirdVertical(parseFloat(e.target.value))}
          />
          <span>{thirdVertical}px</span>
        </div>
        <div>
          <label>Blur Radius:</label>
          <input
            type="range"
            min="0"
            max="50"
            step="0.01"
            value={thirdBlur}
            onChange={(e) => setThirdBlur(parseFloat(e.target.value))}
          />
          <span>{thirdBlur}px</span>
        </div>

        {/* Sliders for Fourth Shadow */}
        <h4>Fourth Shadow</h4>
        <div>
          <label>Horizontal Offset:</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={fourthHorizontal}
            onChange={(e) => setFourthHorizontal(parseFloat(e.target.value))}
          />
          <span>{fourthHorizontal}px</span>
        </div>
        <div>
          <label>Vertical Offset:</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={fourthVertical}
            onChange={(e) => setFourthVertical(parseFloat(e.target.value))}
          />
          <span>{fourthVertical}px</span>
        </div>
        <div>
          <label>Blur Radius:</label>
          <input
            type="range"
            min="0"
            max="50"
            step="0.01"
            value={fourthBlur}
            onChange={(e) => setFourthBlur(parseFloat(e.target.value))}
          />
          <span>{fourthBlur}px</span>
        </div>
        {/* Copy to Clipboard Button */}
        <div className="mt-4 text-center">
          <CopyToClipboard text={boxShadowCSS}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
              Copy Box Shadow CSS
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </UI.BodyContainer>
  );
};

export default Lesson2;
