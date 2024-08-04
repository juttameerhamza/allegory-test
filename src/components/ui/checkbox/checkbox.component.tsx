import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';

import { cn } from 'utils';
import { CheckIcon } from '../icon';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'ring-offset-background focus-visible:ring-ring peer h-4 w-4 shrink-0 rounded-[5px] border border-neutral-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-7 data-[state=checked]:text-neutral-0',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('relative flex items-center justify-center text-current')}>
      <CheckIcon size={14} className='absolute left-1/2 top-1/2 -translate-x-[4px] -translate-y-[4px]' />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
