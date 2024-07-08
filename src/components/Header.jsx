import React, { useState } from 'react';
import Logo from './Logo';
import Menu from './menu/Menu';
import MenuMain from './menu/MenuMain';
import MenuRight from './menu/MenuRight';

function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleClick = () => {
    setMenuOpen((s) => !s);
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-10 flex w-full select-none items-center justify-between p-4 pl-8 pr-8">
        <Logo />
        {/* <Menu handleClick={handleClick} menuOpen={menuOpen} /> */}
        <MenuRight menuOpen={menuOpen} handleClick={handleClick} />
      </div>
      {/* <MenuMain handleClick={handleClick} menuOpen={menuOpen} /> */}
    </>
  );
}

export default Header;
