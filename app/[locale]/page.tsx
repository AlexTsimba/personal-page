import Header from '../components/Header';
import Main from '../components/Main';
import { useTranslation as getTranslation } from '../i18n';

interface HomeProps {
  params: { locale: string };
}

export default async function Home({ params }: HomeProps) {
  const { t  } = await getTranslation(params.locale, 'translation');

  return (
    <>
      <Header />
      <Main />
      <footer className="flex h-20 items-center justify-center bg-slate-500">
        {t('index')}
      </footer>
    </>
  );
}
