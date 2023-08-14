'use client';

import { motion, useAnimation } from 'framer-motion';
import path from './path.json';
import classNames from 'classnames';

interface BurgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function Burger({ isOpen, toggleMenu }: BurgerProps) {
  const { variantsTop, variantsMiddle, variantsBottom } = path;
  const variants = [variantsTop, variantsMiddle, variantsBottom];
  const controls = useAnimation();

  return (
    <button
      className={classNames(
        'z-20 cursor-pointer rounded-md border-none px-[0.5rem] hover:bg-input hover:scale-110 transition-all',
        { 'bg-input' : isOpen}
      )}
      onClick={() => {
        controls.start(isOpen ? 'open' : 'closed');
        toggleMenu();
      }}
    >
      <svg viewBox="0 0 100 100" width="3rem" height="3rem">
        {variants.map((variant, index) => (
          <motion.path
            key={index}
            className="fill-none stroke-foreground stroke-[0.3rem]"
            d={variant.closed.d[0]}
            animate={controls}
            variants={variant}
            transition={{
              ease: 'linear',
              duration: 0.35,
            }}
          />
        ))}
      </svg>
    </button>
  );
}
