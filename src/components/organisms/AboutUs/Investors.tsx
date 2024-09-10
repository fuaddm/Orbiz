import Marquee from '@/components/magicui/marquee';
import Heading from '@/components/molecules/Heading';
import Grid from '@/svg/Grid';
import Image from 'next/image';
import React from 'react';

import partner1Svg from '~/public/svg/partner1.svg';
import partner2Svg from '~/public/svg/partner2.svg';
import partner3Svg from '~/public/svg/partner3.svg';
import partner4Svg from '~/public/svg/partner4.svg';
import partner5Svg from '~/public/svg/partner5.svg';

import investor1Pic from '~/public/images/aboutus/investor1_result.webp';
import investor2Pic from '~/public/images/aboutus/investor2_result.webp';
import investor3Pic from '~/public/images/aboutus/investor3_result.webp';
import investor4Pic from '~/public/images/aboutus/investor4_result.webp';

const Investors = () => {
  return (
    <div className="container py-12 md:py-[88px]">
      <Heading
        title="Our Investors"
        tagText="Investors"
        tagLeft={<Grid className="h-4 w-4 stroke-primary-100" />}
        subtitle=""
      />
      <div className="mb-6 md:mb-10"></div>
      <div className="relative mb-10 md:mb-20">
        <div className="absolute left-0 top-0 z-10 h-full w-full shadow-[inset_30px_0px_16px_-8px_rgba(255,255,255,1),inset_-30px_0px_16px_-8px_rgba(255,255,255,1)]"></div>
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
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="h-[300px] w-full overflow-hidden rounded-2xl">
            <Image
              src={investor1Pic}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            <div className="h-[125px] w-full overflow-hidden rounded-2xl md:h-[250px]">
              <Image
                src={investor2Pic}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="h-[125px] w-full overflow-hidden rounded-2xl md:h-[250px]">
              <Image
                src={investor3Pic}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="h-full w-full overflow-hidden rounded-2xl">
          <Image
            src={investor4Pic}
            className="h-[250px] w-full object-cover md:h-[574px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Investors;
