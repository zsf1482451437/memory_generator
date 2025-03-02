import React from 'react';
import { motion } from 'framer-motion';
import { createCn } from '@utils/cn';
import styles from './index.module.scss';

const cn = createCn(styles);

interface LinearLayoutProps {
  children: React.ReactNode;
}

const LinearLayout: React.FC<LinearLayoutProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const elements: React.ReactNode[] = [];

  childrenArray.forEach((child, index) => {
    // 添加节点
    elements.push(
      <motion.div
        key={`node-${index}`}
        className={cn('item')}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.4 }}
      >
        {child}
      </motion.div>
    );

    // 如果不是最后一个节点，添加线条
    if (index < childrenArray.length - 1) {
      elements.push(
        <motion.div
          key={`line-${index}`}
          className={cn('line')}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.4 + 0.2 }}
        />
      );
    }
  });

  return (
    <div className={cn('container')}>
      {elements}
    </div>
  );
};

export default LinearLayout;
