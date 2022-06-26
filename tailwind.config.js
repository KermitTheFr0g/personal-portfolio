/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%": { transform: "rotate(2.5deg)"},
          "50%": { transform: "rotate(-2.5deg)"},
          "100%": { transform: "rotate(2.5deg)"},
        }
      },
      animation: {
        shake: "shake 0.5s ease-in-out infinite",
      },
      colors: {
        'top-nav-bg': "#21314a",
        'profile-bg': '#273852',
        'hover-border': '#1f2d42',
        'dark-text': '#6f819e',
        'button-bg': '#405a82',
        'button-hover': '#344c70',
        'admin-primary-1': '#574476',
        'admin-primary-1-elements': '#745c9c',
        'admin-primary-2': '#1DC9B7'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
