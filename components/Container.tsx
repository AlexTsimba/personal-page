import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={classNames(
        'mx-auto w-11/12 max-w-7xl transition-all',

        className
      )}
    >
      {children}
    </div>
  );
}
