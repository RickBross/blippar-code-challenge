import { CubeGeometry, Mesh } from 'three/build/three.module';

class MyCube extends Mesh {
  constructor(material) {
    super(
      new CubeGeometry( 1, 1, 1 ),
      material || new MeshBasicMaterial({ color: 0xFF0000 })
    );
  }
}

export default MyCube;
