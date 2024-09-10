'use client';
import React, { FC } from 'react';
import { Logo } from '@/components/atoms/Logo';
import { AuthButtons } from './AuthButtons';
import { Nav } from './Nav';
import { Burger } from './Burger';
import { createContext } from 'react';
import { usePathname } from 'next/navigation';
import { getIsBgDark } from '@/helper/route';

export const ThemeContext = createContext(false);

const Navigation: FC = () => {
  const pathname = usePathname();
  let isBgDark: boolean = getIsBgDark(pathname);

  const textColor = isBgDark ? 'text-white' : 'text-solid-900';

  return (
    <ThemeContext.Provider value={isBgDark}>
      <div className={`${textColor} flex w-full items-center justify-between py-5 md:py-6`}>
        <Logo />
        <Nav />
        <AuthButtons />
        <Burger />
      </div>
    </ThemeContext.Provider>
  );
};

export { Navigation };
