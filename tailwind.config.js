module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#DDE7DE',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#1e202175',
        'tahiti': '#3ab7bf',
        'silver': '#2d2c2ba6',
        'bgMenu': '#504D1A',
        'Bcolor': 'turquoise',
      },
      fontFamily: {
        sans: [ 'cursive']
      },
      backgroundColor: {
        'dark': '#070707',
      },
    },
  },
  plugins: [require("daisyui")],

}
