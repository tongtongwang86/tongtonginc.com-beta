"use client";
import React from 'react';
import Link from 'next/link';
import SuperEllipse from "react-superellipse";

const HomeButton = () => {
  return (
    <Link href="/">
      <SuperEllipse
        r1={0.1}
        r2={0.4}
        className="w-60 h-16 bg-[var(--background)] flex items-center justify-center transition duration-300 ease-in-out hover:scale-105 shadow-lg"
      >
        <h1 className="text-3xl font-bold">Back to home</h1>
      </SuperEllipse>
    </Link>
  );
};

export default HomeButton;