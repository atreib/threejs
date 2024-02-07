import * as THREE from "three";
import { Cube } from "./cube-functional";

function makeLine() {
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  const points: THREE.Vector3[] = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return new THREE.Line(geometry, material);
}

function makeLight() {
  const color = 0xffffff;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  return light;
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  40
);
camera.position.z = 20;

const cube1 = Cube({
  size: {
    width: 1,
    height: 1,
    depth: 1,
  },
  color: 0x443388,
});

const cube2 = Cube({
  size: {
    width: 1,
    height: 1,
    depth: 1,
  },
  position: {
    x: -5,
  },
  color: 0xff0000,
});

scene.add(cube1.mesh);
scene.add(cube2.mesh);
scene.add(makeLine());
scene.add(makeLight());

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate(time: number) {
  time *= 0.001; // convert time to seconds

  cube1.rotate({ time });
  cube2.rotate({ time });

  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
}

export { animate };
