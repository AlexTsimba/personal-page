import { NavLink } from '@/types/NavLink';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  links: NavLink[];
}

export default function Menu({ isOpen, toggleMenu, links }: MenuProps) {
  return (
    <div
      className={classNames(
        'fixed bottom-0 top-0 z-10 w-full rounded-lg  bg-yellow-400 flex flex-col' ,
        { hidden: !isOpen }
      )}
    >
      <button type="button" onClick={toggleMenu} className="">
        close
      </button>
      {links.map((variant) => (
            <Link className='inline-flex' key={variant.key} href={variant.href}>
              {variant.name}
            </Link>
          ))}
    </div>
  );
}
