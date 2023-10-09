import { ThemeProvider } from './theme-provider';
import LocaleProvider from './Locale';
import { SmoothScrollProvider } from './smoothScrollProvider';
import LazyMotionProvider from './LazyMotion';

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
}

export default function Providers({ children, locale }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LocaleProvider locale={locale}>
        <SmoothScrollProvider>
          <LazyMotionProvider>{children}</LazyMotionProvider>
        </SmoothScrollProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
