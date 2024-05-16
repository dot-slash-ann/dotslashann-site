module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'xs': '0px'
      },
      colors: {
        'light': '#6A5ACD',
        'light-background': 'var(--color-light-background)',
        'dark': '#4B0082',
        'dark-background': 'var(--color-dark-background)',
        'highlight': 'var(--color-highlight)',

        'primary': 'var(--color-primary)',
        'inverse': 'var(--color-inverse)',
        'text-primary': 'var(--color-text-primary)',
        'text-inverse': 'var(--color-text-inverse)',
        'background': 'var(--color-background)',
        'background-inverse': 'var(--color-background-inverse)',
      },
    },
  },
}