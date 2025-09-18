/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonPurple: "#a855f7",
        neonTeal: "#00f7ff",
        neonLime: "#22c55e",
        neonYellow: "#FFD700",
        neonRed: "#FF3131",
        neonOrange: "#FF4500",
      },
      boxShadow: {
        neon: "0 0 10px rgba(255,215,0,0.8), 0 0 20px rgba(255,99,71,0.8)",
        glowPurple: "0 0 15px #a855f7, 0 0 30px #7e22ce",
        glowTeal: "0 0 15px #00f7ff, 0 0 30px #06b6d4",
      },
      backgroundImage: {
        "galaxy-gradient":
          "radial-gradient(circle at top, #0a0a0a, #1a0033, #000000 80%)",
        "sunset-gradient":
          "linear-gradient(90deg, #FF4500, #FFD700, #00FFE0, #FF3131)",
      },
      animation: {
        pulseGlow: "pulseGlow 2s infinite",
        flicker: "flicker 3s infinite",
        glowLoop: "glowLoop 6s infinite linear",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px #FFD700, 0 0 20px #FF4500" },
          "50%": { boxShadow: "0 0 20px #00FFE0, 0 0 40px #FF3131" },
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 100%": {
            opacity: 1,
          },
          "20%, 21.999%, 63%, 63.999%": {
            opacity: 0.3,
          },
        },
        glowLoop: {
          "0%": { textShadow: "0 0 5px #FF3131, 0 0 10px #FFD700" },
          "25%": { textShadow: "0 0 15px #00FFE0, 0 0 25px #a855f7" },
          "50%": { textShadow: "0 0 15px #22c55e, 0 0 25px #FFD700" },
          "75%": { textShadow: "0 0 15px #FF4500, 0 0 25px #00f7ff" },
          "100%": { textShadow: "0 0 5px #FF3131, 0 0 10px #FFD700" },
        },
      },
    },
  },
  plugins: [],
}
