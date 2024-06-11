import { useMemo } from 'react';
import { Octree } from 'three/examples/jsm/math/Octree';

function useOctree(scene) {
  const octree = useMemo(() => {
    return new Octree().fromGraphNode(scene);
  }, [scene]);

  return octree;
}

export default useOctree;
