import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: { min: "0px", max: "249px" },
      xs: { min: "250px", max: "300px" },
      sm: { min: "301px", max: "700px" },
      md: { min: "701px", max: "1400px" },
      lg: { min: "1401px" },
    },
    extend: {
      dropShadow: {
        one: [
          "1px 2px 0.1px #00000050",
          "-1px 0px 0.1px #00000050",
          "1px 0px 0.1px #00000050",
          "1px -0.3px 0.1px #00000050",
        ],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      },
    },
    colors: {
      bg: "#c4c0b5d8",
      error: "#990000",
      success: "green",
      white: "#ffffff",
      gold: "yellow",
      black: "black",
      step: "grey",
      done: "yellow",
    },
  },
  plugins: [],
};
export default config;
