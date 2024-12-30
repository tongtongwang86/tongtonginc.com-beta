// app/about/page.tsx
"use client";
import dynamic from 'next/dynamic';
import * as UI from '@/components';
import Link from 'next/link';
import { useState, useEffect, CSSProperties } from 'react';

function About() {

  const dropoffStyle: CSSProperties = {
    width: "100dvw",
    backgroundImage: `linear-gradient(#5f583700, #1c1d2c 60%, #161925)`,
    minHeight: "6em",
    marginTop: "-6em",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const stretchElement = document.querySelector('.stretch-text');
      stretchElement?.classList.add('stretch');
      setTimeout(() => {
        stretchElement?.classList.remove('stretch');
        stretchElement?.classList.add('stretch-back');
        setTimeout(() => {
          stretchElement?.classList.remove('stretch-back');
        }, 500);
      }, 500);

      const squeezeElement = document.querySelector('.squeeze-text');
      squeezeElement?.classList.add('squeeze');
      setTimeout(() => {
        squeezeElement?.classList.remove('squeeze');
        squeezeElement?.classList.add('squeeze-back');
        setTimeout(() => {
          squeezeElement?.classList.remove('squeeze-back');
        }, 500);
      }, 500);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-10 w-full flex items-start h-15 backdrop-blur-lg backdrop-brightness-100 group`}
        style={{
          background: `linear-gradient(to bottom, #161925, #24253900)`,
        }}
      >
        <a
          href="https://tongtonginc.com/"
          className="p-6 text-4xl font-bold font-ProfBens transition duration-200 ease-in-out hover:scale-105"
          style={{
            color: "#ded2b4",
          }}
        >
          {/* Add hover drop shadow dynamically */}
          <span
            className="transition duration-200 ease-in-out"
            style={{
              transition: "text-shadow 0.2s ease-in-out",
            }}
          >
            Tongtong.inc
          </span>
        </a>

        <style jsx>{`
          a:hover span {
            text-shadow: 0 0 24px rgba(222, 210, 180, 0.8);
          }
        `}</style>
      </nav>

      <div
        style={{ background: "#1c1d2c" }} className={`flex flex-col items-center justify-center min-h-screen `}>
        <div className="pt-24" />
        <div className="w-[80dvw] outline">

        <div className="w-[80dvw]" style={{ height: "80dvh", width: "80dvw" }}>
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <p className="text-white">Hoi im <span className="ripple-text">T</span><span className="ripple-text">o</span><span className="ripple-text">n</span><span className="ripple-text">g</span><span className="ripple-text">t</span><span className="ripple-text">o</span><span className="ripple-text">n</span><span className="ripple-text">g</span> and i like to do <span className="stretch-text">vertical</span> <span className="squeeze-text">intergration</span></p>

          <style jsx>{`
          .stretch-text, .squeeze-text, .ripple-text {
          display: inline-block;
          transition: transform 0.5s ease-in-out;
          }

          .stretch-text.stretch {
          transform-origin: bottom;
          transform: scaleY(1.5);
          }

          .stretch-text.stretch-back {
          transform-origin: bottom;
          transform: scaleY(1);
          }

          .squeeze-text.squeeze {
          transform-origin: left;
          transform: scaleX(0.5);
          }

          .squeeze-text.squeeze-back {
          transform-origin: left;
          transform: scaleX(1);
          }

          .ripple-text.ripple {
          transform: translateY(-10px);
          }
          `}</style>
          </div>
        </div>

        

        </div>
        <div className="pt-24" />
      </div>
      <div className="dropoff" style={dropoffStyle}></div>
    </>
  );
}

export default About;
