/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Alata: ["Alata", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        softYellow: "#FFDE00",
        softBlue: "hsl(231, 69%, 60%)",
        softGray: "#E3E1E3",
        softGray1: "#888888",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
