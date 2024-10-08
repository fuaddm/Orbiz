import React from "react";
import Image from "next/image";
import partner1Svg from "~/public/svg/partner1.svg";
import partner2Svg from "~/public/svg/partner2.svg";
import partner3Svg from "~/public/svg/partner3.svg";
import partner4Svg from "~/public/svg/partner4.svg";
import partner5Svg from "~/public/svg/partner5.svg";
import partner6Svg from "~/public/svg/partner6.svg";
import partner7Svg from "~/public/svg/partner7.svg";
import partner8Svg from "~/public/svg/partner8.svg";
import Marquee from "@/components/magicui/marquee";

const Partners = () => {
  return (
    <div className="py-6 md:py-12">
      <div className="container mb-6 text-center text-base font-semibold text-solid-400 md:mb-12">Trusted by beloved partner and customer</div>
      <Marquee className="mb-5 [--duration:40s] md:mb-10">
        <Image
          src={partner1Svg}
          alt=""
          className="box-content px-4 md:px-14"
        />
        <Image
          src={partner2Svg}
          alt=""
          className="box-content px-4 md:px-14"
        />
        <Image
          src={partner3Svg}
          alt=""
          className="box-content px-4 md:px-14"
        />
        <Image
          src={partner4Svg}
          alt=""
          className="box-content px-4 md:px-14"
        />
        <Image
          src={partner5Svg}
          alt=""
          className="box-content px-4 md:px-14"
        />
      </Marquee>
      <Marquee
        reverse
        className="[--duration:40s]"
      >
        <Image
          src={partner6Svg}
          alt=""
          className="box-content px-6 md:px-16"
        />
        <Image
          src={partner7Svg}
          alt=""
          className="box-content px-6 md:px-16"
        />
        <Image
          src={partner8Svg}
          alt=""
          className="box-content px-6 md:px-16"
        />
      </Marquee>
    </div>
  );
};

export default Partners;
