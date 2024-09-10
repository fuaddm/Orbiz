import React from 'react';
import Heading from '@/components/molecules/Heading';
import BriefCase from '@/svg/BriefCase';
import SvgBuilding from '@/svg/Building';
import SvgZap from '@/svg/Zap';
import WhyOrbizCard from '@/components/atoms/Shared/WhyOrbizCard';
import SvgCreditcard from '@/svg/Creditcard';
import SvgRocket from '@/svg/Rocket';

const WhyOrbiz = () => {
  return (
    <div className="container py-8">
      <div className="rounded-3xl border border-solid border-solid-50 bg-solid-0 px-4 pb-4 pt-12 md:px-[108px] md:py-[88px]">
        <Heading
          tagText="Why Orbiz"
          tagLeft={<BriefCase className="h-4 w-4 stroke-primary-100" />}
          title="Optimize Revenue with The Power of The Platform"
          subtitle="Easily create a quick payment link for your products or services, sell within clicks, and get paid quickly."
        />
        <div className="mb-8 md:mb-16"></div>
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          <WhyOrbizCard
            classNames="h-full"
            icon={<SvgCreditcard className="h-full w-full stroke-white" />}
            title="Instant Payouts"
            text="Easily manage recurring payments and subscriptions, streamlining your billing process for faster growth."
          />
          <WhyOrbizCard
            classNames="h-full"
            icon={<SvgZap className="h-full w-full stroke-white" />}
            title="Free Transfer"
            text="Sell products online effortlessly with a smooth payment experience, increasing customer satisfaction and sales."
          />
          <WhyOrbizCard
            classNames="h-full"
            icon={<SvgBuilding className="h-full w-full stroke-white" />}
            title="For Business of All Sizes"
            text="Boost your online sales by simplifying payment collection, making transactions seamless and efficient."
          />
          <WhyOrbizCard
            classNames="h-full"
            icon={<SvgRocket className="h-full w-full stroke-white" />}
            title="Access to Capital"
            text="Quickly get paid for your services with easy-to-create payment links, designed to save you time and hassle."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyOrbiz;
