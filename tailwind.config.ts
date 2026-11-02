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
        gx: {
          border: "rgba(233, 225, 210, 0.12)",
          graphite: "#39382f",
          mint: "#e9e1d2",
          amber: "#dda85e",
          carbon: "#22221f",
          chalk: "#e9e1d2",
          citron: "#d4e45a",
          clay: "#a94732",
          emerald: "#c65b3d",
          lime: "#d4e45a",
          mineral: "#77766e",
          muted: "#77766e",
          obsidian: "#171715",
          panel: "#22221f",
          vermilion: "#c65b3d",
          blue: "#dda85e",
          text: "#f5f1e8",
          warmWhite: "#f5f1e8",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-dm-mono)", "DM Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        panel: "0 25px 80px rgba(0, 0, 0, 0.65)",
        glow: "0 0 35px rgba(198, 91, 61, 0.18)",
        vermilionGlow: "0 0 35px rgba(198, 91, 61, 0.25)",
        citronGlow: "0 0 25px rgba(212, 228, 90, 0.25)",
      },
      animation: {
        "spin-slow": "spinSlow 12s linear infinite",
        "ecg": "ecgPulse 2s ease-in-out infinite",
      },
      keyframes: {
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        ecgPulse: {
          "0%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.04)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
