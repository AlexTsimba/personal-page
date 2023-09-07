'use client';

import classNames from 'classnames';
import Lenis from '@studio-freight/lenis';
import { useUiStore } from '@/store/store';
import { shallow } from 'zustand/shallow';
import { motion } from 'framer-motion';

import { motionControls } from '@/lib/motionControls';
import MotionArrowPointer from './MotionArrowPointer';
import { Button } from '../shadcn/button';

interface NavItemProps {
  scroller: Lenis;
  href: string;
  isActive: boolean;
  title: string;
  index: number;
}

export default function SideBarItem({
  scroller,
  href,
  isActive,
  title,
  index,
}: NavItemProps) {
  const { toggleSidebar } = useUiStore(
    (state) => ({
      toggleSidebar: state.toggleSidebar,
    }),
    shallow
  );

  const handleScrollTo = (anchor: string) => {
    scroller.scrollTo(anchor, {
      offset: -80,
      onComplete: toggleSidebar,
      ...motionControls.scrollTo,
    });
  };

  return (
    <Button
      variant="sideBarItem"
      size="sideBarItem"
      key={href}
      onClick={() => handleScrollTo(href)}
      className={classNames(
        'relative z-10 w-full rounded-lg border-2 border-transparent transition-all hover:duration-300',
        {
          'bg-foreground/10': isActive,
        },
        { 'hover:border-foreground': !isActive }
      )}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <motion.div custom={index} {...motionControls.sidebarLinkTitle}>
        {title}
      </motion.div>

      {isActive && <MotionArrowPointer />}
    </Button>
  );
}
