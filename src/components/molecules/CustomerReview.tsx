import React, { FC } from 'react';
import { Avatar, AvatarProps } from '@/components/atoms/Avatar/Avatar';
import { Star } from '@/components/atoms/Star/Star';
import { cn } from '@/lib/utils';

type CustomerProps = AvatarProps & {
  stars: number;
  review: string;
  variant?: 'primary' | 'secondary';
};

const CustomerReview: FC<CustomerProps> = ({ stars, review, avatarUrl, name, work, variant = 'primary' }) => {
  return (
    <div
      className={cn({
        'rounded-2xl p-6': true,
        'bg-white': variant === 'secondary',
      })}>
      <div className="mb-2 flex items-center gap-2 md:mb-4">
        <div className="flex flex-nowrap items-center gap-0.5">
          {new Array(5).fill(0).map((item, index) => {
            let point: 0 | 1;
            if (index + 0.5 < stars) {
              point = 1;
            } else {
              point = 0;
            }
            return (
              <Star
                key={index}
                points={point}
              />
            );
          })}
        </div>
        <span className="text-base font-semibold text-solid-500">{stars}</span>
      </div>
      <div className="mb-6 text-base font-semibold text-solid-900 md:mb-10 md:text-lg">{review}</div>
      <Avatar
        avatarUrl={avatarUrl}
        name={name}
        work={work}
      />
    </div>
  );
};

export { CustomerReview };
