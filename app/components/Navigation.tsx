'use client';

import React from 'react';

import Burger from './BurgerButton';
// import SideBar from './Sidebar';

interface NavigationProps {
  children: React.ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
  return (
    <>
      <Burger />
      {children}
    </>
  );
}
