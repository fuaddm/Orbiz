import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      solid: {
        0: "var(--solid-0)",
        25: "var(--solid-25)",
        50: "var(--solid-50)",
        100: "var(--solid-100)",
        200: "var(--solid-200)",
        300: "var(--solid-300)",
        400: "var(--solid-400)",
        500: "var(--solid-500)",
        600: "var(--solid-600)",
        700: "var(--solid-700)",
        800: "var(--solid-800)",
        900: "var(--solid-900)",
      },
      red: {
        0: "var(--red-0)",
        25: "var(--red-25)",
        50: "var(--red-50)",
        100: "var(--red-100)",
        200: "var(--red-200)",
        300: "var(--red-300)",
      },
      yellow: {
        0: "var(--yellow-0)",
        25: "var(--yellow-25)",
        50: "var(--yellow-50)",
        100: "var(--yellow-100)",
        200: "var(--yellow-200)",
        300: "var(--yellow-300)",
      },
      aqua: {
        0: "var(--aqua-0)",
        25: "var(--aqua-25)",
        50: "var(--aqua-50)",
        100: "var(--aqua-100)",
        200: "var(--aqua-200)",
        300: "var(--aqua-300)",
      },
      green: {
        0: "var(--green-0)",
        25: "var(--green-25)",
        50: "var(--green-50)",
        100: "var(--green-100)",
        200: "var(--green-200)",
        300: "var(--green-300)",
      },
      primary: {
        0: "var(--primary-0)",
        25: "var(--primary-25)",
        50: "var(--primary-50)",
        100: "var(--primary-100)",
        200: "var(--primary-200)",
        300: "var(--primary-300)",
      },
    },
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
