import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bay: {
          deep: "#0b2a3a",
          sea: "#114b6b",
          surf: "#1f7a9a",
          sand: "#f3ead3",
          shell: "#fbf6e8",
          ink: "#0a1820",
          coral: "#d96e4a",
          gold: "#c8a35a"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(11,42,58,0.25)",
        card: "0 4px 20px -8px rgba(11,42,58,0.18)"
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(11,42,58,0.0) 0%, rgba(11,42,58,0.65) 60%, rgba(11,42,58,0.95) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
