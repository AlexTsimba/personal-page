import React, { forwardRef } from 'react';
import classNames from 'classnames';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, id, className }, ref) => {
    return (
      <div id={id} ref={ref} className={classNames('w-full', className)}>
        {children}
      </div>
    );
  }
);

Section.displayName = 'Section';

export default Section;
