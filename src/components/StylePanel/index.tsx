import React from 'react';
import { createCn } from '@utils/cn';
import { AnimationStyle, LayoutStyle, styleCategories, StyleOption } from '@/configs/styleOptions';
import styles from './index.module.scss';

const cn = createCn(styles);

interface StylePanelProps {
  currentStyles: {
    layout: LayoutStyle;
    animation: AnimationStyle;
  };
  onStyleChange: (category: 'layout' | 'animation' | string, value: LayoutStyle | AnimationStyle | string) => void;
}

const StylePanel: React.FC<StylePanelProps> = ({ currentStyles, onStyleChange }) => {
  return (
    <div className={cn('container')}>
      {styleCategories.map(category => (
        <div key={category.key} className={cn('category')}>
          <h3 className={cn('title')}>{category.title}</h3>
          <div className={cn('options')}>
            {category.options.map(option => (
              <button
                key={option.value}
                className={cn('option', {
                  active: currentStyles[category.key as keyof typeof currentStyles] === option.value,
                  disabled: option.disabled
                })}
                onClick={() => !option.disabled && onStyleChange(category.key, option.value)}
                disabled={option.disabled}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StylePanel;
