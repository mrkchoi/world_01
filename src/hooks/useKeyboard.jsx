import { useEffect, useRef } from 'react';

function useKeyboard() {
  const keyMap = useRef({});

  useEffect(() => {
    const onKey = (e) => {
      keyMap.current[e.code] = e.type === 'keydown';
    };

    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('keyup', onKey);
    };
  }, []);

  return keyMap.current;
}

export default useKeyboard;
