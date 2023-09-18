import NavItem from './NavItem';
import { navConfig } from '@/lib/navConfig';

import Dictionary from '@/types/Dictionary';
import Lenis from '@studio-freight/lenis';

interface NavBarProps {
  children: React.ReactNode;
  navigationDict: Dictionary['navLinks'];
  activeSection: string;
  scroller: Lenis;
}

export default function NavBar({
  children,
  navigationDict,
  activeSection,
  scroller,
}: NavBarProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <nav className="hidden gap-4 md:flex">
        {navConfig.navLinks.map((link) => {
          const isActive = activeSection === link.key;
          return (
            <NavItem
              scroller={scroller}
              title={navigationDict[link.key]}
              key={link.key}
              href={link.href}
              isActive={isActive}
            />
          );
        })}
      </nav>
      {children}
    </div>
  );
}
