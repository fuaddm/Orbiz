import { Button } from '@/components/atoms/Button/Button';
import { Checkbox } from '@/components/atoms/Checkbox/Checkbox';
import { Input } from '@/components/atoms/Input/Input';
import { Navigation } from '@/components/molecules/Navigation/Navigation';
import SvgMail from '@/svg/Mail';
import SvgMappin from '@/svg/Mappin';
import SvgPhone from '@/svg/Phone';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import bgWebp from '~/public/bg/bg.webp';

const ContactUsHero = () => {
  return (
    <div className="relative overflow-hidden bg-solid-900 pb-12 md:pb-24">
      <div className="container relative z-30">
        <Navigation />
        <div className="py-12 md:py-20">
          <div className="grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-2">
            <LeftSide />
            <ContactUsForm />
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

const LeftSide = () => {
  return (
    <div>
      <div className="mb-4 pt-0 text-[40px] font-medium leading-[135%] text-solid-0 md:pt-6 md:text-[52px] md:leading-[125%]">Let's Talk</div>
      <div className="font-regular mb-6 text-lg text-solid-500 md:mb-14">
        Vestibulum velit neque placerat accumsan aliquam lectus elementum sed. Ante dolor dignissim lectus in. Lorem risus nibh in sit elementum euismod.
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-solid-800">
            <SvgMail className="h-4 w-4 stroke-solid-400" />
          </div>
          <div className="text-base font-medium text-solid-0">orbizfinancial@mail.com</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-solid-800">
            <SvgPhone className="h-4 w-4 stroke-solid-400" />
          </div>
          <div className="text-base font-medium text-solid-0">+1 3245 8907</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-solid-800">
            <SvgMappin className="h-4 w-4 stroke-solid-400" />
          </div>
          <div className="text-base font-medium text-solid-0">3517 W. Gray St. Utica, Pennsylvania 57867</div>
        </div>
      </div>
    </div>
  );
};

const ContactUsForm = () => {
  return (
    <div className="rounded-3xl border border-solid border-solid-50 bg-white p-6 md:p-8">
      <div className="mb-6 text-[32px] font-medium leading-[135%] text-solid-900">Speak to us</div>
      <div className="mb-6 flex flex-col gap-4 md:mb-8">
        <div>
          <label
            className="mb-1.5 inline-block text-sm font-medium text-solid-900"
            htmlFor="fullname">
            Full name
          </label>
          <Input
            id="fullname"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            className="mb-1.5 inline-block text-sm font-medium text-solid-900"
            htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            placeholder="johndoe@mail.com"
          />
        </div>
        <div>
          <label
            className="mb-1.5 inline-block text-sm font-medium text-solid-900"
            htmlFor="subject">
            Subject
          </label>
          <Input
            id="subject"
            placeholder="Create a subject..."
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            className="mb-1.5 inline-block text-sm font-medium text-solid-900"
            htmlFor="message">
            Message
          </label>
          <textarea
            name=""
            id="message"
            rows={6}
            className="rounded-[10px] border border-solid border-solid-100 bg-white p-2.5 shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05),0px_1px_2px_0px_rgba(13,13,18,0.04)]"></textarea>
        </div>
        <label
          htmlFor="agreement"
          className="flex items-center gap-3">
          <Checkbox id="agreement" />
          <span className="font-regular text-sm text-solid-500">
            For information about how Orbiz handles personal data, see our{' '}
            <Link
              href="privacy-policy"
              target="_blank"
              className="inline text-primary-100 underline hover:underline">
              Privacy Policy.
            </Link>
          </span>
        </label>
      </div>
      <Button
        variant="primary"
        classNames="w-full">
        Send Message
      </Button>
    </div>
  );
};

export default ContactUsHero;
