import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./app/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  ],
  theme: {
  extend: {
  colors: {
  brass: {
  300: "#d9b98a",
      500: "#b3895a",
      700: "#8a6a43",
    },
  },
  fontFamily: {
  sans: ["var(--font-sans)"],
      serif: ["var(--font-serif)"],
      signature: ["var(--font-signature)"],
    },
},
},
  plugins: [],
    };

export default config;
