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
      animation: {
        slideup: "slideup 1s cubic-bezier(.84,.18,.42,.94) forwards",

        slideup2: "slideup 1s cubic-bezier(.84,.18,.42,.94) 0.1s forwards",

        slidedown: "slidedown 1s cubic-bezier(.84,.18,.42,.94) forwards",

        slideleft: "slideleft 2s cubic-bezier(.44,-0.29,.12,.96) forwards",

        scale: "scale 2.5s cubic-bezier(.44,-0.29,.12,.96) both",

        slideright: "slideright 2s cubic-bezier(.44,-0.29,.12,.96) forwards",

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
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },

        scale: {
          from: {
            opacity: 0,
            scale: 0,
            blur: "400px",
          },
          to: {
            opacity: 1,
            scale: 1,
            blur: "0px",
          },
        },

        slideright: {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
