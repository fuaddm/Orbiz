import FeatureItem from '@/components/molecules/FeatureItem/FeatureItem';
import OperationCard from '@/components/molecules/OperationCard';
import FormCard from '@/components/onetime/FormCard';
import SvgBanknote from '@/svg/Banknote';
import SvgNavigation from '@/svg/Navigation';
import SvgTextPaper from '@/svg/TextPaper';
import SvgZap from '@/svg/Zap';
import React from 'react';

const Features = () => {
  return (
    <div className="container pb-12 pt-12 md:pb-[88px] md:pt-16">
      <FeatureItem
        tagText="Create Invoices"
        tagIcon={<SvgTextPaper className="h-4 w-4 stroke-primary-100" />}
        title="Simplify Create Your Invoices in Seconds"
        subtext="Get your instant online store just by creating Orbiz account. Add products, and start selling!"
        btnText="Create your Invoices">
        <div className="grid w-full place-items-center text-[6px] md:text-[8px] xl:text-[10px]">
          <FormCard />
        </div>
      </FeatureItem>
      <div className="mb-24"></div>
      <FeatureItem
        reverse={true}
        tagText="Operations"
        tagIcon={<SvgZap className="h-4 w-4 stroke-primary-100" />}
        title="Simplifies Invoice Operations Easily"
        subtext="Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris. Auctor vitae neque urna nam nunc pellentesque."
        btnText="Create your Invoices">
        <div className="w-full text-[8px] md:text-xs xl:text-base">
          <div className="flex w-full flex-col gap-[2em]">
            <OperationCard
              bgColor="#F0F0FF"
              tagIcon={<SvgTextPaper className="h-[1.25em] w-[1.25em] stroke-primary-100" />}
              title="Invoice is created"
              subtitle="Jan 24, 2024 09:00 PM"
            />
            <OperationCard
              bgColor="#F0FBFF"
              tagIcon={<SvgNavigation className="h-[1.25em] w-[1.25em] stroke-aqua-100" />}
              title="Invoice is created"
              subtitle="Jan 24, 2024 09:00 PM"
            />
            <OperationCard
              bgColor="#EFFEFA"
              tagIcon={<SvgBanknote className="h-[1.25em] w-[1.25em] stroke-green-100" />}
              title="Invoice is created"
              subtitle="Jan 24, 2024 09:00 PM"
            />
          </div>
        </div>
      </FeatureItem>
    </div>
  );
};

export default Features;
