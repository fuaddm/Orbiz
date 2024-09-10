import React from 'react';

const Plus = (props: any) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="0.5"
        y="0.5"
        width="19"
        height="19"
        rx="9.5"
        stroke="#E5E4FB"
      />
      <path
        d="M10 6.32495V13.675"
        stroke="#E5E4FB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.3252 10H13.6752"
        stroke="#E5E4FB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Plus;
