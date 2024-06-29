import React, { useMemo } from 'react';
import * as THREE from 'three';
import { v4 as uuidv4 } from 'uuid';
import CustomShaderMaterial from 'three-custom-shader-material';
import gradient from '/assets/images/cubemap/gradient/gradient.png';

function SkySphere() {
  const uniforms = useMemo(() => {
    return {
      uColor1: { value: new THREE.Vector3(0.73, 0.77, 0.83) },
      uColor2: { value: new THREE.Vector3(0.968, 0.835, 0.768) },
    };
  }, []);

  const gradientTexture = useMemo(() => {
    const texture = new THREE.TextureLoader().load(gradient);
    texture.flipY = true;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 2);
    return texture;
  }, []);

  return (
    <>
      <mesh position={[0, -400, 0]}>
        <sphereGeometry args={[1000, 60, 40]} />
        <meshStandardMaterial
          map={gradientTexture}
          side={THREE.DoubleSide}
          // wireframe={true}
        />
      </mesh>
    </>
  );
}

// {/* <shaderMaterial
//           key={uuidv4()}
//           side={THREE.DoubleSide}
//           uniforms={uniforms}
//           vertexShader={
//             /* GLSL */ `
//           varying vec2 vUv;

//           void main() {
//             vUv = uv;
//             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//           }
//         `
//           }
//           fragmentShader={
//             /* GLSL */ `
//           uniform vec3 uColor1;
//           uniform vec3 uColor2;

//           varying vec2 vUv;

//           void main() {
//             vec3 color = mix(uColor1, uColor2, vUv.y);
//             gl_FragColor = vec4(color, 1.0);
//           }
//         `
//           }
//         /> */}

export default SkySphere;
