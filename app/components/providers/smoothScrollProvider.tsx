'use client';

import Lenis from '@studio-freight/lenis';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

interface SmoothScrollContextProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollContextProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const lenis: Lenis = useLenis(({ scroll }: { scroll: number }) => {
    // console.log('readscroll', scroll);
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
