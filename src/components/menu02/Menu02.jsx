import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS_DATA } from '../../data/projects';
import gsap from 'gsap';
import ProjectsOverviewItem from './ProjectsOverviewItem';
import { useGSAP } from '@gsap/react';
import ProjectsOverview from './ProjectsOverview';
import About from './About';
import { useStore } from '../../App';
import Logo from '../Logo';

import logoDefaultImg from '/assets/images/projects/00_logo.webp';

const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

let currentMouse = { x: 0, y: 0 };
let targetMouse = { x: 0, y: 0 };

const PAGES = {
  PROJECTS: 'projects',
  ABOUT: 'about',
};

function Menu02({ menuOpen }) {
  const main = useRef(null);
  const image = useRef(null);
  const setIsScrollLocked = useStore((state) => state.setIsScrollLocked);
  const lenis = useStore((state) => state.lenis);
  const isMenuOpen = useStore((state) => state.isMenuOpen);

  const [activeImg, setActiveImg] = useState(logoDefaultImg);
  const [imgOpacity, setImgOpacity] = useState(1);
  // const [activePage, setActivePage] = useState(PAGES.PROJECTS);
  const [offset, setOffset] = useState({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
  });

  // useEffect(() => {
  //   setIsScrollLocked(true);
  //   return () => setIsScrollLocked(false);
  // }, [setIsScrollLocked]);

  useGSAP(() => {
    if (isMenuOpen) {
      // console.log('menu open');
      setIsScrollLocked(true);
      gsap.to(main.current, {
        duration: 0.75,
        y: 0,
        // opacity: 1,
        delay: 0.25,
        ease: 'power3.inOut',
      });
    } else {
      // console.log('menu closed');
      setIsScrollLocked(false);
      gsap.to(main.current, {
        duration: 0.75,
        // opacity: 0,
        delay: 0.25,
        y: '-100%',
        ease: 'power3.inOut',
        onComplete: () => {
          main.current.scrollTo({ top: 0, behavior: 'smooth' });
        },
      });
    }
  }, [isMenuOpen, lenis, setIsScrollLocked]);

  // useEffect(() => {
  //   console.log('isMenuOpen', isMenuOpen);
  // }, [isMenuOpen]);

  // useGSAP(
  //   () => {
  //     const xTo = gsap.quickTo(image.current, 'x', { duration: 0.2 });
  //     const yTo = gsap.quickTo(image.current, 'y', { duration: 0.2 });

  //     const handleMouseMove = (e) => {
  //       const translateValueX =
  //         e.clientX - image.current.getBoundingClientRect().width / 2;
  //       const translateValueY =
  //         e.clientY - image.current.getBoundingClientRect().height / 2;

  //       xTo(translateValueX);
  //       yTo(translateValueY);

  //       // use current mouse position and target mouse position to lerp mouse position for use in shader material uniform
  //       targetMouse.x = e.clientX;
  //       targetMouse.y = e.clientY;
  //     };

  //     window.addEventListener('mousemove', handleMouseMove);
  //     return () => window.removeEventListener('mousemove', handleMouseMove);
  //   },
  //   {
  //     scope: main.current,
  //   }
  // );

  const handleMouseEnter = (e) => {
    gsap.to(image.current, { duration: 0.2, opacity: 1 });
  };

  const handleMouseLeave = (e) => {
    // gsap.to(image.current, { duration: 0.2, opacity: 0 });
    setActiveImg(logoDefaultImg);
  };

  return (
    <div
      ref={main}
      className="fixed bottom-0 top-0 z-[1] flex min-h-screen w-full flex-col items-center justify-start overflow-y-auto bg-[rgb(240,240,240)]"
      data-lenis-prevent={true}
    >
      <div className="relative p-12 pt-[136px]">
        <div className="mb-8 w-full">
          <div>
            <span className="mb-4 block text-8xl font-medium uppercase">
              Contact.
            </span>
          </div>

          <div className="grid w-full grid-cols-12 text-xl">
            <div className="col-span-4">
              <span className="contact__text">
                We're in business to develop our culture, our community and its
                potential. Believing that the youth needs all the energy
                possible to shape a better tomorrow. And we aim to use the
                resources we have—our investments, our voice and our
                creativity—to frame and supercharge that energy.
              </span>
            </div>
            <div className="col-span-2 col-start-8 flex flex-col">
              <span className="contact__links relative block">
                San Francisco, CA
              </span>
              <div>
                <a
                  href="mailto:kennethichoi@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__links"
                >
                  kennethichoi@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="tel:14082393088"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__links"
                >
                  +1 (408) 239-3088
                </a>
              </div>
            </div>
            <div className="col-span-2 col-start-11 flex flex-col items-start">
              <div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__links"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__links"
                >
                  Github
                </a>
              </div>
              <div>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__links"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-8">
          <div>
            <span className="mb-4 block text-8xl font-medium uppercase">
              Projects.
            </span>
          </div>
          <ProjectsOverview />
        </div>
      </div>
    </div>
  );
}

export default Menu02;
