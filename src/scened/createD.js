//import { LEFT } from 'phaser';
import { createAnimations } from '../animacao.js';
import { createEnemyContainer } from '../inimigos.js';
import { setCookie, getCookie, eraseCookie } from '../cookies.js';

export function create() {
    
    //ajuste preload:
    // this.asasom = this.sound.add('asasom');
    // this.dragsom = this.sound.add('dragsom');
    // this.dragmortesom = this.sound.add('dragmortesom');
    eraseCookie('fase');
    setCookie('fase', 4, 1000);
    this.fase = getCookie('fase')
    //
    //elemento novo:
    //this.addItemToSlot(this.inventorySlots.getChildren()[1], 'item2', 'Elemento Gelo', 'O frio cortante que congela tudo ao seu redor. Domine a fúria das tempestades geladas e transforme seus inimigos em estátuas de gelo. O poder implacável do inverno está em suas mãos!(Reduz o dano inimigo pela metade, ao evoluir tambem causa lentidão ou até mesmo congelamento total.)');
    this.inimigosativos = ['palhaco']
    this.desbloqueado = 1
    this.palhacosome = this.sound.add('riso');
    this.grito = this.sound.add('grito');
   
    
    
    //console.log(this.roubovida)

    // Adicionar a música de fundo
   

    
    

    // Cria o mapa a partir de um arquivo JSON previamente carregado
    // Cria o mapa a partir de um arquivo JSON previamente carregado
    const map = this.make.tilemap({ key: 'mapD' });
    
    // Carrega os tilesets utilizados no mapa
    const blocosTileset = map.addTilesetImage('grass', 'tiles_terra');
    //const prisonTileset = map.addTilesetImage('blood', 'tiles_enfeites');
    const pentaTileset = map.addTilesetImage('circo', 'tiles_enfeites');
    //const bebeTileset = map.addTilesetImage('bebe', 'tiles_bebe');
    
   
    //const tetoTileset = map.addTilesetImage('teto', 'tiles_teto');
    //const acabamentoTileset = map.addTilesetImage('acabamento', 'tiles_acabamento');
    const imagensTileset = [blocosTileset, pentaTileset];

    // Cria as camadas do mapa a partir dos tilesets
    const mapbase = map.createLayer('grass', imagensTileset, 0, 0);
    const mapenfeite = map.createLayer('enfeites', imagensTileset, 0, 0);
    const mapenfeitebaixo = map.createLayer('enfeitesbaixo', imagensTileset, 0, 0);
    const mapcolidir = map.createLayer('colidir', imagensTileset, 0, 0);
    //const mapenfeite2 = map.createLayer('enfeites2', imagensTileset, 0, 0);
    //const mapbb = map.createLayer('babes', imagensTileset, 0, 0);
    //const constructionLayer = map.createLayer('obra', imagensTileset, 0, 0);
    //const decorationLayer = map.createLayer('enfeite', imagensTileset, 0, 0);
   // const decorationTeto = map.createLayer('teto', imagensTileset, 0, 0);

    // Define as propriedades de colisão para as camadas específicas do mapa
    //mapbase.setCollisionByProperty({ collider: true });
    //mapenfeite.setCollisionByProperty({ collider: true });
    mapcolidir.setCollisionByProperty({ collider: true });
    //mapenfeite2.setCollisionByProperty({ collider: true });
   // mapbb.setCollisionByProperty({ collider: true });
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
    this.playerContainer = this.add.container(610, 1286, [this.player, this.chapeu, this.blusa, this.pernas, this.pes, this.atkblusa, this.atkchapeu, this.atkperna, this.atkpes, this.arma]);
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
    this.playerContainer.body.setMass(50)

    // Função para criar um inimigo contêiner
    

    // Criação de um grupo de inimigos
    this.enemies = this.physics.add.group({
        runChildUpdate: true
    });

    // Criação de alguns inimigos
    // Criação de alguns inimigos

    const seeds = [[687, 210]];
    for (let i = 0; i < seeds.length; i++) {
        const [x, y] = seeds[i];
        const enemy = createEnemyContainer(this, x, y, 'palhaco');
        this.enemies.add(enemy);
    }
   //const enemy = createEnemyContainer(this, 455, 360, 'invocador');
   //this.enemies.add(enemy);

    // Criação de um grupo de projéteis
    this.projectiles = this.physics.add.group({
        defaultKey: 'magia1',
        maxSize: 10,
        classType: Phaser.Physics.Arcade.Sprite
    });
    
    this.projectiles2 = this.physics.add.group({
        defaultKey: 'magia1',
        maxSize: 10,
        classType: Phaser.Physics.Arcade.Sprite
    });

    
     this.physics.add.collider(this.projectiles, mapcolidir, hitProjectile, null, this);
     this.physics.add.collider(this.projectiles, this.enemies, hitEnemy, null, this); //
   

     // Adicionar colisão entre os inimigos
     this.physics.add.collider(this.enemies, mapcolidir);
     this.physics.add.collider(this.enemies, this.enemies);
 
     // Adiciona colisão entre o contêiner do jogador e as camadas do mapa
     this.physics.add.collider(this.playerContainer, mapcolidir);
     this.physics.add.collider(this.playerContainer, this.enemies, hitPlayer, null, this);
     this.physics.add.collider(this.playerContainer, this.projectiles2, hitPlayer2, null, this);
     //this.physics.add.collider(this.playerContainer, mapenfeite, hitArmadilha, null, this);
     //this.physics.add.collider(this.playerContainer, portaerrada, null, this);

     
 

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



    
    
//  // Adiciona as imagens de escolha na tela escolhas
//  let imgchoice1 = 'choice1'
//  let imgchoice2 = 'choice2'
//  let imgchoice3 = 'choice3'
//  if (Number(getCookie('choice')) == 1) {
//     imgchoice1 = 'choice4'
//  } else if (Number(getCookie('choice')) == 2) {
//     imgchoice2 = 'choice4'
//  } else if (Number(getCookie('choice')) == 3) {
//     imgchoice3 = 'choice4'
//  }

//  const choice1 = this.add.image(120, (window.innerHeight/2), imgchoice1).setInteractive();
//  choice1.setDepth(1013);
//  choice1.setScrollFactor(0);
//  const choice2 = this.add.image((window.innerWidth/2), (window.innerHeight/2), imgchoice2).setInteractive();
//  choice2.setDepth(1014);
//  choice2.setScrollFactor(0);
//  const choice3 = this.add.image(window.innerWidth - 120, (window.innerHeight/2), imgchoice3).setInteractive();
//  choice3.setDepth(1015);
//  choice3.setScrollFactor(0);
 

//  const txt = this.add.text((window.innerWidth/2), 23, 'Escolha uma carta', { fontSize: '24px', fill: '#fff' }).setOrigin(0.5, 0.5);
//  txt.setDepth(1016);
//  txt.setScrollFactor(0);



 // Adiciona eventos de clique para cada imagem
//  choice1.on('pointerdown', () => {
//     if (imgchoice1 == 'choice1') {
//         console.log('Choice 1 selected');
//         this.roubovida += 5
//         removerchoice()
//         const livro = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrodragao').setInteractive();
//             livro.setDepth(1013);
//             livro.setScrollFactor(0);
                
//             livro.on('pointerdown', () => {
                
//                 livro.destroy()
//                 const livro2 = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrodragao2').setInteractive();
//                 livro2.setDepth(1013);
//                 livro2.setScrollFactor(0);
//                 livro2.on('pointerdown', () => {
//                     livro2.destroy()
//                 }); 
//             });  
//     } else {
//         this.curabase = 3
//         removerchoice()
//         const livro = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrodragao').setInteractive();
//             livro.setDepth(1013);
//             livro.setScrollFactor(0);
                
//             livro.on('pointerdown', () => {
                
//                 livro.destroy()
//                 const livro2 = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrodragao2').setInteractive();
//                 livro2.setDepth(1013);
//                 livro2.setScrollFactor(0);
//                 livro2.on('pointerdown', () => {
//                     livro2.destroy()
//                 }); 
//             });  
//     }
//  });

//  choice2.on('pointerdown', () => {
//     if (imgchoice2 == 'choice2') {
//         console.log('Choice 2 selected');
//         this.dano = this.dano*2
//         this.numeromagia = 5
//         removerchoice()
//         const livro = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrodragao').setInteractive();
//             livro.setDepth(1013);
//             livro.setScrollFactor(0);
                
//             livro.on('pointerdown', () => {
//                 livro.destroy()
//                 const livro2 = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrodragao2').setInteractive();
//                 livro2.setDepth(1013);
//                 livro2.setScrollFactor(0);
//                 livro2.on('pointerdown', () => {
//                     livro2.destroy()
//                 }); 
//             });  
//         } else {
//             this.curabase = 3
//             removerchoice()
//         const livro = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrodragao').setInteractive();
//             livro.setDepth(1013);
//             livro.setScrollFactor(0);
                
//             livro.on('pointerdown', () => {
                
//                 livro.destroy()
//                 const livro2 = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrodragao2').setInteractive();
//                 livro2.setDepth(1013);
//                 livro2.setScrollFactor(0);
//                 livro2.on('pointerdown', () => {
//                     livro2.destroy()
//                 }); 
            
//             });  
//         }

//  });

//  choice3.on('pointerdown', () => {
//     if (imgchoice3 == 'choice3') {
//         console.log('Choice 3 selected');
//         this.player.maxHealth = this.player.maxHealth * 2
//         this.player.currentHealth = this.player.currentHealth * 2
//         removerchoice()
//         const livro = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrodragao').setInteractive();
//             livro.setDepth(1013);
//             livro.setScrollFactor(0);
                
//             livro.on('pointerdown', () => {
                
//                 livro.destroy()
//                 const livro2 = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrodragao2').setInteractive();
//                 livro2.setDepth(1013);
//                 livro2.setScrollFactor(0);
//                 livro2.on('pointerdown', () => {
//                     livro2.destroy()
//                 }); 
            
//             });  
//         } else {
//             this.curabase = 3
//             removerchoice()
//         const livro = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrodragao').setInteractive();
//             livro.setDepth(1013);
//             livro.setScrollFactor(0);
                
//             livro.on('pointerdown', () => {
                
//                 livro.destroy()
//                 const livro2 = this.add.image((window.innerWidth/2), (window.innerHeight/2), 'livrodragao2').setInteractive();
//                 livro2.setDepth(1013);
//                 livro2.setScrollFactor(0);
//                 livro2.on('pointerdown', () => {
//                     livro2.destroy()
//                 }); 
//             });  
//         }
//  });    


//     // Remover as imagens de escolha da tela
//     function removerchoice() {
//         choice1.destroy()
//         choice2.destroy()
//         choice3.destroy()
//         txt.destroy()
        
//     }
    





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
    mapenfeite.setDepth(500);
    mapenfeitebaixo.setDepth(1)
    mapcolidir.setDepth(2);

    this.enemies.setDepth(49)
    this.playerContainer.setDepth(50);
   // decorationTeto.setDepth(100);
    //globais
    if (Number(getCookie('choice')) == 1) {
        this.roubovida = Number(getCookie('roubovida'))
    } else if(Number(getCookie('choice')) == 2) {
        this.dano = Number(getCookie('dano'));
        this.numeromagia = Number(getCookie('numeromagia'));
    } else {
        this.player.maxHealth =  Number(getCookie('vida'));
        this.player.currentHealth = this.player.maxHealth
    }
    if (Number(getCookie('choice2')) == 1) {
        this.roubovida += 5
    } else if(Number(getCookie('choice2')) == 2) {
        this.curabase = 3
    } else if (Number(getCookie('choice2')) == 3) {
        this.dano = this.dano*2
    } else if (Number(getCookie('choice2')) == 4) {
        this.player.maxHealth = this.player.maxHealth * 2
        this.player.currentHealth = this.player.currentHealth * 2
    }
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
    if (enemy.classe == 'palhaco2') {
        this.player.currentHealth -= 20
        this.danosom.play();
        this.enemies.clear(true, true);
            this.palhacosome.play();
            blackout(this);
            let seedsclone = [[487, 280], [587, 280], [687, 280], [787, 280], [887, 280]];
            let randon = Math.floor(Math.random() * 4)
            let palhacof = 2
            for (let i = 0; i < seedsclone.length; i++) {
                let [x, y] = seedsclone[i];
                if (i == randon) {
                    palhacof = 3
                } else {
                    palhacof = 2
                }
                let enemy = createEnemyContainer(this, x, y, `palhaco${palhacof}`);
                this.enemies.add(enemy);
                
            }
    }
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
        if (child.texture && child.texture.key.includes(`magia${this.numeromagia}eft`)) {
            child.setVisible(true)
            child.play(`magia${this.numeromagia}eft`)
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
        } else if (enemy.classe == 'dragao') {
            this.parardialogo = false
            this.dragmortesom.play();
            let deathAnimation = this.add.sprite(enemy.x, enemy.y, 'dragcorpo');
            deathAnimation.play('dragdireita');
            // Adiciona física ao sprite da animação
            this.physics.world.enable(deathAnimation);
            deathAnimation.body.setVelocity(100, 0);
        
            deathAnimation.setDepth(43);
            // Remover a animação de morte após a conclusão
            // deathAnimation.on('animationcomplete', () => {
            //     deathAnimation.destroy();
                
            // });
            // setTimeout(function() {
                
            //     window.location.href = "https://castelododiabo.x10.mx/src/fim/";
            // }, 10000);
        } 
        
        if (enemy.classe == 'palhaco3') {

            this.enemies.clear(true, true);
            //this.palhacosome.play();
            this.grito.play()
            blackout(this);
            let seedsclone = [[487, 280], [587, 280], [687, 280], [787, 280], [887, 280]];
            let randon = Math.floor(Math.random() * 4)
            let palhacof = 2
            for (let i = 0; i < seedsclone.length; i++) {
                let [x, y] = seedsclone[i];
                if (i == randon) {
                    palhacof = 3
                } else {
                    palhacof = 2
                }
                let enemy = createEnemyContainer(this, x, y, `palhaco${palhacof}`);
                this.enemies.add(enemy);
                
            }
        } else {
            enemy.destroy();
        }
            
        
        
        
        
        // Destruir o inimigo
        
        

        
    } else {
        // Atualiza a barra de vida
        if (enemy.classe != 'palhaco' && enemy.classe != 'palhaco2') {
            enemy.healthBar.setVisible(true);
            enemy.healthBarBg.setVisible(true);
            const healthPercentage = enemy.health / enemy.maxHealth;
            enemy.healthBar.scaleX = healthPercentage; // Use scaleX para ajustar a largura da barra
        }
    }
    if (this.selectedSlotIndex == 1 && this.desbloqueado >= 1)  {
        this.numeromagia = 5
        this.magia1som2 = this.sound.add('magia1som25');
    } else {
        this.numeromagia = 1
        this.magia1som2 = this.sound.add('magia1som21');
    }
    
    this.magia1som2.play();
    
    
    
    this.limitemagia = projetil.magicaid
}




