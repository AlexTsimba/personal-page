'use client';

import { LazyMotion } from 'framer-motion';
import { loadDomAnimationFeatures } from '@/lib/framer-motion/features';

interface LazyMotionProviderProps {
  children: React.ReactNode;
}

export default function LazyMotionProvider({
  children
}: LazyMotionProviderProps) {
  return (
    <LazyMotion features={loadDomAnimationFeatures} strict>
      {children}
    </LazyMotion>
  );
}
