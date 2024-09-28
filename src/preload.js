import { getCookie } from './cookies.js';
export function preload() {
    // Adicionar uma barra de progresso
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    const { width, height } = this.cameras.main;

    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(width / 2 - 160, height / 2 - 25, 320, 50);

    // Texto de carregamento
    const loadingText = this.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: 'Feitiço de auto invocação...',
        style: {
            font: '20px monospace',
            fill: '#ffffff'
        }
    }).setOrigin(0.5, 0.5);

    // Texto de porcentagem
    const percentText = this.make.text({
        x: width / 2,
        y: height / 2,
        text: '0%',
        style: {
            font: '18px monospace',
            fill: '#ffffff'
        }
    }).setOrigin(0.5, 0.5);

    // Desenhar pentagrama com círculo abaixo da barra de carregamento
    drawPentagram(this, width / 2, height / 2 + 100, 50, 0xffffff);
    //this.carregamentointerno = false
    // Evento que ocorre durante o carregamento dos recursos
    this.load.on('progress', function (value) {
        //if (this.carregamentointerno == false) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width / 2 - 150, height / 2 - 15, 300 * value, 30);
        //}
        
    });

    // Evento que ocorre quando o carregamento está completo
    this.load.on('complete', function () {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
    });

    // Carregar todos os recursos do jogo
    carregarRecursos.call(this);
}

