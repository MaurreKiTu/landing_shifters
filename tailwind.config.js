/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    colors: {
      // primary: '#5c6ac4',
      // secondary: '#ecc94b',

      main: "#925CB4",

      // // ...
    },
  },
  theme: {
    extend: {},
    backgroundImage: {
      bg: "url('/assets/img/bg.png')",
    },
    colors: {
      button: "#3c3f78",
    },
    screens: {
      xs: "500px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};
