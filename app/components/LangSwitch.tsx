'use client';

import * as React from 'react';
import { startTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';

import { Button } from './shadcn/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from './shadcn/dropdown-menu';

interface LangSwitchProps {
  variants: { value: string; title: string }[];
}
export default function LangSwitch({ variants }: LangSwitchProps) {
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
        <Button className="text-xl" variant="ghost" size="lg">
          {locale}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[3rem]"
        align="end"
      >
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={onSelectChange}
          className="flex flex-col gap-2"
        >
          {variants.map((variant) => (
            <DropdownMenuRadioItem
              key={variant.value}
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
