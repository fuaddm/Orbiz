import { Button } from '@/components/atoms/Button/Button';
import { Navigation } from '@/components/molecules/Navigation/Navigation';
import SvgArrow from '@/svg/Arrows/Arrow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import bgWebp from '~/public/bg/bg.webp';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import HeroCard from '@/components/onetime/HeroCard';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-solid-900 pb-8">
      <div className="container relative z-30">
        <Navigation />
        <div className="mb-12 md:mb-[72px]"></div>
        <div className="flex flex-col items-center justify-center gap-4">
          <Link
            href="/"
            className="group flex cursor-pointer items-center gap-1 rounded-full border border-solid border-solid-700 bg-solid-800 px-3 py-1">
            <span className="font-regular text-sm text-solid-0">🎉 Announcing our $1.4M Fundraise</span>
            <SvgArrow
              width={17}
              height={16}
              className="stroke-solid-0 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <TextGenerateEffect
            filter={true}
            duration={0.7}
            words="Simplifying Payment for Growing Business"
            className="max-w-[900px] text-center text-5xl font-semibold leading-[125%] text-solid-0 md:text-[68px]"
          />
          <div className="font-regular mb-4 max-w-[700px] text-center text-lg leading-[155%] text-solid-500">
            We offer streamlined payment solutions that simplify transactions and support business growth, focusing on efficiency, reliability, and enhancing customer experience.
          </div>
          <div className="mb-12 flex w-full flex-col gap-4 md:w-min md:flex-row">
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
          <HeroCard />
        </div>
      </div>
      <div className="absolute bottom-20 left-1/2 z-10 h-fit w-[calc(100%+400px)] min-w-[900px] -translate-x-1/2 translate-y-20 select-none md:bottom-[190px] md:translate-y-[190px]">
        <Image
          priority
          src={bgWebp}
          className="h-auto w-full animate-fade animate-delay-500 animate-duration-500"
          alt=""
        />
      </div>
      <div className="absolute bottom-0 left-0 z-20 h-20 w-full bg-white md:h-[190px]"></div>
    </div>
  );
};

export default Hero;
