import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      GeistMono: ["var(--font-geist-mono)"],
      GeistSans: ["var(--font-geist-sans)"],
      ProfBens: ["var(--font-prof-bens)"],

      
    },
  },
  plugins: [],
};
export default config;
