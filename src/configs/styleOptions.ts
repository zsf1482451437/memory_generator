export type LayoutStyle = 'circle' | 'linear' | 'curve' | 'developing';
export type AnimationStyle = 'fade' | 'scale' | 'slide' | 'developing';

export interface StyleOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface StyleCategory {
  key: string;
  title: string;
  options: StyleOption[];
}

export const styleCategories: StyleCategory[] = [
  {
    key: 'layout',
    title: '轨迹风格',
    options: [
      { value: 'circle', label: '圆形' },
      { value: 'linear', label: '线性' },
      { value: 'curve', label: '曲线', disabled: true },
      { value: 'developing', label: '敬请期待', disabled: true }
    ]
  },
  {
    key: 'animation',
    title: '动画风格',
    options: [
      { value: 'fade', label: '淡入淡出' },
      { value: 'scale', label: '缩放' },
      { value: 'slide', label: '滑动' },
      { value: 'developing', label: '敬请期待', disabled: true }
    ]
  }
];
