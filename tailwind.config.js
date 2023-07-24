/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkMode: true,
        primary: {
          DEFAULT: "#6D28D9",
          dark: "#4C1D95",
        },
        secondary: {
          DEFAULT: "#F472B6",
          dark: "#D53F8C",
        },
      },
    },
  },
  plugins: [],
};
