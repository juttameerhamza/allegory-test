import React from 'react';

interface ArrowRightIconProps {
  size?: string | number;
  color?: string;
  className?: string;
}

export const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({ size = 12, color, className }) => {
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
        d='M10.1043 7.99989L3.9978 1.89341L5.44688 0.444336L13.0024 7.99989L5.44688 15.5554L3.9978 14.1064L10.1043 7.99989Z'
        fill='currentColor'
      />
    </svg>
  );
};
