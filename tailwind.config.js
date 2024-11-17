/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-100": "hsl(254, 88%, 90%)",
        "purple-500": "hsl(256, 67%, 59%)",
        "yellow-100": "hsl(31, 66%, 93%)",
        "yellow-500": "hsl(39, 100%, 71%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
