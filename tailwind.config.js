/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9",
        secondary: "#9333EA",
        accent: "#EC4899",
        dark: "#1F2937",
        light: "#F8F7FC",
      },

      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        card: "0 15px 40px rgba(109,40,217,0.08)",
      },

      borderRadius: {
        xl2: "20px",
      },
    },
  },
  plugins: [],
};