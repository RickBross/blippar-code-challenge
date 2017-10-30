import MyCube from '../modules/Mesh.Cube'
import { MeshBasicMaterial, Vector3, Euler } from 'three/build/three.module'

export default {
  create: (config) => {

    const settings = Object.assign({
      position: new Vector3(0,0,0),
      rotation: new Euler(0,0,0),
      scale: new Euler(0,0,0),
    }, config);

    const newCube = new MyCube(settings.material || new MeshBasicMaterial({ color: 0xFF0000 }));

    console.log('set pos', settings.position);

    newCube.position.set(settings.position.x, settings.position.y, settings.position.z);
    newCube.rotation.set(settings.rotation.x, settings.rotation.y, settings.rotation.z);
    newCube.scale.set(settings.scale.x, settings.scale.y, settings.scale.z);

    return newCube
  }
};
