"use client";
import CircleMinus from "@/svg/CircleMinus";
import CirclePlus from "@/svg/CirclePlus";
import React, { FC, MouseEvent, useRef } from "react";

type AccordionItemProps = {
  name?: string;
  title: string;
  text: string;
};

const AccordionItem: FC<AccordionItemProps> = ({ name, title, text }) => {
  const radioRef = useRef<HTMLInputElement>(null);
  function handleClick(e: MouseEvent<HTMLLabelElement>) {
    e.preventDefault();
    if (radioRef.current != null) {
      radioRef.current.checked = !radioRef.current.checked;
    }
  }

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-solid border-solid-100 bg-white shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05),0px_1px_2px_0px_rgba(13,13,18,0.04)] md:gap-4">
      <label
        onClick={handleClick}
        className="group peer flex cursor-pointer items-center justify-between gap-0.5 p-4 has-[:checked]:pb-0 md:p-6"
      >
        <div className="text-lg font-semibold text-solid-900 md:text-2xl">{title}</div>
        <div className="max-h-6 min-h-6 min-w-6 max-w-6">
          <CirclePlus className="block h-6 w-6 stroke-solid-300 group-has-[:checked]:hidden" />
          <CircleMinus className="hidden h-6 w-6 stroke-primary-100 group-has-[:checked]:block" />
        </div>
        {name && (
          <input
            type="radio"
            name={name}
            ref={radioRef}
            className="hidden"
          />
        )}
        {!name && (
          <input
            type="radio"
            ref={radioRef}
            className="hidden"
          />
        )}
      </label>
      <div className="hidden p-4 pt-0 text-base font-normal text-solid-500 peer-has-[:checked]:block md:p-6 md:pt-0 md:text-lg">{text}</div>
    </div>
  );
};

export { AccordionItem };
