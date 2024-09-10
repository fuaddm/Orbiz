import React from 'react';
import SvgMiniPaper from '@/svg/Features/MiniPaper';

const InvoiceFromCard = () => {
  return (
    <div className="relative max-w-[350px] rounded-[1em] border-[0.0625em] border-solid border-solid-100 bg-white p-[1.5em] shadow-[0px_12px_16px_-4px_rgba(13,13,18,0.08),0px_4px_6px_-2px_rgba(13,13,18,0.03)]">
      <div className="relative z-20 h-full w-full">
        <div className="mb-[1.5em] flex justify-between">
          <div className="flex flex-col gap-[0.25em]">
            <div className="font-regular text-[0.75em] leading-normal text-solid-500">Invoice from Marc</div>
            <div className="text-[1.5em] font-medium leading-normal text-solid-900">$1,156.99</div>
            <div className="font-regular text-[0.75em] leading-normal text-solid-500">Due Jan 24, 2024</div>
          </div>
          <div className="h-[4.5em] w-[4.5em]">
            <SvgMiniPaper className="h-full w-full" />
          </div>
        </div>
        <div className="mb-[1em] grid grid-cols-[min-content_1fr] gap-[0.75em] rounded-[0.325em] bg-solid-0 p-[0.75em]">
          <div className="font-regular text-[0.75em] text-solid-400">Name</div>
          <div className="font-regular text-[0.75em] text-solid-900">Ralph Edwards</div>
          <div className="font-regular text-[0.75em] text-solid-400">From</div>
          <div className="font-regular text-[0.75em] text-solid-900">Marc Alex</div>
          <div className="font-regular text-[0.75em] text-solid-400">Memo</div>
          <div className="font-regular text-[0.75em] text-solid-900">Thank you for doing business with us.</div>
        </div>
        <button className="mb-[1.5em] w-full rounded-[0.5em] bg-primary-100 px-[1.5em] py-[0.75em] text-center text-[0.75em] font-semibold text-white active:bg-primary-200">Pay This Invoice</button>
        <div className="mb-[0.75em] border-b-[0.0625em] border-t-[0.0625em] border-dashed border-solid-100 pb-[0.75em] pt-[1em]">
          <div className="mb-[0.75em] flex items-center justify-between">
            <div className="font-regular text-[0.75em] leading-[1] text-solid-900">Freelance Icon set</div>
            <div className="font-regular text-[0.75em] leading-[1] text-solid-900">$989.00</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-regular text-[0.75em] leading-[1] text-solid-900">Consultation</div>
            <div className="font-regular text-[0.75em] leading-[1] text-solid-900">$289.00</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[0.75em] font-medium leading-[1] text-solid-900">Amount due</div>
          <div className="text-[0.75em] font-medium leading-[1] text-solid-900">$1,156.99</div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceFromCard;
