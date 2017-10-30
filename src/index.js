import { Scene, PerspectiveCamera, WebGLRenderer, Vector3, Euler, SphereGeometry, Mesh } from 'three/build/three.module';
import SceneManager from './managers/Scene.Manager';
import CubeManager from './managers/Cube.Manager';
import cubeFactory from './factories/Cube.Factory';
import settings from './settings';

const scene = new SceneManager();
const cubes = new CubeManager();

scene.camera.position.set(125, 125, -180);

scene.camera.lookAt({x: 125, y: 125,z: 125});

scene.add(cubes);

// render loop

let last = 0; // timestamp of the last render() call

const update = (now) => {

    requestAnimationFrame(update);

    scene.renderer.render(scene, scene.camera);

    for (let i = 0; i < cubes.children.length; i++) {
      cubes.children[i].scale.set(settings.scale, settings.scale, settings.scale)
      cubes.children[i].rotation.x += settings['Rotation Speed:'];
    }

    if(!last || now - last >= settings['Generation Speed:']) {
      createCube(now);
    }
};

function createCube(now) {
    const newCube = cubeFactory.create({
      position: new Vector3(Math.random() * 250, Math.random() * 250, Math.random() * 250),
      rotation: new Euler(Math.random() * 2, Math.random() * 2, Math.random() * 2),
      scale: new Vector3(settings.scale, settings.scale, settings.scale),
      material: settings.sharedMaterial
    });
    last = now;
    console.log(newCube);
    cubes.add(newCube);
}

// function calls
update();
