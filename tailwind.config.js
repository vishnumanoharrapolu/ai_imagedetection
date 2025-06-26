/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'secondary-gradient': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
        'purple-pink': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
        'teal-cyan': 'linear-gradient(135deg, #2dd4bf 0%, #22d3ee 100%)',
        'indigo-blue': 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
        'orange-red': 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
      },
      colors: {
        'neon-blue': '#00d4ff',
        'neon-purple': '#b845ed',
        'glass-bg': 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}