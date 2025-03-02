import React from 'react';
import { motion } from 'framer-motion';
import { createCn } from '@/utils/cn';
import styles from './index.module.scss';

import CircleLayout from '@components/CircleLayout';

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
        <CircleLayout>
          {items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <motion.div
                  className={cn('node')}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img src={item.image} alt={`Time ${item.time}`} className={cn('image')} />
                  <div className={cn('time')}>{item.time}</div>
                </motion.div>

                {/* <motion.div
                  className={cn('line')}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',

                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                /> */}
              </React.Fragment>
            );
          })}
        </CircleLayout>

      </div>
    </div>
  );
};

export default TimelineView;
