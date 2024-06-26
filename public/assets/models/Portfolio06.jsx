/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 portfolio06.glb 
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/portfolio06.glb');
  return (
    <group {...props} dispose={null}>
      <group
        position={[-81.585, 1.546, -155.711]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.301, -0.125, -0.095]}>
            <mesh
              geometry={nodes.pine_2_1_pine_2_1Mat_0.geometry}
              material={materials.pine_2_1Mat}
            />
            <mesh
              geometry={nodes.pine_2_1_pine_2_1Mat_0_1.geometry}
              material={materials.trunk_2_1_0Mat}
            />
          </group>
          <group
            position={[-5.016, -0.125, 5.02]}
            rotation={[-Math.PI, 0.425, -Math.PI]}
          >
            <mesh
              geometry={nodes.pine_2_1_pine_2_1Mat_0003.geometry}
              material={materials.pine_2_1Mat}
            />
            <mesh
              geometry={nodes.pine_2_1_pine_2_1Mat_0003_1.geometry}
              material={materials.trunk_2_1_0Mat}
            />
          </group>
        </group>
      </group>
      <mesh
        geometry={nodes.rockGroup_Baked.geometry}
        material={materials.rockGroup_Baked}
        position={[-38.04, 0.134, -113.847]}
        rotation={[1.81, 0.887, 2.375]}
      />
      <mesh
        geometry={nodes.entranceWalls_Baked.geometry}
        material={materials.entranceWalls_Baked}
        position={[0, -0.028, -13.737]}
      />
      <mesh
        geometry={nodes.entranceCurvedWall_Baked.geometry}
        material={materials.entranceWalls_Baked}
        position={[-6.25, 4.315, -18.294]}
      />
      <mesh
        geometry={nodes.entranceRoof_Baked.geometry}
        material={materials.entranceWalls_Baked}
        position={[-0.001, 3.242, -13.737]}
      />
      <mesh
        geometry={nodes.entranceRoofWindows_Baked.geometry}
        material={materials.entranceWalls_Baked}
        position={[2.223, 7.458, -8.255]}
      />
      <mesh
        geometry={nodes.entranceCurvedRoomPedestal_Baked.geometry}
        material={materials.entranceFloorAndPedestal_Baked}
        position={[-5.211, 0.496, -30.827]}
      />
      <mesh
        geometry={nodes.floor001_Baked.geometry}
        material={materials.entranceFloorAndPedestal_Baked}
        position={[0.183, 0, -19.383]}
      />
      <mesh
        geometry={nodes.entranceCurvedRoom_Baked.geometry}
        material={materials.entranceRoundWalls_Baked}
        position={[-4.383, 5.782, -31.047]}
      />
      <mesh
        geometry={nodes.entranceCurvedRoomTop_Baked.geometry}
        material={materials.entranceRoundWalls_Baked}
        position={[-1.632, 9.146, -30.827]}
      />
      <mesh
        geometry={nodes.mainRoomTop001_Baked.geometry}
        material={materials.mainHallFloorAndTop_Baked}
        position={[6.161, 16.353, -65.066]}
      />
      <mesh
        geometry={nodes.mainRoomWalls_Baked.geometry}
        material={materials.mainHallWalls_Baked}
        position={[6.191, -0.001, -41.53]}
      />
      <mesh
        geometry={nodes.mainRoomTop002_Baked.geometry}
        material={materials.mainHallWalls_Baked}
        position={[0.682, 16.351, -97.22]}
      />
      <mesh
        geometry={nodes.floor003_Baked.geometry}
        material={materials.floor003_Baked}
        position={[0.183, 0, -19.383]}
      />
      <mesh
        geometry={nodes.floor003001_Baked.geometry}
        material={materials.mainCircularRoomFloors_Baked}
        position={[0.183, 0, -19.383]}
      />
      <mesh
        geometry={nodes.floor003002_Baked.geometry}
        material={materials.mainCircularRoomFloors_Baked}
        position={[0.183, 0, -19.383]}
      />
      <mesh
        geometry={nodes.circularRoom_Baked.geometry}
        material={materials.circularRoom_Baked}
        position={[-38.268, 0.726, -114.098]}
        rotation={[0, -0.113, 0]}
      />
      <mesh
        geometry={nodes.circularRoomTop_Baked.geometry}
        material={materials.circularRoomTop_Baked}
        position={[-38.268, 18.336, -114.098]}
      />
      <mesh
        geometry={nodes.floor002_Baked.geometry}
        material={materials.floor002_Baked}
        position={[0.183, 0, -19.383]}
      />
      <mesh
        geometry={nodes.logoSculpture_Baked.geometry}
        material={materials.logoSculpture_Baked}
        position={[-5.387, 3.083, -30.796]}
        rotation={[-2.359, 0.205, 0.281]}
      />
      <mesh
        geometry={nodes.circularRoomPool_Baked.geometry}
        material={materials.mainCircularRoomPool_Baked}
        position={[-38.268, 0.16, -114.098]}
      />
      <mesh
        geometry={nodes.sculptureSorento_Baked.geometry}
        material={materials.mainCircularRoomPool_Baked}
        position={[-51.429, 0.004, -138.733]}
      />
      <mesh
        geometry={nodes.outdoorStairs_Baked.geometry}
        material={materials.outdoorStairs_Baked}
        position={[-61.17, 0, -133.453]}
        rotation={[0, 0.073, 0]}
      />
      <mesh
        geometry={nodes.archOutdoor_Baked.geometry}
        material={materials.arches_Baked}
        position={[-82.72, 9.846, -151.925]}
        rotation={[0, -0.7, 0]}
      />
      <mesh
        geometry={nodes.arch001_Baked.geometry}
        material={materials.arches_Baked}
        position={[-61.189, 0.957, -133.464]}
        rotation={[Math.PI / 2, 0, -0.871]}
      />
      <mesh
        geometry={nodes.canvasBack001.geometry}
        material={materials.canvasBack}
        position={[12.034, 3, -53.031]}
        rotation={[0, -0.422, 0]}
      />
      <mesh
        geometry={nodes.circularRoomPoolWater.geometry}
        material={materials.ocean}
        position={[-38.268, 0.126, -114.098]}
      />
      <mesh
        geometry={nodes.sphere003.geometry}
        material={materials.sculpture}
        position={[3.486, 1.018, -107.404]}
      />
      <mesh
        geometry={nodes.columns.geometry}
        material={materials.benches}
        position={[16.643, 0, -35.363]}
      />
      <mesh
        geometry={nodes.canvas001.geometry}
        material={materials.Canvas01}
        position={[12.013, 3.027, -53.04]}
        rotation={[0, -0.422, 0]}
      />
      <mesh
        geometry={nodes.canvasBack002.geometry}
        material={materials.canvasBack}
        position={[-0.787, 3, -72.638]}
        rotation={[0, 0.42, 0]}
      />
      <mesh
        geometry={nodes.canvas002.geometry}
        material={materials.Canvas02}
        position={[-0.787, 3.028, -72.638]}
        rotation={[0, 0.42, 0]}
      />
      <mesh
        geometry={nodes.canvasBack003.geometry}
        material={materials.canvasBack}
        position={[10.63, 3, -92.398]}
        rotation={[0, -0.454, 0]}
      />
      <mesh
        geometry={nodes.canvas003.geometry}
        material={materials.Canvas03}
        position={[10.63, 3.03, -92.398]}
        rotation={[0, -0.454, 0]}
      />
      <mesh
        geometry={nodes.canvasBack004.geometry}
        material={materials.canvasBack}
        position={[-10.216, 3, -110.056]}
        rotation={[0, 0.556, 0]}
      />
      <mesh
        geometry={nodes.canvas004.geometry}
        material={materials.Canvas04}
        position={[-10.216, 3.038, -110.056]}
        rotation={[0, 0.556, 0]}
      />
      <mesh
        geometry={nodes.canvasBack005.geometry}
        material={materials.canvasBack}
        position={[-30.974, 3, -89.757]}
        rotation={[-Math.PI, 0.793, -Math.PI]}
      />
      <mesh
        geometry={nodes.canvas005.geometry}
        material={materials.Canvas05}
        position={[-30.974, 3.021, -89.757]}
        rotation={[-Math.PI, 0.793, -Math.PI]}
      />
      <mesh
        geometry={nodes.canvasBack006.geometry}
        material={materials.canvasBack}
        position={[-59.154, 3, -98.602]}
        rotation={[0, 1.476, 0]}
      />
      <mesh
        geometry={nodes.canvas006.geometry}
        material={materials.Canvas06}
        position={[-59.154, 3.028, -98.602]}
        rotation={[0, 1.476, 0]}
      />
      <mesh
        geometry={nodes.canvasBack007.geometry}
        material={materials.canvasBack}
        position={[-64.587, 3, -118.668]}
        rotation={[0, 0.714, 0]}
      />
      <mesh
        geometry={nodes.canvas007.geometry}
        material={materials.Canvas07}
        position={[-64.587, 3.039, -118.668]}
        rotation={[0, 0.714, 0]}
      />
      <mesh
        geometry={nodes.sphere002.geometry}
        material={materials.sculpture}
        position={[-3.167, 1.018, -55.319]}
      />
      <mesh
        geometry={nodes.sphere004.geometry}
        material={materials.sculpture}
        position={[-56.379, 1.018, -92.623]}
      />
      <mesh
        geometry={nodes.recessedLighting.geometry}
        material={materials.ringLight}
        position={[-38.268, 0.726, -114.098]}
        rotation={[0, -0.113, 0]}
      />
      <mesh
        geometry={nodes.benches.geometry}
        material={materials.benches}
        position={[-2.705, 0.235, -5.62]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        geometry={nodes.sphere001.geometry}
        material={materials.sculpture}
        position={[16.34, 1.018, -34.641]}
      />
      <mesh
        geometry={nodes.outdoorWaterBarrier.geometry}
        material={materials.benches}
        position={[-38.623, -0.785, -159.184]}
        rotation={[0, -0.731, 0]}
      />
      <mesh
        geometry={nodes.human001.geometry}
        material={materials.logoSculpture}
        position={[6.714, -0.045, -14.873]}
        rotation={[Math.PI, -0.491, Math.PI]}
      />
      <mesh
        geometry={nodes.human002.geometry}
        material={materials.logoSculpture}
        position={[15.009, -0.045, -46.33]}
        rotation={[Math.PI, -0.302, Math.PI]}
      />
      <mesh
        geometry={nodes.human003.geometry}
        material={materials.logoSculpture}
        position={[-21.263, -0.045, -90.278]}
        rotation={[0, -1.34, 0]}
      />
      <mesh
        geometry={nodes.entranceRoofGlass.geometry}
        material={materials['Roof Glass']}
        position={[0.892, 7.404, -8.343]}
      />
      <mesh
        geometry={nodes.island001.geometry}
        material={materials['rock.001']}
        position={[-250.715, 1.248, -296.708]}
        scale={36.713}
      />
      <mesh
        geometry={nodes.island002.geometry}
        material={materials['rock.001']}
        position={[-283.332, -0.972, -265.452]}
        rotation={[-Math.PI, 1.53, -Math.PI]}
        scale={28.756}
      />
      <mesh
        geometry={nodes.island003.geometry}
        material={materials['rock.001']}
        position={[-217.109, -0.27, -323.345]}
        rotation={[0, 1.5, 0]}
        scale={23.858}
      />
      <mesh
        geometry={nodes.island005.geometry}
        material={materials['rock.001']}
        position={[-140.402, -0.223, -40.052]}
        rotation={[0, -0.274, 0]}
        scale={42.645}
      />
      <mesh
        geometry={nodes.island004.geometry}
        material={materials['rock.001']}
        position={[-82.945, -1.914, -44.586]}
        rotation={[0, 1.252, 0]}
        scale={42.295}
      />
      <mesh
        geometry={nodes.island006.geometry}
        material={materials['rock.001']}
        position={[10.547, -0.223, -225.383]}
        rotation={[Math.PI, -0.988, Math.PI]}
        scale={36.713}
      />
      <mesh
        geometry={nodes.island008.geometry}
        material={materials['rock.001']}
        position={[106.985, -0.223, -147.611]}
        rotation={[0, -0.515, 0]}
        scale={36.713}
      />
      <mesh
        geometry={nodes.island007.geometry}
        material={materials['rock.001']}
        position={[22.29, -1.914, -185.296]}
        rotation={[0, -0.628, 0]}
        scale={42.295}
      />
      <mesh
        geometry={nodes.islandSphere.geometry}
        material={materials.sculpture}
        position={[-290.987, 7.529, -331.563]}
      />
      <mesh
        geometry={nodes.outdoorWaterBack.geometry}
        material={materials.ocean}
        position={[-120.208, 1.248, -184.074]}
        rotation={[0, -0.701, 0]}
      />
      <mesh
        geometry={nodes.outdoorWaterFront.geometry}
        material={materials.ocean}
        position={[2.279, -0.019, -70.591]}
      />
      <mesh
        geometry={nodes.plantFrontGroup.geometry}
        material={materials['plant-1.001']}
        position={[-12.401, -0.097, -5.22]}
        rotation={[-1.017, -1.093, -0.963]}
      />
      <group position={[-39.903, 0.289, -119.987]} rotation={[0, -1.313, 0]}>
        <mesh
          geometry={nodes.Mesh045.geometry}
          material={materials['Leafs_Plante_01.001']}
        />
        <mesh
          geometry={nodes.Mesh045_1.geometry}
          material={materials['plant-1.001']}
        />
        <mesh
          geometry={nodes.Mesh045_2.geometry}
          material={materials['Leafs_Plante_04.002']}
        />
      </group>
      <mesh
        geometry={nodes.sphere005.geometry}
        material={materials.sculpture}
        position={[-64.611, 2.429, -140.891]}
      />
      <mesh
        geometry={nodes.sphere006.geometry}
        material={materials.sculpture}
        position={[-38.04, 15.327, -113.847]}
      />
    </group>
  );
}

useGLTF.preload('/portfolio06.glb');