/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "!./node_modules", // 👈  DELETE LATER
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrrat: ["var(--font-rubik)"],
      },
      colors: {
        primary: "#9AD0EC",
        secondary: "#1C6DD0",
      },
    },
  },
  plugins: [],
};
