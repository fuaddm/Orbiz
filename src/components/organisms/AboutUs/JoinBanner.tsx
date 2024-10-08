import { Button } from "@/components/atoms/Button/Button";
import Image from "next/image";
import React from "react";

import bgWebp from "~/public/bg/bg.webp";

const JoinBanner = () => {
  return (
    <div className="container py-6 md:py-11">
      <div className="relative overflow-hidden rounded-3xl bg-solid-900">
        <div className="relative z-20 flex flex-col items-center justify-center px-4 py-12 md:px-20 md:py-[72px]">
          <div className="mb-4 text-center text-[40px] font-medium leading-normal text-solid-0 md:text-5xl">Find Your Place at Orbiz</div>
          <div className="mb-8 max-w-[500px] text-center text-lg font-normal text-solid-500">Join an ambitious and empathetic team working to build the future of authentication.</div>
          <Button variant="primary">Join The Team</Button>
        </div>
        <Image
          src={bgWebp}
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default JoinBanner;
