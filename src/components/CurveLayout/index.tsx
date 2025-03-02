import React from 'react';
import { motion } from 'framer-motion';
import { createCn } from '@utils/cn';
import styles from './index.module.scss';

const cn = createCn(styles);

interface CurveLayoutProps {
  children: React.ReactNode;
}

const CurveLayout: React.FC<CurveLayoutProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const elements: React.ReactNode[] = [];

  childrenArray.forEach((child, index) => {
    // 添加节点
    elements.push(
      <motion.div
        key={`node-${index}`}
        className={cn('item')}
        style={{
          left: `${(index / (childrenArray.length - 1)) * 100}%`,
          top: `${Math.sin((index / (childrenArray.length - 1)) * Math.PI) * 100}px`
        }}
      >
        {child}
      </motion.div>
    );

    // 如果不是最后一个节点，添加曲线连接
    if (index < childrenArray.length - 1) {
      elements.push(
        <motion.div
          key={`curve-${index}`}
          className={cn('curve')}
          style={{
            left: `${(index / (childrenArray.length - 1)) * 100}%`,
            width: `${100 / (childrenArray.length - 1)}%`
          }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <svg width="100%" height="100%" className={cn('curve-svg')}>
            <path
              d={`M0,${Math.sin((index / (childrenArray.length - 1)) * Math.PI) * 100}
                 C50,${Math.sin((index / (childrenArray.length - 1)) * Math.PI) * 100}
                 50,${Math.sin(((index + 1) / (childrenArray.length - 1)) * Math.PI) * 100}
                 100,${Math.sin(((index + 1) / (childrenArray.length - 1)) * Math.PI) * 100}`}
              fill="none"
              stroke="#1976d2"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      );
    }
  });

  return (
    <div className={cn('container')}>
      {elements}
    </div>
  );
};

export default CurveLayout;
