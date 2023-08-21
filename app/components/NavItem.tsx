'use client';

import { motion } from 'framer-motion';

import NavLink from '@/types/NavLink';
import { motionControls } from '@/lib/motionControls';
import { useTranslations } from 'next-intl';

interface NavItemProps {
  link: NavLink;
  handler: (href: string) => () => void;
  isActive: boolean;
}

export default function NavItem({ link, handler, isActive }: NavItemProps) {
  const { href} = link;

  const title = useTranslations('NavLinks')(link.key)

  return (
    <button
      key={href}
      onClick={() => handler(href)}
      className={`relative rounded-full px-4 py-1.5 text-lg font-semibold text-foreground transition `}
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {isActive && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-white mix-blend-exclusion"
          style={{ borderRadius: 9999 }}
          {...motionControls.navItem}
        />
      )}
      {title}
    </button>
  );
}
