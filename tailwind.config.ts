import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4ECDC4", // Cyber Teal
        secondary: "#FF6B6B", // Neo Coral
        "deep-space": "#1A1A2E", // Dark backgrounds
        "chrome-white": "#FFFFFF", // Text & highlights
        "quantum-gray": "#8892B0", // Secondary text
      },
      fontFamily: {
        cabinet: ["Space Grotesk", "sans-serif"],
        instrument: ["Instrument Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #45B8AC, #4ECDC4, #FF6B6B)",
      },
    },
  },
  plugins: [],
};

export default config;
