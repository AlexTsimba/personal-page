'use client';

import { shallow } from 'zustand/shallow';

import { useUiStore } from '@/store/store';
import { Button } from '../shadcn/button';
import BurgerIcon from './BurgerIcon';

export default function Burger() {
  const { isOpen, toggleSidebar } = useUiStore(
    (state) => ({
      isOpen: state.isSidebarOpen,
      toggleSidebar: state.toggleSidebar,
    }),
    shallow
  );

  return (
    <Button
      variant="link"
      size="icon"
      // !!! do not rewrite to classNames, it causes unexpected behaviour
      className={isOpen ? 'bg-accent px-2 md:hidden' : 'md:hidden'}
      onClick={toggleSidebar}
    >
      <BurgerIcon isOpen={isOpen} />
    </Button>
  );
}