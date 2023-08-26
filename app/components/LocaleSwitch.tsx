'use client';

import Link from 'next/link';
import * as React from 'react';

// import { Button } from './shadcn/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuTrigger,
// } from './shadcn/dropdown-menu';

interface LangSwitcherProps {
  variants: { value: string; title: string }[];
}
export default function LocaleSwitch({ variants }: LangSwitcherProps) {
  console.log(variants);
  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button className="text-xl" variant="ghost" size="lg">
    //       locale
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent
    //     className="w-[3rem]"
    //     align="end"
    //   >
    //     <DropdownMenuRadioGroup
    //       value="locale"
    //       onValueChange={() => console.log('localeChange')}
    //       className="flex flex-col gap-2"
    //     >
    //       {variants.map((variant) => (
    //         <DropdownMenuRadioItem
    //           key={variant.value}
    //           value={variant.value}
    //         >
    //           {variant.title}
    //         </DropdownMenuRadioItem>
    //       ))}
    //     </DropdownMenuRadioGroup>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <>
      <Link href={`/ua`}>ua</Link>
      <Link href={`/en`}>en</Link>
    </>
  );
}
