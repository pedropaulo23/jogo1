import { BaseScene } from '../senabase.js';
import { createEnemyContainer } from '../inimigos.js';
//import { update } from './updateB.js';
import { create as createB } from './createC.js'; // Renomear para evitar conflito com o método create
import { setCookie, getCookie, eraseCookie } from '../cookies.js';
export class SceneC extends BaseScene {
    constructor() {
        super({ key: 'SceneC' });
    }

    preload() {
        
        
        //this.load.start();  
        //this.carregar = 3
        //if (Number(getCookie('fase')) == 3) {
        
        
        //this.load.start();
        //}
        super.preload();
        
        // Carregar recursos específicos da SceneB
    }

    create() {
        
        super.create();
        createB.call(this);


        // Cria a zona de transição
        this.transitionZone = this.add.zone(634, 282, 30, 30); // Coordenadas e tamanho da zona
        this.physics.world.enable(this.transitionZone);
        this.transitionZone.body.setAllowGravity(false);
        this.transitionZone.body.moves = false;

        // Adicionar uma cor de fundo para a zona de transição para visualização
        //const graphics = this.add.graphics({ fillStyle: { color: 0x00ff00, alpha: 0.5 } });
       // graphics.fillRect(this.transitionZone.x - this.transitionZone.width / 2, this.transitionZone.y - this.transitionZone.height / 2, this.transitionZone.width, this.transitionZone.height);

        // Detecta colisão entre o jogador e a zona de transição
        this.physics.add.overlap(this.playerContainer, this.transitionZone, transitionScene, null, this);
        //this.time.delayedCall(500, transitionScene, [], this);
        
        function transitionScene() {
            console.log(this.kills)
            if (this.kills == 34) {
                // localStorage.setItem('fase', 3);
                //localStorage.setItem('fase', 2);
                eraseCookie('fase');
                setCookie('fase', 4, 1000);
                
                
                if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
                    this.backgroundMusic.stop();
                }
            
                // // Carregar a nova música e tocar
                // this.backgroundMusic = this.sound.add('backgroundMusic', {
                //     loop: true, // Repetir a música em loop
                //     volume: 0.5 // Definir o volume da nova música
                // });
            
                // // Toca a nova música
                // this.backgroundMusic.play();
                // this.transmusic = false
            console.log('Transição para SceneC'); // Adicione isso para depuração
            this.kills = 0
            // Lógica para transitar para SceneB
            //this.scene.start('SceneC');
            //location.reload();
            window.location.href = "salvar.html?fase=4";
            
            }
        }



        // Configurar SceneB específica, se necessário
    //this.add.text(510, 210, 'Escolha a porta que leva ao PORTAL, ou morra!!', { fontSize: '32px', fill: '#f00' }).setOrigin(0.5, 0.5);

        // Configurar o joystick virtual com as imagens personalizadas
        this.joyStick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
            x: 100, // Posicione o joystick no canto inferior esquerdo
            y: window.innerHeight - 100,
            radius: 100,
            base: this.add.image(0, 0, 'base2').setDisplaySize(110, 110).setDepth(999),
            thumb: this.add.image(0, 0, 'thumb2').setDisplaySize(48, 48).setDepth(1000),
            // dir: '8dir',   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
            // forceMin: 16,
            // enable: true
        })//.on('update', this.updateJoystickState, this);

        this.cursorKeys = this.joyStick.createCursorKeys();
        

        // Listener para reposicionar o joystick virtual
        this.input.on('pointerdown', pointer => {
            
            if (pointer.x <= this.game.config.width / 2) {    
            
            this.joyStick.x = pointer.x;
            this.joyStick.y = pointer.y;
            this.joyStick.base.x = pointer.x;
            this.joyStick.base.y = pointer.y;
            this.joyStick.thumb.x = pointer.x;
            this.joyStick.thumb.y = pointer.y;
            }
      
        });

        // Listener para retornar o joystick virtual à sua posição original
        this.input.on('pointerup', pointer => {
            this.joyStick.x = 100;
            this.joyStick.y = window.innerHeight - 100;
            this.joyStick.base.x = 100;
            this.joyStick.base.y = window.innerHeight - 100;
            this.joyStick.thumb.x = 100;
            this.joyStick.thumb.y = window.innerHeight - 100;
        });

        const item = this.getItemInSlot(0, 1);
            if (item) {
                this.updateInventoryItem(1, 'item2', 'Elemento Gelo', 'O frio cortante que congela tudo ao seu redor. Domine a fúria das tempestades geladas e transforme seus inimigos em estátuas de gelo. O poder implacável do inverno está em suas mãos!(Enfraquece inimigos).');
        }
    }

    update(time, delta) {
        super.update(time, delta);
        
    }

    transitionToNextScene(player, exitPoint) {
        // Implementar lógica para transição, se houver mais cenas
    }
}
