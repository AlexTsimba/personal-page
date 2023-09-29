'use client';

import { useRef, useEffect } from 'react';

import { useUiStore } from '@/store/store';
import { shallow } from 'zustand/shallow';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Dictionary from '@/types/Dictionary';
import NavLink from '@/types/NavLink';
import { navConfig } from '@/lib/navConfig';

import Section from './Section';
import Hello from './SectionHello';
import Skills from './SectionSkills/SectionSkills';
import Projects from './SectionProjects.tsx';
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

export default function Main({ dict }: MainProps) {
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

  // Refs for section links used in scroll animation
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const { navLinks } = navConfig;

  // Create a list of sections with links, components and refs
  const sections = navLinks.map((page, index) => {
    return {
      sectionRef: sectionRefs[index],
      component: sectionComponents[page.key],
      ...page,
    };
  });

  const { setCurrentSection } = useUiStore(
    (state) => ({ setCurrentSection: state.setCurrentSection }),
    shallow
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a ScrollTrigger instance for each section
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section.sectionRef.current,
        start: 'top center+=25%', // Trigger point with 25% space on top
        end: 'bottom center-=25%', // End point with 25% space on bottom
        onEnter: () => {
          const currentSection = section.key;
          setCurrentSection(currentSection);
        },
        onEnterBack: () => {
          const currentSection = section.key;
          setCurrentSection(currentSection);
        },
      });
    });
  }, [sections, setCurrentSection]);

  return (
    <main>
      {sections.map(({ key, href, sectionRef, component }) => (
        <Section key={href} id={key} ref={sectionRef}>
          {component}
        </Section>
      ))}
    </main>
  );
}
