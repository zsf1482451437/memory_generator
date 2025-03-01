import React from 'react';
import { createCn } from '@/utils/cn';
import styles from './index.module.scss';

const cn = createCn(styles);

interface CircleLayoutProps {
  children: React.ReactNode;
}

const CircleLayout: React.FC<CircleLayoutProps> = ({ children }) => {
  const childrenCount = React.Children.count(children);

  return (
    <div className={cn('container')}>
      {React.Children.map(children, (child, index) => {
        const angle = (360 / childrenCount) * index; // 计算每个子元素的角度
        return (
          <div
            className={cn('item')}
            style={{ transform: `rotate(${angle}deg) translateY(-50%)` }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default CircleLayout;
