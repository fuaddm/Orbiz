import Image from 'next/image';
import React from 'react';
import womanShoppingPic from '~/public/svg/woman_shopping.svg';

const ThankYouForOrder = () => {
  return (
    <div className="flex h-fit w-[10em] flex-col items-center justify-center rounded-[8px] border border-solid border-solid-100 bg-white p-[1em] shadow-[0px_0.3125em_0.625em_-0.125em_rgba(13,13,18,0.04),0px_0.25em_0.5em_-0.0625em_rgba(13,13,18,0.02)]">
      <div className="aspect-[2/1] w-full">
        <Image
          src={womanShoppingPic}
          className="h-full w-full object-contain"
          alt=""
        />
      </div>
      <div className="mb-[0.125em] text-center text-[0.5em] font-semibold text-solid-900">Thank you for the order!</div>
      <div className="font-regular text-center text-[0.35em] leading-[125%] text-solid-900">
        Hi Angela! Thanks for shopping with us. We’ve received your order No. 13428. We will notify you when we send it.
      </div>
    </div>
  );
};

export default ThankYouForOrder;
