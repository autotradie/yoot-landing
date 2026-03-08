/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yoot-navy': '#0F2D4A',
        'yoot-slate': '#5A7285',
        'yoot-muted': '#94A8B6',
        'yoot-amber': '#C47D0E',
        'yoot-page': '#E8EEF2',
        'yoot-card': '#FFFFFF',
        'yoot-surface': '#F5F8FA',
        'yoot-border': '#DDE4E9',
        'yoot-green': '#0D9E6E',
        'yoot-red': '#D94040',
        'yoot-blue': '#1A6FD4',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
