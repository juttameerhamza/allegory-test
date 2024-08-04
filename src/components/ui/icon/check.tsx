import React from 'react';

interface CheckIconProps {
  size?: string | number;
  color?: string;
  className?: string;
}

export const CheckIcon: React.FC<CheckIconProps> = ({ size = 12, color, className }) => {
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
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 2.47407L8.83696 1.31104L3.78434 6.36366L1.16304 3.74236L0 4.90539L3.78434 8.68974L10 2.47407Z'
      />
    </svg>
  );
};
