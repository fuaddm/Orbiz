import React, { FC, forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  classNames?: string;
};

const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(function Radio({ classNames = "", ...props }, ref) {
  return (
    <div className="relative grid h-fit w-fit place-items-center">
      <input
        ref={ref}
        {...props}
        type="radio"
        className={cn({
          "peer h-4 w-4 appearance-none rounded-full border border-solid border-solid-100 bg-white": true,
          "enabled:checked:border-[#6B39F4] enabled:checked:bg-[#6B39F4] enabled:hover:bg-solid-50 enabled:checked:hover:bg-[#6B39F4] enabled:focus:shadow-[0px_0px_1px_3px_rgba(129,136,152,0.15)] enabled:checked:focus:shadow-[0px_0px_1px_3px_rgba(107,57,244,0.15)]":
            true,
          [classNames]: true,
        })}
      />
      <div className="absolute left-1/2 top-1/2 hidden h-[40%] max-h-[40%] min-h-[40%] w-[40%] min-w-[40%] max-w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white peer-checked:block"></div>
    </div>
  );
});

export { Radio };
