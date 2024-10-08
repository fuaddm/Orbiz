import React, { ReactNode } from "react";
import SvgPlus from "@/svg/Plus";

type PricingCardProps = {
  title?: string;
  subTitle?: string;
  text?: string;
  includes?: string[];
  children?: ReactNode;
};

const PricingCardV2 = ({ title = "Starter", subTitle = "", text = "", includes, children }: PricingCardProps) => {
  return (
    <div className="w-full rounded-3xl border-2 border-solid border-primary-200 bg-primary-100 bg-gradient-to-bl from-white/20 p-6 shadow-[0px_12px_16px_-4px_rgba(13,13,18,0.08),0px_4px_6px_-2px_rgba(13,13,18,0.03)] md:p-8">
      <div className="mb-3 text-lg font-semibold text-white md:text-2xl">{title}</div>
      <div className="mb-2">
        <span className="text-4xl font-semibold text-white md:text-5xl">{subTitle}</span>
      </div>
      <div className="mb-6 text-base font-normal text-primary-25 md:mb-8">{text}</div>
      {children}
      <div className="mb-6 h-px w-full border border-dashed border-primary-50 md:mb-8"></div>
      <div className="flex flex-col gap-4">
        <div className="text-base font-semibold text-white">Everything in Starter Plus:</div>
        {includes?.map((item) => {
          return (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <SvgPlus className="h-5 w-5" />
              <span className="text-base font-normal text-white">{item}</span>
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

PricingCardV2.CardButton = CardButton;

export { PricingCardV2 };
