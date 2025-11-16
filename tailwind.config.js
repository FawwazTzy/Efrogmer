// tailwind.config.js
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
      container: { center: true },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        // 🐸 Animasi makan kodok
        frogEat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.2) rotate(-5deg)" },
          "50%": { transform: "scale(1.3) rotate(5deg)" },
          "75%": { transform: "scale(1.2) rotate(-3deg)" },
        },
        // 💥 Animasi salah (kalau belum ada)
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-6px)" },
          "50%": { transform: "translateX(6px)" },
          "75%": { transform: "translateX(-4px)" },
        },
      },
      animation: {
        slideInRight: "slideInRight 0.6s ease-out forwards",
        slideInLeft: "slideInLeft 0.6s ease-out forwards",
        frogEat: "frogEat 0.6s ease-in-out",
        shake: "shake 0.4s ease-in-out",
      },
      screens: {
        xs: "360px",  // 📱 Extra Small — ukuran untuk HP kecil (misalnya: Redmi 9A, Galaxy A01, dll)
        sm: "480px",  // 📱 Small — ukuran HP standar & menengah (Poco X Series, Samsung A-series, Oppo, Vivo)
        md: "768px",  // 📱/💻 Medium — ukuran tablet atau layar horizontal HP
        lg: "1024px", // 💻 Large — ukuran laptop 13 inch ke atas
        xl: "1280px", // 🖥 Extra Large — ukuran layar desktop besar / monitor
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
