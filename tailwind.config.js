const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGrey: "#4D4D4D",
        brandPrimary: "#4CAF4F",
        neutralGrey: "#717171",
        Gray900: "#18191F",
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
