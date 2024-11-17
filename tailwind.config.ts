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
      dropShadow: {
        'custom': '0px 0px 5px rgba(255, 255, 255, 1), 0px 0px 10px rgba(0, 0, 0, 0.605)',
        'hover': '-10px -10px 18px rgba(255, 255, 255, 1), 8px 8px 16px rgba(0, 0, 0, 1)',
      
      },
    },
  },
  plugins: [],
};
export default config;
