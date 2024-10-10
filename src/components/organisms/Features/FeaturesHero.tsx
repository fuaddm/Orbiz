import { Button } from "@/components/atoms/Button/Button";
import { Navigation } from "@/components/molecules/Navigation/Navigation";
import FeatureHeroCard from "@/components/onetime/FeatureHeroCard";
import FeatureHeroItem from "@/components/onetime/FeatureHeroItem";
import SvgBell from "@/svg/Features/Bell";
import SvgChart from "@/svg/Features/Chart";
import SvgServer from "@/svg/Features/Server";
import SvgTextPaper from "@/svg/TextPaper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import bgWebp from "~/public/bg/bg.webp";

const FeaturesHero = () => {
  return (
    <div className="relative mb-8 overflow-hidden bg-solid-900 pb-20">
      <div className="container relative z-30">
        <Navigation />
        <div className="mb-12 md:mb-[72px]"></div>
        <>
          <div className="mb-14 flex flex-col items-start justify-between gap-8 md:mb-20 lg:flex-row lg:items-center">
            <div className="lg:max-w-[500px] xl:max-w-[700px]">
              <div className="mb-4 flex w-fit items-center gap-1 rounded-full border border-solid border-solid-700 bg-solid-800 px-3 py-1">
                <SvgTextPaper className="h-[14px] w-[14px] stroke-solid-0" />
                <span className="text-sm font-normal text-solid-0">Invoice Management</span>
              </div>
              <div className="mb-4 text-5xl font-medium leading-[125%] text-solid-0 md:text-[68px]">Easily Manage Your Invoice with Orbiz</div>
              <div className="mb-6 text-lg font-normal leading-[155%] text-solid-500 md:mb-12">
                Get paid faster with Orbiz invoicing tool and save precious time on your supplier invoice management.
              </div>
              <div className="flex w-full flex-col items-center gap-4 md:w-fit md:flex-row">
                <Link
                  href="/register"
                  className="w-full md:w-auto"
                >
                  <Button
                    variant="primary"
                    classNames="w-full whitespace-nowrap md:w-auto"
                  >
                    Get Started
                  </Button>
                </Link>
                <Link
                  href="/contact-us"
                  className="w-full md:w-fit"
                >
                  <Button
                    classNames="w-full whitespace-nowrap border border-solid border-solid-700 bg-solid-800 text-white enabled:active:border-solid-600 md:w-auto"
                    variant="secondary"
                  >
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex w-full justify-end text-sm md:w-fit md:text-base">
              <FeatureHeroCard />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <FeatureHeroItem
              icon={<SvgChart className="h-full w-full" />}
              title="Collect More Revenue"
              subtext="Get realtime updates when users start or end subscriptions, or have low funds in their wallet."
            />
            <FeatureHeroItem
              icon={<SvgBell className="h-full w-full" />}
              title="Realtime Notifications"
              subtext="Get realtime updates when users start or end subscriptions, or have low funds in their wallet."
            />
            <FeatureHeroItem
              icon={<SvgServer className="h-full w-full" />}
              title="Easy Management"
              subtext="Get realtime updates when users start or end subscriptions, or have low funds in their wallet."
            />
          </div>
        </>
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

export default FeaturesHero;
