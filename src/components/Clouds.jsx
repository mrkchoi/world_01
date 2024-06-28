import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

import cloudTexture01 from '/assets/textures/clouds/cloud1.jpg';
import cloudTexture02 from '/assets/textures/clouds/cloud2.jpg';
import cloudTexture03 from '/assets/textures/clouds/cloud3.jpg';
import { useFrame, useThree } from '@react-three/fiber';

function Clouds() {
  const cloudTexture = useMemo(() => {
    const texture = new THREE.TextureLoader().load(cloudTexture01);
    // texture.flipY = true;
    return texture;
  }, []);
  const cloudTexture2 = useMemo(() => {
    const texture = new THREE.TextureLoader().load(cloudTexture02);
    // texture.flipY = false;
    return texture;
  }, []);
  const cloudTexture3 = useMemo(() => {
    const texture = new THREE.TextureLoader().load(cloudTexture03);
    texture.flipY = false;
    return texture;
  }, []);

  const clouds = useRef(null);
  const { camera } = useThree();

  useFrame((state, delta) => {
    if (clouds.current) {
      clouds.current.children.forEach((cloud) => {
        if (cloud) {
          cloud.lookAt(camera.position);
        }
      });
    }
  });
  return (
    <group ref={clouds}>
      <mesh
        // rotation={nodes.outdoorWaterFront.rotation}
        // rotation-x={-Math.PI * 0.5}
        position={[418.8, 150, -398]}
      >
        <planeGeometry args={[300, 150]} />
        <meshStandardMaterial
          color="white"
          emissive={'#fff'}
          emissiveIntensity={1}
          // side={THREE.DoubleSide}
          transparent={true}
          opacity={0.3}
          map={cloudTexture}
          alphaMap={cloudTexture}
        />
      </mesh>
      <mesh
        // rotation={nodes.outdoorWaterFront.rotation}
        // rotation-x={-Math.PI * 0.5}
        position={[0, 210, -398]}
      >
        <planeGeometry args={[400, 150]} />
        <meshStandardMaterial
          color="white"
          emissive={'#fff'}
          emissiveIntensity={1}
          // side={THREE.DoubleSide}
          transparent={true}
          opacity={0.6}
          map={cloudTexture2}
          alphaMap={cloudTexture2}
        />
      </mesh>
      <mesh
        // rotation={nodes.outdoorWaterFront.rotation}
        // rotation-x={-Math.PI * 0.5}
        position={[-500, 225, -500]}
      >
        <planeGeometry args={[450, 150]} />
        <meshStandardMaterial
          color="white"
          emissive={'#fff'}
          emissiveIntensity={1}
          // side={THREE.DoubleSide}
          transparent={true}
          opacity={0.6}
          map={cloudTexture3}
          alphaMap={cloudTexture3}
        />
      </mesh>
      <mesh
        // rotation={nodes.outdoorWaterFront.rotation}
        // rotation-x={-Math.PI * 0.5}
        position={[518.8, 150, 398]}
      >
        <planeGeometry args={[300, 150]} />
        <meshStandardMaterial
          color="white"
          emissive={'#fff'}
          emissiveIntensity={1}
          // side={THREE.DoubleSide}
          transparent={true}
          opacity={0.3}
          map={cloudTexture3}
          alphaMap={cloudTexture3}
        />
      </mesh>
      <mesh
        // rotation={nodes.outdoorWaterFront.rotation}
        // rotation-x={-Math.PI * 0.5}
        position={[100, 200, 398]}
      >
        <planeGeometry args={[450, 150]} />
        <meshStandardMaterial
          color="white"
          emissive={'#fff'}
          emissiveIntensity={1}
          // side={THREE.DoubleSide}
          transparent={true}
          opacity={0.6}
          map={cloudTexture}
          alphaMap={cloudTexture}
        />
      </mesh>
      <mesh
        // rotation={nodes.outdoorWaterFront.rotation}
        // rotation-x={-Math.PI * 0.5}
        position={[500, 200, 0]}
      >
        <planeGeometry args={[450, 150]} />
        <meshStandardMaterial
          color="white"
          emissive={'#fff'}
          emissiveIntensity={1}
          // side={THREE.DoubleSide}
          transparent={true}
          opacity={0.6}
          map={cloudTexture2}
          alphaMap={cloudTexture2}
        />
      </mesh>
      <mesh
        // rotation={nodes.outdoorWaterFront.rotation}
        // rotation-x={-Math.PI * 0.5}
        position={[-500, 200, 0]}
      >
        <planeGeometry args={[450, 150]} />
        <meshStandardMaterial
          color="white"
          emissive={'#fff'}
          emissiveIntensity={1}
          // side={THREE.DoubleSide}
          transparent={true}
          opacity={0.6}
          map={cloudTexture2}
          alphaMap={cloudTexture2}
        />
      </mesh>
      <mesh
        // rotation={nodes.outdoorWaterFront.rotation}
        // rotation-x={-Math.PI * 0.5}
        position={[-600, 160, 398]}
      >
        <planeGeometry args={[450, 150]} />
        <meshStandardMaterial
          color="white"
          emissive={'#fff'}
          emissiveIntensity={1}
          // side={THREE.DoubleSide}
          transparent={true}
          opacity={0.6}
          map={cloudTexture2}
          alphaMap={cloudTexture2}
        />
      </mesh>
    </group>
  );
}

export default Clouds;
