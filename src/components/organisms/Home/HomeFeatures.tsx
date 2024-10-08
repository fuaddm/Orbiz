import { Button } from "@/components/atoms/Button/Button";
import Tag from "@/components/atoms/Shared/Tag";
import { FeatureCard } from "@/components/molecules/FeatureCard/FeatureCard";
import SvgZap from "@/svg/Zap";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import feature1 from "~/public/images/cardimages/feature1_result.webp";
import feature2_1 from "~/public/images/cardimages/feature2_1_result.webp";
import feature2_2 from "~/public/images/cardimages/feature2_2_result.webp";
import feature3_1 from "~/public/images/cardimages/feature3_1_result.webp";
import feature3_2 from "~/public/images/cardimages/feature3_2_result.webp";
import feature4_1 from "~/public/images/cardimages/feature4_1_result.webp";
import feature4_2 from "~/public/images/cardimages/feature4_2_result.webp";

const HomeFeatures = () => {
  return (
    <div className="container pb-6 pt-[88px] md:pb-14">
      <Tag
        leftSide={<SvgZap className="h-4 w-4 stroke-primary-100" />}
        text="Features"
      />
      <div className="mb-4"></div>
      <div className="mb-10 flex flex-col justify-between gap-4 md:mb-20 md:flex-row md:gap-12">
        <div className="max-w-[550px] text-[40px] font-semibold leading-[125%] text-solid-900 md:text-[52px]">Everything You Need Grow Your Business</div>
        <div className="flex flex-col gap-6">
          <span className="text-lg font-normal text-solid-500">
            Effortlessly manage invoices, create payment links, embed checkout, and automate recurring billing—all without coding, helping you securely collect payments and grow your business.
          </span>
          <Link href="/register">
            <Button
              variant="primary"
              classNames="w-full md:w-fit"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-6">
        <div className="col-start-1 col-end-11 lg:col-end-5">
          <FeatureCard
            title="Invoice Management"
            text="Create an invoice and send it to your customers in minutes no-code required to make easily collect payments."
          >
            <div className="h-full w-full px-4 py-2 md:px-10 md:py-7">
              <div className="relative h-full w-full">
                <Image
                  src={feature1}
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>
            </div>
          </FeatureCard>
        </div>
        <div className="col-start-1 col-end-11 lg:col-start-5">
          <FeatureCard
            title="Payment Link"
            text="Use payment link to sell online without a website. Create a full payment page in just a few clicks and share the link with your customers."
          >
            <div className="h-full w-full px-4 pt-2 md:px-10 md:pt-7">
              <div className="grid h-full w-full grid-cols-[1.2fr_1fr] grid-rows-1 gap-2 md:gap-8">
                <div className="relative h-full w-full">
                  <Image
                    src={feature2_1}
                    className="h-full w-full object-contain object-bottom"
                    alt=""
                  />
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={feature2_2}
                    className="h-full w-full object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>
        <div className="col-start-1 col-end-11 lg:col-end-6">
          <FeatureCard
            title="Checkout"
            text="Embed checkout into your website or direct customers to a Orbiz-hosted page to easily and securely accept one-time payments or subscriptions."
          >
            <div className="h-full w-full px-4 py-2 md:px-10 md:py-7">
              <div className="grid h-full w-full grid-cols-[1fr_1.5fr] grid-rows-1 gap-2 md:gap-8">
                <div className="relative h-full w-full">
                  <Image
                    src={feature3_1}
                    className="h-full w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={feature3_2}
                    className="h-full w-full object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>
        <div className="col-start-1 col-end-11 lg:col-start-6">
          <FeatureCard
            title="Recurring Billing"
            text="Collect and retain more revenue, automate revenue management workflows, and accept payments."
          >
            <div className="h-full w-full px-4 py-2 md:px-10 md:py-7">
              <div className="grid h-full w-full grid-rows-2 gap-2 md:gap-6">
                <div className="relative h-full w-full">
                  <Image
                    src={feature4_1}
                    className="h-full w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={feature4_2}
                    className="h-full w-full object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
