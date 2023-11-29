/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offwhite: "#F6F1EE",
        brown: {
          500: "#6C5F5B",
          550: "#5B4E4D",
          600: "#4F4A45",
        },
        gray: {
          200: "#D5DAE1",
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235",
        },
        blue: {
          500: "#2b77e7",
        },
        orange: {
          300: "#ffbd7b",
          600: "#ED7D31",
        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        amatic: ["Amatic SC", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
