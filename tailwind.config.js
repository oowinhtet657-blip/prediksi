module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF8C00',
        secondary: '#FFD700',
        accent: '#D97706',
        dark: '#92400E',
        'orange-gradient-start': '#FF8C00',
        'yellow-gradient-mid': '#FFD700',
        'brown-gradient-end': '#D97706',
      },
      backgroundImage: {
        'gradient-vibrant': 'linear-gradient(-45deg, #FF8C00, #FFD700, #D97706, #92400E)',
        'gradient-orange-yellow': 'linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)',
        'gradient-orange-brown': 'linear-gradient(135deg, #FFD700 0%, #D97706 100%)',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
