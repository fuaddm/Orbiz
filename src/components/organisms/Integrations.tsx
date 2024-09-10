import React from 'react';
import IntegrationApps from '@/components/molecules/IntegrationApps/IntegrationApps';
import Grid from '@/svg/Grid';
import { Button } from '@/components/atoms/Button/Button';
import Heading from '@/components/molecules/Heading';

const Integrations = () => {
  return (
    <div className="container pb-12 pt-6 md:pb-[88px] md:pt-14">
      <IntegrationApps />
      <div className="mb-8"></div>
      <Heading
        tagText="Integrations"
        tagLeft={<Grid className="h-4 w-4 stroke-primary-100" />}
        title="Simplify Your Workflow with Orbiz Integrations"
        subtitle="Connect over 80+ partner tools available. Focus on what matters."
      />
      <div className="mb-8"></div>
      <div className="flex w-full justify-center">
        <Button
          variant="primary"
          classNames="w-full md:w-fit">
          Explore Integrations
        </Button>
      </div>
    </div>
  );
};

export default Integrations;
