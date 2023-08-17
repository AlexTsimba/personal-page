import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames('max-w-7x mx-auto w-11/12 md:w-5/6', className)}>
      {children}
    </div>
  );
}
