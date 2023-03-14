/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#020531",
        sub: "#191b34",
        med: "#070b3f",
        alt: "#000222",
        text: "#fdefe2",
        tealWord: "#15b6b1",
        pinkWord: "#f17798",
        orangeWord: "#fff280",
      },
      animation: {
        slideup: "slideup 1.5s cubic-bezier(.84,.18,.42,.94) 0.5s forwards",

        slideup2: "slideup 1.5s cubic-bezier(.84,.18,.42,.94) 0.6s forwards",

        slidedown: "slidedown 1s cubic-bezier(.84,.18,.42,.94) forwards",

        slideleft: "slideleft 2s cubic-bezier(.44,-0.29,.12,.96) forwards",

        slideright: "slideright 2s cubic-bezier(.44,-0.29,.12,.96) forwards",

        slideleftmax:"slideleftmax 2s cubic-bezier(.44,-0.29,.12,.96) forwards",

        slowfade: "slowfade 0.3s cubic-bezier(.84,.18,.62,.67) forwards",
      },

      keyframes: {
        slowfade: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },

        slideup: {
          from: { opacity: 0, transform: "translateY(25%)" },
          to: { opacity: 1, transform: "none" },
        },

        slidedown: {
          from: { opacity: 0, transform: "translateY(-25%)" },
          to: { opacity: 1, transform: "none" },
        },

        slideleft: {
          from: { opacity: 0, transform: "translateX(-50px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },

        slideleftmax: {
          from: { opacity: 0, transform: "translateX(-100%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },

        slideright: {
          from: { opacity: 0, transform: "translateX(50px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
