/** @type {import('tailwindcss').Config} */

const rotateY = require('./lib/plugins/tw-rotate');

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
      height: {
        clamp: 'clamp(9rem, 30vw, 20rem)',
      },
      padding: {
        'clamp-sm':'clamp(0rem, calc(3vw - 3px), 3rem)',
        clamp: 'clamp(0rem, calc(5vw - 5px), 5rem)',
        
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
        'accordion-down': 'accordion-down 0.4s ease-in-out',
        'accordion-up': 'accordion-up 0.4s ease-in-out',
      },
      fontFamily: {
        monserrat: ['var(--font-monserrat)'],
      },
      fontSize: {
        'clamp-sm': 'clamp(0.7rem, 3vw, 1rem)',
        'clamp-md': 'clamp(0.9rem, 3vw, 1.2rem',
        'clamp-lg': 'clamp(0.9rem, 3vw, 1.5rem)',
        'clamp-xl': 'clamp(1.2rem, 3vw, 1.5rem)',
        clamp: 'clamp(1rem, 5vw, 3.75rem)',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
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
          soft: 'hsl(var(--accent-foreground))',
        },
        routine: {
          DEFAULT: 'hsl(var(--routine))',
          foreground: 'hsl(var(--routine-foreground))',
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
    },
  },
  plugins: [require('tailwindcss-animate'), rotateY],
};