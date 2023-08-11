import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeSwitch } from '@/components/ui/ThemeSwitch';
import classNames from 'classnames';

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={classNames(inter.className, ' min-h-screen flex flex-col items-center justify-between' )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="flex justify-center">
            <ThemeSwitch />
          </header>
          {children}
          <footer>footer</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
