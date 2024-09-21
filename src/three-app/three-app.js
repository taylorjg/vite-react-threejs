import * as THREE from "three";

import vertexShader from "./shaders/vertex-shader.glsl?raw";
import fragmentShader from "./shaders/fragment-shader.glsl?raw";

const SQUARE_GEOMETRY = new THREE.PlaneGeometry(1, 1);
const TRIANGLE_GEOMETRY = new THREE.ShapeGeometry();
const CIRCLE_GEOMETRY = new THREE.CircleGeometry(0.5, 100);

// eslint-disable-next-line prettier/prettier
const SHAPES = [
  SQUARE_GEOMETRY,
  TRIANGLE_GEOMETRY,
  CIRCLE_GEOMETRY
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

let currentShapeIndex = 2;
let currentColourIndex = 6;

const mod = (x, m) => {
  if (x >= m) return 0;
  if (x < 0) return m - 1;
  return x;
};

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
  const mesh = new THREE.Mesh(SHAPES[currentShapeIndex], material);
  scene.add(mesh);

  const onWindowResizeHandler = () => {
    const w = container.offsetWidth;
    const h = container.offsetHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  window.addEventListener("resize", onWindowResizeHandler);

  const cycleShapeForwards = () => {
    currentShapeIndex = mod(currentColourIndex + 1, SHAPES.length);
  };

  const cycleShapeBackwards = () => {
    currentShapeIndex = mod(currentColourIndex - 1, SHAPES.length);
  };

  const cycleColourForwards = () => {
    console.log({ currentColourIndex });
    currentColourIndex = mod(currentColourIndex + 1, COLOURS.length);
    console.log({ currentColourIndex });
    mesh.material.uniforms.colour.value = COLOURS[currentColourIndex];
  };

  const cycleColourBackwards = () => {
    console.log({ currentColourIndex });
    currentColourIndex = mod(currentColourIndex - 1, COLOURS.length);
    console.log({ currentColourIndex });
    mesh.material.uniforms.colour.value = COLOURS[currentColourIndex];
  };

  return {
    ready,
    cycleShapeForwards,
    cycleShapeBackwards,
    cycleColourForwards,
    cycleColourBackwards,
  };
};
