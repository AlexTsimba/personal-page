import '../globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import classNames from 'classnames';

import Providers from '../components/providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '<AlexTsimba />',
  description: 'Personal web page',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body
        id="portal"
        className={classNames(
          inter.className,
          'lenis lenis-smooth light flex min-h-screen flex-col items-center'
        )}
      >
        <Providers>
          <div className="relative h-screen w-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
