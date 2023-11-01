import '../globals.css';
import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import classNames from 'classnames';
import { notFound } from 'next/navigation';

import monserrat from '@/public/fonts/Monserrat';
import Providers from '@/components/providers/Providers';
import { locales } from '@/i18n';

export const metadata: Metadata = {
  title: '<AlexTsimba />',
  description: 'Personal web page',
};


export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
 
  unstable_setRequestLocale(locale);
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body 
        id="portal"
        className={classNames(
          monserrat.className,
          'lenis lenis-smooth flex min-h-screen flex-col items-center '
        )}
      >
        <Providers locale={params.locale}>
          <div className="relative w-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
