'use client';
import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import { returnHookType, useToggle } from './Toggle.hooks';

export type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {
  width?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Toggle: FC<ToggleProps> = ({ width = 44, onChange = () => {}, ...props }) => {
  const { height, handleOnChange, transform }: returnHookType = useToggle({ width, onChange, ...props });

  return (
    <label className="place-item-center group relative grid h-fit w-fit">
      <input
        {...props}
        onChange={handleOnChange}
        type="checkbox"
        className="hidden appearance-none"
      />
      <div
        style={{ width: width + 'px', height: height + 'px' }}
        className="rounded-full transition group-has-[:disabled]:bg-solid-25 group-has-[:enabled]:bg-solid-50 group-has-[:enabled]:group-has-[:checked]:bg-[#6B39F4] group-has-[:enabled]:group-has-[:checked]:group-hover:bg-[#6B39F4] group-has-[:enabled]:group-hover:bg-solid-100"></div>
      <div
        style={{ width: height - 4 + 'px', height: height - 4 + 'px', transform }}
        className="absolute left-0.5 top-0.5 rounded-full bg-white transition-transform group-has-[:disabled]:bg-solid-50 group-has-[:enabled]:shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06)]"></div>
    </label>
  );
};

export { Toggle };
