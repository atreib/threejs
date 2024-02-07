import * as THREE from "three";

class Cube {
  public mesh: THREE.Mesh;

  constructor(props: {
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
    this.mesh = new THREE.Mesh(geometry, material);
    this.move(props.position ?? { x: 0, y: 0, z: 0 });
  }

  public rotate(time: number) {
    this.mesh.rotation.x = time;
    this.mesh.rotation.y = time;
  }

  public move(props: { x?: number; y?: number; z?: number }) {
    if (props.x) this.mesh.position.x = props.x;
    if (props.y) this.mesh.position.y = props.y;
    if (props.z) this.mesh.position.z = props.z;
  }
}

export { Cube };
