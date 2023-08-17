'use client';

import { AnimationControls, motion } from 'framer-motion';

import path from './path.json';
import { Button } from '../shadcn/button';
import { motionControls } from '@/lib/motionControls';

interface BurgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
  controls: AnimationControls;
}

export default function Burger({ isOpen, toggleMenu, controls }: BurgerProps) {
  const { variantsTop, variantsMiddle, variantsBottom } = path;
  const variants = [variantsTop, variantsMiddle, variantsBottom];

  return (
    <Button
      variant="ghost"
      // !!! do not rewrite to classNames, it causes unexpected behaviour
      className={isOpen ? 'bg-foreground lg:hidden' : 'lg:hidden'}
      onClick={() => {
        toggleMenu();
      }}
    >
      <svg viewBox="0 0 100 100" width="3rem" height="3rem">
        {variants.map((variant, index) => (
          <motion.path
            key={index}
            // !!! do not rewrite to classNames, it causes unexpected behaviour
            className={
              isOpen
                ? 'fill-none stroke-background stroke-[0.3rem]'
                : 'fill-none stroke-foreground stroke-[0.3rem]'
            }
            d={variant.closed.d[0]}
            animate={controls}
            variants={variant}
            {...motionControls.burger}
          />
        ))}
      </svg>
    </Button>
  );
}
