import * as THREE from "three";

import vertexShader from "./shaders/vertex-shader.glsl?raw";
import fragmentShader from "./shaders/fragment-shader.glsl?raw";

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

  const geometry = new THREE.PlaneGeometry(1, 1);
  const shaderMaterialParameters = { vertexShader, fragmentShader };
  const material = new THREE.ShaderMaterial(shaderMaterialParameters);
  const mesh = new THREE.Mesh(geometry, material);
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
