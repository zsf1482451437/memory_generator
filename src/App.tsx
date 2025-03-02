import React, { useState } from 'react';
import TimelineInput from '@components/TimelineInput';
import TimelineView from '@components/TimelineView';
import { ImageProvider } from '@contexts/ImageContext';
import StylePanel from '@components/StylePanel';
import { LayoutStyle, AnimationStyle } from '@/configs/styleOptions';
import '@styles/global.scss';

const App: React.FC = () => {
  const [styles, setStyles] = useState<{
    layout: LayoutStyle;
    animation: AnimationStyle;
  }>({
    layout: 'circle',
    animation: 'fade'
  });

  const handleStyleChange = (category: string, value: string) => {
    setStyles(prev => ({
      ...prev,
      [category]: value
    }));
  };

  return (
    <ImageProvider>
      <div className="app">
        <h1 className="app-title">生成你的回忆</h1>
        <TimelineInput />
        <TimelineView
          key={`${styles.layout}-${styles.animation}`}
          layoutStyle={styles.layout}
          animationStyle={styles.animation}
        />
        <StylePanel
          currentStyles={styles}
          onStyleChange={handleStyleChange}
        />
      </div>
    </ImageProvider>
  );
};

export default App;
