export function createEnemyContainer(scene, x, y, nome='esqueleto') {
    if (nome == 'esqueleto') {
        const enemyBody = scene.add.sprite(0, 0, 'enemy');
        const enemyArma = scene.add.sprite(0, 0, 'faca');
        const enemyfire = scene.add.sprite(0, 0, 'magia1eft');

        enemyArma.setVisible(false); // Ajuste conforme necessário
        enemyBody.setVisible(false);
        enemyfire.setVisible(false);

        const enemyContainer = scene.add.container(x, y, [enemyBody, enemyArma, enemyfire]);
        scene.physics.world.enable(enemyContainer);

        enemyContainer.setSize(enemyBody.width, enemyBody.height);
        enemyContainer.body.setCollideWorldBounds(true);

        const enemyCollisionWidth = (enemyBody.width / 2) - 12;
        const enemyCollisionHeight = (enemyBody.height / 2) - 5;
        enemyContainer.body.setSize(enemyCollisionWidth, enemyCollisionHeight);
        enemyContainer.body.setOffset(22, (enemyBody.height / 2) + 2);

        enemyContainer.enemyId = Phaser.Math.RND.uuid(); // Adiciona um identificador único
        //enemyContainer.health = 30;
        enemyContainer.acordado = false;
        enemyContainer.acordando = false;
        enemyContainer.atacando = false;
        enemyContainer.direcao = 'frente';
        enemyContainer.health = 100;
        enemyContainer.maxHealth = 100
        enemyContainer.classe = nome
        enemyContainer.dano = 15
        enemyContainer.morto = false
       
      
        


       // Criação da barra de vida
       const healthBarBg = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0x000000);
       const healthBar = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0xff0000);
       healthBar.setVisible(false)
       healthBarBg.setVisible(false) 

       enemyContainer.add(healthBarBg);
       enemyContainer.add(healthBar);

       enemyContainer.healthBar = healthBar;
       enemyContainer.healthBarBg = healthBarBg;
        

        return enemyContainer;
    }  else if (nome == 'demonio') {
        const enemyBody = scene.add.sprite(0, 0, 'voador');
        //const enemyArma = scene.add.sprite(0, 0, 'faca');
        const enemyfire = scene.add.sprite(0, 0, 'magia1eft');

        //enemyArma.setVisible(false); // Ajuste conforme necessário
        enemyBody.setVisible(true);
        enemyfire.setVisible(false);

        const enemyContainer = scene.add.container(x, y, [enemyBody, enemyfire]);
        scene.physics.world.enable(enemyContainer);

        enemyContainer.setSize(enemyBody.width, enemyBody.height);
        enemyContainer.body.setCollideWorldBounds(true);

        const enemyCollisionWidth = (enemyBody.width / 2) - 12;
        const enemyCollisionHeight = (enemyBody.height / 2);
        enemyContainer.body.setSize(enemyCollisionWidth, enemyCollisionHeight);
        enemyContainer.body.setOffset(22, 0);

        enemyContainer.enemyId = Phaser.Math.RND.uuid(); // Adiciona um identificador único
        enemyContainer.health = 20;
        enemyContainer.acordado = false;
        enemyContainer.acordando = false;
        enemyContainer.atacando = false;
        enemyContainer.direcao = 'frente';
        enemyContainer.health = 100;
        enemyContainer.classe = nome
        enemyContainer.dano = 19
        enemyContainer.health = 50;
        enemyContainer.maxHealth = 50
        enemyContainer.morto = false
      

        // Criação da barra de vida
        const healthBarBg = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0x000000);
        const healthBar = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0xff0000);
        healthBar.setVisible(false)
        healthBarBg.setVisible(false) 

        enemyContainer.add(healthBarBg);
        enemyContainer.add(healthBar);

        enemyContainer.healthBar = healthBar;
        enemyContainer.healthBarBg = healthBarBg;

        return enemyContainer;
    }else if (nome == 'invocador') {
        const enemyBody = scene.add.sprite(0, 0, 'invocador');
        const brain = scene.add.sprite(0, 0, 'brain');
        const costela = scene.add.sprite(0, 0, 'costela');
        const enemyfire = scene.add.sprite(0, 0, 'magia1eft');
        enemyBody.play('turn_invocador', true);
        brain.play('turn_invocadorbrain', true);
        costela.play('turn_invocadorcostela', true)
        //enemyArma.setVisible(false); // Ajuste conforme necessário
        enemyBody.setVisible(true);
        brain.setVisible(true);
        costela.setVisible(true);
        enemyfire.setVisible(false);
    
        const enemyContainer = scene.add.container(x, y, [enemyBody, enemyfire, brain, costela]);
        scene.physics.world.enable(enemyContainer);
    
        enemyContainer.setSize(enemyBody.width, enemyBody.height);
        enemyContainer.body.setCollideWorldBounds(true);
    
        const enemyCollisionWidth = (enemyBody.width / 2) - 12;
        const enemyCollisionHeight = (enemyBody.height / 2) - 5;
        enemyContainer.body.setSize(enemyCollisionWidth, enemyCollisionHeight);
        enemyContainer.body.setOffset(22, (enemyBody.height / 2) + 2);
        
    
        enemyContainer.enemyId = Phaser.Math.RND.uuid(); // Adiciona um identificador único
        enemyContainer.health = 40;
        enemyContainer.acordado = false;
        enemyContainer.acordando = false;
        enemyContainer.atacando = false;
        enemyContainer.direcao = 'frente';
        //enemyContainer.health = 100;
        enemyContainer.classe = nome
        enemyContainer.dano = 10
        enemyContainer.health = 80;
        enemyContainer.maxHealth = 80
        enemyContainer.morto = false
        
      
    
        // Criação da barra de vida
        const healthBarBg = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0x000000);
        const healthBar = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0xff0000);
        healthBar.setVisible(false)
        healthBarBg.setVisible(false) 
    
        enemyContainer.add(healthBarBg);
        enemyContainer.add(healthBar);
    
        enemyContainer.healthBar = healthBar;
        enemyContainer.healthBarBg = healthBarBg;
        enemyContainer.body.setImmovable(true);
        return enemyContainer;
    } else if (nome == 'dragao') {

        

        const enemyBody = scene.add.sprite(0, 0, 'dragcorpo');
        const cbelo = scene.add.sprite(0, 0, 'dragcorpocabelo');
        const asa = scene.add.sprite(0, 0, 'dragcorpoasa');
        const enemyfire = scene.add.sprite(0, 0, 'magia1eft');

        enemyBody.play('turn_dragcorpo', true);
        asa.play('turn_dragasa', true);
        cbelo.play('turn_dragcabelo', true)

        //enemyArma.setVisible(false); // Ajuste conforme necessário
        enemyBody.setVisible(true);
        enemyfire.setVisible(false);

        const enemyContainer = scene.add.container(x, y, [asa, enemyBody, cbelo, enemyfire]);
        scene.physics.world.enable(enemyContainer);

        enemyContainer.setSize(enemyBody.width, enemyBody.height);
        enemyContainer.body.setCollideWorldBounds(true);

        const enemyCollisionWidth = (enemyBody.width);
        const enemyCollisionHeight = (enemyBody.height);
        enemyContainer.body.setSize(enemyCollisionWidth, enemyCollisionHeight);
        enemyContainer.body.setOffset(22, 0);

        enemyContainer.enemyId = Phaser.Math.RND.uuid(); // Adiciona um identificador único
        enemyContainer.health = 20;
        enemyContainer.acordado = false;
        enemyContainer.acordando = false;
        enemyContainer.atacando = false;
        enemyContainer.direcao = 'frente';
        enemyContainer.health = 100;
        enemyContainer.classe = nome
        enemyContainer.dano = 10
        enemyContainer.health = 9999999;
        enemyContainer.maxHealth = 9999999;
        enemyContainer.morto = false
      

        // Criação da barra de vida
        const healthBarBg = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0x000000);
        const healthBar = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0xff0000);
        healthBar.setVisible(false)
        healthBarBg.setVisible(false) 

        enemyContainer.add(healthBarBg);
        enemyContainer.add(healthBar);

        enemyContainer.healthBar = healthBar;
        enemyContainer.healthBarBg = healthBarBg;
        enemyContainer.body.setImmovable(true);
        return enemyContainer;
    } else if (nome == 'palhaco') {
        const enemyBody = scene.add.sprite(0, 0, 'palhaco');
        //const enemyArma = scene.add.sprite(0, 0, 'faca');
        const enemyfire = scene.add.sprite(0, 0, 'magia1eft');

        //enemyArma.setVisible(false); // Ajuste conforme necessário
        enemyBody.setVisible(false);
        enemyfire.setVisible(false);

        const enemyContainer = scene.add.container(x, y, [enemyBody, enemyfire]);
        scene.physics.world.enable(enemyContainer);

        enemyContainer.setSize(enemyBody.width, enemyBody.height);
        enemyContainer.body.setCollideWorldBounds(true);

        const enemyCollisionWidth = enemyBody.width;
        const enemyCollisionHeight = enemyBody.height;
        enemyContainer.body.setSize(enemyCollisionWidth-40, enemyCollisionHeight/2);
        enemyContainer.body.setOffset(20, (enemyBody.height / 2));

        enemyContainer.enemyId = Phaser.Math.RND.uuid(); // Adiciona um identificador único
        //enemyContainer.health = 30;
        enemyContainer.acordado = false;
        enemyContainer.acordando = false;
        enemyContainer.atacando = false;
        enemyContainer.direcao = 'frente';
        enemyContainer.health = 999999;
        enemyContainer.maxHealth = 999999;
        enemyContainer.classe = nome
        enemyContainer.dano = 0
        enemyContainer.morto = false
       
      
        


    //    // Criação da barra de vida
    //    const healthBarBg = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0x000000);
    //    const healthBar = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0xff0000);
    //    healthBar.setVisible(false)
    //    healthBarBg.setVisible(false) 

    //    enemyContainer.add(healthBarBg);
    //    enemyContainer.add(healthBar);

    //    enemyContainer.healthBar = healthBar;
    //    enemyContainer.healthBarBg = healthBarBg;
        

        return enemyContainer;
    } else if (nome == 'palhaco2') {
        const enemyBody = scene.add.sprite(0, 0, 'palhaco');
        //const enemyArma = scene.add.sprite(0, 0, 'faca');
        const enemyfire = scene.add.sprite(0, 0, 'magia1eft');

        //enemyArma.setVisible(false); // Ajuste conforme necessário
        enemyBody.setVisible(true);
        enemyfire.setVisible(false);

        const enemyContainer = scene.add.container(x, y, [enemyBody, enemyfire]);
        scene.physics.world.enable(enemyContainer);

        enemyContainer.setSize(enemyBody.width, enemyBody.height);
        enemyContainer.body.setCollideWorldBounds(true);

        const enemyCollisionWidth = enemyBody.width;
        const enemyCollisionHeight = enemyBody.height;
        enemyContainer.body.setSize(enemyCollisionWidth-40, enemyCollisionHeight/2);
        enemyContainer.body.setOffset(20, (enemyBody.height / 2));

        enemyContainer.enemyId = Phaser.Math.RND.uuid(); // Adiciona um identificador único
        //enemyContainer.health = 30;
        enemyContainer.acordado = false;
        enemyContainer.acordando = false;
        enemyContainer.atacando = false;
        enemyContainer.direcao = 'frente';
        enemyContainer.health = 999999;
        enemyContainer.maxHealth = 999999;
        enemyContainer.classe = nome
        enemyContainer.dano = 100
        enemyContainer.morto = false
        enemyContainer.body.setImmovable(true);
        //enemyContainer.body.immovable = true;
        enemyContainer.body.setMass(1000);
      
        


    //    // Criação da barra de vida
    //    const healthBarBg = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0x000000);
    //    const healthBar = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0xff0000);
    //    healthBar.setVisible(false)
    //    healthBarBg.setVisible(false) 

    //    enemyContainer.add(healthBarBg);
    //    enemyContainer.add(healthBar);

    //    enemyContainer.healthBar = healthBar;
    //    enemyContainer.healthBarBg = healthBarBg;
        

        return enemyContainer;
    } else if (nome == 'palhaco3') {
        const enemyBody = scene.add.sprite(0, 0, 'palhaco');
        //const enemyArma = scene.add.sprite(0, 0, 'faca');
        const enemyfire = scene.add.sprite(0, 0, 'magia1eft');

        //enemyArma.setVisible(false); // Ajuste conforme necessário
        enemyBody.setVisible(true);
        enemyfire.setVisible(false);

        const enemyContainer = scene.add.container(x, y, [enemyBody, enemyfire]);
        scene.physics.world.enable(enemyContainer);

        enemyContainer.setSize(enemyBody.width, enemyBody.height);
        enemyContainer.body.setCollideWorldBounds(true);

        const enemyCollisionWidth = enemyBody.width;
        const enemyCollisionHeight = enemyBody.height;
        enemyContainer.body.setSize(enemyCollisionWidth-40, enemyCollisionHeight/2);
        enemyContainer.body.setOffset(20, (enemyBody.height / 2));

        enemyContainer.enemyId = Phaser.Math.RND.uuid(); // Adiciona um identificador único
        //enemyContainer.health = 30;
        enemyContainer.acordado = false;
        enemyContainer.acordando = false;
        enemyContainer.atacando = false;
        enemyContainer.direcao = 'frente';
        enemyContainer.health = 200;
        enemyContainer.maxHealth = 200;
        enemyContainer.classe = nome
        enemyContainer.dano = 100
        enemyContainer.morto = false
        enemyContainer.body.setImmovable(true);
        //enemyContainer.body.immovable = true;
        //senemyContainer.body.setMass(1000);
      
        


    //    // Criação da barra de vida
    const healthBarBg = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0x000000);
        const healthBar = scene.add.rectangle(0, -enemyBody.height / 2 + 10, enemyBody.width - 5, 5, 0xff0000);
        healthBar.setVisible(false)
        healthBarBg.setVisible(false) 
    
        enemyContainer.add(healthBarBg);
        enemyContainer.add(healthBar);
    
        enemyContainer.healthBar = healthBar;
        enemyContainer.healthBarBg = healthBarBg;
        enemyContainer.body.setImmovable(true);

    return enemyContainer;
    }
}
