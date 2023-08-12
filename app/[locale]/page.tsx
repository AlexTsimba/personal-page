import { useTranslations } from 'next-intl';

export default function Home() {
  const text = useTranslations('Index');

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>{text('title')}</div>
    </main>
  );
}
