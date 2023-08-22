'use client';

import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { shallow } from 'zustand/shallow';

import Portal from './Portal';
import { motionControls } from '@/lib/motionControls';
import { useUiStore } from '@/store/store';
import useOnClickOutside from '@/lib/hooks/useOnClickOutside';

interface SideBarProps {
  children: React.ReactNode;
}

export default function SideBar({ children }: SideBarProps) {
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
              <nav className="flex flex-col h-full gap-10  justify-center items-center">{children}</nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}
