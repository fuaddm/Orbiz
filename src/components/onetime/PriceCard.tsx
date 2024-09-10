import SvgPaper from '@/svg/Paper';
import React from 'react';

const PriceCard = () => {
  return (
    <div className="flex h-fit w-fit items-center gap-[4em] rounded-[0.625em] border-[0.0625em] border-solid border-solid-100 bg-white p-[0.75em] shadow-[0px_5px_10px_-2px_rgba(13,13,18,0.04),0px_4px_8px_-1px_rgba(13,13,18,0.02)]">
      <div className="flex flex-col justify-between">
        <div className="text-[1.25em] font-medium text-solid-900">$31,850.00</div>
        <div className="font-regular text-[0.625em] text-solid-500">Due Oct 24, 2023</div>
      </div>
      <div className="grid h-[2.7em] w-[2.5em] place-items-center rounded-[0.5em] bg-yellow-0">
        <SvgPaper className="h-[1.5em] w-[1.5em] stroke-yellow-200" />
      </div>
    </div>
  );
};

export default PriceCard;
