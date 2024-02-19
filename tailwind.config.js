/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius:{
        '4xl':'3rem'
      },
      spacing:{
          '81':'324px',
          '65':'258px',
          '50': '198px',
          '82':'332px',
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
