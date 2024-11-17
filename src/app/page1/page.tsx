// app/page1/page.tsx

"use client";
import Link from 'next/link';
import SuperEllipse from "react-superellipse";

export default function Page1() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center bg-[var(--background2)]">
      <h1 className="text-3xl font-bold mb-4">Page 1</h1>
      <p className="mb-4">This is the content of Page 1.</p>
      <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>


      <Link href="/">
      <SuperEllipse
  r1={0.1}
  r2={0.4}

  className="w-60 h-16 bg-[var(--background)] flex items-center justify-center transition duration-300 ease-in-out hover:scale-105 shadow-lg"
>
  <h1 className="text-3xl font-bold">Back to home</h1>
</SuperEllipse>
</Link>

    </main>
  );
}
