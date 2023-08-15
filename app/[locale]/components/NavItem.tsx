'use client';

import { motion, cubicBezier } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

import NavLink from '@/types/NavLink';

interface NavItemProps {
  link: NavLink;
}

export default function NavItem({ link }: NavItemProps) {
  const { href, title } = link;
  const path = usePathname();
  const activeLink = path.endsWith(href);
  const router = useRouter();

  const handleClick = (addres: string) =>
    router.replace(addres, { scroll: false });

  return (
    <button
      key={href}
      onClick={() => handleClick(href)}
      className={`relative rounded-lg px-4 py-1.5 text-lg font-semibold text-foreground transition `}
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {activeLink && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-white mix-blend-exclusion"
          style={{ borderRadius: 9999 }}
          transition={{ ease: cubicBezier(0.76, 0, 0.24, 1), duration: 0.6 }}
        />
      )}
      {title}
    </button>
  );
}
