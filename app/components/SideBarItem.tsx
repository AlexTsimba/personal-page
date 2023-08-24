'use client';

import classNames from 'classnames';
import Lenis from '@studio-freight/lenis';
import { useUiStore } from '@/store/store';
import { shallow } from 'zustand/shallow';
import { motion } from 'framer-motion';

import { motionControls } from '@/lib/motionControls';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

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
      ...motionControls.scrollTo,
      onComplete: toggleSidebar,
    });
  };

  return (
    <button
      key={href}
      onClick={() => handleScrollTo(href)}
      className={classNames(
        'relative z-10 w-5/6 rounded-xl border-2 border-transparent px-8 py-3 text-center  text-xl font-semibold text-foreground transition-all  hover:duration-300',
        {
          'scale-105 bg-foreground/20 text-background': isActive,
        },
        { 'hover:border-foreground': !isActive }
      )}
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      <motion.div custom={index} {...motionControls.sidebarLinkTitle}>
        {title}
      </motion.div>

      {isActive && (
        <motion.span
          layoutId="sidebarArrowPointer"
          // do not rewrite on transform translate, it causes flickering on animate downwards
          className=" absolute left-[15px] top-[5px] z-0 h-5 w-5"
          {...motionControls.sidebarArrowPointer}
        >
          <ChevronRightIcon className="h-10 w-10  text-foreground" />
        </motion.span>
      )}
    </button>
  );
}