import React from 'react';
import Heading from '@/components/molecules/Heading';
import BriefCase from '@/svg/BriefCase';
import { UseCaseCard } from '@/components/atoms/Shared/UseCaseCard';
import SvgSolution from '@/svg/Solution';
import SvgShoppingBag from '@/svg/ShoppingBag';
import SvgBuilding from '@/svg/Building';
import SvgUser from '@/svg/User';
import SvgCodepen from '@/svg/Codepen';

const UseCase = () => {
  return (
    <div className="container py-8">
      <div className="rounded-3xl border border-solid border-solid-50 bg-solid-0 px-4 pb-4 pt-12 md:px-[108px] md:py-[88px]">
        <Heading
          tagText="Use Case"
          tagLeft={<BriefCase className="h-4 w-4 stroke-primary-100" />}
          title="Payment Evolution for Any Industry"
          subtitle="Easily create a quick payment link for your products or services, sell within clicks, and get paid quickly."
        />
        <div className="mb-8 md:mb-16"></div>
        <div className="flex w-full flex-wrap justify-center gap-6">
          <div className="w-full lg:w-[calc(50%-(48px/2))] xl:w-[calc(33.3%-(48px/3))]">
            <UseCaseCard
              classNames="h-full"
              icon={<SvgSolution className="h-full w-full stroke-white" />}
              title="SaaS Solution"
              text="Easily manage recurring payments and subscriptions, streamlining your billing process for faster growth."
            />
          </div>
          <div className="w-full lg:w-[calc(50%-(48px/2))] xl:w-[calc(33.3%-(48px/3))]">
            <UseCaseCard
              classNames="h-full"
              icon={<SvgShoppingBag className="h-full w-full stroke-white" />}
              title="E-commerce"
              text="Sell products online effortlessly with a smooth payment experience, increasing customer satisfaction and sales."
            />
          </div>
          <div className="w-full lg:w-[calc(50%-(48px/2))] xl:w-[calc(33.3%-(48px/3))]">
            <UseCaseCard
              classNames="h-full"
              icon={<SvgBuilding className="h-full w-full stroke-white" />}
              title="Online Business"
              text="Boost your online sales by simplifying payment collection, making transactions seamless and efficient."
            />
          </div>
          <div className="w-full lg:w-[calc(50%-(48px/2))] xl:w-[calc(33.3%-(48px/3))]">
            <UseCaseCard
              classNames="h-full"
              icon={<SvgUser className="h-full w-full stroke-white" />}
              title="Freelancers"
              text="Quickly get paid for your services with easy-to-create payment links, designed to save you time and hassle."
            />
          </div>
          <div className="w-full lg:w-[calc(50%-(48px/2))] xl:w-[calc(33.3%-(48px/3))]">
            <UseCaseCard
              classNames="h-full"
              icon={<SvgCodepen className="h-full w-full stroke-white" />}
              title="Agencies"
              text="Automate payments for your clients and projects, helping you focus on scaling your business with ease."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCase;
