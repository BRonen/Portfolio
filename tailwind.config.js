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
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '1.5xl': '1.5rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '3.5xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [],
}