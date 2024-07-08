import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Fluid } from '@alienkitty/alien.js/three';
import { v4 as uuidv4 } from 'uuid';
import bonsaiImage from '/assets/images/bonsai/bonsai.png';

function Bonsai() {
  const {
    iterate,
    density,
    velocity,
    pressure,
    curl,
    radius,
    deltaMultiplier,
  } = useControls(
    'Fluid',
    {
      iterate: { value: 3, min: 1, max: 10 },
      density: { value: 0.95, min: 0, max: 1 },
      velocity: { value: 0.98, min: 0, max: 1 },
      pressure: { value: 0.8, min: 0, max: 1 },
      curl: { value: 10, min: 0, max: 50 },
      radius: { value: 0.1, min: 0.01, max: 0.5 },
      deltaMultiplier: { value: 5000, min: 1, max: 10000 },
    },
    { collapsed: true }
  );

  const mesh = useRef(null);
  const { gl, camera, raycaster, scene } = useThree();
  const mouse = useRef({
    world: new THREE.Vector2(),
    uv: new THREE.Vector2(),
    isInit: false,
  });
  // const raycaster = useRef(new THREE.Raycaster());

  const fluid = useMemo(() => {
    return new Fluid(gl, { curlStrength: 0 });
  }, [gl]);

  useEffect(() => {
    const fluidInstance = fluid;

    return () => {
      fluidInstance.destroy();
    };
  }, []);

  useEffect(() => {
    if (!camera) return;

    const handleMouseMove = (e) => {
      const event = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };

      if (!mouse.current.isInit) {
        mouse.current.isInit = true;
        mouse.current.world.copy(event);
        mouse.current.uv.copy(event);
      }

      raycaster.setFromCamera(mouse.current.world, camera);
      const intersects = raycaster.intersectObject(mesh.current);
      if (intersects.length > 0) {
        const { x, y } = intersects[0].uv;
        const deltaX = x - mouse.current.uv.x;
        const deltaY = y - mouse.current.uv.y;
        mouse.current.uv.copy(intersects[0].uv);
        if (Math.abs(deltaX) || Math.abs(deltaY)) {
          // console.log(x, y, deltaX, deltaY);
          if (fluid) {
            fluid.splats.push({
              x: x,
              y: y,
              dx: deltaX * deltaMultiplier,
              dy: deltaY * deltaMultiplier,
            });
          }
        }
      }
      mouse.current.world.copy(event);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [camera]);

  useFrame((state, delta) => {
    if (fluid) {
      if (fluid.uniform) {
        mesh.current.material.uniforms.uFluid.value = fluid.uniform.value;
      }
      fluid.iterate = iterate;
      fluid.densityDissipation = density;
      fluid.velocityDissipation = velocity;
      fluid.pressureDissipation = pressure;
      fluid.curlStrength = curl;
      // fluid.radius = 0.025;
      // fluid.radius = radius;
      fluid.update();
    }
    // mesh.current.material.uniforms.uTime.value += delta;
    if (mesh.current) {
      // mesh.current.children.forEach((mesh) => {
      //   if (mesh) {
      mesh.current.lookAt(camera.position);
      // mesh.lookAt(camera.position);
      //   }
      // });
    }
  });

  const titleTexture = useMemo(() => {
    const texture = new THREE.TextureLoader().load(bonsaiImage);
    return texture;
  }, []);

  const uniforms = useMemo(() => {
    return {
      uTexture: { value: titleTexture },
      uFluid: { value: null },
    };
  }, []);

  return (
    <>
      <mesh
        ref={mesh}
        position={[-280, 19, -322]}
        // scale mesh to fit width of screen
        // scale={[window.innerWidth / 25, window.innerWidth / 25, 1]}
      >
        <planeGeometry args={[150, 150]} />
        <shaderMaterial
          key={uuidv4()}
          uniforms={uniforms}
          vertexShader={`
          varying vec2 vUv;

          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
          fragmentShader={`
          uniform sampler2D uTexture;

          uniform sampler2D uFluid;
          // uniform int uRGBShift;

          varying vec2 vUv;

          void main() {
            vec3 fluid = texture2D(uFluid, vUv).rgb;
            vec2 uv = vUv;
            vec2 uv2 = vUv - (fluid.xy * .001);
            vec4 color = texture2D(uTexture, uv2);
            // vec3 rgb = fluid * 0.0001;

            // color.r = texture2D(uVideoTexture, vec2(uv.x+rgb.x, uv.y+rgb.y)).r;
            // color.g = texture2D(uVideoTexture, vec2(uv.x-rgb.x, uv.y+rgb.y)).g;
            // color.b = texture2D(uVideoTexture, vec2(uv.x-rgb.x, uv.y-rgb.y)).b;
            gl_FragColor = color;
            // gl_FragColor = vec4(vUv, 1.0, 1.0);
          }
        `}
          transparent={true}
        />
      </mesh>
    </>
  );
}

export default Bonsai;
