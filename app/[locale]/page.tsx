// import { getDictionary } from '@/dictionary/dictionary';
// import Dictionary from '@/types/Dictionary';

// import Header from '../../components/Header';
// import Main from '../../components/Main';
// import { unstable_setRequestLocale } from 'next-intl/server';

// export default async function Home({
//   params: { locale },
// }: {
//   params: { locale: string };
// }) {
//   unstable_setRequestLocale(locale);
//   const dictionary = await getDictionary(locale);

//   const headerDict: Pick<Dictionary, 'theme' | 'language' | 'navLinks'> = {
//     theme: dictionary.theme,
//     language: dictionary.language,
//     navLinks: dictionary.navLinks,
//   };

//   const mainDict: Pick<
//     Dictionary,
//     | 'hello'
//     | 'contact'
//     | 'skills'
//     | 'projects'
//   > = {
//     hello: dictionary.hello,
//     skills: dictionary.skills,
//     projects: dictionary.projects,
//     contact: dictionary.contact,
//   };

//   return (
//     <>
//       <Header dict={headerDict} />
//       <Main dict={mainDict} />
//       <footer className="flex h-20 items-center justify-center bg-background transition-colors">
//         footer
//       </footer>
//     </>
//   );
// }
import { getDictionary } from '@/dictionary/dictionary';
import { unstable_setRequestLocale } from 'next-intl/server';

import Header from '../../components/Header';
import Hello from '@/components/SectionHello';
import Skills from '@/components/SectionSkills/SectionSkills';
import Contact from '@/components/SectionContact';
import Projects from '@/components/SectionProjects';
import NavLink from '@/types/NavLink';
import { navConfig } from '@/lib/navConfig';
import Section from '@/components/Section';
import { Locale } from '@/types/PageVariants';

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  const dictionary = await getDictionary(locale);

  const sectionComponents: Record<NavLink['key'], JSX.Element> = {
    hello: <Hello dict={dictionary.hello} />,
    skills: <Skills dict={dictionary.skills} />,
    contact: <Contact dict={dictionary.contact} />,
    projects: <Projects dict={dictionary.projects} locale={locale} />,
  };

  const { navLinks } = navConfig;

  const sections = navLinks.map((page) => {
    return {
      component: sectionComponents[page.key],
      ...page,
    };
  });

  return (
    <>
      <Header dict={dictionary.header} />
      <main className="overflow-hidden">
        {sections.map(({ key, href, component }) => (
          <Section key={href} id={key}>
            {component}
          </Section>
        ))}
      </main>

      <footer className="flex h-20 items-center justify-center bg-background transition-colors">
        footer
      </footer>
    </>
  );
}
