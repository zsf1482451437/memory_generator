import React from 'react';
import data from '@assets/data.json';
import TimelineInput from '@components/TimelineInput';
import TimelineView from '@components/TimelineView';
// import AnimationPlayer from '@components/AnimationPlayer';
import '@styles/global.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="app-title">生成你的回忆</h1>
      <TimelineInput />
      <TimelineView items={data} />
      {/* <AnimationPlayer items={data} /> */}
    </div>
  );
};

export default App;
