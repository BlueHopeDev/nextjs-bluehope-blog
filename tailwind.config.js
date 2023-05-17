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
        height: 'height',
        dropShadow: 'drop-shadow',
      },
      colors: {
        glassDark: 'rgb(var(--tinted-black))',
        glassLight: 'rgb(var(--tinted-white))',
        light: 'rgb(var(--light))',
        dark: 'rgb(var(--dark))',
        header: 'rgb(var(--tinted-white))',
        foreground: 'rgb(var(--tinted-white))',
        background: 'rgb(var(--background))',
        backgroundDark: 'rgb(var(--background-dark))',
      },
      dropShadow: {
        'lightCenter': '0 0 2px rgb(var(--tinted-black)/0.1)',
        'darkCenter': '0 0 2px 2px rgb(var(--tinted-light))'
      },
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
