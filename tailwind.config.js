/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../assets/images/hero.jpg')",
        // 'figure': "url('../assets/images/figure.png')",
      },
    },
  },
  plugins: [],
};
