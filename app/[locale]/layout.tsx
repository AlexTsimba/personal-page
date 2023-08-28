import '../globals.css';
import type { Metadata } from 'next';

import { fixelFont } from '@/common/fonts/fixelFont';
import Providers from '../components/providers/Providers';
import classNames from 'classnames';

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
          fixelFont.className,
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
