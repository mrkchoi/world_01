import React, { useEffect, useRef } from 'react';

const SPEED = 250;

function Equalizer({ isAudioOn }) {
  const equalizerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const bars = equalizerRef.current.querySelectorAll('.bar > span');
    const heightMultiplier = isAudioOn ? 100 : 20;
    intervalRef.current = setInterval(() => {
      bars.forEach((bar) => {
        const height =
          (Math.max(Math.random(), 0.2) * heightMultiplier).toFixed(2) + '%';
        bar.style.transform = `translate3d(0, -${height}, 0)`;
        bar.style.transitionDuration = `${SPEED}ms`;
      });
    }, SPEED + 50);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isAudioOn]);

  return (
    <div ref={equalizerRef} className="equalizer">
      <div className="bar">
        <span />
      </div>
      <div className="bar">
        <span />
      </div>
      <div className="bar">
        <span />
      </div>
      <div className="bar">
        <span />
      </div>
      <div className="bar">
        <span />
      </div>
      <div className="bar">
        <span />
      </div>
    </div>
  );
}

export default Equalizer;
