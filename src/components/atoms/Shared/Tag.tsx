import React, { ReactNode } from 'react';

type TagProps = {
  leftSide?: ReactNode;
  rightSide?: ReactNode;
  text?: ReactNode;
};

const Tag = ({ leftSide, rightSide, text }: TagProps) => {
  return (
    <div className="flex w-fit items-center gap-1.5 rounded-full border border-solid border-solid-100 bg-white px-3 py-1 shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05),0px_1px_2px_0px_rgba(13,13,18,0.04)]">
      {leftSide}
      <span className="text-sm font-semibold text-primary-100">{text}</span>
      {rightSide}
    </div>
  );
};

export default Tag;
