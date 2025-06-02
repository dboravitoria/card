/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#C12727',
        secondary: '#040616',
        white: '#bdd5ea',
      },
      fontFamily: {
        primary: ["JetBrains Mono", 'monospace'],
        secondary: ["Space Grotesk", 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'typing': 'typing 2s steps(50, end) infinite, blink-caret 3s step-end infinite',

      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#C12727' },
        },
      },
    },
  },
  plugins: [],
}

