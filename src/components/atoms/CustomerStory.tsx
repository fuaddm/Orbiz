import Image from 'next/image';
import React, { FC } from 'react';
import { Button } from '@/components/atoms/Button/Button';
import Link from 'next/link';

type CustomerStoryProps = {
  imgUrl: string;
  category: string;
  title: string;
  buttonUrl: string;
};

const CustomerStory: FC<CustomerStoryProps> = ({ imgUrl, category, title, buttonUrl }) => {
  return (
    <div className="rounded-3xl border border-solid border-solid-100 bg-white p-4 shadow-[0px_5px_10px_-2px_rgba(13,13,18,0.04),0px_4px_8px_-1px_rgba(13,13,18,0.02)]">
      <div className="relative mb-3 h-[200px] w-full overflow-hidden rounded-2xl">
        <Image
          src={imgUrl}
          fill
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="p-2">
        <div className="mb-1 text-base font-semibold text-solid-500">{category}</div>
        <div className="mb-6 text-xl font-semibold text-solid-900">{title}</div>
        <Link href={buttonUrl}>
          <Button
            variant="secondary"
            classNames="w-full">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export { CustomerStory };
