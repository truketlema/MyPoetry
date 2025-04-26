/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancingScript: ['"Dancing Script"', "cursive"],
        cormorant: ['"Cormorant Garamond"', "serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      blur: {
        xs: "1.5px",
        xxs: "0.9px",
        xxxs: "0.8px",
      },
    },
  },
  plugins: [],
};
