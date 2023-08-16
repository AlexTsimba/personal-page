import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

interface LocaleLayoutProps {
  children: React.ReactNode;
  locale: string;
}

export default async function LocaleProvider({
  children,
  locale,
}: LocaleLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
