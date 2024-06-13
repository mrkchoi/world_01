import React from 'react';
import Scene from './Scene';
import { Environment, PerspectiveCamera, Sky } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Fog } from 'three';

import nightSky from '/assets/hdri/moonless_golf_4k.exr';
import { useControls } from 'leva';

function Experience() {
  return (
    <>
      <Perf position="top-left" />
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={1}
        // position={[50, 75, 50]}
        // color="white"
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={100}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <PerspectiveCamera
        makeDefault
        position={[57.42, -8.46, 142.57]}
        fov={45}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={2000}
      />
      {/* <axesHelper args={[50]} /> */}
      {/* <gridHelper args={[1000, 1000, 'white', 'gray']} /> */}
      <Scene />
      {/* <Environment files={nightSky} /> */}
      <Environment preset="night" />
      {/* <Sky
        castShadow={true}
        distance={1000}
        azimuth={0.55}
        turbidity={0}
        rayleigh={0.1}
      /> */}
      {/* <color attach="background" args={['#b2dce1']} /> */}
      {/* <fog attach="fog" args={['lightgrey', 100, 200]} /> */}
    </>
  );
}

export default Experience;
