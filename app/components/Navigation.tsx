'use client';

import React, { useCallback } from 'react';
import { useAnimation } from 'framer-motion';

import { useUiStore } from '@/store/store';
import { shallow } from 'zustand/shallow';
import Burger from './Burger';
import SideBar from './Sidebar';

interface NavigationProps {
  children: React.ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
  const animationControls = useAnimation();

  const { isOpen, toggleSidebar } = useUiStore(
    (state) => ({
      isOpen: state.isSidebarOpen,
      toggleSidebar: state.toggleSidebar,
    }),
    shallow
  );

  const toggleMenu = useCallback(() => {
    animationControls.start(isOpen ? 'open' : 'closed');
    toggleSidebar();
  }, [animationControls, isOpen, toggleSidebar]);

  return (
    <div>
      {children}

      <Burger
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        controls={animationControls}
      />
      <SideBar isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
