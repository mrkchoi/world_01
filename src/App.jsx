import { Canvas } from '@react-three/fiber';
import './App.css';
import { useEffect, useMemo, useState } from 'react';
import Experience from './components/Experience';
import BackgroundAudio from './components/BackgroundAudio';
import * as THREE from 'three';

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

function App() {
  const { toneMappingExposure, toneMappingType } = useControls(
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

  return (
    <>
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
          <Experience />
        </Canvas>
      </div>
      <Header />
      <Instructions />
      <BackgroundAudio />
    </>
  );
}

export default App;
