import React from 'react';

const Burger = (props: any) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 12.5H21M3 6.5H21M3 18.5H21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Burger;
