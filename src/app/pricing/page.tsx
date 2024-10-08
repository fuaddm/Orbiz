import { Footer } from "@/components/molecules/Footer/Footer";
import PricingFAQ from "@/components/organisms/Pricing/PricingFAQ";
import PricingHero from "@/components/organisms/Pricing/PricingHero";
import React from "react";

const page = () => {
  return (
    <>
      <PricingHero />
      <PricingFAQ />
      <Footer />
    </>
  );
};

export default page;
