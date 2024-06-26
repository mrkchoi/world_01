import React, { useEffect, useMemo, useState } from 'react';

import audio01 from '/assets/audio/cartier.mp3';
// import audio01 from '/assets/audio/hennessy_court.ogg';
// import audio01 from '/assets/audio/ufl_ambient.mp3';

function BackgroundAudio() {
  const [isAudioOn, setIsAudioOn] = useState(false);
  // const [play, { stop }] = useSound(audio01, { loop: true });
  const audio = useMemo(() => new Audio(audio01), []);

  const handleAudio = () => {
    setIsAudioOn(!isAudioOn);
    if (isAudioOn) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden' && isAudioOn) {
      audio.pause();
    } else if (document.visibilityState === 'visible' && isAudioOn) {
      audio.play();
    }
  };

  useEffect(() => {
    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      audio.play();
    });

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      audio.pause();
      setIsAudioOn(false);
    };
  }, []);

  return (
    <div className="absolute bottom-0 right-0 select-none">
      <button className="relative p-8 pr-12 text-white" onClick={handleAudio}>
        <div className="relative">
          <div
            className={[
              'absolute left-0 top-[50%] h-[1px] w-full bg-white transition-opacity duration-200 ease-in-out',
              isAudioOn ? 'opacity-0' : 'opacity-100',
            ].join(' ')}
          ></div>
          <span className="text-xs uppercase text-gray-300">
            sound {isAudioOn ? ' on' : ' off'}
          </span>
        </div>
      </button>
    </div>
  );
}

export default BackgroundAudio;