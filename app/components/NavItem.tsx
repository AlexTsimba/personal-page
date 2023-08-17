'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import NavLink from '@/types/NavLink';
import { motionControls } from '@/lib/motionControls';
import { useRouter } from 'next-intl/client';
import { useLocale } from 'next-intl';

interface NavItemProps {
  link: NavLink;
}

export default function NavItem({ link }: NavItemProps) {
  const { href, title } = link;
  const pathName = usePathname();
  const activeLink = pathName.replace('ua', '').endsWith(href);
  const router = useRouter();
  const locale = useLocale();

  const handleClick = () => {
    router.push(href, { locale: locale });
  };

  console.log(pathName);

  return (
    <button
      key={href}
      onClick={handleClick}
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
          {...motionControls.navItem}
        />
      )}
      {title}
    </button>
  );
}
