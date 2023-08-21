import '../globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useLocale } from 'next-intl';
import classNames from 'classnames';

import Providers from '../components/providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '<AlexTsimba />',
  description: 'Personal web page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        id="portal"
        className={classNames(
          inter.className,
          'flex min-h-screen flex-col items-center'
        )}
      >
        <Providers>
          <div className="relative h-screen w-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