function carregarRecursos() {
    // Carregar o arquivo JSON do mapa criado no Tiled
    
    
    

    
    // Carregar as imagens dos tilesets usados no mapa
    
    this.load.image('tiles_penta', '../assets/map/penta.webp');
    
    
    
    
    // bbbbbbbbbbbbbb
    
    
    //  cccccccccccccccccccccc
    
    

    this.load.plugin('rexvirtualjoystickplugin', '../assets/plugins/joystick.js', true);
     // Carrega o plugin rexUI
    //this.load.scenePlugin('rexuiplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js', 'rexUI', 'rexUI');

    this.load.image('base2', '../assets/botoes/base.png');
    this.load.image('thumb2', '../assets/botoes/thumb.png');
 
    //this.load.plugin('rexvirtualjoystickplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js', true);
    //this.load.image('base', '../assets/image/base.png');
    //this.load.image('thumb', '../assets/image/thumb.png');
    
    this.load.image('item_bg', '../assets/player/enemy/dragao/dialogo.png');
    this.load.image('item', '../assets/player/ataque/arma.png');


    // Carregar a spritesheet do personagem
    if (getCookie('code') == '1') {
    
        this.load.spritesheet('player', '../assets/player/skin/idlezumbi.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('atak', '../assets/player/skin/atakzumbi.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('espadacorpo', '../assets/player/skin/espadazumbi.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('chapeu', '../assets/player/skin/chapeu1.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('atkchapeu', '../assets/player/skin/chapeu1.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('espadachapeu', '../assets/player/skin/chapeu1.png', { frameWidth: 64, frameHeight: 64 });
    } else {

        this.load.spritesheet('player', '../assets/player/movimento/idle.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('atak', '../assets/player/ataque/atak.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('espadacorpo', '../assets/player/ataque/espadacorpo.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('chapeu', '../assets/player/movimento/chapeu1.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('atkchapeu', '../assets/player/ataque/atkchapeu.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('espadachapeu', '../assets/player/ataque/espadachapeu.png', { frameWidth: 64, frameHeight: 64 });
    }
    // peças:
    
    this.load.spritesheet('pernas', '../assets/player/movimento/pernas.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('pes', '../assets/player/movimento/pes.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('blusa', '../assets/player/movimento/blusa.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('arma1', '../assets/player/ataque/arma.png', { frameWidth: 192, frameHeight: 192 });
    this.load.spritesheet('arma5', '../assets/player/ataque/arma5.png', { frameWidth: 192, frameHeight: 192 });
    this.load.spritesheet('atkblusa', '../assets/player/ataque/atkblusa.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('atkpes', '../assets/player/ataque/atkpes.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('atkperna', '../assets/player/ataque/atkperna.png', { frameWidth: 64, frameHeight: 64 });
    

    this.load.spritesheet('espada', '../assets/player/ataque/espada.png', { frameWidth: 192, frameHeight: 192 });
    this.load.spritesheet('espada5', '../assets/player/ataque/espada5.png', { frameWidth: 192, frameHeight: 192 });

    this.load.spritesheet('espadablusa', '../assets/player/ataque/espadablusa.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('espadape', '../assets/player/ataque/espadape.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('espadaperna', '../assets/player/ataque/espadaperna.png', { frameWidth: 64, frameHeight: 64 });
    
   

    // morte:
    this.load.spritesheet('corpof', '../assets/player/morte/corpo.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('chapeuf', '../assets/player/morte/chapeu.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('camisaf', '../assets/player/morte/camisa.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('pesf', '../assets/player/morte/pes.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('pernaf', '../assets/player/morte/perna.png', { frameWidth: 64, frameHeight: 64 });

    // magicas:
    this.load.spritesheet('magia1', '../assets/player/ataque/magia1.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('magia5', '../assets/player/ataque/magia5.png', { frameWidth: 100, frameHeight: 100 });
    if (Number(getCookie('fase')) < 2) {
    // inimigos:
    this.load.spritesheet('enemy', '../assets/player/enemy/esqueleto.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('enemy_dead_fire', '../assets/player/enemy/esqueleto_morto_fogo.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('enemy_dead', '../assets/player/enemy/esqueleto_morto.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('enemy_ataque', '../assets/player/ataque/ataque.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('faca', '../assets/player/enemy/arma1.png', { frameWidth: 64, frameHeight: 64 });

    
    }
    
    this.load.spritesheet('magia1eft', '../assets/player/ataque/flames.png', { frameWidth: 16, frameHeight: 24 });
    this.load.spritesheet('magia5eft', '../assets/player/ataque/flames5.png', { frameWidth: 16, frameHeight: 24 });
    if (Number(getCookie('fase')) == 2) {
    // demonio:
    this.load.spritesheet('demonio', '../assets/player/enemy/demonio.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('voador', '../assets/player/enemy/voador.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('baby', '../assets/player/enemy/baby.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('invocador', '../assets/player/enemy/zombie.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('brain', '../assets/player/enemy/brain.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('costela', '../assets/player/enemy/costela.png', { frameWidth: 64, frameHeight: 64 });
    this.load.audio('fase1m', '../assets/player/ataque/sons/fase1m.mp3');
    this.load.audio('fantasmasom', '../assets/player/ataque/sons/fantasma.mp3');
    this.load.audio('fase1m', '../assets/player/ataque/sons/fase1m.mp3');
    this.load.image('tiles_prison', '../assets/map2/prison.webp');
    this.load.image('tiles_bebe', '../assets/player/enemy/baby.png');
    this.load.tilemapTiledJSON('mapB', '../assets/map2/map.json');
    this.load.image('livrozumbi', '../assets/box/zumbi.png');
    this.load.image('tiles_blocos', '../assets/map2/blocos.webp');
    }
    // dragao: 
    if (Number(getCookie('fase')) == 3) {
    this.load.spritesheet('dragaoesquerda', '../assets/player/enemy/dragao/esquerda.webp', { frameWidth: 205, frameHeight: 161 });
    this.load.spritesheet('dragaodireita', '../assets/player/enemy/dragao/direita.webp', { frameWidth: 205, frameHeight: 161 });
    this.load.spritesheet('dragaofrente', '../assets/player/enemy/dragao/ataque.webp', { frameWidth: 205, frameHeight: 161 });
    this.load.spritesheet('dragaocosta', '../assets/player/enemy/dragao/ataque2.webp', { frameWidth: 205, frameHeight: 161 });
    this.load.spritesheet('dragcorpoasa', '../assets/player/enemy/dragao/asas.webp', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('dragcorpocabelo', '../assets/player/enemy/dragao/cabelo.webp', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('dragcorpo', '../assets/player/enemy/dragao/corpo.webp', { frameWidth: 64, frameHeight: 64 });
    this.load.audio('asasom', '../assets/player/enemy/dragao/asasom.mp3');
    this.load.audio('dragsom', '../assets/player/enemy/dragao/rugido.mp3');
    this.load.audio('dragmortesom', '../assets/player/enemy/dragao/morte.mp3');
    this.load.image('sword', '../assets/player/enemy/dragao/dialogo.webp');
    this.load.audio('fase3m', '../assets/player/ataque/sons/fase3m.mp3');
    this.load.image('dragaofala', '../assets/player/enemy/dragao/dialogo.webp');
    //this.load.image('tiles_blood', '../assets/map3/blood.png');
    this.load.tilemapTiledJSON('mapC', '../assets/map3/map.json');
    this.load.image('livrodragao', '../assets/box/dragao.png');
    this.load.image('livrodragao2', '../assets/box/gelo.png');
    this.load.image('tiles_blocos', '../assets/map2/blocos.webp');
    }
    if (Number(getCookie('fase')) == 4) {
        this.load.image('tiles_terra', '../assets/map4/dark_forest.png');
        this.load.image('tiles_enfeites', '../assets/map4/blocos.png');
        //this.load.image('tiles_enfeites', '../assets/player/enemy/baby.png');
        this.load.tilemapTiledJSON('mapD', '../assets/map4/map.json');
        this.load.spritesheet('palhaco', '../assets/player/enemy/palhaco.png', { frameWidth: 64, frameHeight: 64 });
        this.load.audio('fase4m', '../assets/map4/fundo.ogg');
        this.load.audio('riso', '../assets/map4/riso.ogg');
        this.load.audio('grito', '../assets/map4/grito.ogg');
        this.load.audio('fundobase', '../assets/map4/fundobase.ogg')
     }

    
    // imagens dos botões
    this.load.image('movementButton', '../assets/botoes/cursorofc.png');
    this.load.image('attackButton', '../assets/botoes/ataque.png');
    this.load.image('attackButton5', '../assets/botoes/ataque2.png');
    this.load.image('elementbutton', '../assets/botoes/btnelement.png');
    this.load.image('attackButton2', '../assets/botoes/btnespada.png');
    this.load.image('attackButton25', '../assets/botoes/btnespada5.png');
    
    this.load.image('hit6', '../assets/botoes/hit6.png');
    this.load.image('died', '../assets/botoes/Desencarnou.png');
    
    this.load.image('choice1', '../assets/player/ataque/escolhas/escolha1.png');
    this.load.image('choice2', '../assets/player/ataque/escolhas/escolha2.png');
    this.load.image('choice3', '../assets/player/ataque/escolhas/escolha3.png');
    this.load.image('choice4', '../assets/player/ataque/escolhas/escolha4.png');
    

    // sons:
    this.load.audio('magia1som1', '../assets/player/ataque/sons/fire.mp3');
    this.load.audio('magia1som21', '../assets/player/ataque/sons/fire2.mp3');
    this.load.audio('magia1som5', '../assets/player/ataque/sons/ice.mp3');
    this.load.audio('magia1som25', '../assets/player/ataque/sons/ice2.mp3');
    this.load.audio('pessom', '../assets/player/ataque/sons/pes.mp3');
    
    this.load.audio('espadasom', '../assets/player/ataque/sons/espada.mp3');
    this.load.audio('danosom', '../assets/player/ataque/sons/hit1.mp3');
    this.load.audio('diesom', '../assets/player/ataque/sons/die1.mp3');
    
    

    this.load.audio('backgroundMusic', '../assets/player/ataque/sons/fundo.mp3');
    
    //this.load.audio('fase2m', '../assets/player/ataque/sons/fase2m.mp3');
    

    //this.load.image('potion', '../assets/player/ataque/magia1.png');
    //dragc:
    
    

   
    // load start 
    this.load.start();
}

function drawPentagram(scene, x, y, size, color) {
    const graphics = scene.add.graphics({ lineStyle: { width: 2, color: color } });
    graphics.beginPath();

    // Calcular os pontos do pentagrama de cabeça para baixo
    const angle = (Math.PI * 2) / 5;
    const offset = -Math.PI / 2; // Ajuste o offset para rotacionar o pentagrama de cabeça para baixo
    const points = [];
    for (let i = 0; i < 5; i++) {
        const currentAngle = i * angle - offset;
        points.push({
            x: x + size * Math.cos(currentAngle),
            y: y + size * Math.sin(currentAngle)
        });
    }

    // Conectar os pontos do pentagrama
    for (let i = 0; i < 5; i++) {
        graphics.moveTo(points[i].x, points[i].y);
        graphics.lineTo(points[(i + 2) % 5].x, points[(i + 2) % 5].y);
    }

    graphics.closePath();
    graphics.strokePath();

    // Desenhar círculo ao redor do pentagrama
    graphics.lineStyle(2, color);
    graphics.strokeCircle(x, y, size * 1.1);
}

