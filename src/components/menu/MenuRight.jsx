import React from 'react';
import BackgroundAudio from '../BackgroundAudio';
import Menu from './Menu';

function MenuRight({ menuOpen, toggleMenu }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <BackgroundAudio />
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default MenuRight;
