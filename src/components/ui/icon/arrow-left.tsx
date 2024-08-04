{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
<g clip-path="url(#clip0_2411_8944)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.39596 8.24989L12.5024 2.14341L11.0534 0.694336L3.49781 8.24989L11.0534 15.8054L12.5024 14.3564L6.39596 8.24989Z" fill="#1F2228"/>
</g>
<defs>
<clipPath id="clip0_2411_8944">
<rect width="16" height="16" fill="white" transform="translate(0 0.25)"/>
</clipPath>
</defs>
</svg> */
}

import React from 'react';

interface ArrowLeftIconProps {
  size?: string | number;
  color?: string;
  className?: string;
}

export const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({ size = 12, color, className }) => {
  return (
    <svg
      color={color}
      width={size}
      height={size}
      viewBox='0 0 16 17'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clipPath='url(#clip0_2411_8944)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6.39596 8.24989L12.5024 2.14341L11.0534 0.694336L3.49781 8.24989L11.0534 15.8054L12.5024 14.3564L6.39596 8.24989Z'
          fill='#1F2228'
        />
      </g>
      <defs>
        <clipPath id='clip0_2411_8944'>
          <rect width='16' height='16' fill='white' transform='translate(0 0.25)' />
        </clipPath>
      </defs>
    </svg>
  );
};
