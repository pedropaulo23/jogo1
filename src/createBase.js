import { createAnimations } from './animacao.js';
import { createEnemyContainer } from './inimigos.js';
import { setCookie, getCookie, eraseCookie } from './cookies.js';

export function create() {
    //eraseCookie('fase');
    //setCookie('fase', 1, 1000);
    this.fase = Number(getCookie('fase'))
    this.ossom = this.sound.add('esqueletosom');
    this.ossom2 = this.sound.add('esqueletosom2');
    

    // // Adicionar a música de fundo
    this.backgroundMusic = this.sound.add('backgroundMusic', {
        loop: true, // Repetir a música em loop
        volume: 0.5 // Volume da música
    });

    // Tocar a música de fundo
    this.backgroundMusic.play();
    

    // Cria o mapa a partir de um arquivo JSON previamente carregado
    const map = this.make.tilemap({ key: 'map' });
    
    // Carrega os tilesets utilizados no mapa
    const grassTileset = map.addTilesetImage('grass', 'tiles_grass');
    const waterTileset = map.addTilesetImage('material', 'tiles_water');
    const barcoTileset = map.addTilesetImage('barco', 'tiles_barco');
    const pentaTileset = map.addTilesetImage('penta', 'tiles_penta');
    const arvoreTileset = map.addTilesetImage('arvore', 'tiles_arvore');
    //const tetoTileset = map.addTilesetImage('teto', 'tiles_teto');
    const acabamentoTileset = map.addTilesetImage('acabamento', 'tiles_acabamento');
    const imagensTileset = [grassTileset, waterTileset, barcoTileset, pentaTileset, acabamentoTileset, arvoreTileset];

    // Cria as camadas do mapa a partir dos tilesets
    const groundLayer = map.createLayer('grass', imagensTileset, 0, 0);
    const obstaclesLayer = map.createLayer('water', imagensTileset, 0, 0);
    const wallLayer = map.createLayer('muro', imagensTileset, 0, 0);
    const constructionLayer = map.createLayer('obra', imagensTileset, 0, 0);
    const decorationLayer = map.createLayer('enfeite', imagensTileset, 0, 0);
    const decorationTeto = map.createLayer('teto', imagensTileset, 0, 0);

    // Define as propriedades de colisão para as camadas específicas do mapa
    obstaclesLayer.setCollisionByProperty({ collider: true });
    wallLayer.setCollisionByProperty({ collider: true });
    constructionLayer.setCollisionByProperty({ collider: true });
    decorationLayer.setCollisionByProperty({ collider: true });

    // Define os limites do mundo de física para o tamanho do mapa
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;




    //portall
    
     

    // Habilitar o sistema de luzes
    //this.lights.enable().setAmbientColor(0x555555);

    // Adicionar uma luz na posição inicial do jogador
    //const light = this.lights.addLight(760, 1250, 200).setColor(0xffffff).setIntensity(3);
    // Cria o sprite do jogador e do chapéu
    this.player = this.add.sprite(0, 0, 'player');
    this.chapeu = this.add.sprite(0, 0, 'chapeu');
    this.blusa = this.add.sprite(0, 0, 'blusa');
    this.pernas = this.add.sprite(0, 0, 'pernas');
    this.pes = this.add.sprite(0, 0, 'pes');
    this.arma = this.add.sprite(0, 0, 'espada');
    this.atkblusa = this.add.sprite(0, 0, 'atkblusa');
    this.atkchapeu = this.add.sprite(0, 0, 'atkchapeu');
    this.atkperna = this.add.sprite(0, 0, 'atkperna');
    this.atkpes = this.add.sprite(0, 0, 'atkpes');
    

    // Define a visibilidade dos sprites de ataque como false
    this.arma.setVisible(false);
    this.atkblusa.setVisible(false);
    this.atkchapeu.setVisible(false);
    this.atkperna.setVisible(false);
    this.atkpes.setVisible(false);

    // Cria um contêiner para agrupar o jogador e o chapéu
    this.playerContainer = this.add.container(760, 1250, [this.player, this.chapeu, this.blusa, this.pernas, this.pes, this.atkblusa, this.atkchapeu, this.atkperna, this.atkpes, this.arma]);
    // Habilitar a iluminação no sprite do jogador
    //this.player.setPipeline('Light2D');

    // Fazer com que a luz siga o jogador
    //this.lights.addLight(this.player.x, this.player.y, 200).setColor(0xffffff).setIntensity(3);

    this.physics.world.enable(this.playerContainer);

    // Define o tamanho e as propriedades de colisão do contêiner
    this.playerContainer.setSize(this.player.width, this.player.height);
    this.playerContainer.body.setCollideWorldBounds(true);
    this.playerContainer.body.setImmovable(true);


    // Criar a barra de vida do jogador
    this.player.maxHealth = 100;
    this.player.currentHealth = 100;

    // Fundo da barra de vida
    const healthBarWidth = 160
    this.player.healthBarBg = this.add.graphics();
    this.player.healthBarBg.fillStyle(0xff0000, 1);
    this.player.healthBarBg.fillRect(50, 10, healthBarWidth, 10); // Ajuste conforme necessário
    this.player.healthBarBg.setScrollFactor(0);
    this.player.healthBarBg.setDepth(1010);

    // Barra de vida
    this.player.healthBar = this.add.graphics();
    this.player.healthBar.fillStyle(0x00ff00, 1);
    this.player.healthBar.fillRect(50, 10, healthBarWidth, 10); // Ajuste conforme necessário
    this.player.healthBar.setScrollFactor(0);
    this.player.healthBar.setDepth(1011);


    // Ajustar a área de colisão do contêiner
    const collisionWidth = this.player.width / 2;
    const collisionHeight = this.player.height / 2; // Ajuste conforme necessário
    this.playerContainer.body.setSize(collisionWidth, collisionHeight);
    this.playerContainer.body.setOffset(16, this.player.height / 2);

    // Função para criar um inimigo contêiner
    

    // Criação de um grupo de inimigos
    this.enemies = this.physics.add.group({
        runChildUpdate: true
    });

    // Criação de alguns inimigos
    const seeds = [[840, 385], [970, 545], [714, 385], [840, 545], [710, 545], [580, 545]];
    for (let i = 0; i < seeds.length; i++) {
        const [x, y] = seeds[i];
        const enemy = createEnemyContainer(this, x, y);
        this.enemies.add(enemy);
    }

    // Criação de um grupo de projéteis
    this.projectiles = this.physics.add.group({
        defaultKey: 'magia1',
        maxSize: 10,
        classType: Phaser.Physics.Arcade.Sprite
    });

     // Adicionar iluminação aos projéteis
     this.projectiles.children.iterate((projectile) => {
        projectile.setPipeline('Light2D');
        projectile.light = this.lights.addLight(projectile.x, projectile.y, 100).setColor(0xff0000).setIntensity(2);
    });

    
    this.physics.add.collider(this.projectiles, [obstaclesLayer, wallLayer, constructionLayer, decorationLayer], hitProjectile, null, this);
    this.physics.add.collider(this.projectiles, this.enemies, hitEnemy, null, this);
   

    // Adicionar colisão entre os inimigos
    this.physics.add.collider(this.enemies, [obstaclesLayer, wallLayer, constructionLayer, decorationLayer, this.enemies]);

    // Adiciona colisão entre o contêiner do jogador e as camadas do mapa
    this.physics.add.collider(this.playerContainer, [obstaclesLayer, wallLayer, constructionLayer, decorationLayer]);
    this.physics.add.collider(this.playerContainer, this.enemies, hitPlayer, null, this);

    // Criação de animações para o jogador
    createAnimations(this); // Chamar a função para criar animações

    //barrastatus:

    this.lifest = this.add.sprite(130, 15, 'hit6').setInteractive();
    this.lifest.setDepth(1002); // Certifique-se de que o botão está na frente
    this.lifest.setScrollFactor(0); // O botão permanece fixo na tela






    // Configuração dos controles de teclado
    this.wasd = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        right: Phaser.Input.Keyboard.KeyCodes.D,
        attack: Phaser.Input.Keyboard.KeyCodes.SPACE, // Adiciona a tecla de ataque
        arrowUp: Phaser.Input.Keyboard.KeyCodes.UP,
        arrowLeft: Phaser.Input.Keyboard.KeyCodes.LEFT,
        arrowDown: Phaser.Input.Keyboard.KeyCodes.DOWN,
        arrowRight: Phaser.Input.Keyboard.KeyCodes.RIGHT
    });



