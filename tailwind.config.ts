import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkTheme: "#11001F",
        darkHover:"#2a004a"
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
        salsa: ["Salsa"],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px,1fr))",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
} satisfies Config;
