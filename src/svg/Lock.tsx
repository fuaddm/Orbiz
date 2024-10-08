import React from "react";

const Lock = (props: any) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.25 9.75H4.75C3.92157 9.75 3.25 10.4216 3.25 11.25V16.5C3.25 17.3284 3.92157 18 4.75 18H15.25C16.0784 18 16.75 17.3284 16.75 16.5V11.25C16.75 10.4216 16.0784 9.75 15.25 9.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 9.75V6.75C6.25 5.75544 6.64509 4.80161 7.34835 4.09835C8.05161 3.39509 9.00544 3 10 3C10.9946 3 11.9484 3.39509 12.6517 4.09835C13.3549 4.80161 13.75 5.75544 13.75 6.75V9.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Lock;
