const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "header": "3fr 3.5fr 0.5fr",
        "footer": "200px minmax(900px, 1fr) 100px",
      },
      gridTemplateRows: {
        "layout": "10vh 1fr 15vh",
      }
    },
    fontFamily: {
      'sans': ['Titillium Web', ...defaultTheme.fontFamily.sans],
      'mono': ['Space Mono', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      '3.5xl': ['2rem', '2.35rem']
    }
  },
  plugins: [],
}