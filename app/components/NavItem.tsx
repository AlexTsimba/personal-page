'use client';

import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { motionControls } from '@/lib/motionControls';
import { useLenis } from '@studio-freight/react-lenis';

interface NavItemProps {
  href: string;
  isActive: boolean;
  title: string;
}

export default function NavItem({ href, isActive, title }: NavItemProps) {
  const scroller: Lenis = useLenis();

  const handleScrollTo = (anchor: string) => {
    scroller.scrollTo(anchor, {});
  };

  return (
    <button
      key={href}
      onClick={() => handleScrollTo(href)}
      className={`relative rounded-full px-4 py-1.5 text-lg font-semibold text-foreground transition `}
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {isActive && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-white mix-blend-exclusion"
          style={{ borderRadius: '12px' }}
          {...motionControls.navLinkMotionBubble}
        />
      )}
      {title}
    </button>
  );
}
