'use client'

import * as React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { Button } from '../shadcn/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../shadcn/dropdown-menu';


import { ThemeOption } from '@/types/ThemeOption';

interface ThemeSwitchProps {
  options: ThemeOption[];
}

export default function ThemeSwitch({ options }: ThemeSwitchProps) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="default">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map((option, index) => (
          <DropdownMenuItem key={index} onClick={() => setTheme(option.key)}>
            <div className='flex flex-col'>
              <div className='flex mb-2 w-28'>
                {option.icon}
                {option.name}
              </div>
              {/* {options.length - index - 1 > 0 && <Separator className="my-1 text-foreground" />} */}
              {/* <Separator  className='my-2'/> */}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
