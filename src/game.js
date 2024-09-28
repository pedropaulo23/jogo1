import { SceneA } from './SceneA.js';
import { SceneB } from './sceneb/SceneB.js';
import { SceneC } from './scenec/SceneC.js';
import { SceneD } from './scened/scened.js';
//import RexUIPlugin from '../assets/plugins/rexuiplugin.min.js';

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH
  },
  input: {
    activePointers: 5 // Permite múltiplos ponteiros ativos
  },
  scene: [SceneA, SceneB, SceneC, SceneD],
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 },
          debug: false
      }
   }//, plugins: {
   // scene: [
    //    { key: 'rexuiplugin', plugin: window.rexUI, mapping: 'rexUI' }
    //]
//}
};

const game = new Phaser.Game(config);
