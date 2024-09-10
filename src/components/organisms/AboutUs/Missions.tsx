import Tag from '@/components/atoms/Shared/Tag';
import SvgCodepen from '@/svg/Codepen';
import SvgZap from '@/svg/Zap';
import Image from 'next/image';
import React from 'react';
import aboutUsPic from '~/public/images/aboutus/aboutUs_result.webp';

const Missions = () => {
  return (
    <div className="container pb-12 pt-12 md:pb-[88px] md:pt-24">
      <div className="mb-10 flex flex-col items-start justify-center gap-4 md:mb-20">
        <Tag
          leftSide={<SvgZap className="h-4 w-4 stroke-primary-100" />}
          text={'Mission + Values'}
        />
        <div className="text-[40px] font-medium leading-tight text-solid-900 md:text-[52px]">
          At Orbiz, we’re building the place to pay for today’s businesses.
          <span className="text-solid-300"> Our mission is to build the first premium payment platform for everyone.</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        <div className="h-[400px] w-full overflow-hidden rounded-3xl md:h-full">
          <Image
            src={aboutUsPic}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex h-fit w-full flex-col rounded-2xl border border-solid border-solid-100 bg-white p-8">
            <div className="mb-6 h-[52px] w-[52px] rounded-[14px] border border-solid border-primary-50 bg-primary-100 p-3 shadow-[inset_0px_-4px_8px_0px_rgba(255,255,255,0.64)]">
              <SvgZap className="h-full w-full stroke-white" />
            </div>
            <div className="mb-3 text-2xl font-semibold text-solid-900">Our Mission</div>
            <div className="font-regular text-lg text-solid-500">
              We’re here to solve the complex challenges of selling digital products globally. We believe that selling online should be easy-peasy for everyone.
            </div>
          </div>
          <div className="flex h-fit w-full flex-col rounded-2xl border border-solid border-solid-100 bg-white p-8">
            <div className="mb-6 h-[52px] w-[52px] rounded-[14px] border border-solid border-primary-50 bg-primary-100 p-3 shadow-[inset_0px_-4px_8px_0px_rgba(255,255,255,0.64)]">
              <SvgCodepen className="h-full w-full stroke-white" />
            </div>
            <div className="mb-3 text-2xl font-semibold text-solid-900">Our Values</div>
            <div className="font-regular text-lg text-solid-500">
              We are committed to ownership, craftsmanship, execution, humility, simplicity and the art of listening. We work to lift the companies and creatives we work with by delivering on our
              promises and consistently improving one day at a time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
