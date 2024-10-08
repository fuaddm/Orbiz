import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type TeamPartProps = {
  imgUrl: string | StaticImport;
  name: string;
  work: string;
};

const TeamPart = ({ imgUrl, name, work }: TeamPartProps) => {
  return (
    <div className="rounded-2xl border border-solid border-solid-100 bg-white p-4 pb-5 shadow-[0px_5px_10px_-2px_rgba(13,13,18,0.04),0px_4px_8px_-1px_rgba(13,13,18,0.02)]">
      <div className="mb-5 aspect-[1/0.7] w-full overflow-hidden rounded-lg bg-solid-50">
        <Image
          src={imgUrl}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="mb-2 text-xl font-medium text-solid-900">{name}</div>
      <div className="text-lg font-normal text-solid-500">{work}</div>
    </div>
  );
};

export default TeamPart;
