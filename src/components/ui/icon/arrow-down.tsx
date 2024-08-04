import React from 'react';

interface ArrowDownIconProps {
  size?: string | number;
  color?: string;
  className?: string;
}

export const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({ size = 12, color, className }) => {
  return (
    <svg
      color={color}
      width={size}
      height={size}
      viewBox='0 0 18 18'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.00008 7.20291L10.5799 2.62305L11.6667 3.70986L6.00008 9.37652L0.333415 3.70985L1.42022 2.62305L6.00008 7.20291Z'
        fill='currentColor'
      />
    </svg>
  );
};
