import React from 'react';
import SvgLogo from '@/svg/Logo';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex h-fit w-fit items-center gap-2">
      <div className="h-[30px] w-[30px] overflow-hidden">
        <SvgLogo
          width={30}
          height={30}
        />
      </div>
      <div className="text-2xl font-semibold">Orbiz</div>
    </Link>
  );
};

export { Logo };
