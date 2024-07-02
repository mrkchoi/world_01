import React, { useEffect, useRef } from 'react';
import Scene from './Scene';
import {
  CameraShake,
  Cloud,
  Clouds,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Stars,
} from '@react-three/drei';
import { GlitchEffect, GlitchMode, BlendFunction } from 'postprocessing';
import { Perf } from 'r3f-perf';
import { Fog } from 'three';
// import { loadCurveFromJSON } from '../utils/curveTools/loadCurveFromJSON';

import nightSky from '/assets/hdri/moonless_golf_4k.exr';
import sky from '/assets/images/cubemap/gradient/gradient.png';
import { Leva, useControls } from 'leva';
import Dust from './Dust';
// import {
//   Bloom,
//   DepthOfField,
//   DotScreen,
//   EffectComposer,
//   GodRays,
//   Vignette,
// } from '@react-three/postprocessing';
import * as THREE from 'three';
import {
  Bloom,
  EffectComposer,
  Glitch,
  GodRays,
  Noise,
  Pixelation,
} from '@react-three/postprocessing';
import { useFrame, useThree } from '@react-three/fiber';
import SkySphere from './SkySphere';

function Experience() {
  return (
    <>
      {/* <OrbitControls /> */}
      {/* <Perf position="top-right" /> */}
      <ambientLight intensity={5} />
      <directionalLight
        intensity={5}
        position={[-6, 34, 30]}
        // color="white"
        castShadow={true}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.01}
        shadow-camera-far={500}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      {/* <PerspectiveCamera
        makeDefault
        // position={[57.42, -8.46, 142.57]}
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={300}
      /> */}
      {/* <axesHelper args={[50]} /> */}
      {/* <gridHelper args={[1000, 1000, 'white', 'gray']} /> */}
      <Scene />
      {/* <Dust /> */}
      {/* <Environment
        files={[
          '/assets/images/cubemap/gradient/gradient04.png',
          '/assets/images/cubemap/gradient/gradient04.png',
          '/assets/images/cubemap/gradient/gradient04.png',
          '/assets/images/cubemap/gradient/gradient04.png',
          '/assets/images/cubemap/gradient/gradient04.png',
          '/assets/images/cubemap/gradient/gradient04.png',
        ]}
        background
      /> */}
      {/* <Environment preset="city" /> */}
      {/* <Environment
        //preset='studio'
        background
        files={[
          '/assets/images/cubemap/sunset/right.png',
          '/assets/images/cubemap/sunset/left.png',
          '/assets/images/cubemap/sunset/top.png',
          '/assets/images/cubemap/sunset/bot.png',
          '/assets/images/cubemap/sunset/front.png',
          '/assets/images/cubemap/sunset/back.png',
        ]}
      /> */}
      {/* <SkySphere /> */}
      <Sky
        sunPosition={[-6.9, 34.4, -30.5]}
        distance={500}
        turbidity={0}
        rayleigh={0.5}
      />
      {/* <color attach="background" args={['#000']} /> */}
      {/* <fog attach="fog" args={['#000', -50, 100]} /> */}
    </>
  );
}

export default Experience;
