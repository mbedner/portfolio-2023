/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        inset:
          "inset 0 -2px 4px 0 rgb(0 0 0 / 0.3), inset 0 2px 4px 0 rgba(255 255 255 / 0.5), 0 1px 2px 0 rgb(0 0 0 / 0.05);",
      },
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
