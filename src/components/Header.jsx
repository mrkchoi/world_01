import React, { useState } from 'react';
import Logo from './Logo';
import Menu from './menu/Menu';
import MenuMain from './menu/MenuMain';
import MenuRight from './menu/MenuRight';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((s) => !s);
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-10 flex w-full select-none items-center justify-between p-8 pl-12 pr-12">
        <Logo />
        {/* <Menu handleClick={handleClick} menuOpen={menuOpen} /> */}
        <MenuRight menuOpen={menuOpen} handleClick={handleClick} />
      </div>
      {/* <MenuMain handleClick={handleClick} menuOpen={menuOpen} /> */}
    </>
  );
}

export default Header;
