import React, { useState } from 'react';
import MenuMain from './MenuMain';
import Menu02 from '../menu02/Menu02';
import { useStore } from '../../App';

function Menu() {
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const setIsMenuOpen = useStore((state) => state.setIsMenuOpen);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="relative h-auto">
        <button
          onClick={toggleMenu}
          className={[
            'menuBtn menuText__btn flex min-w-[90px] items-center justify-center rounded-full p-[.85rem] pl-5 pr-5 shadow-md',
            isMenuOpen ? 'active' : '',
          ].join(' ')}
        >
          <span className="menuBtn__textWrapper">
            <span className="menuBtn__text--primary text-sm font-semibold uppercase">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
            <span className="menuBtn__text--secondary text-sm font-semibold uppercase">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </span>
        </button>
        {/* <MenuMain toggleMenu={toggleMenu} menuOpen={menuOpen} /> */}
      </div>
      {/* <Menu02 menuOpen={menuOpen} /> */}
    </>
  );
}

export default Menu;
