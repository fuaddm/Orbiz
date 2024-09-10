import React, { ReactNode } from 'react';
import SvgSuccess from '@/svg/Success';

type PricingCardProps = {
  title?: string;
  pricing?: string;
  priceText?: string;
  text?: string;
  includes?: string[];
  children?: ReactNode;
};

const PricingCard = ({ title = 'Starter', pricing = '$49', priceText = 'per month', text = '', includes, children }: PricingCardProps) => {
  return (
    <div className="w-full rounded-3xl border border-solid border-solid-100 bg-white p-6 shadow-[0px_5px_10px_-2px_rgba(13,13,18,0.04),0px_4px_8px_-1px_rgba(13,13,18,0.02)] md:p-8">
      <div className="mb-3 text-lg font-semibold text-primary-100 md:text-2xl">{title}</div>
      <div className="mb-2">
        <span className="text-4xl font-semibold text-solid-900 md:text-5xl">{pricing} </span>
        <span className="font-regular text-base text-solid-500">{priceText}</span>
      </div>
      <div className="font-regular mb-6 text-base text-solid-500 md:mb-8">{text}</div>
      {children}
      <div className="mb-6 h-px w-full border border-dashed border-solid-100 md:mb-8"></div>
      <div className="flex flex-col gap-4">
        <div className="text-base font-semibold text-solid-900">This Plan Includes:</div>
        {includes?.map((item) => {
          return (
            <div
              key={item}
              className="flex items-center gap-3">
              <SvgSuccess className="h-5 w-5" />
              <span className="font-regular text-base text-solid-500">{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function CardButton({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

PricingCard.CardButton = CardButton;

export { PricingCard };
