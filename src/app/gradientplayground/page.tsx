"use client";
import React, { useState } from "react";
import * as UI from "@/components";

const Lesson2 = () => {
  // State for inset shadows
  const [horizontalOffset, setHorizontalOffset] = useState(1);
  const [verticalOffset, setVerticalOffset] = useState(1.5);
  const [blurRadius, setBlurRadius] = useState(2);
  const [spreadRadius, setSpreadRadius] = useState(0);

  // State for inset colors
  const [shadowColor, setShadowColor] = useState("#fff9");
  const [secondColor, setSecondColor] = useState("#ffffff4d");

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
      inset ${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${shadowColor}, 
      inset -${horizontalOffset / 2}px ${-verticalOffset / 2}px ${blurRadius}px ${secondColor}, 
      ${mainHorizontal}px ${mainVertical}px ${mainBlur}px -1.25px ${mainColor},
      ${thirdHorizontal}px ${thirdVertical}px ${thirdBlur}px -2.5px ${thirdColor},
      ${fourthHorizontal}px ${fourthVertical}px ${fourthBlur}px -3.75px ${fourthColor}
    `,
    borderRadius: "12px", // Rounded corners
    padding: "50px",
    width: "300px",
    height: "300px",
    margin: "50px auto",
    transition: "all 0.3s ease",
  };

  // Handle color change
  const handleColorChange = (colorSetter) => (event) => {
    colorSetter(event.target.value);
  };

  return (
    <UI.BodyContainer
      navColor="var(--background)"
      backgroundColor="var(--background2)"
      logoColor="var(--logocolor)"
      hoverShadowColor="var(--logoHover)"
    >
      <div style={boxShadowStyle}>
        {/* The rounded rectangle with shadow */}
        <div>Interactive Box Shadow</div>
      </div>

      <div style={{ padding: "20px", textAlign: "center" }}>
        <h3>Adjust Box Shadow</h3>

        {/* Sliders for inset shadows */}
        <div>
          <label>Horizontal Offset (Inset):</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={horizontalOffset}
            onChange={(e) => setHorizontalOffset(parseFloat(e.target.value))}
          />
          <span>{horizontalOffset}px</span>
        </div>

        <div>
          <label>Vertical Offset (Inset):</label>
          <input
            type="range"
            min="-50"
            max="50"
            step="0.01"
            value={verticalOffset}
            onChange={(e) => setVerticalOffset(parseFloat(e.target.value))}
          />
          <span>{verticalOffset}px</span>
        </div>

        <div>
          <label>Blur Radius (Inset):</label>
          <input
            type="range"
            min="0"
            max="50"
            step="0.01"
            value={blurRadius}
            onChange={(e) => setBlurRadius(parseFloat(e.target.value))}
          />
          <span>{blurRadius}px</span>
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
      </div>
    </UI.BodyContainer>
  );
};

export default Lesson2;
