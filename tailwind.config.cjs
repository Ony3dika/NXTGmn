/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#020531",
        sub: "#191b34",
        alt: "#000222",
        text: "#fdefe2",
        tealWord: "#15b6b1",
        pinkWord: "#f17798",
        orangeWord: "#fff280",
      },
    },
  },
  plugins: [],
};
