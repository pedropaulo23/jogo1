import { createAnimations } from '../animacao.js';
import { createEnemyContainer } from '../inimigos.js';
import { setCookie, getCookie, eraseCookie } from '../cookies.js';

export function create() {
    
    
    //ajuste de preload: 
    eraseCookie('fase');
    setCookie('fase', 2, 1000);
    this.fase = getCookie('fase')
    this.fantasmasom = this.sound.add('fantasmasom');
    
    //
    this.inimigosativos = ['fantasma']
    

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
    const bebeTileset = map.addTilesetImage('bebe', 'tiles_bebe');
    
   
    //const tetoTileset = map.addTilesetImage('teto', 'tiles_teto');
    //const acabamentoTileset = map.addTilesetImage('acabamento', 'tiles_acabamento');
    const imagensTileset = [blocosTileset, prisonTileset, pentaTileset, bebeTileset];

    // Cria as camadas do mapa a partir dos tilesets
    const mapbase = map.createLayer('base', imagensTileset, 0, 0);
    const mapenfeite = map.createLayer('enfeites', imagensTileset, 0, 0);
    const mapenfeite2 = map.createLayer('enfeites2', imagensTileset, 0, 0);
    const mapbb = map.createLayer('babes', imagensTileset, 0, 0);
    //const constructionLayer = map.createLayer('obra', imagensTileset, 0, 0);
    //const decorationLayer = map.createLayer('enfeite', imagensTileset, 0, 0);
    const decorationTeto = map.createLayer('teto', imagensTileset, 0, 0);

    // Define as propriedades de colisão para as camadas específicas do mapa
    mapbase.setCollisionByProperty({ collider: true });
    mapenfeite.setCollisionByProperty({ collider: true });
    mapenfeite2.setCollisionByProperty({ collider: true });
    mapbb.setCollisionByProperty({ collider: true });
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
    this.playerContainer = this.add.container(510, 1286, [this.player, this.chapeu, this.blusa, this.pernas, this.pes, this.atkblusa, this.atkchapeu, this.atkperna, this.atkpes, this.arma]);
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
    // Criação de alguns inimigos
    const seeds = [[647, 495], [490, 575], [355, 495]];
    for (let i = 0; i < seeds.length; i++) {
        const [x, y] = seeds[i];
        const enemy = createEnemyContainer(this, x, y, 'demonio');
        this.enemies.add(enemy);
    }
    const enemy = createEnemyContainer(this, 455, 360, 'invocador');
    this.enemies.add(enemy);

    // Criação de um grupo de projéteis
    this.projectiles = this.physics.add.group({
        defaultKey: 'magia1',
        maxSize: 10,
        classType: Phaser.Physics.Arcade.Sprite
    });

    
     this.physics.add.collider(this.projectiles, [mapbase, mapenfeite2], hitProjectile, null, this);
     this.physics.add.collider(this.projectiles, this.enemies, hitEnemy, null, this);
   

     // Adicionar colisão entre os inimigos
     //this.physics.add.collider(this.enemies, [mapbase, mapenfeite, mapenfeite2, this.enemies]);
     this.physics.add.collider(this.enemies, [mapbase, mapbb, mapenfeite2, this.enemies]);
 
     // Adiciona colisão entre o contêiner do jogador e as camadas do mapa
     this.physics.add.collider(this.playerContainer, [mapbase, mapbb]);
     this.physics.add.collider(this.playerContainer, this.enemies, hitPlayer, null, this);
     this.physics.add.collider(this.playerContainer, mapenfeite, hitArmadilha, null, this);
     this.physics.add.collider(this.playerContainer, mapenfeite2, portaerrada, null, this);
 

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



    
    
 // Adiciona as imagens de escolha na tela escolhas
 
 const choice1 = this.add.image(120, (window.innerHeight/2), 'choice1').setInteractive();
 choice1.setDepth(1013);
 choice1.setScrollFactor(0);
 const choice2 = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'choice2').setInteractive();
 choice2.setDepth(1014);
 choice2.setScrollFactor(0);
 const choice3 = this.add.image(window.innerWidth - 120, (window.innerHeight/2), 'choice3').setInteractive();
 choice3.setDepth(1015);
 choice3.setScrollFactor(0);
 const txt = this.add.text((window.innerWidth/2), 23, 'Escolha uma carta', { fontSize: '24px', fill: '#fff' }).setOrigin(0.5, 0.5);
 txt.setDepth(1016);
 txt.setScrollFactor(0);



 // Adiciona eventos de clique para cada imagem
 choice1.on('pointerdown', () => {
    console.log('Choice 1 selected');
    //localStorage.setItem('roubovida', 5);
    this.roubovida += 5
    //localStorage.setItem('roubovida', this.roubovida);
    //localStorage.setItem('choice', 1);
    setCookie('roubovida', this.roubovida, 4000);
    setCookie('choice', 1, 4000);
    //setCookie('playerHealth', 100, 7);
    //console.log(this.roubovida)
    //console.log(localStorage.getItem('roubovida'))
    removerchoice()
    const livro = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrozumbi').setInteractive();
        livro.setDepth(1013);
        livro.setScrollFactor(0);
            
        livro.on('pointerdown', () => {
            
            livro.destroy()
        
         });  
 });

 choice2.on('pointerdown', () => {
    console.log('Choice 2 selected');
    this.dano = this.dano*2
    //this.numeromagia = 5
    //localStorage.setItem('dano', this.dano);
    setCookie('dano', this.dano, 4000);
    //localStorage.setItem('numeromagia', this.numeromagia);
    //setCookie('numeromagia', this.numeromagia, 4000);
   // localStorage.setItem('choice', 2);
    setCookie('choice', 2, 4000);
    removerchoice()
    const livro = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrozumbi').setInteractive();
        livro.setDepth(1013);
        livro.setScrollFactor(0);
            
        livro.on('pointerdown', () => {
            
            livro.destroy()
        
         });  

 });

 choice3.on('pointerdown', () => {
    console.log('Choice 3 selected');
    this.player.maxHealth = this.player.maxHealth * 2
    this.player.currentHealth = this.player.currentHealth * 2
    //localStorage.setItem('vida', this.player.maxHealth);
    setCookie('vida', this.player.maxHealth, 4000);
   // localStorage.setItem('choice', 3);
    setCookie('choice', 3, 4000);
    removerchoice()
    const livro = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrozumbi').setInteractive();
        livro.setDepth(1013);
        livro.setScrollFactor(0);
            
        livro.on('pointerdown', () => {
            
            livro.destroy()
        
         });  
 });    


    // Remover as imagens de escolha da tela
    function removerchoice() {
        choice1.destroy()
        choice2.destroy()
        choice3.destroy()
        txt.destroy()
        
    }
    





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
    mapbase.setDepth(0);
    mapenfeite.setDepth(1);
    mapenfeite2.setDepth(2);

    this.enemies.setDepth(49)
    this.playerContainer.setDepth(50);
    decorationTeto.setDepth(100);

    // this.carregamentointerno = true
    // this.load.on('complete', () => {
    //     console.log('Recursos da SceneB foram carregados.');
    //     this.carregamentointerno = false
    //     //this.carregado.push('b')
    // });
    // this.load.audio('asasom', '../assets/player/enemy/dragao/asasom.mp3');
    // this.load.audio('dragsom', '../assets/player/enemy/dragao/rugido.mp3');
    // this.load.audio('dragmortesom', '../assets/player/enemy/dragao/morte.mp3');
    // this.load.image('sword', '../assets/player/enemy/dragao/dialogo.png');
    // this.load.audio('fase3m', '../assets/player/ataque/sons/fase3m.mp3');
    // this.load.image('dragaofala', '../assets/player/enemy/dragao/dialogo.png');
    // this.load.image('tiles_blood', '../assets/map3/blood.png');
    // this.load.tilemapTiledJSON('mapC', '../assets/map3/map.json');
    // this.load.image('livrodragao', '../assets/box/dragao.png');
    // this.load.image('livrodragao2', '../assets/box/gelo.png');
    // this.load.image('tiles_blocos', '../assets/map2/blocos.png');



    //this.load.start();  
}





