// app/page1/page.tsx


"use client";
import * as UI from '@/components';
import Link from 'next/link';
import SuperEllipse from "react-superellipse";

export default function Page1() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center bg-[var(--background2)]">
      <h1 className="text-3xl font-bold mb-4">Page 1</h1>
      <UI.ThreeCanvas />

    </main>
  );
}
