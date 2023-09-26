/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "#01110b",
        "custom-green-lighter": "#021c13",
        "telegram-blue": "#0088cc",
      },
    }
  },
  plugins: [],
}

