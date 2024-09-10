import React from 'react';
import SvgStar from '@/svg/Star';

type Props = {
  points: 0 | 1;
};

const Star = ({ points }: Props) => {
  return (
    <div className="relative h-fit w-fit">
      <SvgStar className="h-4 w-4 fill-yellow-100 md:h-5 md:w-5" />
      {points === 0 && <SvgStar className="absolute left-0 top-0 h-4 w-4 fill-solid-100 md:h-5 md:w-5" />}
    </div>
  );
};

export { Star };
