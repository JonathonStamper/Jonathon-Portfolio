/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
 
  ],
  theme: {
    extend: {
      fontFamily: {
        'oi': ["Oi", "serif"],
        'outfit': ["Outfit", "sans-serif"],
        'cherry' : ['Cherry Bomb One', 'system-ui']
      },
    },
  },
  plugins: [],
}

