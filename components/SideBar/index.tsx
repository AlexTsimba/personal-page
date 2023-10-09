'use client';

import { useRef } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { motionControls } from '@/lib/motionControls';
import useOnClickOutside from '@/lib/hooks/useOnClickOutside';
import { navConfig } from '@/lib/navConfig';

import SideBarItem from './SideBarItem';
import Lenis from '@studio-freight/lenis';
import Dictionary from '@/types/Dictionary';
import Portal from '../Portal';

interface SideBarProps {
  isOpen: boolean;
  navigationDict: Dictionary['navLinks'];
  scroller: Lenis;
  activeSection: string;
  toggleSidebar: () => void;
  children: React.ReactNode;
}

export default function SideBar({
  navigationDict,
  scroller,
  activeSection,
  toggleSidebar,
  isOpen,
}: SideBarProps) {
  const wrapperRef = useRef<HTMLBaseElement>(null);
  useOnClickOutside(wrapperRef, toggleSidebar);

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <m.aside
            ref={wrapperRef}
            className="fixed left-0 top-0 z-20 h-[100vh] w-2/3 max-w-sm bg-background/70 px-6 pb-20 pt-4 shadow-2xl backdrop-blur-xl"
            {...motionControls.sidebar}
          >
            <div className="flex h-full flex-col justify-end">
              <nav className="flex h-full flex-col items-center  justify-center gap-10">
                {navConfig.navLinks.map((link, index) => {
                  const isActive = activeSection === link.key;
                  return (
                    <SideBarItem
                      scroller={scroller}
                      index={index}
                      title={navigationDict[link.key]}
                      key={link.key}
                      href={link.href}
                      isActive={isActive}
                    />
                  );
                })}
              </nav>
            </div>
          </m.aside>
        )}
      </AnimatePresence>
    </Portal>
  );
}