const livro = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livroesqueleto').setInteractive();
livro.setDepth(1014);
livro.setScrollFactor(0);
    
livro.on('pointerdown', () => {
    
    livro.destroy()

 });    




// Botão de ataque
this.attackButton = this.add.image(window.innerWidth - 60, window.innerHeight - 100, 'attackButton');
this.attackButton.setInteractive();
this.attackButton.setScrollFactor(0);
this.attackButton.setDepth(1001); // Certifique-se de que o botão esteja no topo

this.attackButton.on('pointerdown', function (pointer) {
    this.ataquebtn = true;
}, this);

this.attackButton.on('pointerup', function (pointer) {
    this.ataquebtn = false;
}, this);

this.attackButton.on('pointerout', function (pointer) {
    this.ataquebtn = false;
}, this);


this.attackButton2 = this.add.image(window.innerWidth - 60, window.innerHeight - 157, 'attackButton2');
this.attackButton2.setInteractive();
this.attackButton2.setScrollFactor(0);
this.attackButton2.setDepth(1001); // Certifique-se de que o botão esteja no topo

this.attackButton2.on('pointerdown', function (pointer) {
    this.ataquebtn2 = true;
}, this);

this.attackButton2.on('pointerup', function (pointer) {
    this.ataquebtn2 = false;
}, this);

