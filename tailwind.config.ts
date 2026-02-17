import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00A651",
        secondary: "#2E3192",
        accent: {
          1: "#F58220",
          2: "#00AEEF",
          3: "#EA007C",
        },
        danger: "#B51F1F",
        text: {
          dark: "#1F2937",
          muted: "#6B7280",
        },
        surface: {
          light: "#F8FAFC",
        },
      },
    },
  },
  plugins: [],
};
export default config;
