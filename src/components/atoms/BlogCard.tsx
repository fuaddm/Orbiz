import Image from 'next/image';
import React, { FC } from 'react';
import { getStrDate } from '@/helper/date';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type BlogCardProps = {
  imgUrl: string | StaticImport;
  orientation?: 'h' | 'v';
  category: string;
  title: string;
  date: Date;
  author: string;
  href: string;
};

const BlogCard: FC<BlogCardProps> = ({ imgUrl, orientation = 'v', category, title, date, author, href }) => {
  const strDate: string = getStrDate(date);

  return (
    <div className={`${orientation === 'v' ? 'flex flex-col' : 'flex items-center gap-12'}`}>
      <Link
        href={href}
        className="relative mb-6 inline-block h-[200px] w-full overflow-hidden rounded-2xl">
        <Image
          src={imgUrl}
          fill
          className="h-full w-full object-cover"
          alt=""
        />
      </Link>
      <div className="flex flex-col">
        <div className="mb-2 text-base font-semibold text-solid-500">{category}</div>
        <Link
          href={href}
          className="mb-2 inline-block text-2xl font-semibold text-solid-900 hover:underline">
          {title}
        </Link>
        <div className="flex items-center gap-2">
          <div className="font-regular text-base text-solid-500">{strDate}</div>
          <div className="h-1.5 w-1.5 rounded-full bg-solid-300"></div>
          <div className="font-regular text-base text-solid-500">by {author}</div>
        </div>
      </div>
    </div>
  );
};

export { BlogCard };
