module.exports = {
  content: ["./public/blog/**/*.{html,js}",
            "./public/**/*.{html,js}",],
  theme: {
    // colors: {
    //   'ocean': '#ccffdd',       // eg: text-sunshine
    // },
    extend: {
      colors: {
        'sunshine': '#FFFFE0',       // eg: text-sunshine
      },
      spacing: {
        // 7: '2em',
      },
      screens: {
        // sm: '480px',
        // md: '768px',
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

