'use client';

import * as React from 'react';

import { Button } from '../shadcn/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '../shadcn/dropdown-menu';
import { useLocale } from 'next-intl';
import { startTransition } from 'react';
import { usePathname, useRouter } from 'next-intl/client';

interface LangSwitchProps {
  flag: string;
}

export function LangSwitch({ flag }: LangSwitchProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-xl" variant="ghost">{flag}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[3rem]" align="end">
        <DropdownMenuRadioGroup value={locale} onValueChange={onSelectChange}>
          <DropdownMenuRadioItem value="ua">ua</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">en</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
