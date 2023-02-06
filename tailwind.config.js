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
        primary: "#1f435d",
        secondary: "#d0e6f5",
      },
    },
  },
  plugins: [],
};
