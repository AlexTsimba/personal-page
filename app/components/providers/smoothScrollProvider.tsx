/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Lenis from '@studio-freight/lenis';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenis: Lenis = useLenis(({ scroll }: { scroll: number }) => {
    // console.log('readscroll', scroll);
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
