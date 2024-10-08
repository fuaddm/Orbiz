import Image from "next/image";
import Link from "next/link";
import React from "react";
import iconSetPic from "~/public/images/home/icon_set.webp";

const SomeCard = () => {
  return (
    <div className="rounded-[0.625em] border-[0.0625em] border-solid border-solid-100 bg-white p-[0.375em] pb-[0.8em] shadow-[0px_5px_10px_-2px_rgba(13,13,18,0.04),0px_4px_8px_-1px_rgba(13,13,18,0.02)]">
      <div className="mb-[0.75em] aspect-[1.6/1] w-full">
        <Image
          src={iconSetPic}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="mb-[0.125em] px-[0.375em] text-[0.625em] font-semibold leading-normal text-solid-900">Uxercon Icon Set</div>
      <Link
        href="/"
        className="px-[0.375em] text-[0.625em] font-normal leading-normal text-primary-100"
      >
        https//:buy.orbiz.com/pay/Tcydio
      </Link>
    </div>
  );
};

export default SomeCard;
