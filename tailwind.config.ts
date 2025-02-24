import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        default: ['var(--font-syne-mono)'], // used everywhere
        code: 'monospace', // used in code blocks, when viewing recipes
        'code-alt': ['var(--font-monofett)'], // used in code blocks, when creating recipes
      },
    },
  },
  plugins: [],
} satisfies Config;
