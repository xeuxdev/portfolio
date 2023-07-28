/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1000px",
      xl: "1111px",
    },
    colors: {
      body: "hsl(217, 18%, 14%)",
      white: "hsl(0, 0%, 100%)",
      text: "hsl(0, 0%, 83%)",
      text_Light: "hsla(0, 0%, 83%, 0.6)",
      buttonBg: "hsl(217, 10%, 25%)",
      cyan: "hsl(166, 100%, 34%)",
      cyan_dark: "hsla(166, 100%, 34%, 0.4)",
      veryDark: "hsl(0, 0%, 0%)",
      gray: "hsl(217, 13%, 27%)",
    },
    fontFamily: {
      pop: ["var(--font-poppins)"],
    },
    extend: {},
  },
  plugins: [],
}
