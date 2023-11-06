import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          "300": "rgba(170, 170, 170)",
          "900": "#0D092E",
          "950": "#030423",
        },
        gray: {"50": "#ffffff", "200": "#DCD9D4;"},
        neutral: {"200": "#E5E7EB"},
        amber: {"300": "#FFD34D"},
        pink: {"500": "#FF3281"},
      },
    },
    fontSize: {
      xs: ["12px", {}],
      sm: ["14px", {}],
      md: ["16px", {lineHeight: "1.75em"}],
      base: ["18px", {lineHeight: "1.78em"}],
      lg: ["20px", {lineHeight: "1.75em", letterSpacing: "0.02em"}],
      xl: ["48px", {lineHeight: "1em", letterSpacing: "0.02em"}],
      "2xl": ["28px", {lineHeight: "0.6em", letterSpacing: "0.02em"}],
    },
    shadows: "",
    fontFamily: {roboto: ["'Roboto'", ...fontFamily.sans]},
    backgroundImage: {
      yellowToBlue:
        "linear-gradient(90deg, #FFD34D 0%, rgba(255, 68, 147, 0.66) 53.76%, #4239FF 104.44%, rgba(66, 57, 255, 0.29) 181.88%)",
      stepNum: "linear-gradient(90deg, #FF3281 -9.56%, #FF9D2E 100%)",
      200: "linear-gradient(270deg, #FF9D2E 0%, #FF2A87 99.37%, rgba(255, 42, 135, 0.00) 100%)",
      300: "linear-gradient(90deg, #FF9D2E 0%, #FF2A87 99.37%, rgba(255, 42, 135, 0.00) 100%)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1080px",
      xl: "1480px",
    },
  },
  plugins: [],
};
export default config;
