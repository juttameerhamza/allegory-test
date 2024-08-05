import { OTPInput, OTPInputContext, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import * as React from 'react';
import { cn } from 'utils';

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, React.ComponentPropsWithoutRef<typeof OTPInput>>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn('flex items-center gap-2 has-[:disabled]:opacity-50', containerClassName)}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
);
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center gap-[10px] rounded-[18px] border bg-neutral-1 p-[10px]', className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number; placeholder?: string }
>(({ index, className, placeholder, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex h-[50px] w-[46px] items-center justify-center rounded-[14px] border border-neutral-2 bg-neutral-0 text-[22px] leading-[14px] transition-all',
        isActive && 'z-10 border-neutral-12 ring-2 ring-neutral-2 ring-offset-2',
        className
      )}
      {...props}
    >
      {char ? char : <span className='text-neutral-6'>{placeholder}</span>}
      {hasFakeCaret && (
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
          <div className='bg-foreground h-4 w-px animate-caret-blink duration-1000' />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

export { InputOTP, InputOTPGroup, InputOTPSlot, REGEXP_ONLY_DIGITS_AND_CHARS };
