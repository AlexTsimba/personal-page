'use client';

import { useAnimation } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import Burger from './Burger';
import SideBar from './Sidebar';

interface NavigationProps {
  children: React.ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
  const animationControls = useAnimation();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    animationControls.start(isMenuOpen ? 'open' : 'closed');
    setMenuOpen((prevOpen) => !prevOpen);
  }, [animationControls, isMenuOpen]);

  return (
    <div>
      {children}

      <Burger
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        controls={animationControls}
      />
      <SideBar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
