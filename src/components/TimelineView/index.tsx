import React from 'react';
import { motion } from 'framer-motion';
import { createCn } from '@/utils/cn';
import styles from './index.module.scss';

const cn = createCn(styles);

interface TimelineItem {
  time: string;
  image: string;
}

interface TimelineViewProps {
  items: TimelineItem[];
}

const TimelineView: React.FC<TimelineViewProps> = ({ items }) => {
  return (
    <div className={cn('container')}>
      <div className={cn('circle-container')}>
        {items.map((item, index) => {
          const angle = (index * (360 / items.length));

          return (
            <React.Fragment key={index}>
              <motion.div
                className={cn('node')}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${angle}deg) translateY(-200px) rotate(-${angle}deg)`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={item.image} alt={`Time ${item.time}`} className={cn('image')} />
                <div className={cn('time')}>{item.time}</div>
              </motion.div>

              <motion.div
                className={cn('line')}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: '0 0',
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineView;
