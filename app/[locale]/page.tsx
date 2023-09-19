import { getDictionary } from '@/dictionary/dictionary';
import Dictionary from '@/types/Dictionary';

import Header from '../components/Header';
import Main from '../components/Main';

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

  const mainDict: Pick<
    Dictionary,
    'hello' | 'contact' | 'skills' | 'dashboard' |'contactForm'
  > = {
    hello: dictionary.hello,
    skills: dictionary.skills,
    dashboard: dictionary.dashboard,
    contact: dictionary.contact,
    contactForm: dictionary.contactForm
  };

  return (
    <>
      <Header dict={headerDict} />

      <Main dict={mainDict} />
      <footer className="flex h-20 items-center justify-center bg-background">
        footer g
      </footer>
    </>
  );
}
