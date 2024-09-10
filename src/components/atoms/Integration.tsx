import Image from 'next/image';
import React, { FC } from 'react';

type IntegrationProps = {
  imgUrl: string;
  title: string;
  text: string;
};

const Integration: FC<IntegrationProps> = ({ imgUrl, title, text }) => {
  return (
    <div className="h-fit rounded-2xl border border-solid border-solid-100 bg-white p-6 shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05),0px_1px_2px_0px_rgba(13,13,18,0.04)] hover:border-primary-100 hover:shadow-[0px_5px_10px_-2px_rgba(13,13,18,0.04),0px_4px_8px_-1px_rgba(13,13,18,0.02)]">
      <div className="relative mb-6 h-12 w-12 overflow-hidden rounded-full">
        <Image
          src={imgUrl}
          fill
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="px-1">
        <div className="mb-2 text-2xl font-semibold text-solid-900">{title}</div>
        <div className="font-regular text-lg text-solid-500">{text}</div>
      </div>
    </div>
  );
};

export { Integration };
