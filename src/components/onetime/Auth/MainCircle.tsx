import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MainCircle = ({ classNames = "", children }: { classNames?: string; children: ReactNode }) => {
  return (
    <div
      className={cn({
        "w-fit rounded-full border border-solid border-solid-50 bg-solid-25 p-2 md:p-4": true,
        [classNames]: true,
      })}
    >
      <div className="h-10 w-10 rounded-full border border-solid border-solid-700 bg-solid-700 bg-gradient-to-t from-white/50 to-60% p-2 md:h-14 md:w-14">{children}</div>
    </div>
  );
};

export default MainCircle;
