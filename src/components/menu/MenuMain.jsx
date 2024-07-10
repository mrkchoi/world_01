import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function MenuMain({ handleClick, menuOpen }) {
  const menuRef = useRef(null);
  const items01 = useRef(null);
  const items02 = useRef(null);
  const items03 = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      menuRef.current.classList.add('menu__open');
    } else {
      menuRef.current.classList.remove('menu__open');
    }
    console.log(menuOpen);
  }, [menuOpen]);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power4.inOut' },
    });

    if (menuOpen) {
      tl.to(menuRef.current, {
        x: 0,
        // y: 0,
        // rotate: 0,
        opacity: 1,
        pointerEvents: 'auto',
        ease: 'power4.inOut',
      });
      tl.to(
        [items01.current, items02.current],
        {
          opacity: 1,
          y: 0,
          stagger: 0.025,
        },
        '-=0.8'
      );
    } else {
      tl.to([items01.current, items02.current], {
        opacity: 0,
        y: 25,
        stagger: -0.05,
      });
      tl.to(
        menuRef.current,
        {
          x: '100%',
          // y: '5%',
          opacity: 0,
          pointerEvents: 'none',
          // rotate: 2,
          ease: 'power4.inOut',
        },
        '<'
      );
    }
  }, [menuOpen]);

  const handleClickAbout = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      ref={menuRef}
      className="pointer-events-none absolute right-0 top-[4rem] z-50 w-[450px] translate-x-[100%] rounded-2xl bg-white p-4 pb-12 pt-12 opacity-0 shadow-lg will-change-transform"
      // className="absolute right-0 top-[4rem] z-50 w-[450px] rounded-2xl bg-white p-4 pb-12 pt-12 shadow-lg will-change-transform"
    >
      <div ref={items01} className="mb-8">
        <ul className="flex flex-col">
          <li>
            <button className="menuText__btn relative flex w-full items-center justify-between rounded-full p-2 pl-5 pr-5 text-left text-3xl font-medium uppercase">
              <span className="menuText__wrapper">
                <span className="menuText__main">overview</span>
                <span className="menuText__secondary">overview</span>
              </span>
              <span className="menuText__iconWrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="menuText__icon menuText__icon--primary"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="menuText__icon menuText__icon--secondary"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li>
            <button
              className="menuText__btn flex w-full items-center justify-between rounded-full p-2 pl-5 pr-5 text-left text-3xl font-medium uppercase"
              onClick={handleClickAbout}
            >
              <span className="menuText__wrapper">
                <span className="menuText__main">about</span>
                <span className="menuText__secondary">about</span>
              </span>
              <span className="menuText__iconWrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="menuText__icon menuText__icon--primary"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="menuText__icon menuText__icon--secondary"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </div>

      <div
        ref={items02}
        className="menuGroup__secondary flex items-end justify-between"
      >
        <ul className="text-md flex flex-col">
          <li>
            <a
              href="mailto:kennethichoi@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="block pl-5 pr-5"
            >
              <span>kennethichoi@gmail.com</span>
            </a>
          </li>
          <li>
            <a
              href="tel:4082393088"
              target="_blank"
              rel="noreferrer"
              className="block pl-5 pr-5"
            >
              <span>+1 (408) 239-3088</span>
            </a>
          </li>
        </ul>
        <ul className="mr-5 flex flex-col">
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="block text-sm uppercase"
            >
              <span>linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="block text-sm uppercase"
            >
              <span>github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="block text-sm uppercase"
            >
              <span>resume</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <div ref={items03} className="flex"></div> */}
    </div>
  );
}

export default MenuMain;
