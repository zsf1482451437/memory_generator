import React from 'react';
import { motion } from 'framer-motion';
import { createCn } from '@/utils/cn';
import styles from './index.module.scss';

const cn = createCn(styles);

interface TimelineItem {
  time: string;
  image: string;
}

interface AnimationPlayerProps {
  items: TimelineItem[];
}

const AnimationPlayer: React.FC<AnimationPlayerProps> = ({ items }) => {
  return (
    <div className={cn('container')}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {/* 线条 */}
          {index > 0 && (
            <motion.div
              className={cn('line')}
              initial={{ scaleY: 0 }} // 初始状态：线条高度为 0
              animate={{ scaleY: 1 }} // 动画状态：线条高度为 1
              transition={{ duration: 0.5, delay: (index - 1) * 0.5 }} // 延迟动画
            />
          )}

          {/* 节点 */}
          <motion.div
            className={cn('node')}
            initial={{ scale: 0 }} // 初始状态：节点大小为 0
            animate={{ scale: 1 }} // 动画状态：节点大小为 1
            transition={{ duration: 0.5, delay: index * 0.5 }} // 延迟动画
          >
            <img src={item.image} alt={`Time ${item.time}`} className={cn('image')} />
            <p className={cn('time')}>{item.time}</p>
          </motion.div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default AnimationPlayer;
