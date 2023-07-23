/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkMode: true,
        primary: {
          DEFAULT: "#6D28D9", // Púrpura
          dark: "#4C1D95", // Púrpura oscuro
        },
        secondary: {
          DEFAULT: "#F472B6", // Rosa
          dark: "#D53F8C", // Rosa oscuro
        },
      },
    },
  },
  plugins: [],
};
