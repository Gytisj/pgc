/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo-black)", "system-ui", "sans-serif"],
        handwriting: ["var(--font-cedarville)", "cursive"],
      },
      colors: {
        pgc: {
          black: "#000000",
          white: "#ffffff",
          cream: "#eae6e2",
          red: "#ff2222",
          copper: "#cd5e1f",
          pink: "#fdc1db",
          green: "#02190e",
          brown: "#49241c",
        },
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
