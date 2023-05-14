/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height'
      },
      colors: {
        header: 'rgb(var(--tinted-white))',
        foreground: 'rgb(var(--tinted-white))',
        background: 'rgb(var(--background))',
        backgroundDark: 'rgb(var(--background-dark))',
      }
    },
    screens: {
      lg: '1200px',
      md: '960px',
      sm: '768px',
      xs: '560px',
      xxs: '480px',
    }
  },
  plugins: [],
}
