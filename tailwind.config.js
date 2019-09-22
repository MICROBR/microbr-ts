module.exports = {
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        76: '19rem',
        80: '20rem',
        92: '23rem',
        100: '25rem',
        112: '28rem'
      },
      colors: {
        tblack: '#343434',
        tgray: '#A1A1A1',
        tgreen: '#44CE6F',
        tpink: '#D6B4E7',
        torange: '#F48665',
        tblue: '#4A658A',
        formgray: '#eeeeee'
      },
      boxShadow: {
        full:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 -5px 15px -5px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
}
