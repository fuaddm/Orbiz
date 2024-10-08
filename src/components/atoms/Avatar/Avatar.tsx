import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type AvatarProps = {
  avatarUrl: string | StaticImport;
  name: string;
  work: string;
};

const Avatar = ({ avatarUrl, name, work }: AvatarProps) => {
  return (
    <div className="flex h-fit items-center gap-4">
      <div className="relative aspect-square w-10 overflow-hidden rounded-full md:w-12">
        <Image
          src={avatarUrl}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="flex h-fit flex-col gap-0.5">
        <span className="text-sm font-semibold text-[#0E1012] md:text-base">{name}</span>
        <span className="text-xs font-normal text-[#566171] md:text-sm">{work}</span>
      </div>
    </div>
  );
};

export { Avatar };
