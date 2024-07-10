/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.antlers.html",
    "./resources/**/*.antlers.php",
    "./resources/**/*.blade.php",
    "./resources/**/*.vue",
    "./content/**/*.md",
  ],

  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      fontFamily: {
        text: ["barlow", "sans-serif"],
      },
      colors: {
        black: "#171921",
        white: "#ffffff",
        gray: {
          50: "#f4f5f7",
          100: "#e4e8e9",
          200: "#cbd3d6",
          300: "#a7b3b9",
          400: "#7c8c94",
          500: "#5c6b73",
          600: "#535f67",
          700: "#475057",
          800: "#3f464b",
          900: "#383d41",
          950: "#22262a",
        },
        primary: {
          '50': '#fbffe5',
          '100': '#f4ffc7',
          '200': '#e7ff95',
          '300': '#d2ff57',
          '400': '#c3f73a',
          '500': '#9ddd05',
          '600': '#79b100',
          '700': '#5b8605',
          '800': '#4a690b',
          '900': '#3e590e',
          '950': '#1f3201',
        },
        secondary: {
          '50': '#f6f7f9',
          '100': '#eceef2',
          '200': '#d4d8e3',
          '300': '#aeb6cb',
          '400': '#838fad',
          '500': '#637194',
          '600': '#4f5b7a',
          '700': '#404964',
          '800': '#383f54',
          '900': '#323748',
          '950': '#171921',
        }
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
