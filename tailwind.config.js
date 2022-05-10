module.exports = {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['Roboto Mono', 'monospace'],
      },
      colors: {
        white: '#ffffff',
        primary: '#00AD8C',
        secondary: '#021B51',
        tertiary: '#DFE2EB',
        text: '#4D5566',
      },
    },
  },
  plugins: [],
}
