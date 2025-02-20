/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontSize: {
        xss: ["0.625rem", "16px"],
        xxs: ["0.5rem", "12px"],
      },
      fontFamily: {
        inter: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      boxShadow: {
        "3xl": "0px 16px 24px -6px rgba(75, 85, 99, 0.09)",
        "4xl": "0px 20px 40px -12px rgba(75,85,99,0.2)",
      },
    },
  },
  plugins: [],
};
