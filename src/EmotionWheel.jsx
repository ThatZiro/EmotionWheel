import React, { useEffect, useRef } from 'react';
// import './EmotionWheel.css';
import InnerButtons from './EmotionWheel/InnerButtons';
import MiddleButtons from './EmotionWheel/MiddleButtons';
import OuterButtons from './EmotionWheel/OuterButtons';

const EmotionWheel = () => {
  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
        }}>
        <InnerButtons />
        <MiddleButtons />
        <OuterButtons />
      </div>
    </>
  );
};

export default EmotionWheel;
