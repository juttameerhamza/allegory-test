import * as React from 'react';
import { cn } from 'utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-xl border border-neutral-2 p-[14px] text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:font-normal placeholder:text-neutral-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
