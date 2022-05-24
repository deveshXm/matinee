module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      'hero-pattern': "url('/images/hero-background.jpg')",
    }
    },
    
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide')
  ]
}