function blackout(scene) {
    // Obtém a largura e altura da câmera principal
    const { width, height } = scene.cameras.main;

    // Cria um retângulo preto que cobre toda a tela
    const blackScreen = scene.add.rectangle(
        width / 2, height / 2,  // Posiciona o retângulo no centro da tela
        width, height,          // Largura e altura total
        0x000000                // Cor preta
    );

    // Fixar o retângulo para que se mova com a câmera e cubra a tela
    blackScreen.setScrollFactor(0);

    // Define a profundidade para garantir que fique por cima de tudo
    blackScreen.setDepth(1000);

    // Faz a tela preta desaparecer após 1 segundo
    scene.time.delayedCall(1000, () => {
        blackScreen.destroy();
    });
}



function hitPlayer(player, enemy) {
    //player.body.setVelocity(0);
    if (enemy.atacando == false && this.vivo) {
        if (enemy.classe == 'esqueleto') {
            this.ossom2.play();
         } else if (enemy.classe == 'palhaco') {
            enemy.destroy()
            this.palhacosome.play();
            blackout(this);
            // this.backgroundMusic = this.sound.add('fase4m', {
            //     loop: true, // Repetir a música em loop
            //     volume: 0.5 // Definir o volume da nova música
            // });
        
            // Toca a nova música
            this.backgroundMusic.stop();
            this.backgroundMusic = this.sound.add('fundobase', {
                loop: true, // Repetir a música em loop
                volume: 0.5 // Volume da música
            });
            //Tocar a música de fundo
            this.backgroundMusic.play();

            this.time.delayedCall(10000, () => {

            blackout(this);
            this.backgroundMusic.stop();
            this.backgroundMusic = this.sound.add('fase4m', {
                loop: true, // Repetir a música em loop
                volume: 0.5 // Volume da música
            });  
            this.backgroundMusic.play();
            
            const seedsclone = [[487, 280], [587, 280], [687, 280], [787, 280], [887, 280]];
            const randon = 3//Math.floor(Math.random() * 2)
            let palhacof = 2
         
            for (let i = 0; i < seedsclone.length; i++) {
                const [x, y] = seedsclone[i];
                if (i == randon) {
                    palhacof = 3
                   
                } else {
                    palhacof = 2
                   
                }
                let enemyx = createEnemyContainer(this, x, y, `palhaco${palhacof}`);
                // console.log(`Inimigo ${i} criado:`, enemy);  // Verifique se o inimigo está criado
                this.enemies.add(enemyx);
                 
            }
        });
          
            //this.enemies.add(createEnemyContainer(this, 987, 280, `palhaco3`));
            
         } else if (enemy.classe == 'palhaco2') {
            this.player.currentHealth = 0
            this.vivo = false
           
            this.diesom.play();
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
            if (enemy.classe != 'palhaco' && enemy.classe != 'palhaco2') {
            this.danosom.play();
        }
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

function hitPlayer2(player, enemy) {
    enemy.destroy()
    
        
        
        
        

    this.time.delayedCall(400, () => {
            
        
        
        
        //this.danosofrido += 1
        if (this.player.currentHealth > 0) {
            //this.lifest.setTexture(this.lifeplayer[this.danosofrido])
            this.player.currentHealth -= 5
            //console.log(this.player.currentHealth)
            this.danosom.play();
            
        } else {
            this.player.currentHealth = 0
            this.vivo = false
            this.diesom.play();
            //console.log(this.player.currentHealth)
        }

        }, [], this);
        this.magia1som2.play();
    
 

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





