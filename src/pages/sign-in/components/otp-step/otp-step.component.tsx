import otpImg from 'assets/images/otp-img.png';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Button,
  ErrorToast,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  REGEXP_ONLY_DIGITS_AND_CHARS,
  Spinner
} from 'components';
import * as React from 'react';
import { toast } from 'sonner';
import { decreaseStep, useSignInUserMutation, useVerifyOTPCodeMutation } from 'store/auth';
import { useAppDispatch } from 'store/hooks';

export function OTPStep() {
  const [value, setValue] = React.useState('');
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { data }] = useSignInUserMutation({ fixedCacheKey: 'sign-in' });
  const [verifyOTPCode, { isLoading }] = useVerifyOTPCodeMutation();

  const handleVerifyCode = () => {
    console.log({ value }, data);
    if (value && data?.email) {
      verifyOTPCode({ code: value, email: data?.email })
        .unwrap()
        .catch((error) => {
          toast.custom((t) => <ErrorToast title={error?.message || 'Something went wrong!'} onClick={() => toast.dismiss(t)} />, {
            position: 'bottom-center'
          });
        });
    }
  };

  return (
    <div className='p-6 pt-0'>
      <div className='flex flex-col items-center rounded-[20px] border border-neutral-1 px-6 py-[60px] shadow-2'>
        <img src={otpImg} className='h-auto w-[186px]' alt='otp-image' />
        <h6 className='mt-[20px] text-center font-instrument-sans text-2xl font-medium'>
          Check your Company Email Address or <br /> Mobile Phone Number
        </h6>
        <p className='mt-[10px] text-center text-sm text-neutral-8'>
          Please enter the 7-digit passcode sent to your method of authentication.
        </p>

        <div className='mt-[30px]'>
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} value={value} onChange={(value) => setValue(value)}>
            <InputOTPGroup>
              <InputOTPSlot placeholder='0' index={0} />
              <InputOTPSlot placeholder='0' index={1} />
              <InputOTPSlot placeholder='0' index={2} />
              <InputOTPSlot placeholder='0' index={3} />
              <InputOTPSlot placeholder='0' index={4} />
              <InputOTPSlot placeholder='0' index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-between'>
        <Button variant='outline' size='sm' onClick={() => dispatch(decreaseStep())}>
          <ArrowLeftIcon size={14} className='font-normal' />
          <span className='ml-2'>Back</span>
        </Button>

        <Button className='mt-6' type='button' onClick={handleVerifyCode} disabled={isLoading}>
          {isLoading ? (
            <Spinner className='h-[22px] w-[22px] fill-neutral-0' />
          ) : (
            <>
              Sign In to the Dashboard <ArrowRightIcon size={16} className='ml-2 mt-[3px]' />{' '}
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
