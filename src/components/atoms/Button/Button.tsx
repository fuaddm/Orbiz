import React, { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import Loading from '@/svg/Loading';
import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  loadingSize?: number;
  classNames?: string;
};

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', disabled = false, loading = false, loadingSize = 24, classNames = '', children, ...props }, ref) => {
  const ariaBusy = loading;
  const ariaDisabled = disabled || loading;

  return (
    <button
      {...props}
      ref={ref}
      disabled={disabled || loading}
      aria-busy={ariaBusy}
      aria-disabled={ariaDisabled}
      className={cn({
        'relative h-fit overflow-hidden rounded-full px-10 py-3 text-center text-base font-semibold': true,
        'bg-primary-100 text-white enabled:active:bg-primary-200': variant === 'primary',
        'border border-solid border-solid-100 bg-white text-solid-900 enabled:active:border-solid-900': variant === 'secondary',
        'bg-primary-25': disabled && variant === 'primary',
        'text-solid-300': disabled && variant === 'secondary',
        [classNames]: true,
      })}>
      {children}
      {loading && (
        <div
          className={cn({
            'absolute left-0 top-0 z-10 grid h-full w-full place-items-center': true,
            'bg-primary-100': variant === 'primary',
            'bg-white': variant === 'secondary',
          })}>
          <Loading
            width={loadingSize}
            height={loadingSize}
            className={cn({
              'fill-white': variant === 'primary',
              'fill-solid-900': variant === 'secondary' && !disabled,
              'fill-solid-300': variant === 'secondary' && disabled,
              'animate-spin': true,
            })}
          />
        </div>
      )}
    </button>
  );
});

export { Button };
