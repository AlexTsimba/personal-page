'use client';

import { useUiStore } from '@/store/store';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { shallow } from 'zustand/shallow';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  const { setCurrentSection } = useUiStore(
    (state) => ({ setCurrentSection: state.setCurrentSection }),
    shallow
  );

  useEffect(() => {
    if (inView) {
      setCurrentSection(id);
    }
  }, [id, inView, setCurrentSection]);

  return (
    <section ref={ref} id={id} className={classNames('w-full', className)}>
      {children}
    </section>
  );
}
