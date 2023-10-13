import Dictionary from '@/types/Dictionary';
import NavLink from '@/types/NavLink';
import { navConfig } from '@/lib/navConfig';

import Section from './Section';
import Hello from './SectionHello';
import Skills from './SectionSkills/SectionSkills';
import Projects from './SectionProjects';
import Contact from './SectionContact';

interface MainProps {
  dict: Pick<
    Dictionary,
    | 'hello'
    | 'contact'
    | 'skills'
    | 'projects'
    | 'contactFormFeedback'
    | 'contactDetails'
  >;
}

export default async function Main({ dict }: MainProps) {
  const contactDict: Pick<
    Dictionary,
    'contact' | 'contactDetails' | 'contactFormFeedback'
  > = {
    contact: dict.contact,
    contactFormFeedback: dict.contactFormFeedback,
    contactDetails: dict.contactDetails,
  };

  const sectionComponents: Record<NavLink['key'], JSX.Element> = {
    hello: <Hello dict={dict.hello} />,
    skills: <Skills dict={dict.skills} />,
    contact: <Contact dict={contactDict} />,
    projects: <Projects dict={dict.projects} />,
  };

  const { navLinks } = navConfig;

  const sections = navLinks.map((page) => {
    return {
      component: sectionComponents[page.key],
      ...page,
    };
  });

  return (
    <main>
      {sections.map(({ key, href, component }) => (
        <Section key={href} id={key}>
          {component}
        </Section>
      ))}
    </main>
  );
}
