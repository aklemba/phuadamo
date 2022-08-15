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
    spacing: {
      0: "0px",
      0.5: "4px",
      1: "8px",
      1.5: "12px",
      2: "16px",
      2.5: "20px",
      3: "24px",
      3.5: "28px",
      4: "32px",
      4.5: "40px",
      5: "48px",
      5.5: "56",
      6: "64px",
    },
  },
  plugins: [],
};
