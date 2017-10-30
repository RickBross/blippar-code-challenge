import { MeshPhongMaterial, DoubleSide } from 'three/build/three.module';

import dat from 'dat-gui';

const sharedMaterial = new MeshPhongMaterial({ color: 0xF7CAC9, side: DoubleSide, roughness: 100 }).clone();

const settings = {
  'Rose Quartz': function() {
    sharedMaterial.color.setHex( 0xF7CAC9 );
  },
  'Serenity': function() {
    sharedMaterial.color.setHex( 0x91A8D0 );
  },
  'Custard': function() {
    sharedMaterial.color.setHex( 0xEAD98B );
  },
  'Lilac Gray': function() {
    sharedMaterial.color.setHex( 0x9896A4 );
  },
  'Lily Green': function() {
    sharedMaterial.color.setHex( 0xC6D499 );
  },
  'scale': 10,
  'Rotation Speed:': 0.01,
  'Generation Speed:': 1000,
  sharedMaterial: sharedMaterial
};

const gui = new dat.GUI();
gui.add(settings, 'Rose Quartz');
gui.add(settings, 'Serenity');
gui.add(settings, 'Custard');
gui.add(settings, 'Lilac Gray');
gui.add(settings, 'Lily Green');
gui.add(settings, 'scale', 0.25, 30.00);
gui.add(settings, 'Rotation Speed:', 0.00, 0.05);
gui.add(settings, 'Generation Speed:', 10, 2000);

export default settings;
