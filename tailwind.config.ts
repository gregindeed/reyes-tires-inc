import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm desert / trophy-truck palette
        sand: {
          50: "#faf6f0",
          100: "#f3ebdd",
          200: "#e7d6bd",
          300: "#d8bd97",
          400: "#c8a06f",
        },
        stone: {
          750: "#2b2722",
          850: "#211e1a",
          950: "#16140f",
        },
        // near-black for high-contrast aggressive surfaces
        ink: {
          800: "#15120e",
          900: "#0d0b08",
          950: "#070503",
        },
        // primary accent — logo red ("blaze" kept as the token name)
        blaze: {
          50: "#fdeaea",
          100: "#fad1d1",
          400: "#e23b3b",
          500: "#d11f27",
          600: "#b3151c",
          700: "#8f1117",
        },
        // secondary accent — logo blue
        royal: {
          50: "#e9f0fd",
          100: "#cfe0fb",
          400: "#3b82f6",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
        },
        clay: {
          50: "#fbf0ea",
          100: "#f5ddd0",
          400: "#c8744f",
          500: "#b85c38",
          600: "#a04a2c",
          700: "#823b24",
        },
        olive: {
          600: "#5c6049",
          700: "#494d3a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
      },
      fontWeight: {
        "500": "500",
        "600": "600",
        "700": "700",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
        // diagonal hazard / race stripes (blue secondary accent)
        "stripes":
          "repeating-linear-gradient(-45deg, rgba(37,99,235,0.16) 0 14px, transparent 14px 30px)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(33,30,26,0.04), 0 12px 32px -12px rgba(33,30,26,0.18)",
        blaze: "0 10px 30px -8px rgba(209,31,39,0.45)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
