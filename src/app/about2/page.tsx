'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const rightScrollTop = rightRef.current?.scrollTop || 0;
      if (leftRef.current) {
        leftRef.current.scrollTop = rightScrollTop * 3;
      }
    };

    const right = rightRef.current;
    if (right) {
      right.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (right) {
        right.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const sectionStyle = 'h-[200vh] flex items-center justify-center text-white text-4xl font-bold';

  const leftColors = [
    'bg-gradient-to-b from-blue-500 to-purple-500',
    'bg-gradient-to-b from-indigo-500 to-pink-500',
    'bg-gradient-to-b from-cyan-500 to-blue-600',
    'bg-gradient-to-b from-emerald-500 to-teal-600',
    'bg-gradient-to-b from-sky-500 to-indigo-600',
    'bg-gradient-to-b from-purple-600 to-rose-400',
  ];

  const rightColors = [
    'bg-gradient-to-b from-green-500 to-yellow-500',
    'bg-gradient-to-b from-orange-400 to-red-500',
    'bg-gradient-to-b from-lime-500 to-green-600',
    'bg-gradient-to-b from-pink-400 to-fuchsia-500',
    'bg-gradient-to-b from-amber-400 to-orange-600',
    'bg-gradient-to-b from-teal-400 to-blue-400',
  ];

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Left Side */}
      <div className="w-1/2 h-full overflow-y-scroll" ref={leftRef}>
        {leftColors.map((color, i) => (
          <motion.div
            key={`left-${i}`}
            className={`${sectionStyle} ${color}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Left Section {i + 1}
          </motion.div>
        ))}
      </div>

      {/* Right Side */}
      <div className="w-1/2 h-full overflow-y-scroll" ref={rightRef}>
        {rightColors.map((color, i) => (
          <motion.div
            key={`right-${i}`}
            className={`${sectionStyle} ${color}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Right Section {i + 1}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
