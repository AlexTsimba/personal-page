import { ThemeProvider } from './theme-provider';
import LocaleProvider from './locale-provider';
import { useLocale } from 'next-intl';
import { SmoothScrollProvider } from './smoothScrollProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const locale = useLocale();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LocaleProvider locale={locale}>
        <SmoothScrollProvider>
          {children}
          </SmoothScrollProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