function hitProjectile(projetil, layer) {
    projetil.setActive(false);
    projetil.setVisible(false);
    projetil.body.stop();
    projetil.destroy();
    //this.magia1som2.play();
}

function hitEnemy(projetil, enemy) {
   // console.log(this.kills)

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
            //console.log(this.proximo.length)
        }
        enemy.morto = true
        
        this.kills += 1
        
        //alert('morreu')
        // Criar uma animação de morte na posição do inimigo
        if (enemy.classe == 'esqueleto') {

        let deathAnimation = this.add.sprite(enemy.x, enemy.y, 'enemy_dead');
        deathAnimation.play('enemy_dead');
     
        deathAnimation.setDepth(43);
        // Remover a animação de morte após a conclusão
        deathAnimation.on('animationcomplete', () => {
            deathAnimation.destroy();
            
        });
        } else if (enemy.classe == 'invocador') {
            let deathAnimation = this.add.sprite(enemy.x, enemy.y, 'invocador');
            let deathAnimationbrain = this.add.sprite(enemy.x, enemy.y, 'brain');
            let deathAnimationcostela = this.add.sprite(enemy.x, enemy.y, 'costela');
            deathAnimation.play('ritualfim');
            deathAnimationbrain.play('ritualfimbrain');
            deathAnimationcostela.play('ritualfimcostela');
        
            deathAnimation.setDepth(43);
            deathAnimationbrain.setDepth(44);
            deathAnimationcostela.setDepth(45);
            // Remover a animação de morte após a conclusão
            deathAnimation.on('animationcomplete', () => {
                deathAnimation.destroy();
                deathAnimationbrain.destroy();
                deathAnimationcostela.destroy();
                
            });
        }
        
        
        // Destruir o inimigo
        enemy.destroy();

        
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
        if (enemy.classe == 'esqueleto') {
            this.ossom2.play();
        }
        
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

function hitArmadilha(palyer) {
    
    if (this.controlearmadilhas) {
        if (this.player.currentHealth > 0) {
            //this.lifest.setTexture(this.lifeplayer[this.danosofrido])
            this.player.currentHealth -= 10
            //console.log(this.player.currentHealth)
            this.danosom.play();
            
        } else {
            this.player.currentHealth = 0
            this.vivo = false
            this.diesom.play();
            //console.log(this.player.currentHealth)
        }
        this.controlearmadilhas = false
        
        this.time.delayedCall(1000, () => {
            this.controlearmadilhas = true
        });
        

    }
}

function portaerrada(palyer) {
    
    console.log('porta errada')  
    if (this.vivo) { 
         
        this.player.currentHealth = 0
        this.vivo = false
        this.diesom.play();
        //console.log(this.player.currentHealth)
    }    

   
}





