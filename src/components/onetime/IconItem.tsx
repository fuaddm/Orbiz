import React, { ReactNode } from 'react';

type IconItemProps = {
  children?: ReactNode;
  word?: string;
};

const IconItem = ({ word, children }: IconItemProps) => {
  return (
    <div className="flex h-[4em] w-[4em] flex-col items-center rounded-[0.625em] border-[0.0625em] border-solid border-solid-100 bg-white px-[1em] py-[0.75em]">
      <div className="mb-[0.25em] h-[1.5em] w-[1.5em]">{children}</div>
      <div className="text-center text-[0.625em] font-medium leading-normal text-solid-500">{word}</div>
    </div>
  );
};

export default IconItem;
