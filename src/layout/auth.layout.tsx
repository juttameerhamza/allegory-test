import logoPowered from 'assets/images/logo-powered.png';
import * as React from 'react';

export function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='relative flex h-full items-center justify-center rounded-2xl border border-neutral-2 bg-neutral-1'>
      {children}
      <img className='absolute bottom-6 left-6' src={logoPowered} alt='logo' />
    </div>
  );
}
