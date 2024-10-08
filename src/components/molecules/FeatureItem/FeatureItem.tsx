import React, { ReactNode } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Tag from "@/components/atoms/Shared/Tag";
import { Button } from "@/components/atoms/Button/Button";
import { cn } from "@/lib/utils";

type Props = {
  reverse?: boolean;
  imgUrl?: string | StaticImport;
  title: string;
  subtext: string;
  btnText: string;
  tagText: string;
  tagIcon: ReactNode;
  children?: ReactNode;
};

const FeatureItem = ({ reverse = false, imgUrl, title, subtext, btnText, tagText, tagIcon, children }: Props) => {
  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-24">
      <div
        className={cn({
          [styles.bgPattern]: true,
          "grid aspect-[1/0.5] w-full place-items-center overflow-hidden rounded-xl p-4 md:p-10 lg:aspect-[1/0.8] lg:rounded-[20px] lg:p-12 xl:p-16": true,
          "order-2 lg:order-1": reverse === false,
          "order-2": reverse === true,
        })}
      >
        {imgUrl && (
          <Image
            src={imgUrl}
            className="object-contain"
            alt=""
          />
        )}
        {children}
      </div>
      <div
        className={cn({
          "flex flex-col gap-4": true,
          "order-1 lg:order-2": reverse === false,
          "order-1": reverse === true,
        })}
      >
        <Tag
          text={tagText}
          leftSide={tagIcon}
        />
        <div className="text-[40px] font-medium leading-[135%] text-solid-900 lg:text-[52px] lg:leading-[125%]">{title}</div>
        <div className="mb-2 text-lg font-normal leading-[155%] text-solid-500 lg:mb-6">{subtext}</div>
        <Button
          variant="primary"
          classNames="w-full lg:w-fit"
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default FeatureItem;
