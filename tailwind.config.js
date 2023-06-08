/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        md: "768px",
        lg: "1028px",
        xl: "1440px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
