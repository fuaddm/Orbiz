import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const IntegrationMiniCard = ({ children }: Props) => {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-md border border-solid border-solid-50 bg-solid-0 p-3 md:h-24 md:w-24 md:rounded-2xl md:p-6">
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default IntegrationMiniCard;
