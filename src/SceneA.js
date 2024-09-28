import { BaseScene } from './senabase.js';



//import { update } from './update.js';
import { create as createBase } from './createBase.js'; // Renomear para evitar conflito com o método create
import { setCookie, getCookie, eraseCookie } from './cookies.js';
//import { getCookie } from './cookies.js';
//import { Inventory } from './inventory.js';

export class SceneA extends BaseScene {
    constructor() {
        super({ key: 'SceneA' });
    }

    preload() {
        //window.alert(Number(getCookie('fase')))
        if (Number(getCookie('fase')) == 2 || Number(getCookie('fase')) == 3) {
            this.carregar = true
            this.load.audio('fase1m', '../assets/player/ataque/sons/fase1m.mp3');
            this.load.audio('esqueletosom', '../assets/player/ataque/sons/esqueletoatakk.mp3');
            this.load.audio('esqueletosom2', '../assets/player/ataque/sons/esqueletoatakk.mp3');
            this.load.image('livroesqueleto', '../assets/box/esqueleto.png');
            this.load.image('tiles_acabamento', '../assets/map/barco2.webp');
            this.load.image('tiles_arvore', '../assets/map/barco2.webp');
            this.load.image('tiles_grass', '../assets/map/barco2.webp');
            this.load.image('tiles_water', '../assets/map/barco2.webp');
            this.load.image('tiles_barco', '../assets/map/barco2.webp');
            this.load.tilemapTiledJSON('map', '../assets/map/map.json');
            
        } else {
            this.load.audio('fase1m', '../assets/player/ataque/sons/fase1m.mp3');
            this.load.audio('esqueletosom', '../assets/player/ataque/sons/esqueleto.mp3');
            this.load.audio('esqueletosom2', '../assets/player/ataque/sons/esqueletoatakk.mp3');
            this.load.image('livroesqueleto', '../assets/box/esqueleto.png');
            this.load.image('tiles_acabamento', '../assets/map/barco2.webp');
            this.load.image('tiles_arvore', '../assets/map/dark_forest.webp');
            this.load.image('tiles_grass', '../assets/map/castle2.webp');
            this.load.image('tiles_water', '../assets/map/interior.webp');
            this.load.image('tiles_barco', '../assets/map/barco.webp');
            this.load.tilemapTiledJSON('map', '../assets/map/map.json');
        }
            //this.load.audio('fase1m', '../assets/player/ataque/sons/fase1m.mp3');
            
            
        //}
        
        
        
        super.preload();
        
        //preload.call(this);
        // Carregar recursos específicos da SceneA
    }

    create() {
        super.create();
        
        createBase.call(this);
        // Cria a zona de transição
       // this.inventory = new Inventory(this);
        this.transitionZone = this.add.zone(760, 250, 1, 1); // Coordenadas e tamanho da zona
        this.physics.world.enable(this.transitionZone);
        this.transitionZone.body.setAllowGravity(false);
        this.transitionZone.body.moves = false;

        // Adicionar uma cor de fundo para a zona de transição para visualização
        const graphics = this.add.graphics({ fillStyle: { color: 0x00ff00, alpha: 0.5 } });
        graphics.fillRect(this.transitionZone.x - this.transitionZone.width / 2, this.transitionZone.y - this.transitionZone.height / 2, this.transitionZone.width, this.transitionZone.height);

        // Detecta colisão entre o jogador e a zona de transição
        this.physics.add.overlap(this.playerContainer, this.transitionZone, transitionScene, null, this);
        //this.time.delayedCall(500, transitionScene, [], this);
        function transitionScene() {
            console.log(this.kills)
            if (this.kills >= 6) {
                //localStorage.setItem('fase', 2);
                //eraseCookie('fase');
                //setCookie('fase', 2, 1000);
                eraseCookie('fase');
                setCookie('fase', 2, 1000);
                if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
                    this.backgroundMusic.stop();
                   // this.backgroundMusic.destroy();
                }
            
                // // Carregar a nova música e tocar
                // this.backgroundMusic = this.sound.add('backgroundMusic', {
                //     loop: true, // Repetir a música em loop
                //     volume: 0.5 // Definir o volume da nova música
                // });
            
                // // Toca a nova música
                // this.backgroundMusic.play();
                // this.transmusic = false

                console.log('Transição para SceneB'); // Adicione isso para depuração
                this.kills = 0
                // Lógica para transitar para SceneB
                //this.scene.start('SceneB');
                window.location.href = "salvar.html?fase=2";
            //  solução barata para um erro barato:
            //location.reload();
            //eraseCookie('faserefaz');
            //setCookie('faserefaz', 1, 1000);

            
            }
        }

        

        // Configurar SceneA específica, se necessário
        this.add.text(760, 1050, 'Elimine os esqueletos para entrar no castelo!!', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5, 0.5);

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


        // Cria o inventário do jogador
        //this.inventory = new Inventory(this);

        // Adiciona alguns itens de exemplo ao inventário
        //this.inventory.addItem({ name: 'Poção de Vida', quantity: 1 });
        //this.inventory.addItem({ name: 'Espada', quantity: 1 });
       // Carregar os recursos da SceneB enquanto o jogador ainda está na SceneA
       if (Number(getCookie('fase')) == 2) {
        if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
            this.backgroundMusic.stop();
            this.backgroundMusic.destroy();
        }
        //this.carregamentointerno = true
       // this.load.on('complete', () => {
            //console.log('Recursos da SceneB foram carregados.');
            this.scene.start('SceneB');
            //this.carregamentointerno = false
            //this.carregado.push('b')
        //});
        
        //this.load.start();
        
      
    } else if (Number(getCookie('fase')) == 3) {
        if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
            this.backgroundMusic.stop();
            this.backgroundMusic.destroy();
        }
       // this.carregamentointerno = true
       // this.load.on('complete', () => {
        //console.log('Recursos da SceneB foram carregados.');
       // this.carregamentointerno = false
        this.scene.start('SceneC');
        //this.carregado.push('b')
        //});
        
    } else if (Number(getCookie('fase')) == 4) {

        if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
            this.backgroundMusic.stop();
            this.backgroundMusic.destroy();
        }
       // this.carregamentointerno = true
       // this.load.on('complete', () => {
        //console.log('Recursos da SceneB foram carregados.');
       // this.carregamentointerno = false
        this.scene.start('SceneD');
        //this.carregado.push('b')
        //});

    } else {
        //eraseCookie('fase');
        setCookie('fase', 1, 1000);
    }
    //window.alert(Number(getCookie('fase')))
   }

   

   

    update(time, delta) {
      
            super.update(time, delta);
       
        //this.inventory.update();
       // update.call(this, time, delta);
     
    }

   

    
}
