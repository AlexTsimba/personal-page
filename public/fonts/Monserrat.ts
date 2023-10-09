import { Montserrat } from 'next/font/google';

const monserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: 'variable',
  variable: '--font-monserrat',
  display: 'optional',
  fallback: ['Roboto'],
});

export default monserrat;
