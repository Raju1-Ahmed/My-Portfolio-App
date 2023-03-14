module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bgMenu': '#504D1A',
        'Bcolor': 'turquoise',
      },
      fontFamily: {
        sans: [ 'cursive']
      },
      backgroundColor: {
        'dark': '#282828',
      },
    },
  },
  plugins: [require("daisyui")],

}
