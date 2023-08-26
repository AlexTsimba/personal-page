'use client';

import { shallow } from 'zustand/shallow';
import { useUiStore } from '@/store/store';

import Lenis from '@studio-freight/lenis';
import { useLenis } from '@studio-freight/react-lenis';

import PageVariants from '@/types/PageVariants';

import SideBar from './SideBar';
import NavBar from './NavBar';
import PageControls from './PageControls';
import ThemeSwitch from './ThemeSwitch';

interface NavigationProps {
  pageVariants: PageVariants;
}

export default function Navigation({
  pageVariants,
}: NavigationProps) {
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
    <>
      <NavBar
        activeSection={activeSection}
        scroller={scroller}
      >
        {!isSidebarOpen && (
          <PageControls isSidebarOpen={isSidebarOpen} variants={pageVariants} />
        )}
      </NavBar>

      <SideBar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeSection={activeSection}
        scroller={scroller}
      >
        <ThemeSwitch variants={pageVariants.themeVariants} />
      </SideBar>
    </>
  );
}
