import React, { useState } from 'react';
import Logo from './Logo';
import Menu from './menu/Menu';
import MenuMain from './menu/MenuMain';
import MenuRight from './menu/MenuRight';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((s) => !s);
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-10 flex w-full select-none items-center justify-between p-8 pl-12 pr-12">
        <div className="h-auto max-w-[4.5rem]">
          <a href="/">
            <Logo />
          </a>
        </div>
        {/* <Menu handleClick={handleClick} menuOpen={menuOpen} /> */}
        <MenuRight menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
      {/* <MenuMain toggleMenu={toggleMenu} menuOpen={menuOpen} /> */}
    </>
  );
}

export default Header;
