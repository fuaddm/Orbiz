import { Footer } from "@/components/molecules/Footer/Footer";
import CustomerReviews from "@/components/organisms/CustomerReviews";
import FAQ from "@/components/organisms/FAQ";
import Features from "@/components/organisms/Features/Features";
import FeaturesHero from "@/components/organisms/Features/FeaturesHero";
import Integrations from "@/components/organisms/Integrations";
import Partners from "@/components/organisms/Partners/Partners";
import React from "react";

const page = () => {
  return (
    <>
      <FeaturesHero />
      <Partners />
      <Features />
      <Integrations />
      <div className="bg-solid-0">
        <CustomerReviews variant="secondary" />
      </div>
      <FAQ />
      <Footer />
    </>
  );
};

export default page;
