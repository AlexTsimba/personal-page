import { AnimatePresence, motion } from 'framer-motion';
import Portal from './Portal';
import { motionControls } from '@/lib/motionControls';

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
            <motion.aside
              className="fixed left-2 top-2 h-[98vh] w-2/3 max-w-sm rounded-lg bg-foreground/10 p-5 text-foreground shadow-2xl backdrop-blur-lg"
              {...motionControls.sidebar}
            >
              <h2 className="text-4xl capitalize leading-loose">hello!</h2>
            </motion.aside>

            {/* Closes Sidebar on click */}

            <motion.div
              className="fixed right-0 top-0 flex h-full w-full items-center justify-center bg-transparent px-5"
              onClick={toggleMenu}
              {...motionControls.closeArea}
            />
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}
