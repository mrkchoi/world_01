import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useStore } from '../../App';

function ScrollToTop() {
  const button = useRef(null);
  const { scrollProgress } = useStore();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (scrollProgress <= 0.03) {
      gsap.to(button.current, {
        opacity: 0,
        y: '200%',
        duration: 0.5,
      });
    } else {
      gsap.to(button.current, {
        opacity: 1,
        y: '0%',
        duration: 0.5,
      });
    }
  }, [scrollProgress]);

  return (
    <div ref={button} className="fixed bottom-12 right-12 z-10">
      <button
        className="scrollBtn__btn flex h-[48px] w-[48px] items-center justify-center rounded-full bg-black text-white"
        onClick={handleScrollToTop}
      >
        <div className="scrollBtn__wrapper">
          <span className="scrollBtn__main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="stroke-white stroke-1"
            >
              <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
              />
            </svg>
          </span>
          <span className="scrollBtn__secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="stroke-white stroke-1"
            >
              <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
              />
            </svg>
          </span>
        </div>
      </button>
    </div>
  );
}

export default ScrollToTop;
