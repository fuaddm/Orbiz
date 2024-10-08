import React from "react";

const TextPaper = (props: any) => {
  return (
    <svg
      {...props}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2.33331H4C3.73478 2.33331 3.48043 2.43867 3.29289 2.62621C3.10536 2.81374 3 3.0681 3 3.33331V11.3333C3 11.5985 3.10536 11.8529 3.29289 12.0404C3.48043 12.228 3.73478 12.3333 4 12.3333H10C10.2652 12.3333 10.5196 12.228 10.7071 12.0404C10.8946 11.8529 11 11.5985 11 11.3333V5.33331L8 2.33331Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9.83331H5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 7.83331H5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 5.83331H5.5H5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2.33331V5.33331H11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TextPaper;
