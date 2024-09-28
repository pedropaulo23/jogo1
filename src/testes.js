import { createAnimations } from '../src/animacao.js';
import { createEnemyContainer } from '../src/inimigos.js';

export function create() {

    
    

    // Adicionar a música de fundo
    this.backgroundMusic = this.sound.add('backgroundMusic', {
        loop: true, // Repetir a música em loop
        volume: 0.5 // Volume da música
    });

    // Tocar a música de fundo
    this.backgroundMusic.play();
    

    // Cria o mapa a partir de um arquivo JSON previamente carregado
    // Cria o mapa a partir de um arquivo JSON previamente carregado
    const map = this.make.tilemap({ key: 'mapB' });
    
    // Carrega os tilesets utilizados no mapa
    const blocosTileset = map.addTilesetImage('blocos', 'tiles_blocos');
    const prisonTileset = map.addTilesetImage('sangue', 'tiles_prison');
    const pentaTileset = map.addTilesetImage('penta', 'tiles_penta');
    
   
    //const tetoTileset = map.addTilesetImage('teto', 'tiles_teto');
    //const acabamentoTileset = map.addTilesetImage('acabamento', 'tiles_acabamento');
    const imagensTileset = [blocosTileset, prisonTileset, pentaTileset];

    // Cria as camadas do mapa a partir dos tilesets
    const mapbase = map.createLayer('base', imagensTileset, 0, 0);
    const mapenfeite = map.createLayer('enfeites', imagensTileset, 0, 0);
    const mapenfeite2 = map.createLayer('enfeites2', imagensTileset, 0, 0);
    //const constructionLayer = map.createLayer('obra', imagensTileset, 0, 0);
    //const decorationLayer = map.createLayer('enfeite', imagensTileset, 0, 0);
    const decorationTeto = map.createLayer('teto', imagensTileset, 0, 0);

    // Define as propriedades de colisão para as camadas específicas do mapa
    mapbase.setCollisionByProperty({ collider: true });
    //mapenfeite.setCollisionByProperty({ collider: true });
    
    // Define os limites do mundo de física para o tamanho do mapa
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;





    //portall
    



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
    this.physics.world.enable(this.playerContainer);

    // Define o tamanho e as propriedades de colisão do contêiner
    this.playerContainer.setSize(this.player.width, this.player.height);
    this.playerContainer.body.setCollideWorldBounds(true);

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
    // Criação de alguns inimigos
    const seeds = [[647, 495], [490, 575], [355, 495]];
    for (let i = 0; i < seeds.length; i++) {
        const [x, y] = seeds[i];
        const enemy = createEnemyContainer(this, x, y, 'demonio');
        this.demonios.add(enemy);
    }

    // Criação de um grupo de projéteis
    this.projectiles = this.physics.add.group({
        defaultKey: 'magia1',
        maxSize: 10,
        classType: Phaser.Physics.Arcade.Sprite
    });

    
     //this.physics.add.collider(this.projectiles, [obstaclesLayer, wallLayer, constructionLayer, decorationLayer], hitProjectile, null, this);
     this.physics.add.collider(this.projectiles, this.demonios, hitEnemy, null, this);
   

     // Adicionar colisão entre os inimigos
     //this.physics.add.collider(this.enemies, [mapbase, mapenfeite, mapenfeite2, this.enemies]);
     this.physics.add.collider(this.demonios, [mapbase, mapenfeite, mapenfeite2, this.demonios]);
 
     // Adiciona colisão entre o contêiner do jogador e as camadas do mapa
     this.physics.add.collider(this.playerContainer, [mapbase, mapenfeite, mapenfeite2]);
     this.physics.add.collider(this.playerContainer, this.demonios, hitPlayer, null, this);
 

    // Criação de animações para o jogador
    createAnimations(this); // Chamar a função para criar animações

    //barrastatus:

    this.lifest = this.add.sprite(130, 15, 'hit0').setInteractive();
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


    // Configuração da câmera para seguir o contêiner do jogador
    this.cameras.main.startFollow(this.playerContainer);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    // Definição de profundidade das camadas e do contêiner
    mapbase.setDepth(0);
    mapenfeite.setDepth(1);
    mapenfeite2.setDepth(2);
}





function hitProjectile(projetil, layer) {
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
    projetil.body.stop();
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
    if (enemy.health <= 0) {
        if (this.proximo.includes(enemy.enemyId)) {
            this.proximo.splice(enemy.enemyId, 1);
            console.log(this.proximo.length)
        }
        
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
        

        this.time.delayedCall(600, () => {
            
            enemy.atacando = false
            enemy.list.forEach((child) => {
                if (child.texture && child.texture.key.includes('faca')) {
                    //console.log('lambida')
                    //child.play('enemy_arma_down');
                    child.setVisible(false)
                }
            });
            
            this.danosofrido += 1
            if (this.danosofrido < this.lifeplayer.length) {
                this.lifest.setTexture(this.lifeplayer[this.danosofrido])
            } else {
                this.vivo = false
            }

        }, [], this);
    }
    enemy.atacando = true;

}




