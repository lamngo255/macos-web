// const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xx: "11rem",
        tiny: ".65rem",
      },
      height: {
        18: "72px",
      },
      scale: {
        175: "1.75",
        200: "2",
      },
      transitionDuration: {
        0: "0ms",
        250: "250ms",
      },
      transformOrigin: {
        "top-1/2": "50% 100%",
      },
      keyframes: {
        loading: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        loading: "loading 1.5s ease-in-out",
        "fade-in": "fadeIn 0.5s",
        "fade-out": "fadeOut 0.5s",
      },
      colors: {
        loading: "#424242",
        bg: "var(--bg)",
        border: "var(--border)",
        dropdown: "var(--dropdown)",
        divider: "var(--divider)",
        accent: "var(--text)",
        gray: "var(--text-gray)",
        "dropdown-item-hover": "var(--dropdown-item-hover)",
        "app-bg": "var(--app-bg)",
        "app-transparent": "var(--text-transparent)",
        "toggle-active": "#1866df",
        "btn-close": "var(--btn-close)",
        "btn-min": "var(--btn-min)",
        "btn-max": "var(--btn-max)",
      },
      gridTemplateColumns: {
        lg: "repeat(auto-fill, minmax(160px, 1fr))",
        sm: "repeat(auto-fill, minmax(130px, 1fr))",
      },
    },
  },
  plugins: [],
};
