import { ThemeProvider } from './theme-provider';
import LocaleProvider from './locale-provider';
import { useLocale } from 'next-intl';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const locale = useLocale();

  return (
    <LocaleProvider locale={locale}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </LocaleProvider>
  );
}
