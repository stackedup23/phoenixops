/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonPurple: "#a855f7", // bright purple
        neonTeal: "#00f7ff",   // teal blue
      },
    },
  },
  plugins: [],
}

