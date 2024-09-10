import React, { ReactNode } from 'react';
import Tag from '@/components/atoms/Shared/Tag';
import { cn } from '@/lib/utils';

type HeadingProps = {
  tagText: ReactNode;
  tagLeft?: ReactNode;
  tagRight?: ReactNode;
  title: string;
  subtitle: string;
  position?: 'center' | 'left' | 'right';
};

const Heading = ({ tagText, tagLeft, tagRight, title, subtitle, position = 'center' }: HeadingProps) => {
  return (
    <div
      className={cn({
        'flex flex-col justify-center gap-4': true,
        'items-start': position === 'left',
        'items-center text-center': position === 'center',
        'items-end': position === 'right',
      })}>
      <Tag
        leftSide={tagLeft}
        text={tagText}
        rightSide={tagRight}
      />
      <div className="max-w-[680px] text-[40px] font-semibold text-solid-900 md:text-[52px]">{title}</div>
      <div className="font-regular max-w-[680px] text-lg text-solid-500">{subtitle}</div>
    </div>
  );
};

export default Heading;
