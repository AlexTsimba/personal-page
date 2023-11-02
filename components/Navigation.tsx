'use client';

import { shallow } from 'zustand/shallow';
import { useUiStore } from '@/store/store';

import Lenis from '@studio-freight/lenis';
import { useLenis } from '@studio-freight/react-lenis';

import Dictionary from '@/types/Dictionary';

import SideBar from './SideBar';
import NavBar from './NavBar';
import PageControls from './PageControls';
import { LazyMotion } from 'framer-motion';
import { loadDomMaxFeatures } from '@/lib/framer-motion/features';

interface NavigationProps {
  dict: Dictionary['header'];
}

export default function Navigation({ dict }: NavigationProps) {
  const scroller: Lenis = useLenis();

  const { activeSection, isSidebarOpen, toggleSidebar } = useUiStore(
    (state) => ({
      activeSection: state.currentSection,
      isSidebarOpen: state.isSidebarOpen,
      toggleSidebar: state.toggleSidebar,
    }),
    shallow
  );

  return (
    <LazyMotion features={loadDomMaxFeatures}>
      <NavBar
        dict={dict.navLinks}
        activeSection={activeSection}
        scroller={scroller}
      >
        <PageControls
          isSidebarOpen={isSidebarOpen}
          dict={{ ...dict.language, ...dict.theme }}
        />
      </NavBar>
      <SideBar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        dict={dict.navLinks}
        activeSection={activeSection}
        scroller={scroller}
      />
    </LazyMotion>
  );
}
