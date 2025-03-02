import React from 'react';
import { motion } from 'framer-motion';
import { createCn } from '@/utils/cn';
import { useImages } from '@contexts/ImageContext';
import CircleLayout from '@components/CircleLayout';
import LinearLayout from '@components/LinearLayout';
import CurveLayout from '@components/CurveLayout';
import DeleteIcon from './DeleteIcon';
import { AnimationStyle } from '@/configs/styleOptions';
import styles from './index.module.scss';

const cn = createCn(styles);

interface TimelineViewProps {
  layoutStyle: string;
  animationStyle: AnimationStyle;
}

const TimelineView: React.FC<TimelineViewProps> = ({ layoutStyle, animationStyle }) => {
  const { images, removeImage } = useImages();

  const handleDelete = (id: string) => {
    removeImage(id);
  };

  const getAnimationProps = () => {
    const baseProps = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 }
    };

    switch (animationStyle) {
      case 'fade':
        return baseProps;
      case 'scale':
        return {
          ...baseProps,
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 1 }
        };
      case 'slide':
        return {
          ...baseProps,
          initial: { x: -50, opacity: 0 },
          animate: { x: 0, opacity: 1 }
        };
      default:
        return baseProps;
    }
  };

  const renderNodes = () => {
    return images.map((item, index) => (
      <React.Fragment key={item.id}>
        <motion.div
          className={cn('node', { linear: layoutStyle === 'linear' })}
          {...getAnimationProps()}
          transition={{
            ...getAnimationProps().transition,
            delay: index * 0.2
          }}
        >
          <img src={item.url} alt={`Time ${item.time}`} className={cn('image')} />
          <div className={cn('overlay')}>
            <div className={cn('delete-button')} onClick={() => handleDelete(item.id)}>
              <DeleteIcon />
            </div>
          </div>
        </motion.div>
      </React.Fragment>
    ));
  };

  const renderLayout = () => {
    const nodes = renderNodes();
    switch (layoutStyle) {
      case 'circle':
        return <CircleLayout key={`circle-${images.length}`}>{nodes}</CircleLayout>;
      case 'linear':
        return <LinearLayout key={`linear-${images.length}`}>{nodes}</LinearLayout>;
      case 'curve':
        return <CurveLayout key={`curve-${images.length}`}>{nodes}</CurveLayout>;
      default:
        return <LinearLayout key={`linear-${images.length}`}>{nodes}</LinearLayout>;
    }
  };

  return (
    <div className={cn('container')}>
      <div className={cn('layout-container', layoutStyle)}>
        {renderLayout()}
      </div>
    </div>
  );
};

export default TimelineView;
