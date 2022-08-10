/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js.ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily:{
      'dot':["DotGothic16"],
      "mono":['Space Mono']
    },
    extend: {},
  },
  plugins: [],
}
