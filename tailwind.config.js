/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#5A698F",
      },
      backgroundColor: {
        darkblue: "rgba(16, 20, 30, 1)",
        semidarkblue: "rgba(22, 29, 47, 1)",
      },
      maxWidth: {
        custom: "400px",
      },
      maxHeight: {
        custom: "373px",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};