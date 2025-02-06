/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mb: "500px",
      },
      fontFamily: {
        head: ["Ultra", "sans serif"],
        subhead: ["Autour One", "serif"],
        main: ["Itim", "serif"],
        fancy: ["Lugrasimo", "cursive"],
        simple: ["Yatra One", "serif"],
      },
    },
  },
  plugins: [],
};
