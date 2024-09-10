import { ChangeEvent, useState } from 'react';
import { ToggleProps } from './Toggle';

export type returnHookType = {
  height: number;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  transform: string;
};

const useToggle = ({ width = 44, onChange = () => {}, ...props }: ToggleProps) => {
  const height = Math.round(width * 0.55);
  const xDistance = width - height;
  const [isChecked, setIsChecked] = useState(props?.checked || props?.defaultChecked);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (props?.checked == undefined) {
      setIsChecked(e.currentTarget.checked);
      onChange(e);
    }
  }

  const transform = isChecked ? `translateX(${xDistance}px)` : 'translateX(0px)';

  return {
    height,
    handleOnChange,
    transform,
  } as returnHookType;
};

export { useToggle };
