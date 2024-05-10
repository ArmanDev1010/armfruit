/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C8E03",
        secondary: "#81B518",
        thirdly: "#2C8E03",
      },
      fontFamily: {
        montserratarm: ["Montserratarm", "sans-serif"],
      },
    },
    screens: {
      bigg: "1851px",
      big: "1601px",
      bdesktop: "1480px",
      desktop: "1351px",
      sdesktop: "1151px",
      bmedium: "1081px",
      medium: "1025px",
      btablet: "901px",
      tablet: "801px",
      stablet: "701px",
      phone: "601px",
      small: "551px",
      smal: "401px",
      smaller: "351px",
    },
  },
  plugins: [],
};