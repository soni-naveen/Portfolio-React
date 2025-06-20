/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        101: "101%",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
        marquee: "marquee 15s linear infinite",
      },
      screens: {
        xxs: "350px",
        xs: "401px",
      },
      fontFamily: {
        poppins: ['"Poppins"', "serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400", // Default weight
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontStyle: {
        normal: "normal",
        italic: "italic",
      },
      fontSize: {
        clamp1: "clamp(1.6rem, 3.8vw, 3rem)",
        clamp2: "clamp(1.2rem, 2vw, 1.5rem)",
        clamp3: "clamp(1.7rem, 3.8vw, 2.5rem)",
      },
      dropShadow: {
        my: "0 0 10px rgba(255, 255, 255, 0.7)",
      },
    },
  },
  plugins: [],
};
