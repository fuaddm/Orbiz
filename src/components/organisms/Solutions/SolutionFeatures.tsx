import FeatureItem from '@/components/molecules/FeatureItem/FeatureItem';
import OperationCard from '@/components/molecules/OperationCard';
import FeatureHeroCard from '@/components/onetime/FeatureHeroCard';
import FormCard from '@/components/onetime/FormCard';
import InvoiceFromCard from '@/components/onetime/InvoiceFromCard';
import SvgBanknote from '@/svg/Banknote';
import SvgNavigation from '@/svg/Navigation';
import SvgRevenue from '@/svg/Solutions/Revenue';
import SvgTextPaper from '@/svg/TextPaper';
import React from 'react';

const SolutionFeatures = () => {
  return (
    <div className="container pb-12 pt-12 md:pb-[88px] md:pt-16">
      <FeatureItem
        tagText="Revenue"
        tagIcon={<SvgRevenue className="h-4 w-4 stroke-primary-100" />}
        title="Power Any Billing Model with Orbiz"
        subtext="Get your instant online store just by creating Orbiz account. Add products, and start selling!"
        btnText="Get Started">
        <div className="grid w-full place-items-center text-[6px] md:text-[8px] xl:text-[10px]">
          <FormCard />
        </div>
      </FeatureItem>
      <div className="mb-24"></div>
      <FeatureItem
        reverse={true}
        tagText="Get Paid"
        tagIcon={<SvgTextPaper className="h-4 w-4 stroke-primary-100" />}
        title="Get Paid with Prebuilt Invoices"
        subtext="Get your instant online store just by creating Orbiz account. Add products, and start selling!"
        btnText="Get Started">
        <div className="grid w-full place-items-center text-[8px] md:text-xs xl:text-base">
          <InvoiceFromCard />
        </div>
      </FeatureItem>
    </div>
  );
};

export default SolutionFeatures;
