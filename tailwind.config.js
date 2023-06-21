module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      black: "#151719",
      white: "#eceded",

      gray: {
        500: "#9ca9b3",
        600: "#2a2d32",
        700: "#33363a",
        800: "#25282c",
      },

      green: {
        300: "#73efcc",
        400: "#1cb68b",
      },

      indigo: {
        400: "#acadff",
        500: "#6b6dff",
        600: "#6163ff",
        700: "#5658dd",
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
      }
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
  },
  plugins: [require("tailwindcss-font-inter")()],
};
