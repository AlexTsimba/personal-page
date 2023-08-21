// 'use client';

// import useScrollSettings from '@/lib/hooks/useScrollSettings';
// import Dashboard from './dashboard/page';
// import Skills from './skills/page';
// import Contact from './contact/page';
// import Header from '../components/Header';
// import Ola from './hello/page';
// import { useUiStore } from '@/store/store';
// import { shallow } from 'zustand/shallow';

// export default function Home() {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const scroller = useScrollSettings(true)!;

//   const { setCurrentSection } = useUiStore(
//     (state) => ({
//       setCurrentSection: state.setCurrentSection,
//     }),
//     shallow
//   );

//   return (
//     <div>
//       <Header scroller={scroller} />
//       <main>
//         <div
//           id="main-container"
//           className="main-container"
//           data-scroll-container
//         >
//           <div id="hello" data-scroll-section>
//             <Ola />
//           </div>
//           <div id="dashboard" data-scroll-section>
//             <Dashboard />
//           </div>
//           <div id="skills" data-scroll-section>
//             <Skills />
//           </div>
//           <div id="contact" data-scroll-section>
//             <Contact />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
'use client';

import Header from '../components/Header';
import useScrollSettings from '@/lib/hooks/useScrollSettings';
import Contact from './contact/page';
import Dashboard from './dashboard/page';
import Hello from './hello/page';
import Skills from './skills/page';
import { navConfig } from '@/lib/navConfig';
import { useRef } from 'react';
import Section from '../components/Section';

export default function Home() {
  const scroller = useScrollSettings(true)!;

  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  navConfig.navLinks.forEach((link, index) => {
    link.headerRef = sectionRefs[index];
  });

  const sections: { [key: string]: JSX.Element } = {
    hello: <Hello />,
    skills: <Skills />,
    dashboard: <Dashboard />,
    contact: <Contact />,
  };

  scroller.on('scroll', () => console.log('scrolled here'))

  return (
    <div>
      <Header scroller={scroller} />
      <main>
        <div
          id="main-container"
          className="main-container"
          data-scroll-container
        >
          {navConfig.navLinks.map(({ key, href, headerRef }) => (
            <Section
              data-scroll-call="func"
              data-scroll-section
              className="flex-1"
              key={href}
              id={key}
              ref={headerRef}
            >
              {sections[key]}
            </Section>
          ))}
        </div>
      </main>
    </div>
  );
}
