'use client';

import React, { useEffect, useState } from 'react';
// import { useTranslations } from 'next-intl';

// import NavLink from '@/types/NavLink';
import NavItem from './NavItem';
import SideBar from './Sidebar';
import LocomotiveScroll from 'locomotive-scroll';
import { nearestIndex } from '@/lib/nearestIndex';
import { navConfig } from '../../lib/navConfig';

interface NavBarProps {
  scroller: LocomotiveScroll;
}

export default function NavBar({ scroller }: NavBarProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const index = nearestIndex(
        window.scrollY,
        navConfig.navLinks,
        0,
        navConfig.navLinks.length - 1
      );
      setActiveIndex(index);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(activeIndex)

  const handleScrollTo = (href: string) => scroller.scrollTo(href, {});

  return (
    <div>
      <nav className="hidden gap-4 lg:flex">
        {navConfig.navLinks.map((link, index) => (
          <NavItem key={link.href} link={link} handler={handleScrollTo} isActive={activeIndex === index} />
        ))}
      </nav>
      <SideBar navLinks={navConfig.navLinks} handler={handleScrollTo} />
    </div>
  );
}
