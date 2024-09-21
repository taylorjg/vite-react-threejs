import * as THREE from "three";

import vertexShader from "./shaders/vertex-shader.glsl?raw";
import fragmentShader from "./shaders/fragment-shader.glsl?raw";

const GEOMETRIES = [
  new THREE.PlaneGeometry(1, 1), // square
  new THREE.ShapeGeometry(), // triangle
  new THREE.CircleGeometry(0.5, 100), // circle
];

const COLOURS = [
  new THREE.Color("red"),
  new THREE.Color("orange"),
  new THREE.Color("yellow"),
  new THREE.Color("green"),
  new THREE.Color("blue"),
  new THREE.Color("indigo"),
  new THREE.Color("violet"),
];

const currentGeometryIndex = 2;
const currentColourIndex = 6;

export const threeAppInit = async () => {
  const container = document.getElementById("three-app-root");

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.localClippingEnabled = true;
  const w = container.offsetWidth;
  const h = container.offsetHeight;
  console.log({ w, h });
  renderer.setSize(w, h);
  container.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 50);
  camera.position.z = 5;
  const scene = new THREE.Scene();
  scene.visible = false;
  scene.add(camera);

  const ready = () => {
    scene.visible = true;
  };

  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });

  const shaderMaterialParameters = {
    vertexShader,
    fragmentShader,
    uniforms: {
      colour: { value: COLOURS[currentColourIndex] },
    },
  };

  const material = new THREE.ShaderMaterial(shaderMaterialParameters);
  const mesh = new THREE.Mesh(GEOMETRIES[currentGeometryIndex], material);
  scene.add(mesh);

  const onWindowResizeHandler = () => {
    const w = container.offsetWidth;
    const h = container.offsetHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  window.addEventListener("resize", onWindowResizeHandler);

  return {
    ready,
  };
};
