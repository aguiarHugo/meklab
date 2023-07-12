/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#55a043'
        },
        yellow: {
          100: '#f2c738'
        },
        dark: {
          100: '#080808',
          200: '#a9b1a7',
          300: '#f2f0f0'
        },
        red: {
          100: '#e10f0f'
        },
        blue: {
          100: '#05a4af',
          200: '#6fa1e3'
        }
      },
    },
  },
  plugins: [],
}
