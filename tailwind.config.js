module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#050816",
          surface: "rgba(255, 255, 255, 0.04)",
          surface2: "rgba(255, 255, 255, 0.06)",
          border: "rgba(255, 255, 255, 0.10)",
          text: "#f5f7ff",
          muted: "#b0b8cf",
          cyan: "#4be1ff",
          pink: "#ff6bbd",
          purple: "#9b87f5",
        },
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
        glowCyan: "0 0 0 1px rgba(75,225,255,0.16), 0 0 24px rgba(75,225,255,0.10)",
        glowPink: "0 0 0 1px rgba(255,107,189,0.16), 0 0 24px rgba(255,107,189,0.10)",
      },
    },
  },
  plugins: [],
};
