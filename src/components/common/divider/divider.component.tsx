import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from 'utils';

{
  /* <div className='relative my-5 inline-flex w-full items-center justify-center'>
    <hr className='my-[4.5px] h-px w-full border-0 bg-neutral-2' />
    <span className='absolute left-1/2 -translate-x-1/2 bg-white px-3 text-sm font-medium text-neutral-8'>or</span>
</div> */
}

{
  /* <div className='relative inline-flex w-full items-center justify-center'>
    <hr className='my-[4.5px] h-px w-full border-0 bg-neutral-2' />
    <span className='absolute left-1/2 -translate-x-1/2 bg-white px-3 text-xs font-medium text-neutral-5'>New to Allegory?</span>
</div> */
}

const spanClasses = cva('absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm'
    },
    variant: {
      light: 'text-neutral-5',
      dark: 'text-neutral-8'
    }
  },
  defaultVariants: {
    size: 'sm',
    variant: 'dark'
  }
});

type DividerProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> &
  VariantProps<typeof spanClasses> & {
    children?: React.HTMLAttributes<HTMLDivElement>['children'];
  };

export function Divider({ children, className, size, variant }: DividerProps) {
  return (
    <div className={cn('relative inline-flex w-full items-center justify-center', className)}>
      <hr className='my-[4.5px] h-px w-full border-0 bg-neutral-2' />

      <span className={spanClasses({ size, variant })}>{children}</span>
    </div>
  );
}
