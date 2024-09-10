import BluePaper from '@/svg/Solutions/BluePaper';
import React from 'react';

const SolutionHeroCard = () => {
  return (
    <div className="w-full rounded-[1.25em] bg-gradient-to-b from-solid-800 px-[3em] py-[2.5em] lg:w-fit">
      <div className="relative rounded-[1em] bg-white p-[1.5em]">
        <div className="absolute left-1/2 top-0 z-10 h-full w-[calc(100%-3em)] -translate-x-1/2 translate-y-4 rounded-[0.875em] bg-white opacity-30"></div>
        <div className="relative z-20 h-full w-full">
          <div className="mb-[1.25em] flex justify-center">
            <BluePaper className="h-[4em] w-[4em]" />
          </div>
          <div className="mb-[1.5em] flex flex-col items-center justify-center gap-[0.25em]">
            <div className="font-regular text-[0.75em] leading-normal text-solid-500">Invoice paid</div>
            <div className="text-[1.5em] font-medium leading-normal text-solid-900">$156.99</div>
            <div className="font-regular text-[0.75em] leading-normal text-solid-500 underline">View invoice detail</div>
          </div>
          <div className="mb-[2em] flex flex-col gap-[1em] bg-solid-0 p-[0.75em] md:w-[18.75em]">
            <div className="flex items-center justify-between">
              <div className="font-regular text-[0.75em] leading-normal text-solid-400">Invoice number</div>
              <div className="font-regular text-[0.75em] leading-normal text-solid-900">#526589</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-regular text-[0.75em] leading-normal text-solid-400">Payment date</div>
              <div className="font-regular text-[0.75em] leading-normal text-solid-900">11 Jan 2024, 11:00 AM</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-regular text-[0.75em] leading-normal text-solid-400">Payment method</div>
              <div className="font-regular text-[0.75em] leading-normal text-solid-900">**** 6787</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[0.75em]">
            <button className="w-full rounded-[0.375em] border-[0.0625em] border-solid border-solid-100 bg-white py-[0.625em] text-[0.625em] font-semibold leading-[155%] text-solid-900 shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05),0px_1px_2px_0px_rgba(13,13,18,0.04)]">
              Share
            </button>
            <button className="w-full rounded-[0.375em] border-[0.0625em] border-solid border-solid-900 bg-solid-900 py-[0.625em] text-[0.625em] font-semibold leading-[155%] text-white shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05),0px_1px_2px_0px_rgba(13,13,18,0.04)]">
              Download Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionHeroCard;
