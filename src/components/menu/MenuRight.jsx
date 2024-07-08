import React from 'react';
import BackgroundAudio from '../BackgroundAudio';
import Menu from './Menu';

function MenuRight({ menuOpen, handleClick }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <BackgroundAudio />
      <Menu menuOpen={menuOpen} handleClick={handleClick} />
    </div>
  );
}

export default MenuRight;
