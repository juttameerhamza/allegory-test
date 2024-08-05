import React from 'react';

interface HintIconProps {
  size?: string | number;
  color?: string;
  className?: string;
}

export const HintIcon: React.FC<HintIconProps> = ({ size = 12, color, className }) => {
  return (
    <svg
      //   color={color}
      width={size}
      height={size}
      viewBox='0 0 18 18'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      style={{ color }}
    >
      <g clipPath='url(#clip0_2452_7040)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.95343 3.19998L8.78629 9.34591H7.21766L7.04622 3.19998H8.95343ZM7.27338 12.5042C7.47624 12.7042 7.71911 12.8042 8.00198 12.8042C8.18484 12.8042 8.35342 12.7585 8.50771 12.667C8.662 12.5727 8.78629 12.4485 8.88058 12.2942C8.97772 12.137 9.02773 11.9641 9.03058 11.7756C9.02773 11.4956 8.92344 11.2556 8.71772 11.0555C8.51199 10.8555 8.27341 10.7555 8.00198 10.7555C7.71911 10.7555 7.47624 10.8555 7.27338 11.0555C7.07051 11.2556 6.97051 11.4956 6.97337 11.7756C6.97051 12.0584 7.07051 12.3013 7.27338 12.5042Z'
        />
      </g>
      <defs>
        <clipPath id='clip0_2452_7040'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