this.attackButton2.on('pointerout', function (pointer) {
    this.ataquebtn2 = false;
}, this);
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//novo btn:
this.attackButtonx = this.add.image(window.innerWidth - 60, window.innerHeight - 243, 'elementbutton');
this.attackButtonx.setInteractive();
this.attackButtonx.setScrollFactor(0);
this.attackButtonx.setDepth(1001); // Certifique-se de que o botão esteja no topo

this.attackButtonx.on('pointerdown', function (pointer) {
    this.toggleInventory();
}, this);

this.attackButtonx.on('pointerup', function (pointer) {
    this.toggleInventory();
}, this);

this.attackButtonx.on('pointerout', function (pointer) {
    this.toggleInventory();
}, this);









    // Configuração da câmera para seguir o contêiner do jogador
    this.cameras.main.startFollow(this.playerContainer);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    // Definição de profundidade das camadas e do contêiner
    groundLayer.setDepth(0);
    obstaclesLayer.setDepth(1);
    wallLayer.setDepth(2);
    constructionLayer.setDepth(3); //castelo muros
    decorationLayer.setDepth(4); //enfeite
    
    this.enemies.setDepth(49)
    this.playerContainer.setDepth(50);
    decorationTeto.setDepth(100);
    this.carregamentointerno = true
    this.load.on('complete', () => {
        console.log('Recursos da SceneB foram carregados.');
        this.carregamentointerno = false
        //this.carregado.push('b')
    });

    this.load.audio('fase1m', '../assets/player/ataque/sons/fase1m.mp3');
    this.load.audio('fantasmasom', '../assets/player/ataque/sons/fantasma.mp3');
   // this.load.audio('fase1m', '../assets/player/ataque/sons/fase1m.mp3');
    this.load.image('tiles_prison', '../assets/map2/prison.png');
    this.load.image('tiles_bebe', '../assets/player/enemy/baby.png');
    this.load.tilemapTiledJSON('mapB', '../assets/map2/map.json');
    this.load.image('livrozumbi', '../assets/box/zumbi.png');
    this.load.image('tiles_blocos', '../assets/map2/blocos.png');
    //this.load.start();   

    // Iniciar o carregamento da SceneB em segundo plano
    
}





function hitProjectile(projetil, layer) {
    console.log(this.kills)
    projetil.setActive(false);
    projetil.setVisible(false);
    projetil.body.stop();
    projetil.destroy();
    //this.magia1som2.play();
}

