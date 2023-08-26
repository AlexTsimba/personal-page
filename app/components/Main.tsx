'use client';

import Contact from './SectionContact';
import Dashboard from './SectionDashboard';
import Hello from './SectionHello';
import Skills from './SectionSkills';

// import { useRef, useEffect } from 'react';

// import { useUiStore } from '@/store/store';
// import { shallow } from 'zustand/shallow';

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import NavLink from '@/types/NavLink';
// import { navConfig } from '@/lib/navConfig';

// import Section from './Section';


export default function Main() {
  // const sectionComponents: Record<NavLink['key'], JSX.Element> = {
  //   hello: <Hello dict={dict.hello} />,
  //   skills: <Skills dict={dict.skills} />,
  //   dashboard: <Dashboard dict={dict.dashboard} />,
  // };

  // // Refs for section links used in scroll animation
  // const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  // const { navLinks } = navConfig;

  // // Create a list of sections with links, components and refs
  // const sections = navLinks.map((page, index) => {
  //   return {
  //     sectionRef: sectionRefs[index],
  //     component: sectionComponents[page.key],
  //     ...page,
  //   };
  // });

  // const { setCurrentSection } = useUiStore(
  //   (state) => ({ setCurrentSection: state.setCurrentSection }),
  //   shallow
  // );

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Create a ScrollTrigger instance for each section
  //   sections.forEach((section) => {
  //     ScrollTrigger.create({
  //       trigger: section.sectionRef.current,
  //       start: 'top center+=25%', // Trigger point with 25% space on top
  //       end: 'bottom center-=25%', // End point with 25% space on bottom
  //       onEnter: () => {
  //         const currentSection = section.key;
  //         setCurrentSection(currentSection);
  //       },
  //       onEnterBack: () => {
  //         const currentSection = section.key;
  //         setCurrentSection(currentSection);
  //       },
  //     });
  //   });
  // }, [sections, setCurrentSection]);

  return (
    // <main>
    //   {sections.map(({ key, href, sectionRef, component }) => (
    //     <Section key={href} id={key} ref={sectionRef}>
    //       {component}
    //     </Section>
    //   ))}
    // </main>
    <>
      <Hello />
      <Skills />
      <Dashboard />
      <Contact />
    </>
  );
}
