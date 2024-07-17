import React, { useEffect, useMemo, useRef } from 'react';
import cloudImg from '/assets/textures/clouds/cloud10.png';
import * as THREE from 'three';
import { v4 as uuidv4 } from 'uuid';
import { useFrame, useThree } from '@react-three/fiber';
import { Instance, Instances, useTexture } from '@react-three/drei';

const POSITIONS = [
  [-100, 5.5, -165.8],
  [-98, 5.5, -163.8],
  [-86.3486, 7, -155.95],
  [-79.7767, 5.5, -150.355],
  [-78.1356, 5.5, -147.246],
  [-72.4944, 5.5, -144.049],
  [-70.7644, 5.5, -140.852],
  [-63.1695, 5.5, -135.79],
];
// const POSITIONS = [
//   [-97, 5.5, -164.8],
//   [-96.5, 5.5, -163.8],
//   [-87.3486, 5.5, -155.95],
//   [-80.7767, 5.5, -150.355],
//   [-77.1356, 5.5, -147.246],
//   [-73.4944, 5.5, -144.049],
//   [-69.7644, 5.5, -140.852],
//   [-64.1695, 5.5, -135.79],
// ];

function CloudsLow() {
  const groupRef = useRef(null);
  const texture = useTexture(cloudImg);
  texture.flipY = false;
  const { camera } = useThree();

  const getScale = (idx) => {
    if (idx === 0) return 3;
    if (idx === 1) return 2;
    if (idx === 2) return 1;
    return 0.6;
  };

  const particles = useMemo(() => {
    const particles = [];
    for (let i = 0; i < POSITIONS.length; i++) {
      particles.push({
        position: new THREE.Vector3(
          POSITIONS[i][0],
          POSITIONS[i][1],
          POSITIONS[i][2]
        ),
        scale: getScale(i),
      });
    }
    return particles;
  }, []);

  const uniforms = useMemo(() => {
    return {
      uTexture: { value: new THREE.TextureLoader().load(cloudImg) },
      // uTexture: { value: texture },
      fogColor: { value: new THREE.Color(0x4584b4) },
      fogNear: { value: -100 },
      fogFar: { value: 3000 },
    };
  }, []);

  const LOOK_AT_POSITION = new THREE.Vector3(-38.0597, 5.5, -113.677);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child) => {
        if (child) {
          // console.log(child.position);
          child.lookAt(LOOK_AT_POSITION);
          child.needsUpdate = true;
        }
      });
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {particles.map((data, idx) => (
          <mesh
            key={idx}
            position={data.position}
            scale={[data.scale, data.scale, data.scale]}
          >
            <planeGeometry args={[30, 25]} />
            <shaderMaterial
              key={uuidv4()}
              uniforms={uniforms}
              vertexShader={`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }
          `}
              fragmentShader={`
            uniform sampler2D uTexture;
            uniform vec3 fogColor;
            uniform float fogNear;
            uniform float fogFar;
            varying vec2 vUv;

            void main() {

              float depth = gl_FragCoord.z / gl_FragCoord.w;
              float fogFactor = smoothstep( fogNear, fogFar, depth );

              gl_FragColor = texture2D( uTexture, vUv );
              gl_FragColor.w *= pow( gl_FragCoord.z, 20.0 );
              gl_FragColor = mix( gl_FragColor, vec4( fogColor , gl_FragColor.w ), fogFactor );
            }
          `}
              transparent={true}
              // depthTest={true}
              // depthWrite={true}
            />
          </mesh>
        ))}
      </group>
    </>
  );
}

const Cloud = ({ id, data, temp = new THREE.Object3D(), ...props }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      console.log(data.position);
      ref.current.position.copy(data.position);
      ref.current.scale.set(1, 1, 1);
      // ref.current.scale.set(data.scale, data.scale, data.scale);
    }
  }, [data]);

  return (
    <group {...props}>
      <Instance
        ref={ref}
        // position={[data.x, data.y, data.z]}
        // scale={[data.scale, data.scale, data.scale]}
      />
    </group>
  );
};
// <mesh ref={mesh} position={[-96.5, 5.5, -163.8]}>
//   <planeGeometry args={[30, 30]} />
//   <shaderMaterial
//     key={uuidv4()}
//     uniforms={uniforms}
//     vertexShader={`
//       varying vec2 vUv;
//       void main() {
//         vUv = uv;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
//       }
//     `}
//     fragmentShader={`
//       uniform sampler2D uTexture;
//       uniform vec3 fogColor;
//       uniform float fogNear;
//       uniform float fogFar;
//       varying vec2 vUv;

//       void main() {

//         float depth = gl_FragCoord.z / gl_FragCoord.w;
//         float fogFactor = smoothstep( fogNear, fogFar, depth );

//         gl_FragColor = texture2D( uTexture, vUv );
//         gl_FragColor.w *= pow( gl_FragCoord.z, 20.0 );
//         gl_FragColor = mix( gl_FragColor, vec4( fogColor , gl_FragColor.w ), fogFactor );
//       }
//     `}
//     transparent={true}
//     depthTest={true}
//     depthWrite={true}
//   />
//   {/* <meshBasicMaterial color="pink" /> */}
// </mesh>;

export default CloudsLow;
