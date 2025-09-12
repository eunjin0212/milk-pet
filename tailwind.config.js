/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        main: '#339DEE',
        gray: {
          light: '#ECECEC',
          dark: '#5A5A5A'
        }
      },
      borderRadius: {
        'base': '0.625rem',
        'bottom-lg': '1.25rem 1.25rem 0 0',
      },
      space: {
        'base': '0.625rem', // 10px
      },
      fontFamily: {
        sans: ["Pretendard"],
        pretendard: ["Pretendard"],
        "pretendard-bold": ["Pretendard-Bold"],
        "pretendard-light": ["Pretendard-Light"],
        "pretendard-regular": ["Pretendard-Regular"],
        "pretendard-semibold": ["Pretendard-SemiBold"],
      },
    },
  },
  plugins: [],
}

