import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, PointLight, SphereGeometry, MeshBasicMaterial, Mesh } from 'three/build/three.module';

class SceneManager extends Scene {
  constructor(props) {

    super(props)

    this.camera = new PerspectiveCamera( 35, window.innerWidth/window.innerHeight, 0.1, 1000 );
    this.renderer = new WebGLRenderer({
      antialias		: true,	// to get smoother output
    });
    this.light = new AmbientLight(0xffffff, 0.5);
    this.pointLight = new PointLight(0xffffff, 0.5);
    this.camera.position.z = 10;
    this.add(this.light);
    this.add(this.pointLight);
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor (0x171717, 1);
  }
}

export default SceneManager;
