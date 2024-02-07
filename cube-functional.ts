import * as THREE from "three";

function rotate(mesh: THREE.Mesh, props: { time: number }) {
  mesh.rotation.x = props.time;
  mesh.rotation.y = props.time;
}

function move(mesh: THREE.Mesh, props: { x?: number; y?: number; z?: number }) {
  if (props.x) mesh.position.x = props.x;
  if (props.y) mesh.position.y = props.y;
  if (props.z) mesh.position.z = props.z;
}

function Cube(props: {
  size: {
    width: number;
    height: number;
    depth: number;
  };
  position?: { x?: number; y?: number; z?: number };
  color: THREE.ColorRepresentation;
}) {
  const geometry = new THREE.BoxGeometry(...Object.values(props.size.width));
  const material = new THREE.MeshPhongMaterial(props);
  const mesh = new THREE.Mesh(geometry, material);
  move(mesh, props.position ?? { x: 0, y: 0, z: 0 });

  return {
    mesh,
    rotate: (props: Parameters<typeof rotate>[1]) => rotate(mesh, props),
    move: (props: Parameters<typeof move>[1]) => move(mesh, props),
  };
}

export { Cube };
