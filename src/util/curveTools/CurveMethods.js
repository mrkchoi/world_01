import * as THREE from 'three';
import { loadJSON } from './JSONHelper';

export async function loadCurveFromJSON(jsonPath, color = 0xffffff) {
  let curveJSON = await loadJSON(jsonPath);
  let curve = createCurveFromJSON(curveJSON);
  let curveTubeMesh = getTubeFromCurve(curve, color);

  let curveAndMesh = {
    curve: curve,
    mesh: curveTubeMesh,
  };
  return curveAndMesh;
}

function createCurveFromJSON(json) {
  // Extract the vertices array from the JSON object
  const vertices = json.points;

  // Create an empty array to store THREE.Vector3 instances
  const points = [];

  // Iterate over the vertices and push THREE.Vector3 instances to the points array
  for (let i = 0; i < vertices.length; i += 3) {
    const x = vertices[i].x;
    const y = vertices[i].y;
    const z = vertices[i].z;
    points.push(new THREE.Vector3(x, y, z));
  }

  // Create a CatmullRomCurve3 using the points array
  const curve = new THREE.CatmullRomCurve3(points);

  curve.closed = json.closed;

  return curve;
}

function getTubeFromCurve(curve, color = 0xffffff) {
  const geometry = new THREE.TubeGeometry(curve, 100, 0.05, 8, curve.closed);
  const material = new THREE.MeshBasicMaterial({
    color: color,
    wireframe: true,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
}
