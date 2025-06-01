/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "#0c3d4d",
      lightBrown: "#645550",
      darkBrown: "#082c38",
      black: "#1e1917",
      white: "#f3e9e2",
      whiteHover: "#fbeecc",
      hover: "#c9886b",

      cyan: "#15d1e9",
      lightCyan: "#60c7d6",
      darkCyan: "#009fb3",

      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",

      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",

      analogous1: "#0c3d4d",
      analogous2: "#156773",
      analogous3: "#1b8999",
      mono1: "#113b4b",
      mono2: "#1d5e74",
      mono3: "#2d7f9b",
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
