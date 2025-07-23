import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        layer: {
          base: '#eaeffb',
          fore: '#ffffff',
          back: '#0741A6',
          tinted: '#101010',
        },
        primary: '#1267F6',
        secondary: '#29C16B',
      },
    },
  },
  plugins: [],
};
export default config;
