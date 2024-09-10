import Image from 'next/image';
import React from 'react';
import macPic from '~/public/images/home/mac.webp';

const ProductItem = () => {
  return (
    <div className="flex h-fit w-fit items-center gap-[1em] rounded-[0.625em] border-[0.0625em] border-solid border-solid-100 bg-white px-[0.875em] py-[0.75em]">
      <div className="flex max-h-[3em] min-h-[3em] min-w-[3em] max-w-[3em] items-center justify-center rounded-[0.5em] bg-primary-0 p-[0.375em]">
        <div className="h-full w-full">
          <Image
            src={macPic}
            className="h-full w-full object-contain"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-[0.125em]">
        <div className="whitespace-nowrap text-[0.625em] font-medium leading-[125%] text-solid-900">Macbook Pro 14-inch</div>
        <div className="font-regular text-[0.625em] text-[#808897]">Gray</div>
        <div className="text-[0.75em] font-medium leading-[125%] text-solid-900">$31,850.00</div>
      </div>
      <div className="w-[3em]"></div>
    </div>
  );
};

export default ProductItem;
