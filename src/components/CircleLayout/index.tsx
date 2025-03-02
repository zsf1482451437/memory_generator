import React from 'react';
import { createCn } from '@/utils/cn';
import styles from './index.module.scss';


const cn = createCn(styles);

const RADIUS = 3;

interface CircleLayoutProps {
  children: React.ReactNode;
}

const CircleLayout: React.FC<CircleLayoutProps> = ({ children }) => {
  return (
    <div className={cn('container')}>
      {React.Children.map(children, (child, index) => {
        const angle = (index * 60) * (Math.PI / 180); // 计算每个子元素的角度
        const x = RADIUS * Math.cos(angle) * 50; // 计算x坐标
        const y = RADIUS * Math.sin(angle) * 50; // 计算y坐标
        return (
          <div
            className={cn('item')}
            style={{ transform: `translate(-50%,-50%) translate(${x}px, ${y}px)` }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default CircleLayout;
