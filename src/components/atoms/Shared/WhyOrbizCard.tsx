import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

type UseCaseCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
  classNames?: string;
};

const WhyOrbizCard = ({ icon, title, text, classNames = '' }: UseCaseCardProps) => {
  return (
    <div
      className={cn({
        'flex h-fit w-full flex-col rounded-2xl bg-white p-8': true,
        [classNames]: true,
      })}>
      <div className="mb-6 h-[52px] w-[52px] rounded-[14px] border border-solid border-primary-50 bg-primary-100 p-3 shadow-[inset_0px_-4px_8px_0px_rgba(255,255,255,0.64)]">{icon}</div>
      <div className="mb-3 text-2xl font-semibold text-solid-900">{title}</div>
      <div className="font-regular text-lg text-solid-500">{text}</div>
    </div>
  );
};

export default WhyOrbizCard;
