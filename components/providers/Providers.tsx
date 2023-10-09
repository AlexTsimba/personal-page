// import { ThemeProvider } from './theme-provider';
// import LocaleProvider from './locale-provider';
// import { useLocale } from 'next-intl';
// import { SmoothScrollProvider } from './smoothScrollProvider';
// import LazyMotionProvider from './LazyMotion';

// interface ProvidersProps {
//   children: React.ReactNode;
// }

// export default function Providers({ children }: ProvidersProps) {
//   const locale = useLocale();

//   return (
//     <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//       <LocaleProvider locale={locale}>
//         <SmoothScrollProvider>
//           <LazyMotionProvider>{children}</LazyMotionProvider>
//         </SmoothScrollProvider>
//       </LocaleProvider>
//     </ThemeProvider>
//   );
// }
import { ThemeProvider } from './theme-provider';
import LocaleProvider from './locale-provider';
// import { useLocale } from 'next-intl';
import { SmoothScrollProvider } from './smoothScrollProvider';
import LazyMotionProvider from './LazyMotion';

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
}

export default function Providers({ children, locale }: ProvidersProps) {
  // const locale = useLocale();

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
