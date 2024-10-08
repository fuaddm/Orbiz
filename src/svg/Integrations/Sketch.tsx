import React from "react";

const Sketch = (props: any) => {
  return (
    <svg
      {...props}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.10908 4.79018L16 4L23.8909 4.79018L29.9999 12.558L16 27.9999L2 12.558L8.10908 4.79018Z"
        fill="#FDB300"
      />
      <path
        d="M7.67063 12.558L15.9999 28L2 12.558H7.67063ZM24.3294 12.558L16.0001 28L30 12.558"
        fill="#EA6C00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.6709 12.558H24.3294L16.0002 28"
        fill="#FDAD00"
      />
      <path
        d="M16.0002 4L8.10928 4.79004L7.6709 12.5579L16.0002 4ZM16.0003 4L23.8912 4.79004L24.3296 12.5579"
        fill="#FDD231"
      />
      <path
        d="M30 12.5579L23.891 4.79004L24.3294 12.5579H30ZM2 12.5579L8.10901 4.79004L7.67063 12.5579"
        fill="#FDAD00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0002 4L7.6709 12.5579H24.3294"
        fill="#FEEEB7"
      />
    </svg>
  );
};

export default Sketch;
