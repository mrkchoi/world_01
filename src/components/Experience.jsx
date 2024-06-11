import React from 'react';
import Scene from './Scene';
import { Environment, PerspectiveCamera, Sky } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Fog } from 'three';

function Experience() {
  return (
    <>
      <Perf position="top-left" />
      <ambientLight />
      <directionalLight
        intensity={1.5}
        // position={[50, 75, 50]}
        // color="white"
        angle={0.45}
        castShadow={true}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <PerspectiveCamera
        makeDefault
        position={[57.42, -8.46, 142.57]}
        fov={45}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
      />
      <axesHelper args={[50]} />
      {/* <gridHelper args={[1000, 1000, 'white', 'gray']} /> */}
      <Scene />
      <Environment preset="city" />
      <Sky castShadow={true} />
      <color attach="background" args={['#222222']} />
      <fog attach="fog" args={['lightgrey', 100, 200]} />
    </>
  );
}

export default Experience;