import { Canvas } from '@react-three/fiber';
import './App.css';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import Experience from './components/Experience';
import BackgroundAudio from './components/BackgroundAudio';
import * as THREE from 'three';
import Lenis from 'lenis';

// import audio01 from '/assets/audio/cartier.mp3';
// import audio01 from '/assets/audio/hennessy_court.ogg';
// import audio01 from '/assets/audio/ufl_ambient.mp3';

import Instructions from './components/Instructions';
import {
  EffectComposer,
  GodRays,
  N8AO,
  ToneMapping,
  Vignette,
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { useControls } from 'leva';
import Header from './components/Header';
import { PerformanceMonitor, ScrollControls } from '@react-three/drei';
import Cursor from './components/Cursor';
import Title from './components/Title';
import ProjectTitle from './components/projects/ProjectTitle';
import ProjectTitles from './components/projects/ProjectTitles';
import Projects from './components/projects/Projects';
import { create } from 'zustand';
import { toneMappingExposure } from 'three/examples/jsm/nodes/display/ToneMappingNode.js';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import LoaderCustom from './components/loader/LoaderCustom';
import EndingOverlay from './components/endingOverlay/EndingOverlay';
import ProjectsOverview from './components/overview/ProjectsOverview';
import Menu02 from './components/menu02/Menu02';

// const PERSPECTIVE = 800;
// const FOV =
//   (180 * (2 * Math.atan(window.innerHeight / 2 / PERSPECTIVE))) / Math.PI;

export const useStore = create((set) => ({
  animationsMap: new Map(),
  addAnimation: (key, value) =>
    set((state) => ({ animationsMap: state.animationsMap.set(key, value) })),
  mixer: new THREE.AnimationMixer(),
  orbitControls: null,
  setOrbitControls: (value) => set(() => ({ orbitControls: value })),
  scrollProgress: 0,
  setScrollProgress: (value) => set(() => ({ scrollProgress: value })),
  activeProject: null,
  setActiveProject: (value) => set(() => ({ activeProject: value })),
  activeCursor: false,
  setActiveCursor: (value) => set(() => ({ activeCursor: value })),
  loadingManager: null,
  setLoadingManager: (value) => set(() => ({ loadingManager: value })),
  totalAssets: 55,
  isLoaded: true,
  setIsLoaded: (value) => set(() => ({ isLoaded: value })),
  isAtEnd: false,
  setIsAtEnd: (value) => set(() => ({ isAtEnd: value })),
  isScrollLocked: false,
  setIsScrollLocked: (value) => set(() => ({ isScrollLocked: value })),
  isOverviewShown: false,
  setIsOverviewShown: (value) => set(() => ({ isOverviewShown: value })),
  isMenuOpen: true,
  setIsMenuOpen: (value) => set(() => ({ isMenuOpen: value })),
  lenis: null,
  setLenis: (value) => set(() => ({ lenis: value })),
}));

// const TOTAL_ASSETS = 55;

const TONE_MAPPING = {
  toneMappingType: THREE.ReinhardToneMapping,
  toneMappingExposure: 1.5,
};

function App() {
  const isLoaded = useStore((state) => state.isLoaded);
  const isScrollLocked = useStore((state) => state.isScrollLocked);
  const isOverviewShown = useStore((state) => state.isOverviewShown);
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const setLenis = useStore((state) => state.setLenis);

  const lenis = useRef(null);
  // const { toneMappingExposure, toneMappingType } = useControls(
  //   'Tone Mapping',
  //   {
  //     toneMappingExposure: {
  //       value: 1.5,
  //       min: 0,
  //       max: 10,
  //     },
  //     toneMappingType: {
  //       // value: THREE.NoToneMapping,
  //       value: THREE.ReinhardToneMapping,
  //       options: [
  //         THREE.NoToneMapping,
  //         THREE.LinearToneMapping,
  //         THREE.ReinhardToneMapping,
  //         THREE.CineonToneMapping,
  //         THREE.ACESFilmicToneMapping,
  //       ],
  //     },
  //   },
  //   {
  //     collapsed: true,
  //   }
  // );

  useEffect(() => {
    lenis.current = new Lenis({
      // lerp: 0.075,
      // duration: 2,
      // wheelMultiplier: 0.5,
    });
    setLenis(lenis.current);

    function raf(time) {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.current.destroy();
    };
  }, [setLenis]);

  useEffect(() => {
    if (isScrollLocked || !isLoaded || isMenuOpen) {
      console.log('lenis stopped');
      lenis.current.stop();
    } else {
      // console.log('isScrollLocked', isScrollLocked);
      // console.log('isLoaded', isLoaded);
      console.log('lenis started');
      lenis.current.start();
    }
  }, [isLoaded, isMenuOpen, isScrollLocked]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  // useEffect(() => {
  //   // const loadingManager = new THREE.LoadingManager();
  //   // useStore.setState({ setLoadingManager: loadingManager });

  //   THREE.DefaultLoadingManager.onStart = function (
  //     url,
  //     itemsLoaded,
  //     itemsTotal
  //   ) {
  //     console.log(
  //       'Started loading file: ' +
  //         url +
  //         '.\nLoaded ' +
  //         itemsLoaded +
  //         ' of ' +
  //         itemsTotal +
  //         ' files.'
  //     );
  //   };

  //   THREE.DefaultLoadingManager.onLoad = function () {
  //     console.log('Loading Complete!');
  //   };

  //   THREE.DefaultLoadingManager.onProgress = function (
  //     url,
  //     itemsLoaded,
  //     itemsTotal
  //   ) {
  //     console.log(
  //       'Loading file: ' +
  //         url +
  //         '.\nLoaded ' +
  //         itemsLoaded +
  //         ' of ' +
  //         itemsTotal +
  //         ' files.'
  //     );
  //   };

  //   THREE.DefaultLoadingManager.onError = function (url) {
  //     console.log('There was an error loading ' + url);
  //   };
  // }, []);

  const [dpr, setDpr] = useState(1);

  return (
    <>
      {/* {!isLoaded && <LoaderCustom />} */}
      <div className="fixed left-0 top-0 h-screen w-full">
        <Canvas
          shadows
          // flat
          // linear
          gl={{
            // gammaFactor: 3.2,
            // outputEncoding: THREE.sRGBEncoding,
            toneMapping: TONE_MAPPING.toneMappingType,
            toneMappingExposure: TONE_MAPPING.toneMappingExposure,
          }}
          dpr={dpr}
        >
          <PerformanceMonitor
            onIncline={() => setDpr(2)}
            onDecline={() => setDpr(1)}
          />
          {/* <EffectComposer multisampling={0} disableRenderPass>
            <Vignette
              eskil={false}
              offset={0.05}
              darkness={0.7}
              blendFunction={BlendFunction.NORMAL}
            />
          </EffectComposer> */}
          <Suspense fallback={null}>
            {/* <ScrollControls pages={12}> */}
            <Experience />
            {/* </ScrollControls> */}
          </Suspense>
        </Canvas>
        {/* <Loader /> */}
      </div>
      <div>
        <Header />
        {/* <Instructions /> */}
        {/* <Title /> */}
        <Projects />
        <EndingOverlay />
        <Menu02 />
        <Cursor />
      </div>
      <div className="main pointer-events-none relative z-[9] h-[2000vh] w-full">
        <div className="h-[2000vh] w-full"></div>
        {/* <Footer /> */}
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
