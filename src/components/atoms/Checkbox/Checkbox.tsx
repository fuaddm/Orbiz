import React, { FC, forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Check from "@/svg/Check";
import styles from "./checkbox.module.css";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  classNames?: string;
  svgClassNames?: string;
};

const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox({ classNames = "", svgClassNames = "", ...props }, ref) {
  return (
    <div className="relative grid h-fit w-fit place-items-center">
      <input
        ref={ref}
        {...props}
        className={cn({
          "peer h-4 w-4 appearance-none rounded border border-solid border-solid-100 bg-white transition": true,
          "enabled:checked:border-[#6B39F4] enabled:checked:bg-[#6B39F4] enabled:hover:bg-solid-25 enabled:checked:hover:bg-[#6B39F4] enabled:focus:shadow-[0px_0px_1px_3px_rgba(129,136,152,0.15)] enabled:checked:focus:shadow-[0px_0px_1px_3px_rgba(107,57,244,0.15)]":
            true,
          "disabled:border-solid-25 disabled:bg-solid-25 disabled:shadow-none": true,
          [styles.checkbox]: true,
          [classNames]: true,
        })}
        type="checkbox"
      />
      <Check
        className={cn({
          "pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 stroke-white peer-disabled:stroke-solid-100": true,
          [styles.svg]: true,
          [svgClassNames]: true,
        })}
      />
    </div>
  );
});

export { Checkbox };
