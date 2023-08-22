import { getDictionary } from '@/dictionary/dictionary';

import Header from '../components/Header';
import Main from '../components/Main';
import { Dictionary, MainDictionary } from '@/types/Dictionary';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const dictionary = await getDictionary(locale);

  const headerDict: Pick<Dictionary, 'theme' | 'language' | 'navLinks'> = {
    theme: dictionary.theme,
    language: dictionary.language,
    navLinks: dictionary.navLinks,
  };

  const mainDict: MainDictionary = {
    hello: dictionary.hello,
    skills: dictionary.skills,
    dashboard: dictionary.dashboard,
    contact: dictionary.contact,
  };

  return (
    <>
      <Header dict={headerDict} />
      <Main dict={mainDict} />
      <footer className="flex h-20 items-center justify-center bg-slate-500">
        footer
      </footer>
    </>
  );
}
