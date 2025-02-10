/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: { min: "350px", max: "400px" },
        xs: { min: "401px", max: "639px" },
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
      },
      backgroundImage: {
        background: "url('assets/background.svg')",
      },
      dropShadow: {
        my: "0 0 15px rgba(255, 255, 255, 0.8)",
      },
    },
  },
  plugins: [],
};
