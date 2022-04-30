module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-1': "url('../src/images/banner/banner-1.jpg')",
        'popular': "url('https://nld.mediacdn.vn/291774122806476800/2022/3/24/he-n-ho-cho-n-co-ng-so-jpeg-67-1559-4789-1648010478-16481293008421290008224.jpg')",
        'background-login': "url('../src/images/bg-login.jpg')",
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
  ],
}
