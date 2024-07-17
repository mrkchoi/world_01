import React, { useEffect, useMemo, useState } from 'react';

// import audio01 from '/assets/audio/cartier.mp3';
import audio01 from '/assets/audio/dior02.mp3';
import Equalizer from './Equalizer';
// import audio01 from '/assets/audio/hennessy_court.ogg';
// import audio01 from '/assets/audio/ufl_ambient.mp3';

function BackgroundAudio() {
  const [initialAudio, setInitialAudio] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);
  // const [play, { stop }] = useSound(audio01, { loop: true });
  const audio = useMemo(() => new Audio(audio01), []);

  const handleAudio = () => {
    // console.log('clicked');
    setIsAudioOn((s) => !s);
    if (isAudioOn) {
      audio.pause();
    } else {
      audio.play();
    }
    // console.log('audio.paused', audio.paused);
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

  // useEffect(() => {
  //   console.log('audio.paused', audio.paused);
  // }, []);
  // useEffect(() => {
  //   const handleClick = () => {
  //     if (initialAudio) return;
  //     setInitialAudio(true);
  //     setIsAudioOn(true);
  //     audio.play();
  //   };

  //   document.addEventListener('click', handleClick);

  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //   };
  // }, []);

  return (
    <div className="select-none">
      <button
        className={[
          'audioButton relative flex items-center justify-center rounded-full p-2 pr-2 text-black shadow-md',
          isAudioOn ? 'active' : 'bg-black',
        ].join(' ')}
        onClick={handleAudio}
      >
        <Equalizer isAudioOn={isAudioOn} />
      </button>
    </div>
  );
}

export default BackgroundAudio;
