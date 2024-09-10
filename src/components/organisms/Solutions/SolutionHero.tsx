import { Button } from '@/components/atoms/Button/Button';
import { Navigation } from '@/components/molecules/Navigation/Navigation';
import SolutionHeroCard from '@/components/onetime/SolutionHeroCard';
import SvgCodesandbox from '@/svg/Codesandbox';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import bgWebp from '~/public/bg/bg.webp';
import partner2Svg from '~/public/svg/partner2.svg';
import partner3Svg from '~/public/svg/partner3.svg';
import partner4Svg from '~/public/svg/partner4.svg';
import partner5Svg from '~/public/svg/partner5.svg';

const SolutionHero = () => {
  return (
    <div className="relative mb-8 overflow-hidden bg-solid-900 pb-12 md:pb-[120px]">
      <div className="container relative z-30">
        <Navigation />
        <div className="mb-12 md:mb-[72px]"></div>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="w-full lg:max-w-[500px] xl:max-w-[700px]">
            <div className="mb-4 flex w-fit items-center gap-1 rounded-full border border-solid border-solid-700 bg-solid-800 px-3 py-1">
              <SvgCodesandbox className="h-[14px] w-[14px] stroke-solid-0" />
              <span className="font-regular text-sm text-solid-0">SaaS Solution</span>
            </div>
            <div className="mb-4 text-5xl font-medium leading-[125%] text-solid-0 md:text-[68px]">Simplifying Payment Built for SaaS</div>
            <div className="font-regular mb-6 text-lg leading-[155%] text-solid-500 md:mb-12">
              Streamline your SaaS billing with flexible, secure payment solutions tailored to fit your business. Scale effortlessly while managing subscriptions, invoices, and payments all in one
              place.
            </div>
            <div className="flex w-full flex-col items-center gap-4 md:mb-14 md:w-fit md:flex-row">
              <Button
                variant="primary"
                classNames="w-full whitespace-nowrap md:w-auto">
                Get Started
              </Button>
              <Link
                href="/contact-us"
                className="w-full md:w-fit">
                <Button
                  classNames="w-full whitespace-nowrap border border-solid border-solid-700 bg-solid-800 text-white enabled:active:border-white md:w-auto"
                  variant="secondary">
                  Contact us
                </Button>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="mb-8 text-base font-medium text-solid-500">Trusted by beloved partner and customer</div>
              <div className="flex items-center gap-8">
                <Image
                  src={partner2Svg}
                  alt=""
                  className="box-content"
                />
                <Image
                  src={partner3Svg}
                  alt=""
                  className="box-content"
                />
                <Image
                  src={partner4Svg}
                  alt=""
                  className="box-content"
                />
                <Image
                  src={partner5Svg}
                  alt=""
                  className="box-content"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end text-sm md:w-fit md:text-base">
            <SolutionHeroCard />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-fit w-[calc(100%+400px)] min-w-[900px] -translate-x-1/2 translate-y-1/3 select-none">
        <Image
          priority
          src={bgWebp}
          className="h-auto w-full animate-fade animate-delay-500 animate-duration-500"
          alt=""
        />
      </div>
    </div>
  );
};

export default SolutionHero;
