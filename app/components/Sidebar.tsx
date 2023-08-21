'use client';

import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { shallow } from 'zustand/shallow';

import Portal from './Portal';
import { motionControls } from '@/lib/motionControls';
import { useUiStore } from '@/store/store';
import useOnClickOutside from '@/lib/hooks/useOnClickOutside';
import NavLink from '@/types/NavLink';
import NavItem from './NavItem';

interface SideBarProps {
  navLinks: NavLink[];
  handler: (href: string) => () => void;
}

export default function SideBar({ navLinks, handler }: SideBarProps) {
  const { isOpen, toggleSidebar } = useUiStore(
    (state) => ({
      isOpen: state.isSidebarOpen,
      toggleSidebar: state.toggleSidebar,
    }),
    shallow
  );

  const wrapperRef = useRef<HTMLBaseElement>(null);
  useOnClickOutside(wrapperRef, toggleSidebar);

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.aside
              ref={wrapperRef}
              className="fixed left-0 top-0 h-[100vh] w-2/3 max-w-sm bg-foreground/10 p-5 text-foreground shadow-2xl backdrop-blur-lg"
              {...motionControls.sidebar}
            >
              <h2 className="text-4xl capitalize leading-loose">hello!</h2>

              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <NavItem key={link.href} link={link} handler={handler} />
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}
