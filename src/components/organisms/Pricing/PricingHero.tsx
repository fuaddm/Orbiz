import React from "react";
import { Navigation } from "@/components/molecules/Navigation/Navigation";
import Image from "next/image";

import bgWebp from "~/public/bg/bg.webp";
import SvgTextPaper from "@/svg/TextPaper";
import { PricingCard } from "@/components/molecules/PricingCard";
import { PricingCardV2 } from "@/components/molecules/PricingCardV2";
import { Button } from "@/components/atoms/Button/Button";

const PricingHero = () => {
  return (
    <div className="relative mb-8 overflow-hidden bg-solid-900 pb-12 md:pb-14">
      <div className="container relative z-30">
        <Navigation />
        <div className="mb-12 md:mb-[56px]"></div>
        <div className="mb-10 flex w-full flex-col items-center justify-center md:mb-16">
          <div className="mb-4 flex w-fit items-center gap-1 rounded-full border border-solid border-solid-700 bg-solid-800 px-3 py-1">
            <SvgTextPaper className="h-[14px] w-[14px] stroke-solid-0" />
            <span className="text-sm font-normal text-solid-0">Pricing</span>
          </div>
          <div className="mb-4 text-center text-5xl font-medium leading-[125%] text-solid-0 md:text-[68px]">Simple and Flexible Pricing</div>
          <div className="max-w-[666px] text-center text-lg font-normal leading-[155%] text-solid-500">
            Choose a plan that fits your needs with transparent pricing and no hidden fees. Flexibility and simplicity, designed to grow with you.
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid max-w-[1000px] grid-cols-1 gap-8 md:grid-cols-2">
            <PricingCard
              text="Access a complete payments platform with simple, pay-as-you-go pricing. "
              includes={["Business Accounts", "Embeddable Checkout", "Custom UI Tool", "Invoice Support", "Global Support"]}
            >
              <Button
                variant="primary"
                classNames="mb-6 w-full md:mb-8"
              >
                Start Free Trial
              </Button>
            </PricingCard>
            <PricingCardV2
              title="Custom Plan"
              subTitle="Get in Touch"
              text="Design a custom package— with large payments volume or unique business models."
              includes={["150+ Currencies", "Control Payout Timing", "Unified Payouts", "Subsidiary Support", "Secure Dashboard Access", "Developer Dashboard"]}
            >
              <Button
                variant="secondary"
                classNames="mb-6 w-full bg-white text-primary-100 enabled:active:border-white enabled:active:bg-white/90 md:mb-8"
              >
                Contact Sales
              </Button>
            </PricingCardV2>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-20 hidden h-20 w-full bg-white md:block md:h-[190px]"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-fit w-[calc(100%+400px)] min-w-[900px] -translate-x-1/2 select-none md:bottom-[190px]">
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

export default PricingHero;
