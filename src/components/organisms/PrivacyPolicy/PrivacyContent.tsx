import React from 'react';
import Content from './content.mdx';
import styles from './privacy.module.css';
import { cn } from '@/lib/utils';

const PrivacyContent = () => {
  return (
    <div className="container flex justify-center">
      <div
        className={cn({
          'max-w-[840px] py-12 md:py-[88px]': true,
          [styles.content]: true,
        })}>
        <Content />
      </div>
    </div>
  );
};

export default PrivacyContent;
