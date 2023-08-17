import React from 'react';
import { useTranslations } from 'next-intl';

import NavLink from '@/types/NavLink';
import NavItem from './NavItem';
import SideBar from './Sidebar';

export default function NavBar() {
  const text = useTranslations('NavLinks');

  const navLinks: NavLink[] = [
    { title: text('Hello'), href: '/' },
    { title: text('Skills'), href: '/skills' },
    { title: text('Dashboard'), href: '/dashboard' },
    { title: text('Contact'), href: '/contact' },
  ];
  return (
    <div>
      <nav className="hidden gap-4 lg:flex">
        {navLinks.map((link) => (
          <NavItem key={link.href} link={link} />
        ))}
      </nav>
      <SideBar navLinks={navLinks}/>
    </div>
  );
}
