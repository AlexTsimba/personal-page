// 'use client';

import { AnimatePresence, motion, cubicBezier } from 'framer-motion';
// import Link from 'next/link';
import Portal from '../Portal';

interface SideBarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}
export default function SideBar({ isOpen, toggleMenu }: SideBarProps) {
  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: '-100%', opacity: 0.5 }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: '-100%',
                opacity: 0.8,
              }}
              transition={{
                ease: cubicBezier(0.33, 1, 0.68, 1),
                type: 'bounce',
                bounce: 0.2,
                duration: 0.6,
              }}
              className="fixed left-2 top-2 h-[98vh] w-2/3 max-w-sm rounded-lg bg-foreground/10 p-5 text-foreground shadow-2xl backdrop-blur-lg"
            >
              <h2 className="text-4xl capitalize leading-loose">hello!</h2>
            </motion.div>

            {/* Closes Sidebar on click */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
              onClick={() => toggleMenu()}
              className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-transparent px-5"
            />
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}
