'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

import { Button } from './shadcn/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from './shadcn/dropdown-menu';

interface ThemeSwitchProps {
  variants: { value: string; title: string }[];
}

export default function ThemeSwitch({ variants }: ThemeSwitchProps) {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="lg">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        data-ignore-clickOutside // data-attibute to prevent call useOnClickOutside hook when this clicked
        align="end"
      >
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {variants.map((variant, index) => (
            <DropdownMenuRadioItem
              data-ignore-clickOutside // data-attibute to prevent call useOnClickOutside hook when this clicked
              key={index}
              value={variant.value}
            >
              {variant.title}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
