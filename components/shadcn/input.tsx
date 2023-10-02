import * as React from 'react';

import { AlertCircle, Icon } from 'react-feather';
import classNames from 'classnames';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  PlaceholderIcon: Icon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, PlaceholderIcon, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          autoComplete="false"
          type={type}
          className={classNames(
            'h-10 w-full py-6 px-14',
            'flex',
            'rounded-lg bg-foreground/10 text-base placeholder:font-medium placeholder:text-foreground/90 before:content-["s"]',
            'ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            'peer',
            className
          )}
          ref={ref}
          {...props}
        />
        <PlaceholderIcon
          className={classNames(
            'absolute left-4 top-1/2 -translate-y-1/2 transform',
            'text-foreground/80'
          )}
        />
        <AlertCircle
          className={classNames(
            'absolute right-4 top-1/2 hidden -translate-y-1/2 transform ',
            'text-foreground/80',
            'peer-aria-[invalid=true]:block peer-aria-[invalid=true]:text-destructive'
          )}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
