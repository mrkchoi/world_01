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
import { Loader, ScrollControls } from '@react-three/drei';
import Cursor from './components/Cursor';
import Title from './components/Title';

function App() {
  const lenis = useRef(null);
  const { toneMappingExposure, toneMappingType } = useControls(
    'Tone Mapping',
    {
      toneMappingExposure: {
        value: 1.5,
        min: 0,
        max: 10,
      },
      toneMappingType: {
        // value: THREE.NoToneMapping,
        value: THREE.ReinhardToneMapping,
        options: [
          THREE.NoToneMapping,
          THREE.LinearToneMapping,
          THREE.ReinhardToneMapping,
          THREE.CineonToneMapping,
          THREE.ACESFilmicToneMapping,
        ],
      },
    },
    {
      collapsed: true,
    }
  );

  useEffect(() => {
    lenis.current = new Lenis({
      // lerp: 0.075,
      // duration: 2,
      // wheelMultiplier: 0.5,
    });

    function raf(time) {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.current.destroy();
    };
  }, []);

  return (
    <div className="main h-[2000vh] w-full">
      <div className="fixed left-0 top-0 h-screen w-full">
        <Canvas
          shadows
          // flat
          // linear
          gl={{
            // gammaFactor: 3.2,
            // outputEncoding: THREE.sRGBEncoding,
            toneMapping: toneMappingType,
            toneMappingExposure: toneMappingExposure,
          }}
        >
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
      </div>
      <Header />
      {/* <Instructions /> */}
      <BackgroundAudio />
      <Cursor />
      {/* <Title /> */}
    </div>
  );
}

export default App;
