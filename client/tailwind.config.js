/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#bfedb5",
          DEFAULT: "#65B741",
          dark: "#49853c",
        },
        secondary: {
          light: "#ffedd5",
          DEFAULT: "#f97316",
          dark: "#c2410c",
        },
      },
    },
  },
  plugins: [],
};
