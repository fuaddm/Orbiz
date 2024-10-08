import React from "react";

const Success = (props: any) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="19"
        height="19"
        rx="9.5"
        stroke="#40C4AA"
      />
      <path
        d="M14.1998 6.8501L8.4248 12.6251L5.7998 10.0001"
        stroke="#40C4AA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Success;
