module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        11: "repeat(11, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
      },
      gridRow: {
        "span-10": "span 10 / span 10",
      },
      colors: {
        "btn-bg": "rgb(125 211 252)",
        "btn-hover": "rgb(56 189 248)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
  },
  plugins: [],
};
