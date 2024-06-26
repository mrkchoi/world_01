import React from 'react';
import Logo from './Logo';

function Header() {
  return (
    <div className="fixed left-0 top-0 z-10 w-full select-none p-4 pl-8 pr-8">
      <div className="h-auto max-w-[4rem]">
        <Logo />
      </div>
    </div>
  );
}

export default Header;
