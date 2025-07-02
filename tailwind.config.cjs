/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    screens: require("./tailwind.conf/screens"),
    colors: require("./tailwind.conf/colors"),
    fontFamily: {
      "sans-jp": ["Noto Sans JP Variable", "sans-serif"],
      "serif-jp": ["Noto Serif JP Variable", "serif"],
      en: "'Libre Baskerville', serif",
      "en-serif": ["Cormorant Garamond Variable", "serif"],
      "hiragino": '"ヒラギノ角ゴ Pro W3", Hiragino Kaku Gothic Pro, "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", MS PGothic, sans-serif',
      "helvetica": "'Helvetica Neue', Helvetica, Arial, sans-serif",
    },
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
      transitionProperty: {
        color: "color",
      },
      transitionDuration: {
        1500: "1.5s",
        3000: "3s",
        10000: "10s",
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

  // plugins: [
  //   function ({ addBase, theme }) {
  //     addBase(require('./tailwind.conf/leadingTrim')(theme));
  //   }
  // ],
};
