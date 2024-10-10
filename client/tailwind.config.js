/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E0F2FF",
          200: "#B3E0FF",
          300: "#80CCFF",
          400: "#4DB8FF",
          500: "#1AA3FF", // Primary color utama
          600: "#0089E6",
          700: "#0067B3",
          800: "#004080",
          900: "#00214D",
        },
        secondary: {
          100: "#E0F2FF",
          200: "#B3E0FF",
          300: "#80CCFF",
          400: "#4DB8FF",
          500: "#FFDE0A", // Primary color utama
          600: "#0089E6",
          700: "#0067B3",
          800: "#004080",
          900: "#00214D",
        },
      },
    },
  },
  plugins: [],
};
