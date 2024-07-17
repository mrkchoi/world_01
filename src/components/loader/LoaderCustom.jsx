import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '../../App';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Logo from '../Logo';
import { loadJSON } from '../../util/curveTools/JSONHelper';

const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

function LoaderCustom() {
  const loader = useRef(null);
  const container = useRef(null);
  const progressNumber = useRef(null);
  const logo = useRef(null);
  const progressBarWrapper01 = useRef(null);
  const progressBar01 = useRef(null);
  const progressBar02 = useRef(null);
  const progressBar03 = useRef(null);
  const progressBar04 = useRef(null);
  const totalAssets = useStore((state) => state.totalAssets);
  const setIsLoaded = useStore((state) => state.setIsLoaded);
  const setIsScrollLocked = useStore((state) => state.setIsScrollLocked);
  const [loadedAssets, setLoadedAssets] = useState(0);
  const currentAssets = useRef(0);
  const [maxAssets, setMaxAssets] = useState(totalAssets);

  useEffect(() => {
    // THREE.DefaultLoadingManager.onStart = function (
    //   url,
    //   itemsLoaded,
    //   itemsTotal
    // ) {
    //   console.log(
    //     'Started loading file: ' +
    //       url +
    //       '.\nLoaded ' +
    //       itemsLoaded +
    //       ' of ' +
    //       itemsTotal +
    //       ' files.'
    //   );
    // };

    // THREE.DefaultLoadingManager.onLoad = function () {
    //   console.log('Loading Complete!');
    // };

    THREE.DefaultLoadingManager.onProgress = function (
      url,
      itemsLoaded,
      itemsTotal
    ) {
      currentAssets.current = itemsLoaded;
      setMaxAssets(Math.max(itemsTotal, maxAssets));
      // setLoadedAssets(itemsLoaded);
      // console.log(
      //   'Loading file: ' +
      //     url +
      //     '.\nLoaded ' +
      //     itemsLoaded +
      //     ' of ' +
      //     itemsTotal +
      //     ' files.'
      // );
    };

    // THREE.DefaultLoadingManager.onError = function (url) {
    //   console.log('There was an error loading ' + url);
    // };
  }, []);

  // useEffect(() => {
  //   setIsScrollLocked(true);
  // }, [setIsScrollLocked]);

  // const [isExitTransitionStart, setIsExitTransitionStart] = useState(false);
  const [isAssetLoaded, setIsAssetLoaded] = useState(false);
  const button = useRef(null);

  useGSAP(() => {
    // if (isAssetLoaded) return;
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });

    if (loadedAssets >= totalAssets || currentAssets.current >= totalAssets) {
      // setIsAssetLoaded(true);
      tl.to(progressBarWrapper01.current, {
        opacity: 0,
        duration: 0.25,
        delay: 0.25,
      });
      tl.to(button.current, {
        opacity: 1,
        duration: 0,
      });
    }
  }, [loadedAssets, maxAssets]);

  const handleClick = () => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });

    // setIsExitTransitionStart(true);
    tl.to(button.current, {
      opacity: 0,
      duration: 0,
    });
    tl.to(
      logo.current,
      {
        duration: 1.25,
        scale: 200,
        // opacity: 0,
      },
      '<'
    );
    tl.to(
      loader.current,
      {
        duration: 0.85,
        opacity: 0,
        delay: 0,
        onComplete: () => {
          loader.current.style.display = 'none';
          loader.current.style.visibility = 'hidden';
          loader.current.style.pointerEvents = 'none';
          setIsLoaded(true);
          setIsScrollLocked(false);
        },
      },
      '<'
    );
  };

  useGSAP(() => {
    gsap.to([progressBar01.current], {
      scaleX: Math.min(loadedAssets / maxAssets, 1),
    });
    // gsap.to([progressBar01.current, progressBar02.current], {
    //   scaleX: Math.min(loadedAssets / maxAssets, 1),
    //   duration: 0,
    //   ease: 'none',
    // });
    // gsap.to([progressBar03.current, progressBar04.current], {
    //   scaleY: Math.min(loadedAssets / maxAssets, 1),
    //   duration: 0,
    //   ease: 'none',
    // });
  }, [loadedAssets, maxAssets]);

  const logoInner = useRef(null);

  useGSAP(() => {
    gsap.to([logoInner.current, progressBarWrapper01.current], {
      // y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power3.inOut',
    });
  }, []);

  useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);

      setLoadedAssets((prev) => lerp(prev, currentAssets.current, 0.1));
    };

    const raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={loader}
      className="loaderMain fixed z-[999] flex h-screen w-full flex-col items-center justify-center text-gray-400"
    >
      {/* <span className="text-[30vw] font-bold"> */}
      <div
        ref={container}
        className="relative flex w-[250px] flex-col items-center justify-center"
      >
        <div ref={logo} className="relative overflow-hidden">
          <div ref={logoInner} className="opacity-0 will-change-transform">
            <Logo />
          </div>
        </div>
        <div className="relative w-full">
          <div
            ref={progressBarWrapper01}
            className="relative top-[-10px] h-[12px] w-full rounded-full border-[1.5px] border-black bg-white opacity-0"
          >
            <div
              ref={progressBar01}
              className="progressBar h-full origin-left scale-x-0 bg-black will-change-transform"
            ></div>
          </div>
          <div className="relative top-[-40px] w-full">
            <button
              ref={button}
              className="loaderBtn w-full rounded-full p-[.85rem] pl-12 pr-12 text-[rgb(240,240,240)] opacity-0 shadow-md"
              onClick={handleClick}
            >
              <span className="loaderBtn__textWrapper">
                <span className="loaderBtn__text--primary">
                  Enter experience
                </span>
                <span className="loaderBtn__text--secondary">
                  Enter experience
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-0 h-[10px] w-full">
        <div
          ref={progressBar01}
          className="h-full origin-right scale-x-0 bg-gray-400 will-change-transform"
        ></div>
      </div>
      <div className="absolute bottom-0 h-[10px] w-full">
        <div
          ref={progressBar02}
          className="h-full origin-left scale-x-0 bg-gray-400 will-change-transform"
        ></div>
      </div>
      <div className="absolute left-0 h-full w-[10px]">
        <div
          ref={progressBar03}
          className="h-full w-full origin-top scale-y-0 bg-gray-400 will-change-transform"
        ></div>
      </div>
      <div className="absolute right-0 h-full w-[10px]">
        <div
          ref={progressBar04}
          className="h-full w-full origin-bottom scale-y-0 bg-gray-400 will-change-transform"
        ></div>
      </div> */}
    </div>
  );
}

// <span
//   ref={progressNumber}
//   className="mb-2 text-center text-[2.5vh] font-bold leading-none will-change-transform"
// >
//   {/* <span className="absolute bottom-12 right-12 text-[5vw] font-bold leading-none tracking-tighter"> */}
//   {Math.round(Math.min(loadedAssets / totalAssets, 1) * 100)}
// </span>;

export default LoaderCustom;
