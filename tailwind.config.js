/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      darkBlue: 'hsl(var(--dark-blue))',
      darkBlueBg: 'hsl(var(--dark-blue-background))',
      lightBlueText: 'hsl(var(--light-blue-text))',
      darkGray: 'hsl(var(--dark-gray))',
      lightGrayBg: 'hsl(var(--light-gray-background))',
      white: 'hsl(var(--white))'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  plugins: [],
}
