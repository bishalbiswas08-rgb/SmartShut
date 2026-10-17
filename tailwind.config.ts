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
        background: "#07040d",
        surface: {
          50: "#1e1338",
          100: "#170e2d",
          200: "#120a24",
          300: "#0e071c",
          400: "#090413",
        },
        brand: {
          purple: {
            DEFAULT: "#7c3aed",
            glow: "#a855f7",
            dark: "#3b136f",
            deep: "#1f093f",
          },
          green: {
            DEFAULT: "#00f59b",
            glow: "#10e882",
            dark: "#065f46",
            electric: "#22c55e",
            lime: "#a3e635",
          },
          cyan: {
            DEFAULT: "#06b6d4",
            glow: "#38bdf8",
          },
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        "neon-green": "0 0 25px -3px rgba(0, 245, 155, 0.35)",
        "neon-purple": "0 0 35px -5px rgba(168, 85, 247, 0.3)",
        "neon-cyan": "0 0 25px -3px rgba(6, 182, 212, 0.35)",
        "glass-sm": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-lg": "0 20px 50px 0 rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "energy-flow": "energyFlow 3s ease-in-out infinite",
        "scan-line": "scanLine 2.5s ease-in-out infinite",
        "float-gentle": "floatGentle 6s ease-in-out infinite",
      },
      keyframes: {
        energyFlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.02)" },
        },
        scanLine: {
          "0%": { transform: "translateY(0%)", opacity: "0.8" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0.2" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
