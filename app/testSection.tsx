'use client';

import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import React from 'react';
// import { useRouter } from 'next/navigation';

interface Props {
  text: string;
  className: string;
  id: string;
}

export default function TestSection({ text, className, id }: Props) {
  // const router = useRouter();
  const [ref, inView] = useInView({
    // triggerOnce: true, // Чтобы функция вызывалась только один раз
  });

  if (inView) {
    // Этот блок кода будет выполняться, когда компонент попадет во вьюпорт
    console.log(`${text} вошел во вьюпорт`);
  } 

  return (
    <section ref={ref} id={id} className={classNames('h-screen', className)}>
      <h1>{text}</h1>
    </section>
  );
}
