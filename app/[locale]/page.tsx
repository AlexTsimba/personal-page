import { getDictionary } from '@/dictionary/dictionary';
import Dictionary from '@/types/Dictionary';

import Header from '../../components/Header';
import Main from '../../components/Main';
import { unstable_setRequestLocale } from 'next-intl/server';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const dictionary = await getDictionary(locale);

  const headerDict: Pick<Dictionary, 'theme' | 'language' | 'navLinks'> = {
    theme: dictionary.theme,
    language: dictionary.language,
    navLinks: dictionary.navLinks,
  };

  const mainDict: Pick<
    Dictionary,
    | 'hello'
    | 'contact'
    | 'skills'
    | 'projects'
  > = {
    hello: dictionary.hello,
    skills: dictionary.skills,
    projects: dictionary.projects,
    contact: dictionary.contact,
  };

  return (
    <>
      <Header dict={headerDict} />
      <Main dict={mainDict} />
      <footer className="flex h-20 items-center justify-center bg-background transition-colors">
        footer
      </footer>
    </>
  );
}
