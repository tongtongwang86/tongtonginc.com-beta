import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const radialGradientPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        // map to bg-radient-[*]
        'bg-radient': value => ({
          'background-image': `radial-gradient(${value}, var(--tw-gradient-stops))`,
        }),
      },
      { values: theme("radialGradients") }
    );
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  }
);

/**
 * utility class presets
 */
function _presets() {
  const shapes = ["circle", "ellipse"];
  const pos = {
    c: "center",
    t: "top",
    b: "bottom",
    l: "left",
    r: "right",
    tl: "top left",
    tr: "top right",
    bl: "bottom left",
    br: "bottom right",
  };
  let result: Record<string, string> = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        custom: [
          '0 0px 13px var(--logoHover)', 
          '0 0px 5px var(--logoHover)'
        ],
        
      },
      boxShadow: {
        'visionpro': 'inset 1px 1.5px 2px #fff9, inset 1px -0.5px 2px #ffffff4d, 0 0.6021873017743928px 0.6021873017743928px -1.25px #0000002e, 0 2.288533303243457px 2.288533303243457px -2.5px #00000029, 0 10px 10px -3.75px #00000010',
        'visionprohome':'inset 1px 1.5px 2px #fff9, inset 1px -0.5px 2px #ffffff4d, 0 0.6021873017743928px 0.6021873017743928px -1.25px #0000002e, 0 2.288533303243457px 2.288533303243457px -2.5px #00000029, 0 10px 10px -3.75px #00000010',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        GeistMono: ["var(--font-geist-mono)"],
        GeistSans: ["var(--font-geist-sans)"],
        ProfBens: ["var(--font-prof-bens)"],
      },
    },
  },
  plugins: [radialGradientPlugin],
};

export default config;
