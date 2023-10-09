'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun} from 'react-feather';

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
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent  align="end">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {variants.map((variant, index) => (
            <DropdownMenuRadioItem
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
