/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'JIT',
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-fixel)'],
      },
      fontSize: {
        clamp: 'clamp(1rem, 5vw, 3.75rem)',
        xs: ['clamp(0.75rem, 5vw, 1rem)', { lineHeight: '1rem' }],
        sm: ['clamp(0.875rem, 5vw, 1.25rem)', { lineHeight: '1.25rem' }],
        base: ['clamp(1rem, 5vw, 1.5rem)', { lineHeight: '1.5rem' }],
        lg: ['clamp(1.125rem, 5vw, 1.75rem)', { lineHeight: '1.75rem' }],
        xl: ['clamp(1.25rem, 5vw, 1.75rem)', { lineHeight: '1.75rem' }],
        '2xl': ['clamp(1.5rem, 5vw, 2rem)', { lineHeight: '2rem' }],
        '6xl': ['clamp(3.75rem, 5vw, 4.75rem)', { lineHeight: '1' }],
        '7xl': ['clamp(4.5rem, 5vw, 4.5rem)', { lineHeight: '1' }],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
