import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      flexGrow: {
        8: '8'
      },
      translate: {
        'x-return': '-100%'
      },
      minWidth: {
        'xs': '320px',
        counterBtn: '24px',
      },
      maxWidth: {
        ['basket-product-describe']:'60%'
      },
      height: {
        '150': '37.5rem',
        '117': '117vw',
        '135': '135vw'

      },
      width: {
        '100': '25rem',
        '120': '30rem',
        '152': '38rem'
      },
      fontSize: {
        'xxs': ['0.65rem',{
          lineHeight:'1rem',
        }]
      }
    },
    },
  }
export default config
