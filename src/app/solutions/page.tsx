import { Footer } from '@/components/molecules/Footer/Footer';
import Blogs from '@/components/organisms/Blogs';
import CustomerReviews from '@/components/organisms/CustomerReviews';
import Integrations from '@/components/organisms/Integrations';
import Partners from '@/components/organisms/Partners/Partners';
import SolutionFeatures from '@/components/organisms/Solutions/SolutionFeatures';
import SolutionHero from '@/components/organisms/Solutions/SolutionHero';
import WhyOrbiz from '@/components/organisms/Solutions/WhyOrbiz';
import React from 'react';

const page = () => {
  return (
    <>
      <SolutionHero />
      <Partners />
      <SolutionFeatures />
      <WhyOrbiz />
      <Integrations />
      <div className="bg-solid-0">
        <CustomerReviews variant="secondary" />
      </div>
      <Blogs />
      <Footer />
    </>
  );
};

export default page;
