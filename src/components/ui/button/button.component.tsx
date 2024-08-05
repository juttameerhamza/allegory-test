import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from 'utils';

const buttonVariants = cva(
  // text-sm font-medium
  'inline-flex items-center justify-center font-instrument-sans whitespace-nowrap disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-7 text-neutral-0 border border-primary-8 disabled:bg-neutral-1 disabled:border-neutral-1 disabled:text-neutral-4',
        // default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // destructive:
        //   "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: 'border border-neutral-2 bg-neutral-0',
        // secondary:
        //   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
        link: 'text-primary underline'
      },
      size: {
        default: 'text-base leading-[22px] px-4 py-3 rounded-xl font-semibold',
        sm: 'text-sm leading-[22px] font-medium px-[10px] py-[9px] rounded-[10px]',
        link: 'text-[13px] leading-[22px] font-semibold p-0'
        // lg: "h-11 rounded-md px-8",
        // icon: "h-10 w-10",
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
