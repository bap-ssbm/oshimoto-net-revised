import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: require("./tailwind.conf/screens"),
    spacing: require("./tailwind.conf/spacing"),
    maxWidth: require("./tailwind.conf/spacing"),
    fontSize: require("./tailwind.conf/fontSize"),
    letterSpacing: require("./tailwind.conf/letterSpacing"),
    lineHeight: require("./tailwind.conf/lineHeight"),
    keyframes: require("./tailwind.conf/keyframes"),
    animation: require("./tailwind.conf/animations"),
    borderRadius: require("./tailwind.conf/borderRadius"),
    fontWeight: {
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      900: 900,
    },
    extend: {
      fontSize: {
        '2xl': ['24px', '32px' ],
        '3xl': ['30px', '36px' ],
        '4xl': ['36px', '40px' ],
        '5xl': ['48px', '1' ],
        '6xl': ['60px', '1' ],
        '7xl': ['72px', '1' ],
        '8xl': ['96px', '1' ],
        '9xl': ['128px', '1' ]
      },
    },
    zIndex: {
      "-1": "-1",
      1: "1",
      2: "2",
      3: "3",
      10: "10",
      50: "50",
      100: "100",
      150: "150",
      1000: "1000",
    },
  },
  plugins: [],
};
export default config;
