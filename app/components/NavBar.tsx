'use client';

import { shallow } from 'zustand/shallow';
import { useUiStore } from '@/store/store';

import NavItem from './NavItem';
import SideBar from './Sidebar';
import Dictionary from '@/types/Dictionary';
import { navConfig } from '../../lib/navConfig';

interface NavBarProps {
  navigationDict: Dictionary['navLinks'];
}

export default function NavBar({ navigationDict }: NavBarProps) {
  const { activeSection } = useUiStore(
    (state) => ({
      activeSection: state.currentSection,
    }),
    shallow
  );

  return (
    <div className="hidden md:flex">
      <nav className="hidden gap-4 md:flex">
        {navConfig.navLinks.map((link) => {
          const isActive = activeSection === link.key;
          return (
            <NavItem
              title={navigationDict[link.key]}
              key={link.key}
              href={link.href}
              isActive={isActive}
            />
          );
        })}
      </nav>

      <SideBar>
        {navConfig.navLinks.map((link) => {
          const isActive = activeSection === link.key;
          return (
            <NavItem
              title={navigationDict[link.key]}
              key={link.key}
              href={link.href}
              isActive={isActive}
            />
          );
        })}
      </SideBar>
    </div>
  );
}
