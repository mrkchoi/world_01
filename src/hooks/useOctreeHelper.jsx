import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { useEffect } from 'react';
import { OctreeHelper } from 'three/examples/jsm/helpers/OctreeHelper';

function useOctreeHelper(octree) {
  const { scene } = useThree();

  useEffect(() => {
    const helper = new OctreeHelper(octree, 'yellow');
    helper.name = 'octreeHelper';
    scene.add(helper);

    return () => {
      scene.remove(helper);
    };
  }, [octree, scene]);

  useControls('Octree Helper', {
    visible: {
      value: false,
      onChange: (value) => {
        scene.traverse((child) => {
          if (child.name === 'octreeHelper') {
            child.visible = value;
          }
        });
      },
    },
  });
}

export default useOctreeHelper;
