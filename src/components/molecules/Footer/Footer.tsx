import { Logo } from '@/components/atoms/Logo';
import SvgLinkedin from '@/svg/Socials/Linkedin';
import SvgX from '@/svg/Socials/X';
import SvgYoutube from '@/svg/Socials/Youtube';
import Link from 'next/link';
import React from 'react';
import FooterLinks from './FooterLinks';
import Image from 'next/image';
import bgPic from '~/public/bg/bg.webp';

const Footer = () => {
  return (
    <div className="contanier relative w-full overflow-hidden bg-solid-900 py-12 md:py-20">
      <div className="container relative z-10 flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-4 lg:gap-6">
            <span className="text-white">
              <Logo />
            </span>
            <span className="font-regular text-base text-solid-500 md:whitespace-nowrap">Orbiz Financial Technologies, LLC 2024</span>
          </div>
          <div className="mb-10 mt-6 flex flex-row items-center justify-between gap-4 lg:mb-0 lg:mt-0 lg:flex-col lg:items-start lg:justify-normal">
            <span className="font-regular text-base text-solid-500">Follow us on:</span>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="grid h-8 w-8 place-items-center rounded-full bg-solid-700 shadow-[0px_5px_10px_-2px_rgba(13,13,18,0.04),0px_4px_8px_-1px_rgba(13,13,18,0.02)]">
                <SvgLinkedin
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href="/"
                className="grid h-8 w-8 place-items-center rounded-full bg-solid-700 shadow-[0px_5px_10px_-2px_rgba(13,13,18,0.04),0px_4px_8px_-1px_rgba(13,13,18,0.02)]">
                <SvgX
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href="/"
                className="grid h-8 w-8 place-items-center rounded-full bg-solid-700 shadow-[0px_5px_10px_-2px_rgba(13,13,18,0.04),0px_4px_8px_-1px_rgba(13,13,18,0.02)]">
                <SvgYoutube
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-between gap-10 lg:justify-end xl:gap-24">
          <FooterLinks />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 w-full min-w-[900px] -translate-x-1/2 translate-y-1/3 select-none">
        <Image
          src={bgPic}
          className="h-auto w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export { Footer };
