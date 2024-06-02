/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./public/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
