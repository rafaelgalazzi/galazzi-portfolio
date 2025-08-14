// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        muted: 'var(--muted)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'accent-secondary': 'var(--accent-secondary)',
        button: 'var(--button)',
        'button-foreground': 'var(--button-foreground)',
        dropdown: 'var(--dropdown)',
        'dropdown-hover': 'var(--dropdown-hover)',
        navbar: 'var(--navbar)',
        footer: 'var(--footer)',
        linkedin: 'var(--linkedin)',
        github: 'var(--github)',
        error: 'var(--error)',
        success: 'var(--success)',
        'pure-white': 'var(--pure-white)',
        'text-white': 'var(--text-white)',
        'card-bg': 'var(--card-bg)',
        'card-border': 'var(--card-border)',
      },
      animation: {
        'float': 'float 15s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-slow': 'pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
