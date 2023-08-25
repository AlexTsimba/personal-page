import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { motionControls } from '@/lib/motionControls';

interface NavItemProps {
  href: string;
  title: string;
  isActive: boolean;
  scroller: Lenis;
}

export default function NavItem({
  href,
  title,
  isActive,
  scroller,
}: NavItemProps) {
  const handleScrollTo = (anchor: string) => {
    scroller.scrollTo(anchor, {});
  };

  return (
    <button
      key={href}
      onClick={() => handleScrollTo(href)}
      className={`relative w-full rounded-full px-4 py-1.5 text-lg font-semibold text-foreground transition`}
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {isActive && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-white mix-blend-exclusion"
          style={{ borderRadius: '12px' }}
          {...motionControls.sidebarPointer}
        />
      )}
      {title}
    </button>
  );
}
