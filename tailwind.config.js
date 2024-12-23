export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8D001A',
          dark: '#6E0202'
        },
        secondary: '#333333',
        background: '#F9F7F5',
        accent: '#FFEEDD',
        navy: '#24314A',
        'border-gray': '#DEDEDE',
        'light-gray': '#EDEDED',
        'muted-text': '#999999'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        'crimsonpro': ['Crimson Pro', 'serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif']
      },
      spacing: {
        'section': '180px',
        'widget': '20px',
        'nav': '44px'
      },
      transitionDuration: {
        'default': '400ms'
      }
    },
  },
  plugins: [],
}
