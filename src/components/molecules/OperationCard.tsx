import React, { ReactNode } from "react";

type Props = {
  bgColor: string;
  tagIcon: ReactNode;
  title: string;
  subtitle: string;
};

const OperationCard = ({ bgColor, tagIcon, title, subtitle }: Props) => {
  return (
    <div className="flex h-fit w-full items-center gap-[1em] rounded-[0.75em] border-[0.0625em] border-solid border-solid-100 bg-white px-[1.25em] py-[1em] shadow-[0px_5px_10px_-2px_rgba(13,13,18,0.04),0px_4px_8px_-1px_rgba(13,13,18,0.02)]">
      <div
        className="grid h-[2.5em] w-[2.5em] place-items-center rounded-full"
        style={{ background: bgColor }}
      >
        {tagIcon}
      </div>
      <div className="flex flex-col">
        <div className="text-[1em] font-medium text-solid-900">{title}</div>
        <div className="text-[0.875em] font-normal text-[#808897]">{subtitle}</div>
      </div>
    </div>
  );
};

export default OperationCard;
