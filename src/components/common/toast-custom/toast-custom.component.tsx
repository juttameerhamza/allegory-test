export function ErrorToast({ title, description, onClick }: { title: string; description?: string; onClick: () => void }) {
  return (
    <div className='relative min-w-[360px] rounded-[10px] border border-[#F8C9D2] bg-[#FDEDF0] p-4'>
      <div className='flex gap-4'>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
          <g clipPath='url(#clip0_2452_6202)'>
            <circle cx='10' cy='10' r='10' fill='#DF1C41' />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15 6.11884L13.8709 5L9.95677 8.87872L6.12907 5.08567L5 6.20452L8.82771 9.99757L5 13.7906L6.12907 14.9095L9.95677 11.1164L13.8709 14.9951L15 13.8763L11.0858 9.99756L15 6.11884Z'
              fill='white'
            />
          </g>
          <defs>
            <clipPath id='clip0_2452_6202'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
        </svg>

        <div className='flex flex-col'>
          <h1 className='text-neutral-[#1F2228] text-sm font-medium'>{title}</h1>
          {description && (
            <p className='text-xs font-normal text-[#5E636E]'>
              We cannot find an account with that email address. Make sure you enter your company email.
            </p>
          )}
        </div>
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        onClick={onClick}
        className='absolute right-4 top-4 cursor-pointer'
      >
        <g clipPath='url(#clip0_2452_6211)'>
          <path
            d='M6.92105 5.99984L11.3334 1.62742L10.3637 0.666504L5.95135 5.03892L1.63645 0.763082L0.666748 1.724L4.98165 5.99984L0.666748 10.2757L1.63645 11.2366L5.95135 6.96075L10.3637 11.3332L11.3334 10.3723L6.92105 5.99984Z'
            fill='#333333'
          />
        </g>
        <defs>
          <clipPath id='clip0_2452_6211'>
            <rect width='20' height='20' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
