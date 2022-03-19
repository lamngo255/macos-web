// const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xx: "11rem",
      },
      keyframes: {
        loading: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
      },
      animation: {
        loading: "loading 1.5s ease-in-out",
      },
      colors: {
        loading: "#424242",
        bg: "var(--bg)",
        border: "var(--border)",
        dropdown: "var(--dropdown)",
        divider: "var(--divider)",
        accent: "var(--text)",
        gray: "var(--text-gray)",
        transparent: "var(--text-transparent)",
        "dropdown-item-hover": "var(--dropdown-item-hover)",
        "app-bg": "var(--app-bg)",
      },
      gridTemplateColumns: {
        lg: "repeat(auto-fill, minmax(160px, 1fr))",
        sm: "repeat(auto-fill, minmax(130px, 1fr))",
      },
    },
  },
  plugins: [],
};
