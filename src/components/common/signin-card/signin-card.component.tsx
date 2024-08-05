import { Button, HomeIcon } from 'components';
import * as React from 'react';

export function SignInCard({ children }: React.PropsWithChildren) {
  return (
    <div className='w-full max-w-[900px] rounded-3xl border border-neutral-2 bg-neutral-0 shadow-1'>
      <div className='flex justify-between px-10 py-[30px]'>
        <h4 className='font-instrument-sans text-3xl font-medium'>Sign In</h4>
        <Button variant='outline' size='sm'>
          <HomeIcon size={14} className='font-normal' />
          <span className='ml-2'>Homepage</span>
        </Button>
      </div>

      {children}
    </div>
  );
}
