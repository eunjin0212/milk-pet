/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        main: '#339DEE'
      },
      borderRadius: {
        'base': '0.625rem'
      },
      space: {
        'base': '0.625rem'
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

