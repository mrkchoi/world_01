import React from 'react';
import Scene from './Scene';
import { Environment, PerspectiveCamera, Sky } from '@react-three/drei';
import { GlitchEffect, GlitchMode, BlendFunction } from 'postprocessing';
import { Perf } from 'r3f-perf';
import { Fog } from 'three';

import nightSky from '/assets/hdri/moonless_golf_4k.exr';
import { useControls } from 'leva';
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
  Noise,
  Pixelation,
} from '@react-three/postprocessing';

function Experience() {
  return (
    <>
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
      <PerspectiveCamera
        makeDefault
        position={[57.42, -8.46, 142.57]}
        fov={35}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={300}
      />
      <axesHelper args={[50]} />
      {/* <gridHelper args={[1000, 1000, 'white', 'gray']} /> */}
      <Scene />
      <Dust />
      {/* <Environment files={nightSky} /> */}
      {/* <Environment preset="city" /> */}
      <Sky
        castShadow={true}
        distance={1000}
        azimuth={0.55}
        turbidity={0}
        rayleigh={0.1}
      />
      {/* <color attach="background" args={['#000']} /> */}
      {/* <fog attach="fog" args={['#eeeeee', 0, 1000]} /> */}
    </>
  );
}

export default Experience;
