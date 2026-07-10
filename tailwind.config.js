/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "neon-blue": "#00ffff",
        "neon-purple": "#9933ff",
        "neon-pink": "#ff00ff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        neon: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.webp')",
      },
    },
  },
  plugins: [],
} 