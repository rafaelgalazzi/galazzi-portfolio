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
        button: 'var(--button)',
        'button-foreground': 'var(--button-foreground)',
        dropdown: 'var(--dropdown)',
        'dropdown-hover': 'var(--dropdown-hover)',
        navbar: 'var(--navbar)',
        footer: 'var(--footer)',
      },
    },
  },
  plugins: [],
};
