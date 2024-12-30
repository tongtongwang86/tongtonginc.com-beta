// app/about/page.tsx
"use client";
import dynamic from 'next/dynamic';
import * as UI from '@/components';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { TextEffect } from '@/components/motion-ui/text-effect';

export default function about() {
 

  return (
    <TextEffect preset='fade-in-blur' speedReveal={1.1} speedAnimation={0.3}>
    Animate your ideas with motion-primitives.
  </TextEffect>
  );
}
