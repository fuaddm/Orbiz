import React, { FC, ReactNode } from "react";
import styles from "./style.module.css";

type FeatureCardProps = {
  title?: string;
  text?: string;
  children?: ReactNode;
};

const FeatureCard: FC<FeatureCardProps> = ({ title = "", text = "", children, ...props }) => {
  return (
    <div
      {...props}
      className="grid h-full w-full grid-rows-[min-content_1fr] rounded-[20px] border border-solid border-solid-100 bg-white p-4 shadow-[0px_5px_10px_-2px_rgba(13,13,18,0.04),0px_4px_8px_-1px_rgba(13,13,18,0.02)]"
    >
      <div className="mb-4 flex flex-col gap-3 p-2">
        <span className="text-2xl font-semibold text-solid-900">{title}</span>
        <span className="text-lg font-normal text-solid-500">{text}</span>
      </div>
      <div className={`${styles.pattern} relative h-[200px] w-full self-end overflow-hidden rounded-2xl border border-solid border-solid-50 bg-solid-25 md:h-[300px]`}>{children}</div>
    </div>
  );
};

export { FeatureCard };
