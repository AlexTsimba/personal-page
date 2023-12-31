'use client';

import { shallow } from 'zustand/shallow';
import { useUiStore } from '@/store/store';

import Lenis from '@studio-freight/lenis';
import { useLenis } from '@studio-freight/react-lenis';

import Dictionary from '@/types/Dictionary';
import PageVariants from '@/types/PageVariants';

import SideBar from './SideBar';
import NavBar from './NavBar';
import PageControls from './PageControls';

interface NavigationProps {
  navigationDict: Dictionary['navLinks'];
  pageVariants: PageVariants;
}

export default function Navigation({
  navigationDict,
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
        navigationDict={navigationDict}
        activeSection={activeSection}
        scroller={scroller}
      >
        <PageControls isSidebarOpen={isSidebarOpen} variants={pageVariants} />
      </NavBar>

      <SideBar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        navigationDict={navigationDict}
        activeSection={activeSection}
        scroller={scroller}
      >

      </SideBar>
    </>
  );
}
