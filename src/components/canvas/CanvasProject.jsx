import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Fluid } from '@alienkitty/alien.js/three';
import { v4 as uuidv4 } from 'uuid';
import videoSource from '/assets/video/zajno_showreel.mp4';

const FLUID = {
  iterate: { value: 3, min: 1, max: 10 },
  density: { value: 0.97, min: 0, max: 1 },
  velocity: { value: 0.98, min: 0, max: 1 },
  pressure: { value: 0.8, min: 0, max: 1 },
  curl: { value: 0, min: 0, max: 50 },
  radius: { value: 0.25, min: 0.0001, max: 0.5 },
  deltaMultiplier: { value: 5000, min: 1, max: 10000 },
};

function CanvasProject({
  id,
  geometry,
  material,
  position,
  rotation,
  handleClick,
  onEnter,
  onLeave,
}) {
  const mesh = useRef(null);
  const { gl, camera, raycaster, scene } = useThree();
  const mouse = useRef({
    world: new THREE.Vector2(),
    uv: new THREE.Vector2(),
    isInit: false,
  });
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
    // console.log('ref.current', ref.current);
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

      // console.log(refPointer.current.x, refPointer.current.y);

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
              // x: refPointer.current.x,
              // y: refPointer.current.y,
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
        // mesh.current.material.uniforms.uFluid.value = fluid.uniform.value;
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

  // const texture = useMemo(() => {
  //   const texture = material.map;
  //   texture.format = THREE.SRGBColorSpace;
  //   // texture.flipY = true;
  //   texture.minFilter = THREE.LinearFilter;
  //   texture.magFilter = THREE.LinearFilter;
  //   texture.generateMipmaps = false;
  //   return texture;
  // }, []);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: material.map },
      uFluid: { value: null },
    }),
    [material.map]
  );

  // const shaderMaterial = useMemo(() => {
  //   return new THREE.ShaderMaterial({
  //     uniforms: uniforms,
  //     vertexShader: `
  //       varying vec2 vUv;

  //       void main() {
  //         vUv = uv;
  //         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  //       }
  //     `,
  //     fragmentShader: `
  //       uniform float uTime;
  //       uniform sampler2D uTexture;
  //       uniform sampler2D uFluid;
  //       // uniform int uRGBShift;

  //       varying vec2 vUv;

  //       void main() {
  //         vec3 fluid = texture2D(uFluid, vUv).rgb;
  //         vec2 uv = vUv;
  //         vec2 uv2 = vUv - (fluid.xy * .001);
  //         vec4 color = texture2D(uTexture, uv2);
  //         // vec3 rgb = fluid * 0.0001;

  //         // color.r = texture2D(uVideoTexture, vec2(uv.x+rgb.x, uv.y+rgb.y)).r;
  //         // color.g = texture2D(uVideoTexture, vec2(uv.x-rgb.x, uv.y+rgb.y)).g;
  //         // color.b = texture2D(uVideoTexture, vec2(uv.x-rgb.x, uv.y-rgb.y)).b;
  //         gl_FragColor = color;
  //         // gl_FragColor = vec4(vUv, 1.0, 1.0);
  //       }
  //     `,
  //   });
  // }, []);

  return (
    <mesh
      ref={mesh}
      geometry={geometry}
      // material={shaderMaterial}
      position={position}
      rotation={rotation}
      onClick={(e) => handleClick(e, id)}
      onPointerEnter={onEnter}
      onPointerMove={onEnter}
      onPointerLeave={onLeave}
    >
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
        uniform float uTime;
        uniform sampler2D uTexture;
        uniform sampler2D uFluid;
        // uniform int uRGBShift;

        varying vec2 vUv;

        vec4 fromLinear(vec4 linearRGB) {
            bvec3 cutoff = lessThan(linearRGB.rgb, vec3(0.0031308));
            vec3 higher = vec3(1.055)*pow(linearRGB.rgb, vec3(1.0/2.4)) - vec3(0.055);
            vec3 lower = linearRGB.rgb * vec3(12.92);

            return vec4(mix(higher, lower, cutoff), linearRGB.a);
        }        

        void main() {
          vec3 fluid = texture2D(uFluid, vUv).rgb;
          vec2 uv = vUv;
          vec2 uv2 = vUv - (fluid.xy * .001);
          vec4 color = texture2D(uTexture, uv2);
          // vec3 rgb = fluid * 0.0001;

          // color.r = texture2D(uTexture, vec2(uv.x+rgb.x, uv.y+rgb.y)).r;
          // color.g = texture2D(uTexture, vec2(uv.x-rgb.x, uv.y+rgb.y)).g;
          // color.b = texture2D(uTexture, vec2(uv.x-rgb.x, uv.y-rgb.y)).b;
          color = fromLinear(color);
          gl_FragColor = color;
          // gl_FragColor = vec4(vUv, 1.0, 1.0);
        }
      `}
      />
    </mesh>
  );
}

export default CanvasProject;
