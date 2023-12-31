import localFont from 'next/font/local';

export const fixelFont = localFont({
  src: [
    {
      path: './FixelText-Light.woff2',
      weight: '300',
    },
    {
      path: './FixelText-Regular.woff2',
      weight: '400',
    },
    {
      path: './FixelText-Medium.woff2',
      weight: '500',
    },
    {
      path: './FixelText-SemiBold.woff2',
      weight: '600',
    },
    {
      path: './FixelText-Bold.woff2',
      weight: '700',
    },
  ],
  display: 'swap',
  fallback: ['Arial', 'system-ui'],
  adjustFontFallback: 'Arial',
  variable: '--font-fixel',
});
