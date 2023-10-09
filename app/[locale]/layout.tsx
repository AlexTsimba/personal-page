import '../globals.css';
import type { Metadata } from 'next';
import classNames from 'classnames';

import monserrat from '@/public/fonts/Monserrat';
import Providers from '@/components/providers/Providers';

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
          monserrat.className,
          'lenis lenis-smooth light flex min-h-screen flex-col items-center'
        )}
      >
        <Providers>
          <div className="relative  w-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
