/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      colors: {
        "seagreen-100": "#76E0C2",
        "seagreen-200": "#59CADA",
        "sunset-300": "#F6B868",
      },
    },
  },
  plugins: [],
};
