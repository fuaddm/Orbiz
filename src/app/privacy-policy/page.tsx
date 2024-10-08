import { Footer } from "@/components/molecules/Footer/Footer";
import PrivacyContent from "@/components/organisms/PrivacyPolicy/PrivacyContent";
import PrivacyHero from "@/components/organisms/PrivacyPolicy/PrivacyHero";
import React from "react";

const page = () => {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
      <Footer />
    </>
  );
};

export default page;
