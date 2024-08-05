import successImage from 'assets/images/success-image.png';

export function FinishStep() {
  return (
    <div className='p-6 pt-0'>
      <div className='flex flex-col items-center rounded-[20px] border border-neutral-1 px-6 py-[60px] shadow-2'>
        <img src={successImage} className='h-auto w-[100px]' alt='otp-image' />
        <h6 className='mt-[20px] text-center font-instrument-sans text-2xl font-medium'>You have been successfully signed in.</h6>
        <p className='mt-[10px] text-center text-sm text-neutral-8'>You’re now being redirected to the Allegory Dashboard</p>

        <div className='mt-5 flex gap-3 rounded-[14px] border border-neutral-1 p-[10px]'>
          <div className='border-r border-neutral-2 pr-3'>
            <p className='text-sm text-neutral-10'>Enterprise User ID:</p>
            <p className='text-sm text-neutral-10'>abc-223-qqqq</p>
          </div>

          <div className='border-r border-neutral-2 pr-3'>
            <p className='text-sm text-neutral-10'>Timestamp:</p>
            <p className='text-sm text-neutral-10'>{new Date().toISOString()}</p>
          </div>

          <div>
            <p className='text-sm text-neutral-10'>Device Name:</p>
            <p className='text-sm text-neutral-10'>Windows 8.1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
