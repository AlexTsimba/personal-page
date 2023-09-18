// import * as React from 'react';

// import { cn } from '@/lib/utils';

// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           'transition flex h-10 w-full rounded-lg bg-foreground/10 px-6 py-6 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:font-medium placeholder:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );
// Input.displayName = 'Input';

// export { Input };

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icon } from 'react-feather';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  PlaceholderIcon: Icon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, PlaceholderIcon, ...props }, ref) => {
    return (
      <div className="relative">
        <PlaceholderIcon className="absolute left-4 translate-y-1/2 text-foreground/80" />
        <input
          autoComplete='false'
          type={type}
          className={cn(
            'flex h-10 w-full rounded-lg bg-foreground/10 py-6 pl-14 pr-6 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:font-medium placeholder:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
