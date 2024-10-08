import React, { ReactNode } from "react";

type Props = {
  title: string;
  subtext: string;
  icon: ReactNode;
};

const FeatureHeroItem = ({ title, subtext, icon }: Props) => {
  return (
    <div className="h-fit w-full">
      <div className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-white/10">
        <div className="h-5 w-5">{icon}</div>
      </div>
      <div className="mb-2 text-lg font-medium text-solid-0">{title}</div>
      <div className="text-base font-normal text-solid-500">{subtext}</div>
    </div>
  );
};

export default FeatureHeroItem;
