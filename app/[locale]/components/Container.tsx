import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames('mx-auto w-5/6 max-w-7x', className)}>
      {children}
    </div>
  );
}
