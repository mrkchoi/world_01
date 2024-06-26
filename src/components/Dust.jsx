import React, { useEffect, useMemo, useRef } from 'react';
import dust01 from '/assets/images/dust/dust-particle-04.png';
import dust02 from '/assets/images/dust/dust-particle-05.png';
import dust03 from '/assets/images/dust/dust-particle-11.png';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Perf } from 'r3f-perf';

const OFFSET = 200;
const PARTICLE_COUNT_MULITPLIER = 1;
const PARTICLE_SIZE_MULTIPLIER = 1.5;

const PARAMS = {
  backParticles: {
    x: -9,
    y: 0,
    z: 0,
    offset: {
      x: OFFSET,
      y: 10,
      z: OFFSET,
    },
    size: 0.15 * PARTICLE_SIZE_MULTIPLIER,
    opacity: 0.5,
    count: 400 * PARTICLE_COUNT_MULITPLIER,
  },
  middleParticles: {
    x: -4,
    y: 0,
    z: 0,
    offset: {
      x: OFFSET,
      y: 10,
      z: OFFSET,
    },
    size: 0.1 * PARTICLE_SIZE_MULTIPLIER,
    opacity: 0.5,
    count: 500 * PARTICLE_COUNT_MULITPLIER,
  },
  frontParticles: {
    x: 3,
    y: 0,
    z: 0,
    offset: {
      x: OFFSET,
      y: 10,
      z: OFFSET,
    },
    size: 0.25 * PARTICLE_SIZE_MULTIPLIER,
    opacity: 0.2,
    count: 20 * PARTICLE_COUNT_MULITPLIER,
  },
};

function Dust() {
  const particle04 = useLoader(THREE.TextureLoader, dust01);
  const particle05 = useLoader(THREE.TextureLoader, dust02);
  const particle11 = useLoader(THREE.TextureLoader, dust03);

  const backParticles = useRef(null);
  const midParticles = useRef(null);
  const frontParticles = useRef(null);

  const backParticleCount = PARAMS.backParticles.count;
  const midParticleCount = PARAMS.middleParticles.count;
  const frontParticleCount = PARAMS.frontParticles.count;

  const backParticlesPosition = useMemo(() => {
    const positions = new Float32Array(backParticleCount * 3);

    for (let i = 0; i < backParticleCount; i++) {
      positions[i * 3 + 0] =
        (Math.random() - 0.5) * PARAMS.backParticles.offset.x;
      positions[i * 3 + 1] = Math.random() * PARAMS.backParticles.offset.y;
      positions[i * 3 + 2] =
        (Math.random() - 0.1) * PARAMS.backParticles.offset.z;
    }

    return positions;
  }, [backParticleCount]);

  const midParticlesPosition = useMemo(() => {
    const positions = new Float32Array(midParticleCount * 3);

    for (let i = 0; i < midParticleCount; i++) {
      positions[i * 3 + 0] =
        (Math.random() - 0.5) * PARAMS.middleParticles.offset.x;
      positions[i * 3 + 1] = Math.random() * PARAMS.middleParticles.offset.y;
      positions[i * 3 + 2] =
        (Math.random() - 0.1) * PARAMS.middleParticles.offset.z;
    }

    return positions;
  }, [midParticleCount]);

  const frontParticlesPosition = useMemo(() => {
    const positions = new Float32Array(frontParticleCount * 3);

    for (let i = 0; i < frontParticleCount; i++) {
      positions[i * 3 + 0] =
        (Math.random() - 0.5) * PARAMS.frontParticles.offset.x;
      positions[i * 3 + 1] = Math.random() * PARAMS.frontParticles.offset.y;
      positions[i * 3 + 2] =
        (Math.random() - 0.1) * PARAMS.frontParticles.offset.z;
    }

    return positions;
  }, [frontParticleCount]);

  // useEffect(() => {
  //   console.log(backParticlesPosition);
  // }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    const backPositions = backParticlesPosition;
    for (let i = 0; i < backParticleCount; i++) {
      backPositions[i * 2 + 0] += Math.sin(time * 0.1 + i * 0.1) * 0.01;
      backPositions[i * 3 + 0] += Math.sin(time * 0.1 + i * 0.1) * 0.01;

      // change rotation of particles
      backParticles.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      backParticles.current.rotation.z = Math.sin(time * 0.1) * 0.1;
    }
    backParticles.current.geometry.attributes.position.needsUpdate = true;

    const midPositions = midParticlesPosition;
    for (let i = 0; i < midParticleCount; i++) {
      midPositions[i * 2 + 0] += Math.sin(time * 0.1 + i * 0.1) * 0.003;
      midPositions[i * 3 + 0] += Math.sin(time * 0.1 + i * 0.1) * 0.003;

      // change rotation of particles
      midParticles.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      midParticles.current.rotation.z = Math.sin(time * 0.1) * 0.1;
    }
    midParticles.current.geometry.attributes.position.needsUpdate = true;

    const frontPositions = frontParticlesPosition;
    for (let i = 0; i < frontParticleCount; i++) {
      frontPositions[i * 2 + 0] += Math.sin(time * 0.1 + i * 0.1) * 0.002;
      frontPositions[i * 3 + 0] += Math.sin(time * 0.1 + i * 0.1) * 0.002;

      // change rotation of particles
      frontParticles.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      frontParticles.current.rotation.z = Math.sin(time * 0.1) * 0.1;
    }

    frontParticles.current.geometry.attributes.position.needsUpdate = true;
  });

  // useEffect(() => {
  //   console.log(backParticles.current);
  // }, []);

  return (
    <>
      {/* <Perf /> */}
      <points ref={backParticles}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={backParticlesPosition.length / 3}
            array={backParticlesPosition}
            itemSize={3}
            normalized={false}
          />
        </bufferGeometry>
        <pointsMaterial
          size={PARAMS.backParticles.size}
          // color="#fff"
          sizeAttenuation
          map={particle05}
          opacity={true}
          blending={THREE.AdditiveBlending}
          transparent={true}
          depthWrite={false}
        />
      </points>

      <points ref={midParticles}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={midParticlesPosition.length / 3}
            array={midParticlesPosition}
            itemSize={3}
            normalized={false}
          />
        </bufferGeometry>
        <pointsMaterial
          size={PARAMS.middleParticles.size}
          // color="#fff"
          sizeAttenuation
          map={particle04}
          opacity={true}
          blending={THREE.AdditiveBlending}
          transparent={true}
          depthWrite={false}
        />
      </points>

      <points ref={frontParticles}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={frontParticlesPosition.length / 3}
            array={frontParticlesPosition}
            itemSize={3}
            normalized={false}
          />
        </bufferGeometry>
        <pointsMaterial
          size={PARAMS.frontParticles.size}
          // color="#fff"
          sizeAttenuation
          map={particle11}
          opacity={true}
          blending={THREE.AdditiveBlending}
          transparent={true}
          depthWrite={false}
        />
      </points>
    </>
  );
}

export default Dust;
