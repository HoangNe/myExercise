/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    keyframes: {
      run: {
        to: { transform: "translateX(200%)" },
      },
    },
    animation: {
      run: "run 2s infinite",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
