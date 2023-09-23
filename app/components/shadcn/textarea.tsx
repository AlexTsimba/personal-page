import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icon } from 'react-feather';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  PlaceholderIcon: Icon;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, PlaceholderIcon, ...props }, ref) => {
    return (
      <div className='relative'>
        <PlaceholderIcon className='absolute text-foreground/80 left-4 top-3' />
        <textarea
          className={cn(
            'resize-none flex w-full rounded-lg bg-foreground/10 pl-14 pr-6 py-3 text-base ring-offset-background placeholder:font-medium placeholder:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className

          )}
          rows={5}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };

