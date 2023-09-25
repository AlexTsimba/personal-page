import * as React from 'react';

import { cn } from '@/lib/utils';
import { AlertCircle, Icon } from 'react-feather';
import classNames from 'classnames';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  PlaceholderIcon: Icon;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, PlaceholderIcon, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          className={cn(
            'peer flex w-full resize-none rounded-xl bg-foreground/10 py-3 pl-14 pr-6 text-base ring-offset-background placeholder:font-medium placeholder:text-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          rows={5}
          ref={ref}
          {...props}
        />
        <PlaceholderIcon className="absolute left-4 top-3 text-foreground/80" />
        <AlertCircle
          className={classNames(
            'absolute right-4 top-3 hidden',
            'text-foreground/80',
            'peer-aria-[invalid=true]:block peer-aria-[invalid=true]:text-destructive'
          )}
        />
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
