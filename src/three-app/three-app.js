import EventEmitter from "events";
import * as THREE from "three";

import vertexShader from "./shaders/vertex-shader.glsl?raw";
import fragmentShader from "./shaders/fragment-shader.glsl?raw";

const makeShapeEntry = (name, geometry) => {
  const shaderMaterialParameters = {
    vertexShader,
    fragmentShader,
    uniforms: {
      colour: { value: new THREE.Color("white") },
    },
  };

  const material = new THREE.ShaderMaterial(shaderMaterialParameters);

  const mesh = new THREE.Mesh(geometry, material);
  mesh.visible = false;

  return {
    name,
    mesh,
  };
};

const makeColourEntry = (colour) => {
  return {
    name: colour,
    colour: new THREE.Color(colour.toLowerCase()),
  };
};

const SQUARE_GEOMETRY = new THREE.PlaneGeometry(1, 1);
const TRIANGLE_GEOMETRY = new THREE.ShapeGeometry();
const CIRCLE_GEOMETRY = new THREE.CircleGeometry(0.5, 100);

const SHAPES = [
  makeShapeEntry("Square", SQUARE_GEOMETRY),
  makeShapeEntry("Triangle", TRIANGLE_GEOMETRY),
  makeShapeEntry("Circle", CIRCLE_GEOMETRY),
];

const COLOURS = [
  makeColourEntry("Red"),
  makeColourEntry("Orange"),
  makeColourEntry("Yellow"),
  makeColourEntry("Green"),
  makeColourEntry("Blue"),
  makeColourEntry("Indigo"),
  makeColourEntry("Violet"),
];

const SETTINGS_CHANGED_EVENT_NAME = "settings-changed";

let currentShapeIndex = 0;
let currentColourIndex = 0;

const wrapIndex = (x, m) => {
  if (x >= m) return 0;
  if (x < 0) return m - 1;
  return x;
};

export const threeAppInit = async (settings = {}) => {
  const initialShapeIndex = settings.shape ?? 0;
  const initialColourIndex = settings.colour ?? 0;

  const eventEmitter = new EventEmitter();

  const container = document.getElementById("three-app-root");

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.localClippingEnabled = true;
  const w = container.offsetWidth;
  const h = container.offsetHeight;
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

  for (const shapeEntry of SHAPES) {
    scene.add(shapeEntry.mesh);
  }

  const adjustToNewDimensions = () => {
    const w = container.offsetWidth;
    const h = container.offsetHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  const onWindowResizeHandler = () => {
    console.log("[onWindowResizeHandler]");
    adjustToNewDimensions();
  };

  window.addEventListener("resize", onWindowResizeHandler);

  const onScreenOrientationChangeHandler = () => {
    console.log("[onScreenOrientationChangeHandler]");
    adjustToNewDimensions();
  };

  screen.orientation.addEventListener(
    "change",
    onScreenOrientationChangeHandler
  );

  const showShape = (index) => {
    for (const shapeEntry of SHAPES) {
      shapeEntry.mesh.visible = false;
    }

    currentShapeIndex = index;

    const shapeEntry = SHAPES[currentShapeIndex];
    const colourEntry = COLOURS[currentColourIndex];

    shapeEntry.mesh.visible = true;
    shapeEntry.mesh.material.uniforms.colour.value = colourEntry.colour;

    emitSettingsChangedEvent();
  };

  const showColour = (index) => {
    currentColourIndex = index;
    showShape(currentShapeIndex);
  };

  const cycleShapeForwards = () => {
    const newShapeIndex = wrapIndex(currentShapeIndex + 1, SHAPES.length);
    showShape(newShapeIndex);
  };

  const cycleShapeBackwards = () => {
    const newShapeIndex = wrapIndex(currentShapeIndex - 1, SHAPES.length);
    showShape(newShapeIndex);
  };

  const cycleColourForwards = () => {
    const newColourIndex = wrapIndex(currentColourIndex + 1, COLOURS.length);
    showColour(newColourIndex);
  };

  const cycleColourBackwards = () => {
    const newColourIndex = wrapIndex(currentColourIndex - 1, COLOURS.length);
    showColour(newColourIndex);
  };

  const getSettings = () => {
    const currentShape = SHAPES[currentShapeIndex];
    const currentColour = COLOURS[currentColourIndex];

    return {
      currentShapeIndex,
      currentColourIndex,
      currentShape,
      currentColour,
    };
  };

  const addSettingsChangedListener = (listener) => {
    eventEmitter.on(SETTINGS_CHANGED_EVENT_NAME, listener);
  };

  const removeSettingsChangedListener = (listener) => {
    eventEmitter.off(SETTINGS_CHANGED_EVENT_NAME, listener);
  };

  const emitSettingsChangedEvent = () => {
    eventEmitter.emit(SETTINGS_CHANGED_EVENT_NAME, getSettings());
  };

  showShape(initialShapeIndex);
  showColour(initialColourIndex);

  return {
    ready,
    cycleShapeForwards,
    cycleShapeBackwards,
    cycleColourForwards,
    cycleColourBackwards,
    showShape,
    showColour,
    getSettings,
    addSettingsChangedListener,
    removeSettingsChangedListener,
  };
};
