module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        shunyaDark: '#163D2B',
        shunyaMid: '#2F6A3F',
        shunyaLight: '#B7EBA8',
        shunyaOlive: '#6A8A57',
        shunyaLime: '#7AE03F'
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 1.6s linear infinite'
      }
    }
  },
  plugins: []
}
