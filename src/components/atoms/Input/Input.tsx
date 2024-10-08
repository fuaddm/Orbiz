import { cn } from "@/lib/utils";
import React, { FC, forwardRef, InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  leftEl?: ReactNode;
  rightEl?: ReactNode;
  label?: ReactNode;
  hint?: ReactNode;
  type?: string;
  classNames?: string;
};

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(function Input({ leftEl = "", type = "text", rightEl = "", label = "", hint = "", classNames = "", ...props }, ref) {
  return (
    <div
      className={cn({
        "flex w-full flex-col gap-2": true,
        [classNames]: true,
      })}
    >
      <label className="flex w-full flex-col gap-2">
        {label && <span className="text-sm font-semibold text-solid-900">{label}</span>}
        <div className="relative flex items-center gap-2 rounded-[10px] border border-solid border-solid-100 bg-white px-3 py-2 shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05),0px_1px_2px_0px_rgba(13,13,18,0.04)] transition has-[:focus]:border-[#A688F8] has-[:invalid]:border-[#EC778D] has-[:focus]:shadow-[0px_0px_1px_3px_rgba(107,57,244,0.15)] has-[:invalid]:shadow-[0px_0px_1px_3px_rgba(223,28,65,0.15)]">
          {leftEl}
          <input
            ref={ref}
            {...props}
            type={type}
            className="w-full text-base font-normal text-solid-900 placeholder:text-solid-400"
          />
          {rightEl}
        </div>
      </label>
      {hint && <span className="text-sm font-normal text-solid-400">{hint}</span>}
    </div>
  );
});

export { Input };
