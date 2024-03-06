/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius:{
        '4xl':'3rem'
      },
      colors: {
        forest: {
          100: "#BFBFB8",
          200: "#A4A69C",
          300: "#4C594F",
          400: "#35403A",
          500: "#232625",
        },
      },
    },
    fontFamily: {
      "open-sans": ["Open Sans"],
    },
  },
  plugins: [],
};