function hitEnemy(projetil, enemy) {

    if (this.proximo.includes(enemy.enemyId)) {
        this.proximo.splice(enemy.enemyId, 1);
        console.log(this.proximo.length)
    }
    // Desativar o projétil
    projetil.setActive(false);
    projetil.setVisible(false);
    //projetil.body.stop();
    projetil.destroy();
    enemy.list.forEach((child) => {
        if (child.texture && child.texture.key.includes('magia1eft')) {
            child.setVisible(true)
            child.play('magia1eft')
            this.time.delayedCall(1000, () => {
                child.setVisible(false)
            });
        }
    });

    // Exemplo: Reduzir a vida do inimigo
    // Ajuste conforme necessário
    //if (this.limitemagia != projetil.magicaid) {
        //console.log(this.kills);
        enemy.health -= this.dano;
    //}
    if (enemy.health <= 0 && enemy.morto == false) {
        if (this.proximo.includes(enemy.enemyId)) {
            this.proximo.splice(enemy.enemyId, 1);
            console.log(this.proximo.length)
        }
        enemy.morto = true
        this.kills += 1
        
        //alert('morreu')
        // Criar uma animação de morte na posição do inimigo
        let deathAnimation = this.add.sprite(enemy.x, enemy.y, 'enemy_dead');
        deathAnimation.play('enemy_dead');
     
        deathAnimation.setDepth(43);
        
        
        // Destruir o inimigo
        enemy.destroy();

        // Remover a animação de morte após a conclusão
        deathAnimation.on('animationcomplete', () => {
            deathAnimation.destroy();
            
        });
    } else {
        // Atualiza a barra de vida
        enemy.healthBar.setVisible(true);
        enemy.healthBarBg.setVisible(true);
        const healthPercentage = enemy.health / enemy.maxHealth;
        enemy.healthBar.scaleX = healthPercentage; // Use scaleX para ajustar a largura da barra
    }
    this.magia1som2.play();
    
    
    
    this.limitemagia = projetil.magicaid
}








function hitPlayer(player, enemy) {
    
    if (enemy.atacando == false && this.vivo) {
        this.ossom2.play();
        console.log('Player hit by enemy!');
        enemy.list.forEach((child) => {
            if (child.texture && child.texture.key.includes('enemy')) {
                switch (enemy.direcao) {
                    case 'esquerda':
                        child.play('enemy_attack_left');
                        break;
                    case 'direita':
                        child.play('enemy_attack_right');
                        break;
                    case 'frente':
                        child.play('enemy_attack_up');
                        break;
                    case 'costa':
                        child.play('enemy_attack_down');
                        break;
                    default:
                        console.log('erro case ataque');
                        break;
                }
            }
            if (child.texture && child.texture.key.includes('faca')) {
                child.setVisible(true)
                switch (enemy.direcao) {
                    case 'esquerda':
                        child.play('enemy_arma_left');
                        break;
                    case 'direita':
                        child.play('enemy_arma_right');
                        break;
                    case 'frente':
                        child.play('enemy_arma_up');
                        break;
                    case 'costa':
                        child.play('enemy_arma_down');
                        break;
                    default:
                        console.log('erro case ataque');
                        break;
                }
        }
    });
        

        this.time.delayedCall(400, () => {
            
            enemy.atacando = false
            enemy.list.forEach((child) => {
                if (child.texture && child.texture.key.includes('faca')) {
                    //console.log('lambida')
                    //child.play('enemy_arma_down');
                    child.setVisible(false)
                }
            });
            
            //this.danosofrido += 1
            if (this.player.currentHealth > 0) {
                //this.lifest.setTexture(this.lifeplayer[this.danosofrido])
                this.player.currentHealth -= enemy.dano
                //console.log(this.player.currentHealth)
                this.danosom.play();
                
            } else {
                this.player.currentHealth = 0
                this.vivo = false
                this.diesom.play();
                //console.log(this.player.currentHealth)
            }

        }, [], this);
    }
    enemy.atacando = true;

}





//function heal(player, amount) {
   // player.currentHealth += amount;
  //  if (player.currentHealth > this.player.maxHealth) {
  //      player.currentHealth = this.player.maxHealth;
  //  }
//}
