'use client';

import { useRef, useEffect } from 'react';
import { useUiStore } from '@/store/store';
import { shallow } from 'zustand/shallow';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { navConfig } from '@/lib/navConfig';
import Section from './Section';
import Hello from '../[locale]/hello/page';
import Skills from '../[locale]/skills/page';
import Dashboard from '../[locale]/dashboard/page';
import Contact from '../[locale]/contact/page';
import { MainDictionary } from '@/types/Dictionary';

interface MainProps {
  dict: MainDictionary;
}

export default function Main({ dict }: MainProps) {
  const { navLinks } = navConfig;
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const sections: { [key: string]: JSX.Element } = {
    hello: <Hello />,
    skills: <Skills />,
    contact: <Contact />,
    dashboard: <Dashboard />,
  };

  console.log(dict)

  const mainSections = navLinks.map((page, index) => {
    return {
      sectionRef: sectionRefs[index],
      component: sections[page.key],
      ...page,
    };
  });

  const { setCurrentSection } = useUiStore(
    (state) => ({ setCurrentSection: state.setCurrentSection }),
    shallow
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    mainSections.forEach((section) => {
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
  }, [mainSections, setCurrentSection]);

  return (
    <main>
      {mainSections.map(({ key, href, sectionRef, component }) => (
        <Section key={href} id={key} ref={sectionRef}>
          {component}
        </Section>
      ))}
    </main>
  );
}
