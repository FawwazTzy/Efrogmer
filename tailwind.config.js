/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        norwester: ["Norwester", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#00975c",
        backgorundFirst: "#314a5f",
        backgorundSecond: "#517ea3",
        backgorundThird: "#92c6f1",
        baseBackground: "#223849",
        textColor: "#efefef",
        dropDownArrow: "#a5a7a8",
      },
      container: {
        center: true,
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideInRight: "slideInRight 0.6s ease-out forwards",
        slideInLeft: "slideInLeft 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
