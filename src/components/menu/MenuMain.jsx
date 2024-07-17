import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useStore } from '../../App';

function MenuMain({ toggleMenu, menuOpen }) {
  const menuRef = useRef(null);
  const items01 = useRef(null);
  const items02 = useRef(null);
  const items03 = useRef(null);
  const isOverviewShown = useStore((state) => state.isOverviewShown);
  const setIsOverviewShown = useStore((state) => state.setIsOverviewShown);

  useEffect(() => {
    if (menuOpen) {
      menuRef.current.classList.add('menu__open');
    } else {
      menuRef.current.classList.remove('menu__open');
    }
    // console.log(menuOpen);
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
      });
      tl.to(
        [buttonText01.current, buttonText02.current],
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          // stagger: 0.025,
        },
        '-=0.75'
      );
      tl.to(
        [buttonText03.current, buttonText04.current],
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          // stagger: 0.025,
        },
        '<'
      );
      tl.to(
        [buttonText05.current, buttonText06.current, buttonText07.current],
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          // stagger: 0.025,
        },
        '<'
      );
    } else {
      tl.to(
        [
          buttonText01.current,
          buttonText02.current,
          buttonText03.current,
          buttonText04.current,
          buttonText05.current,
          buttonText06.current,
          buttonText07.current,
        ],
        {
          y: '125%',
          opacity: 0,
        }
      );
      tl.to(
        menuRef.current,
        {
          x: '100%',
          // y: '5%',
          opacity: 0,
          pointerEvents: 'none',
          // rotate: 2,
        },
        '<'
      );
    }
  }, [menuOpen]);

  const handleClickHome = () => {
    toggleMenu();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleClickAbout = () => {
    toggleMenu();
    // window.scrollTo({
    //   top: document.body.scrollHeight,
    //   left: 0,
    //   behavior: 'smooth',
    // });
  };
  const handleClickProjects = () => {
    if (isOverviewShown) {
      setIsOverviewShown(false);
    } else {
      setIsOverviewShown(true);
    }
    toggleMenu();
  };

  const buttonText01 = useRef(null);
  const buttonText02 = useRef(null);
  const buttonText03 = useRef(null);
  const buttonText04 = useRef(null);
  const buttonText05 = useRef(null);
  const buttonText06 = useRef(null);
  const buttonText07 = useRef(null);

  return (
    <div
      ref={menuRef}
      className="pointer-events-none absolute right-0 top-[4rem] z-50 w-[450px] translate-x-[100%] rounded-2xl bg-white p-4 pb-12 pt-12 opacity-0 shadow-lg will-change-transform"
      // className="absolute right-0 top-[4rem] z-50 w-[450px] rounded-2xl bg-white p-4 pb-12 pt-12 shadow-lg will-change-transform"
    >
      <div ref={items01} className="mb-8">
        <ul className="flex flex-col">
          <li>
            <button
              className="menuText__btn relative w-full overflow-hidden rounded-full p-2 pl-5 pr-5 text-left text-3xl font-medium lowercase"
              onClick={handleClickProjects}
            >
              <div
                ref={buttonText01}
                className="flex w-full items-center justify-between"
              >
                <span className="menuText__wrapper">
                  <span className="menuText__main">projects</span>
                  <span className="menuText__secondary">projects</span>
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
              </div>
            </button>
          </li>
          <li>
            <button
              className="menuText__btn w-full overflow-hidden rounded-full p-2 pl-5 pr-5 text-left text-3xl font-medium lowercase"
              onClick={handleClickAbout}
            >
              <div
                ref={buttonText02}
                className="flex w-full items-center justify-between"
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
              </div>
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
            <div className="relative overflow-hidden pl-5 pr-5">
              <div ref={buttonText03}>
                <a
                  href="mailto:kennethichoi@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="menu__btn--underline"
                >
                  <span>kennethichoi@gmail.com</span>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="relative overflow-hidden pl-5 pr-5">
              <div ref={buttonText04}>
                <a
                  href="tel:4082393088"
                  target="_blank"
                  rel="noreferrer"
                  className="menu__btn--underline"
                >
                  <span>+1 (408) 239-3088</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
        <ul className="mr-5 flex flex-col">
          <li>
            <div className="relative overflow-hidden pl-5 pr-5">
              <div ref={buttonText05}>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="menu__btn--underline text-sm lowercase"
                >
                  <span>linkedin</span>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="relative overflow-hidden pl-5 pr-5">
              <div ref={buttonText06}>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="menu__btn--underline text-sm lowercase"
                >
                  <span>github</span>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="relative overflow-hidden pl-5 pr-5">
              <div ref={buttonText07}>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="menu__btn--underline text-sm lowercase"
                >
                  <span>resume</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* <div ref={items03} className="flex"></div> */}
    </div>
  );
}

export default MenuMain;
