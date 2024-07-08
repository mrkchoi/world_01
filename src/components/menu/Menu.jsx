import React, { useState } from 'react';
import MenuMain from './MenuMain';

function Menu({ menuOpen, handleClick }) {
  return (
    <>
      <div className="relative h-auto">
        <button
          onClick={handleClick}
          className={[
            'menuBtn menuText__btn flex min-w-[90px] items-center justify-center rounded-full p-[.85rem] pl-5 pr-5 shadow-md',
            menuOpen ? 'active' : '',
          ].join(' ')}
        >
          <span className="menuBtn__textWrapper">
            <span className="menuBtn__text--primary text-sm font-semibold uppercase">
              {menuOpen ? 'close' : 'menu'}
            </span>
            <span className="menuBtn__text--secondary text-sm font-semibold uppercase">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </span>
        </button>
        <MenuMain handleClick={handleClick} menuOpen={menuOpen} />
      </div>
    </>
  );
}

export default Menu;
