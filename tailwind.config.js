/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Antonio', 'Arial Narrow', 'sans-serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#f5efe2',
          dim: '#cfc8b8',
          muted: '#9b9588',
        },
        ink: '#151510',
        obsidian: {
          950: '#030406',
          900: '#090b0f',
          800: '#11141b',
        },
        mist: '#b8cad6',
      },
      boxShadow: {
        soft: '0 8px 32px -4px rgba(0, 0, 0, 0.55)',
        elevated: '0 20px 50px -10px rgba(0, 0, 0, 0.75)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
