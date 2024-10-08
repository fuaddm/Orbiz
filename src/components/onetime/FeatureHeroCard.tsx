import React from "react";
import SvgMiniPaper from "@/svg/Features/MiniPaper";

const FeatureHeroCard = () => {
  return (
    <div className="w-full rounded-[1.25em] bg-gradient-to-b from-solid-800 px-[3em] py-[2.5em] lg:w-fit">
      <div className="relative rounded-[1em] bg-white p-[1.5em]">
        <div className="absolute left-1/2 top-0 z-10 h-full w-[calc(100%-3em)] -translate-x-1/2 translate-y-4 rounded-[0.875em] bg-white opacity-30"></div>
        <div className="relative z-20 h-full w-full">
          <div className="mb-[1.5em] flex justify-between">
            <div className="flex flex-col gap-[0.25em]">
              <div className="text-[0.75em] font-normal leading-normal text-solid-500">Invoice from Marc</div>
              <div className="text-[1.5em] font-medium leading-normal text-solid-900">$1,156.99</div>
              <div className="text-[0.75em] font-normal leading-normal text-solid-500">Due Jan 24, 2024</div>
            </div>
            <div className="h-[4.5em] w-[4.5em]">
              <SvgMiniPaper className="h-full w-full" />
            </div>
          </div>
          <div className="mb-[1em] grid grid-cols-[min-content_1fr] gap-[0.75em] rounded-[0.325em] bg-solid-0 p-[0.75em]">
            <div className="text-[0.75em] font-normal text-solid-400">Name</div>
            <div className="text-[0.75em] font-normal text-solid-900">Ralph Edwards</div>
            <div className="text-[0.75em] font-normal text-solid-400">From</div>
            <div className="text-[0.75em] font-normal text-solid-900">Marc Alex</div>
            <div className="text-[0.75em] font-normal text-solid-400">Memo</div>
            <div className="text-[0.75em] font-normal text-solid-900">Thank you for doing business with us.</div>
          </div>
          <button className="mb-[1.5em] w-full rounded-[0.5em] bg-primary-100 px-[1.5em] py-[0.75em] text-center text-[0.75em] font-semibold text-white active:bg-primary-200">Pay This Invoice</button>
          <div className="mb-[0.75em] border-b-[0.0625em] border-t-[0.0625em] border-dashed border-solid-100 pb-[0.75em] pt-[1em]">
            <div className="mb-[0.75em] flex items-center justify-between">
              <div className="text-[0.75em] font-normal leading-[1] text-solid-900">Freelance Icon set</div>
              <div className="text-[0.75em] font-normal leading-[1] text-solid-900">$989.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-[0.75em] font-normal leading-[1] text-solid-900">Consultation</div>
              <div className="text-[0.75em] font-normal leading-[1] text-solid-900">$289.00</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[0.75em] font-medium leading-[1] text-solid-900">Amount due</div>
            <div className="text-[0.75em] font-medium leading-[1] text-solid-900">$1,156.99</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHeroCard;
