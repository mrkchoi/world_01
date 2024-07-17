import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Fluid } from '@alienkitty/alien.js/three';
import { v4 as uuidv4 } from 'uuid';
import titleImage from '/assets/images/title/KENNY CHOI.png';

const FLUID = {
  iterate: { value: 3, min: 1, max: 10 },
  density: { value: 0.95, min: 0, max: 1 },
  velocity: { value: 0.98, min: 0, max: 1 },
  pressure: { value: 0.8, min: 0, max: 1 },
  curl: { value: 10, min: 0, max: 50 },
  radius: { value: 0.1, min: 0.01, max: 0.5 },
  deltaMultiplier: { value: 5000, min: 1, max: 10000 },
};

function TitleTest() {
  // const {
  //   iterate,
  //   density,
  //   velocity,
  //   pressure,
  //   curl,
  //   radius,
  //   deltaMultiplier,
  // } = useControls(
  //   'Fluid',
  //   {
  //     iterate: { value: 3, min: 1, max: 10 },
  //     density: { value: 0.95, min: 0, max: 1 },
  //     velocity: { value: 0.98, min: 0, max: 1 },
  //     pressure: { value: 0.8, min: 0, max: 1 },
  //     curl: { value: 10, min: 0, max: 50 },
  //     radius: { value: 0.1, min: 0.01, max: 0.5 },
  //     deltaMultiplier: { value: 5000, min: 1, max: 10000 },
  //   },
  //   { collapsed: true }
  // );

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
              dx: deltaX * FLUID.deltaMultiplier.value,
              dy: deltaY * FLUID.deltaMultiplier.value,
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
      fluid.iterate = FLUID.iterate.value;
      fluid.densityDissipation = FLUID.density.value;
      fluid.velocityDissipation = FLUID.velocity.value;
      fluid.pressureDissipation = FLUID.pressure.value;
      fluid.curlStrength = FLUID.curl.value;
      fluid.radius = FLUID.radius.value;
      fluid.update();
    }
    // mesh.current.material.uniforms.uTime.value += delta;
  });

  const titleTexture = useMemo(() => {
    const texture = new THREE.TextureLoader().load(titleImage);
    return texture;
  }, []);

  const uniforms = useMemo(() => {
    return {
      uTexture: { value: titleTexture },
      uFluid: { value: null },
    };
  }, []);

  useEffect(() => {
    mesh.current.scale.set(window.innerWidth / 25, window.innerWidth / 25, 1);
  }, []);

  useEffect(() => {
    const throttle = (func, limit) => {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };
    const handleResize = () => {
      // scale mesh bounds to not exceed width of screen based on height
      const windowHeight = window.innerHeight;

      if (windowHeight > 2000) {
        mesh.current.scale.set(
          window.innerWidth / 40,
          window.innerWidth / 40,
          1
        );
      } else if (windowHeight > 1500) {
        mesh.current.scale.set(
          window.innerWidth / 35,
          window.innerWidth / 35,
          1
        );
      } else if (windowHeight > 1200) {
        mesh.current.scale.set(
          window.innerWidth / 30,
          window.innerWidth / 30,
          1
        );
      } else if (windowHeight > 800) {
        mesh.current.scale.set(
          window.innerWidth / 25,
          window.innerWidth / 25,
          1
        );
      }
    };

    const throttledHandleResize = throttle(handleResize, 100);

    window.addEventListener('resize', throttledHandleResize);

    return () => {
      window.removeEventListener('resize', throttledHandleResize);
    };
  }, []);

  return (
    <>
      <mesh
        ref={mesh}
        position={[2, 16, 0]}
        // scale mesh to fit width of screen
        // scale={Math.min(50, window.innerWidth / 18)}
        // scale={[window.innerWidth / 25, window.innerWidth / 25, 1]}
      >
        <planeGeometry args={[1, 0.33]} />
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
          depthTest={false}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

export default TitleTest;
