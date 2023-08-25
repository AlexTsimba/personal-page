'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import path from './path.json';
import { motionControls } from '@/lib/motionControls';

interface BurgerIconProps {
  isOpen: boolean;
}

export default function BurgerIcon({ isOpen }: BurgerIconProps) {
  const animationControls = useAnimation();

  const { variantsTop, variantsMiddle, variantsBottom } = path;
  const variants = [variantsTop, variantsMiddle, variantsBottom];

  const isFirstRender = useRef(true);

  useEffect(() => {
    //skip first render
    if (!isFirstRender.current) {
      animationControls.start(isOpen ? 'closed' : 'open');
    } else {
      isFirstRender.current = false;
    }
  }, [animationControls, isOpen]);

  return (
    <svg
      viewBox="0 0 100 100"
      width="48px"
      height="48px"
      style={{ transform: 'scale(1.1)' }}
    >
      {variants.map((variant, index) => (
        <motion.path
          key={index}
          // !!! do not rewrite to classNames, it causes unexpected behaviour
          className={
            isOpen
              ? 'bg-foreground fill-none stroke-background stroke-[0.3rem]'
              : 'fill-none stroke-foreground stroke-[0.3rem]'
          }
          d={variant.closed.d[0]}
          animate={animationControls}
          variants={variant}
          {...motionControls.burger}
        />
      ))}
    </svg>
  );
}
