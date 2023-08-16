'use client';

import { startTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from './shadcn/dropdown-menu';
import { Button } from './shadcn/button';

interface LangSwitchProps {
  flag: string;
}

export function LangSwitch({ flag }: LangSwitchProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const text = useTranslations('UI');

  function onSelectChange(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-xl" variant="ghost">
          {flag}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[3rem]" align="end">
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={onSelectChange}
          className="flex flex-col gap-2"
        >
          <DropdownMenuRadioItem value="en">
            {text('EnLang')}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ua">
            {text('UaLang')}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
