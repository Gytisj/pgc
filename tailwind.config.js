/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pgc: {
          black: "#151515",
          "black-deep": "#0a0a0a",
          900: "#1c1c1c",
          800: "#222222",
          700: "#333333",
          400: "#999999",
          300: "#bbbbbb",
          white: "#ffffff",
          gold: "#c9a96e",
        },
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
