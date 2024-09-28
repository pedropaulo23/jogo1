//import { createEnemyContainer } from '../inimigos.js';
//import { getCookie } from '../cookies.js';

export function update() {
    const wasd = this.wasd; // Acessa this.wasd
        
    


    
        //console.log('ataque')
        if (!this.isAttacking && this.vivo) {
            //console.log('ataque')
            if (wasd.arrowUp.isDown || wasd.arrowLeft.isDown || wasd.arrowDown.isDown || wasd.arrowRight.isDown || this.ataquebtn && this.controleataque != 'espadausando') {
                this.isAttacking = true;
                let deladinho = [];
                
                if (wasd.arrowUp.isDown || this.ataquebtn && this.parado == 'costa') {
                    this.parado = 'costa';
                    this.player.anims.play('attack_up', true);
                    this.arma.anims.play(`attack_up_arma${this.numeromagia}`, true);
                    this.atkblusa.anims.play('attack_up_atkblusa', true);
                    this.atkchapeu.anims.play('attack_up_atkchapeu', true);
                    this.atkperna.anims.play('attack_up_atkperna', true);
                    this.atkpes.anims.play('attack_up_atkpes', true);
                    deladinho = [Math.PI, 0, -300, -10, 12];
                } else if (wasd.arrowLeft.isDown || this.ataquebtn && this.parado == 'lula') {
                    this.parado = 'lula';
                    this.player.anims.play('attack_left', true);
                    this.arma.anims.play(`attack_left_arma${this.numeromagia}`, true);
                    this.atkblusa.anims.play('attack_left_atkblusa', true);
                    this.atkchapeu.anims.play('attack_left_atkchapeu', true);
                    this.atkperna.anims.play('attack_left_atkperna', true);
                    this.atkpes.anims.play('attack_left_atkpes', true);
                    deladinho = [Math.PI / 2, -300, 0, 10, 0];
                } else if (wasd.arrowDown.isDown || this.ataquebtn && this.parado == 'frente') {
                    this.parado = 'frente';
                    this.player.anims.play('attack_down', true);
                    this.arma.anims.play(`attack_down_arma${this.numeromagia}`, true);
                    this.atkblusa.anims.play('attack_down_atkblusa', true);
                    this.atkchapeu.anims.play('attack_down_atkchapeu', true);
                    this.atkperna.anims.play('attack_down_atkperna', true);
                    this.atkpes.anims.play('attack_down_atkpes', true);
                    deladinho = [0, 0, 300, 0, -7];
                } else if (wasd.arrowRight.isDown || this.ataquebtn && this.parado == 'bolsonaro') {
                    this.parado = 'bolsonaro';
                    this.player.anims.play('attack_right', true);
                    this.arma.anims.play(`attack_right_arma${this.numeromagia}`, true);
                    this.atkblusa.anims.play('attack_right_atkblusa', true);
                    this.atkchapeu.anims.play('attack_right_atkchapeu', true);
                    this.atkperna.anims.play('attack_right_atkperna', true);
                    this.atkpes.anims.play('attack_right_atkpes', true);
                    deladinho = [-Math.PI / 2, 300, 0, 15, 0];
                }
    
                this.arma.setVisible(true);
                this.atkblusa.setVisible(true);
                this.atkchapeu.setVisible(true);
                this.atkperna.setVisible(true);
                this.atkpes.setVisible(true);
    
                this.blusa.setVisible(false);
                this.chapeu.setVisible(false);
                this.pes.setVisible(false);
                this.pernas.setVisible(false);
    
                this.playerContainer.body.setVelocityX(0);
                this.playerContainer.body.setVelocityY(0);
    
            this.time.delayedCall(500, () => {
                    this.controleataque = 'magia'
                    if (this.parado == 'frente') {
                        //this.player.anims.play('turn');
                        this.chapeu.anims.play('turn_chapeu');
                        this.blusa.anims.play('turn_blusa');
                        this.pernas.anims.play('turn_pernas');
                        this.pes.anims.play('turn_pes');
                    } else if (this.parado == 'costa') {
                        //this.player.anims.play('turn2');
                        this.chapeu.anims.play('turn2_chapeu');
                        this.blusa.anims.play('turn2_blusa');
                        this.pernas.anims.play('turn2_pernas');
                        this.pes.anims.play('turn2_pes');
                    } else if (this.parado == 'lula') {
                        //this.player.anims.play('turn3');
                        this.chapeu.anims.play('turn3_chapeu');
                        this.blusa.anims.play('turn3_blusa');
                        this.pernas.anims.play('turn3_pernas');
                        this.pes.anims.play('turn3_pes');
                    } else {
                        //this.player.anims.play('turn4');
                        this.chapeu.anims.play('turn4_chapeu');
                        this.blusa.anims.play('turn4_blusa');
                        this.pernas.anims.play('turn4_pernas');
                        this.pes.anims.play('turn4_pes');
                    }

                    this.isAttacking = false;
                    this.arma.setVisible(false);
                    this.atkblusa.setVisible(false);
                    this.atkchapeu.setVisible(false);
                    this.atkperna.setVisible(false);
                    this.atkpes.setVisible(false);
    
                    this.blusa.setVisible(true);
                    this.chapeu.setVisible(true);
                    this.pes.setVisible(true);
                    this.pernas.setVisible(true);
    
                    let magia1 = this.projectiles.get(this.playerContainer.x + deladinho[4], this.playerContainer.y + deladinho[3], 'magia1');
    
                    if (magia1) {
                        magia1.setActive(true);
                        magia1.setVisible(true);
                        magia1.play(`magia${this.numeromagia}`, true);
                        if (this.selectedSlotIndex == 1 && this.desbloqueado >= 1)  {
                            this.numeromagia = 5
                            magia1.body.setSize(65, 65); // Ajuste conforme necessário para o seu sprite
                        } else {
                            magia1.body.setSize(10, 10);
                           
                        }  
                        // magia1.body.setSize(10, 10); // Ajuste conforme necessário para o seu sprite
                        magia1.magicaid = Phaser.Math.RND.uuid();
                    }
    
                    magia1.rotation = deladinho[0];
                    magia1.setDepth(49);
                    magia1.setVelocityX(deladinho[1]);
                    magia1.setVelocityY(deladinho[2]);
                   
                    if (this.selectedSlotIndex == 1 && this.desbloqueado >= 1)  {
                        this.numeromagia = 5
                        this.magia1som = this.sound.add('magia1som5');
                        //this.projectile.body.setSize(50, 50);
                        //console.log('Largura da colisão:', this.projectiles.body.width);
                        //console.log('Altura da colisão:', this.projectiles.body.height);
                    } else {
                        this.numeromagia = 1
                        this.magia1som = this.sound.add('magia1som1');
                    }
                    this.magia1som.play();

                    


                }, [], this);

                

            } else if (this.ataquebtn2 && this.vivo) {
                this.isAttacking = true;
                this.controleataque = 'espadausando'
                
                let attackZone;
                let graphics;
                let zoneWidth = 80; // Largura da zona de ataque
                let zoneHeight = 43; // Altura da zona de ataque
                

                
                
                switch (this.parado) {
                    case 'frente':
                        zoneWidth = 97; // Largura da zona de ataque
                        zoneHeight = 37;
                        this.arma.anims.play(`espada_attack_down${this.numeromagia}`, true);
                        this.player.anims.play('espadacorpo_attack_down', true);
                        this.atkblusa.anims.play('espadablusa_attack_down', true);
                        this.atkperna.anims.play('espadaperna_attack_down', true);
                        this.atkpes.anims.play('espadape_attack_down', true);
                        this.atkchapeu.anims.play('espadachapeu_attack_down', true);
                        attackZone = this.add.zone(this.playerContainer.x, this.playerContainer.y + zoneHeight / 2 + 10).setSize(zoneWidth+15, zoneHeight+20);
                        //graphics = this.add.graphics({ fillStyle: { color: 0xff0000, alpha: 0.5 } });
                        //graphics.fillRect(attackZone.x - zoneWidth / 2, attackZone.y - zoneHeight / 2, zoneWidth+15, zoneHeight+10);
                        break;
                    case 'costa':
                        zoneWidth = 92; // Largura da zona de ataque
                        zoneHeight = 30;
                        this.arma.anims.play(`espada_attack_up${this.numeromagia}`, true);
                        this.player.anims.play('espadacorpo_attack_up', true);
                        this.atkblusa.anims.play('espadablusa_attack_up', true);
                        this.atkperna.anims.play('espadaperna_attack_up', true);
                        this.atkpes.anims.play('espadape_attack_up', true);
                        this.atkchapeu.anims.play('espadachapeu_attack_up', true);
                        attackZone = this.add.zone(this.playerContainer.x, this.playerContainer.y - zoneHeight / 2).setSize(zoneWidth+20, zoneHeight+10);
                        //graphics = this.add.graphics({ fillStyle: { alpha: 0.5 } });
                        //graphics.fillRect(attackZone.x - zoneWidth / 2, attackZone.y - zoneHeight / 2, zoneWidth+20, zoneHeight+10);
                        break;
                    case 'lula':
                        zoneWidth = 80; // Largura da zona de ataque
                        zoneHeight = 30;
                        this.arma.anims.play(`espada_attack_left${this.numeromagia}`, true);
                        this.player.anims.play('espadacorpo_attack_left', true);
                        this.atkblusa.anims.play('espadablusa_attack_left', true);
                        this.atkperna.anims.play('espadaperna_attack_left', true);
                        this.atkpes.anims.play('espadape_attack_left', true);
                        this.atkchapeu.anims.play('espadachapeu_attack_left', true);
                        attackZone = this.add.zone(this.playerContainer.x - zoneWidth / 2, this.playerContainer.y).setSize(zoneWidth, zoneHeight);
                        //graphics = this.add.graphics({ fillStyle: { alpha: 0.5 } });
                        //graphics.fillRect(attackZone.x - zoneWidth / 2, attackZone.y - zoneHeight / 2, zoneWidth, zoneHeight);
                        break;
                    case 'bolsonaro':
                        zoneWidth = 80; // Largura da zona de ataque
                        zoneHeight = 30;
                        this.arma.anims.play(`espada_attack_right${this.numeromagia}`, true);
                        
                        this.player.anims.play('espadacorpo_attack_right', true);
                        this.atkblusa.anims.play('espadablusa_attack_right', true);
                        this.atkperna.anims.play('espadaperna_attack_right', true);
                        this.atkpes.anims.play('espadape_attack_right', true);
                        this.atkchapeu.anims.play('espadachapeu_attack_right', true);
                        attackZone = this.add.zone(this.playerContainer.x + zoneWidth / 2, this.playerContainer.y).setSize(zoneWidth, zoneHeight);
                        //graphics = this.add.graphics({ fillStyle: { alpha: 0.5 } });
                        //graphics.fillRect(attackZone.x - zoneWidth / 2, attackZone.y - zoneHeight / 2, zoneWidth, zoneHeight);
                        break;
                }
            
                // Adiciona física ao attackZone
                this.physics.world.enable(attackZone);
                attackZone.body.setAllowGravity(false);
                attackZone.body.setImmovable(true);
                
                // Verifica colisão com inimigos na área do Zone
                
                
                
                this.arma.setVisible(true);
                this.atkblusa.setVisible(true);
                this.atkchapeu.setVisible(true);
                this.atkperna.setVisible(true);
                this.atkpes.setVisible(true);
            
                this.blusa.setVisible(false);
                this.chapeu.setVisible(false);
                this.pes.setVisible(false);
                this.pernas.setVisible(false);
                
                this.playerContainer.body.setVelocityX(0);
                this.playerContainer.body.setVelocityY(0);
            
                //
                

                //if () {  
                    
                //this.time.delayedCall(400, () => {
                    //hitEnemy2.call(this, this.arma, enemy);
                //    graphics.destroy();
                //}, [], this);
                        
                    //}
                
                    
                this.atkblusa.on('animationcomplete', () => {
                 
                    if (!this.ataquebtn && this.controleataque == 'espada' || this.controleataque == 'espadausando') {

                    
                        if (this.parado == 'frente') {
                            this.chapeu.anims.play('turn_chapeu');
                            this.blusa.anims.play('turn_blusa');
                            this.pernas.anims.play('turn_pernas');
                            this.pes.anims.play('turn_pes');
                        } else if (this.parado == 'costa') {
                            this.chapeu.anims.play('turn2_chapeu');
                            this.blusa.anims.play('turn2_blusa');
                            this.pernas.anims.play('turn2_pernas');
                            this.pes.anims.play('turn2_pes');
                        } else if (this.parado == 'lula') {
                            this.chapeu.anims.play('turn3_chapeu');
                            this.blusa.anims.play('turn3_blusa');
                            this.pernas.anims.play('turn3_pernas');
                            this.pes.anims.play('turn3_pes');
                        } else {
                            this.chapeu.anims.play('turn4_chapeu');
                            this.blusa.anims.play('turn4_blusa');
                            this.pernas.anims.play('turn4_pernas');
                            this.pes.anims.play('turn4_pes');
                        }
                        
                        this.isAttacking = false;
                        this.espadada = false
                        this.arma.setVisible(false);
                        this.atkblusa.setVisible(false);
                        this.atkchapeu.setVisible(false);
                        this.atkperna.setVisible(false);
                        this.atkpes.setVisible(false);
                
                        this.blusa.setVisible(true);
                        this.chapeu.setVisible(true);
                        this.pes.setVisible(true);
                        this.pernas.setVisible(true);
                    
                       
                        this.espadasom.play();
                        
                
                   
                        
                        
    
                    
            
                    // Destroy the attack zone after checking for collisions
                    //attackZone.destroy();
                    
                    this.controleataque = 'espadainativa'
                    this.limiteespada = true
                    //console.log('destruir')

                    
                    
                    }
                    
                    
            
                });
                this.time.delayedCall(400, () => {
                    //hitEnemy2.call(this, this.arma, enemy);
                    attackZone.destroy();
                    //graphics.destroy();
                }, [], this);
                this.physics.add.overlap(attackZone, this.enemies, (zone, enemy) => {
                    attackZone.destroy();
                    // Chame a função de hitEnemy2 ou qualquer outra lógica que você deseja aqui
                    if (this.limiteespada) {
                            //console.log('Enemy hit by sword!');
                        //this.time.delayedCall(400, () => {
                            this.limiteespada = false
                            
                            this.time.delayedCall(400, () => {
                               // console.log(this.player.currentHealth)
                                hitEnemy2.call(this, this.arma, enemy);
                                if (this.player.currentHealth + this.roubovida >= this.player.maxHealth) {
                                    //console.log(this.player.currentHealth, '>+', this.player.maxHealth, 'roubo: ', this.roubovida)
                                    this.player.currentHealth = Number(this.player.maxHealth)
                                    //console.log(this.player.currentHealth, '>+', this.player.maxHealth)
                                } else {
                                    this.player.currentHealth += this.roubovida
                                   // console.log(this.roubovida)
                                }
                                //graphics.destroy();
                            }, [], this);
                        
                        //this.espadada = true
                        //this.limiteespada = false
                    }
                    
                    
                    }); 
                
                //
                
                
            } else if (this.vivo) {
            
                if (this.curabase > 0 && this.curatempo) {
                    this.player.currentHealth = this.player.currentHealth + ((this.player.maxHealth/100) * this.curabase)
                    this.curatempo = false
                    if (this.player.currentHealth > this.player.maxHealth) {
                        this.player.currentHealth = this.player.maxHealth
                    }
                    this.curatempo = false
                    this.time.delayedCall(2000, () => {
                                                
                        this.curatempo = true
                        
                    });
                }
            
            
            if (wasd.left.isDown || this.cursorKeys.left.isDown) {
               
                this.playerContainer.body.setVelocityX(-160);
                this.player.anims.play('left', true);
                this.chapeu.anims.play('left_chapeu', true);
                this.blusa.anims.play('left_blusa', true);
                this.pernas.anims.play('left_pernas', true);
                this.pes.anims.play('left_pes', true);
                this.parado = 'lula';
                
            } else if (wasd.right.isDown || this.cursorKeys.right.isDown) {
              
                this.playerContainer.body.setVelocityX(160);
                this.player.anims.play('right', true);
                this.chapeu.anims.play('right_chapeu', true);
                this.blusa.anims.play('right_blusa', true);
                this.pernas.anims.play('right_pernas', true);
                this.pes.anims.play('right_pes', true);
                this.parado = 'bolsonaro';
                
            } else {
                this.playerContainer.body.setVelocityX(0);
            }
  
            if (wasd.up.isDown || this.cursorKeys.up.isDown) {
               
                if (wasd.left.isDown || this.cursorKeys.left.isDown) {
                    this.playerContainer.body.setVelocityY(-160);
                    this.player.anims.play('left', true);
                    this.chapeu.anims.play('left_chapeu', true);
                    this.blusa.anims.play('left_blusa', true);
                    this.pernas.anims.play('left_pernas', true);
                    this.pes.anims.play('left_pes', true);
                    this.parado = 'lula';
                } else if (wasd.right.isDown || this.cursorKeys.right.isDown) {
                    this.playerContainer.body.setVelocityY(-160);
                    this.player.anims.play('right', true);
                    this.chapeu.anims.play('right_chapeu', true);
                    this.blusa.anims.play('right_blusa', true);
                    this.pernas.anims.play('right_pernas', true);
                    this.pes.anims.play('right_pes', true);
                    this.parado = 'bolsonaro';
                } else if (this.vivo) {         
                    this.playerContainer.body.setVelocityY(-160);
                    this.player.anims.play('up', true);
                    this.chapeu.anims.play('up_chapeu', true);
                    this.blusa.anims.play('up_blusa', true);
                    this.pernas.anims.play('up_pernas', true);
                    this.pes.anims.play('up_pes', true);
                    this.parado = 'costa';
                }
                
            } else if (wasd.down.isDown || this.cursorKeys.down.isDown) {
                
                if (wasd.left.isDown || this.cursorKeys.left.isDown) {
                    this.playerContainer.body.setVelocityY(160);
                    this.player.anims.play('left', true);
                    this.chapeu.anims.play('left_chapeu', true);
                    this.blusa.anims.play('left_blusa', true);
                    this.pernas.anims.play('left_pernas', true);
                    this.pes.anims.play('left_pes', true);
                    this.parado = 'lula';
                } else if (wasd.right.isDown || this.cursorKeys.right.isDown) {
                    this.playerContainer.body.setVelocityY(160);
                    this.player.anims.play('right', true);
                    this.chapeu.anims.play('right_chapeu', true);
                    this.blusa.anims.play('right_blusa', true);
                    this.pernas.anims.play('right_pernas', true);
                    this.pes.anims.play('right_pes', true);
                    this.parado = 'bolsonaro';
                } else {
                this.playerContainer.body.setVelocityY(160);
                this.player.anims.play('down', true);
                this.chapeu.anims.play('down_chapeu', true);
                this.blusa.anims.play('down_blusa', true);
                this.pernas.anims.play('down_pernas', true);
                this.pes.anims.play('down_pes', true);
                this.parado = 'frente';
                }
                
            } else {
                this.playerContainer.body.setVelocityY(0);
            }

            if (this.playerContainer.body.velocity.x === 0 && this.playerContainer.body.velocity.y === 0) {
                if (this.parado == 'frente') {
                    this.player.anims.play('turn');
                    this.chapeu.anims.play('turn_chapeu');
                    this.blusa.anims.play('turn_blusa');
                    this.pernas.anims.play('turn_pernas');
                    this.pes.anims.play('turn_pes');
                } else if (this.parado == 'costa') {
                    this.player.anims.play('turn2');
                    this.chapeu.anims.play('turn2_chapeu');
                    this.blusa.anims.play('turn2_blusa');
                    this.pernas.anims.play('turn2_pernas');
                    this.pes.anims.play('turn2_pes');
                } else if (this.parado == 'lula') {
                    this.player.anims.play('turn3');
                    this.chapeu.anims.play('turn3_chapeu');
                    this.blusa.anims.play('turn3_blusa');
                    this.pernas.anims.play('turn3_pernas');
                    this.pes.anims.play('turn3_pes');
                } else {
                    this.player.anims.play('turn4');
                    this.chapeu.anims.play('turn4_chapeu');
                    this.blusa.anims.play('turn4_blusa');
                    this.pernas.anims.play('turn4_pernas');
                    this.pes.anims.play('turn4_pes');
                }
            }
        }
    }
    // Atualizar a posição da luz para seguir o jogador
    //this.lights.lights[0].x = this.playerContainer.x;
    //this.lights.lights[0].y = this.playerContainer.y;
    // Atualizar a posição das luzes para seguir os projéteis

    
    
    // Atualizar a barra de vida do jogador
    const healthBarWidth = 160
    this.player.healthBar.clear();
    this.player.healthBar.fillStyle(0x00ff00, 1);
    this.player.healthBar.fillRect(
        50, 
        10, 
        healthBarWidth * (this.player.currentHealth / this.player.maxHealth), 
        10
    );
    
    if (!this.vivo && !this.caiu) {
        //console.log('aa')
        this.playerContainer.body.setVelocityY(0);
        this.playerContainer.body.setVelocityX(0);
        this.player.anims.play('morreucorpo', true);
        this.chapeu.anims.play('morreuchapeu', true);
        this.blusa.anims.play('camisadesaudade', true);
        this.pernas.anims.play('morreuperna', true);
        this.pes.anims.play('morreupes', true);
        this.time.delayedCall(800, () => { 
            this.telamorte = this.add.sprite((window.innerWidth/2), (window.innerHeight/2), 'died').setInteractive();
            this.telamorte.setDepth(1012); // Certifique-se de que o botão está na frente
            this.telamorte.setScrollFactor(0); // O botão permanece fixo na tela
            this.telamorte.on('pointerup', function (pointer) {
                location.reload();
            }, this);
            });
        this.caiu = true
    }  

    
    if (this.selectedSlotIndex == 1 && this.desbloqueado >= 1)  {
        this.numeromagia = 5
        this.attackButton2.setTexture('attackButton25');
        this.attackButton.setTexture('attackButton5');
    } else {
        this.numeromagia = 1
        this.attackButton2.setTexture('attackButton2');
        this.attackButton.setTexture('attackButton');
    }   

    // Atualizar profundidade dos inimigos
    this.enemies.children.iterate((enemy) => {
        updateEnemyMovement.call(this, enemy);
        

        if (this.kills == 3) {
            enemy.list.forEach((child) => {
                if (child.texture && child.texture.key.includes('invocador')) {
                    if (enemy.morto == false) {
                        
                        this.invocar = true
                        child.play('ritual', true);
                       
                    } else {
                        this.invocar = false
                        
                    }   
                }
                
            });
           //this.invocar = false
        }
    });
    
    

    // Reproduzir som de passos quando o jogador se move
    
    if (this.playerContainer.body.velocity.x !== 0 || this.playerContainer.body.velocity.y !== 0) {
        // Verifica se o som não está tocando e se a variável de controle não está ativa
        if (!this.pessom.isPlaying && !this.passando) {
            //console.log('passos');
            this.pessom.play(); // Toca o som de passos
            this.passando = true; // Ativa a variável de controle
    
            // Define um atraso para sincronizar com o tempo de cada passo
            this.time.delayedCall(400, () => {
                this.passando = false; // Desativa a variável de controle após 400 ms
            });
        }
    } else {
        this.pessom.stop(); // Para o som de passos se o jogador não estiver se movendo
    }

    if (!this.ossom.isPlaying && Number(this.proximo.length) > 0 && this.inimigosativos.includes('esqueleto') && this.vivo) {
        this.ossom.play();
    } else if (Number(this.proximo.length) == 0){
        this.ossom.stop();
    }
    if (!this.fantasmasom.isPlaying && Number(this.proximo.length) > 0 && this.inimigosativos.includes('fantasma') && this.vivo) {
        this.fantasmasom.play();
    } else if (Number(this.proximo.length) == 0){
        this.fantasmasom.stop();
    }
    if (!this.asasom.isPlaying && this.parardialogo == true > 0 && this.inimigosativos.includes('dragao') && this.vivo) {
        this.asasom.play();
    } else if (Number(this.proximo.length) == 0){
        this.asasom.stop();
    }

    if (!this.dragsom.isPlaying && this.parardialogo == true > 0 && this.inimigosativos.includes('dragao') && this.vivo && this.geloquebrado == false) {
        this.dragsom.play();
    } else if (Number(this.proximo.length) == 0){
        this.dragsom.stop();
    }


    
    

    // Atualizar profundidade de todos os inimigos
    updateAllDepths.call(this);
    //destroi ao sair do mapa
    this.projectiles.children.each(function(projectile) {
        if (projectile.active) {
            
            if (projectile.x < 0 || projectile.x > this.physics.world.bounds.width ||
                projectile.y < 0 || projectile.y > this.physics.world.bounds.height) {
                projectile.setActive(false);
                projectile.setVisible(false);
                projectile.destroy();
            }
            
        }
    }, this);
    if (Number(this.fase) == 3 && this.inimigosativos.includes('dragao')) {
        this.projectiles2.children.each(function(projectile) {
            if (projectile.active) {
                
                if (projectile.x < 0 || projectile.x > this.physics.world.bounds.width ||
                    projectile.y < 0 || projectile.y > this.physics.world.bounds.height) {
                    projectile.setActive(false);
                    projectile.setVisible(false);
                    projectile.destroy();
                }
                
            }
        }, this);
    }

    //liuminação(inutil)
    this.projectiles.children.iterate((projectile) => {
        if (projectile.active) {
            if (!projectile.light) {
                projectile.light = this.lights.addLight(projectile.x, projectile.y, 100).setColor(0xff0000).setIntensity(2);
            } else {
                projectile.light.x = projectile.x;
                projectile.light.y = projectile.y;
            }
        } else if (projectile.light) {
            this.lights.removeLight(projectile.light);
            projectile.light = null;
        }
    });
    
}



function updateEnemyMovement(enemy) {
    if (this.inimigosativos.includes('esqueleto') && enemy.classe == 'esqueleto') {
    //updateAllDepths.call(this);
    const enemySpeed = 90; // Velocidade do inimigo
    const distance = Phaser.Math.Distance.Between(this.playerContainer.x, this.playerContainer.y, enemy.x, enemy.y);
    //updateDepth.call(this, enemy);
    // Persegue o jogador se estiver próximo o suficiente
    if (distance < 300 && this.vivo || enemy.acordando == true && this.vivo) {

        
        if (!this.proximo.includes(enemy.enemyId)) {
            this.proximo.push(enemy.enemyId)
           // console.log(this.proximo)
        }
    
       

        if (enemy.acordado == false && enemy.acordando == false) {


            if (this.transmusic == false) {
                if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
                    this.backgroundMusic.stop();
                    this.backgroundMusic.destroy();
                }
            
                // Carregar a nova música e tocar
                this.backgroundMusic = this.sound.add('fase1m', {
                    loop: true, // Repetir a música em loop
                    volume: 0.5 // Definir o volume da nova música
                });
            
                // Toca a nova música
                this.backgroundMusic.play();
                // Usar evento 'complete' para repetir a música após terminar
                this.backgroundMusic.once('complete', () => {
                    this.backgroundMusic.play(); // Repetir a música ao final
                });
            this.transmusic = true
            }


            let acordaAnimation = this.add.sprite(enemy.x, enemy.y, 'enemy_dead');
            acordaAnimation.setDepth(30);
            acordaAnimation.play('enemy_acorda');
            acordaAnimation.on('animationcomplete', () => {
                acordaAnimation.destroy();
                enemy.acordado = true;
                enemy.acordando = false;
                //enemy.setVisible(true);
                enemy.list.forEach((child) => {
                    if (child.texture && child.texture.key.includes('enemy')) {
                        child.setVisible(true)
                    }
                });
                
            });
            enemy.acordando = true;
        } else if (enemy.acordado) {
            
            if (enemy.atacando == false) {           
                this.physics.moveToObject(enemy, this.playerContainer, enemySpeed);


                enemy.list.forEach((child) => {
                    if (child.texture && child.texture.key.includes('enemy')) {
                        if (enemy.body.velocity.x < -50) {
                            child.play('enemy_left', true);
                            enemy.direcao = 'esquerda';
                        } else if (enemy.body.velocity.x > 50) {
                            child.play('enemy_right', true);
                            enemy.direcao = 'direita';
                        } else if (enemy.body.velocity.y < 0) {
                            child.play('enemy_up', true);
                            enemy.direcao = 'frente';
                        } else if (enemy.body.velocity.y > 0) {
                            child.play('enemy_down', true);
                            enemy.direcao = 'costa';
                        } else {
                            child.play('enemy_turn', true);
                            enemy.direcao = 'frente';
                        }
                    }
                });
                
            } else {
                enemy.body.setVelocity(0);
            }
        }
        
    } else {

        
           
        if (this.proximo.includes(enemy.enemyId)) {
            this.proximo.splice(enemy.enemyId, 1);
            //console.log(this.proximo.length)
        }
            
   

        if (enemy.body.velocity.x === 0 && enemy.body.velocity.y === 0) {
            // Atualizar animações de partes do inimigo
            enemy.list.forEach((child) => {
                if (child.texture && child.texture.key.includes('enemy')) {
                    child.play('enemy_turn', true);
                }
            });
        }
        enemy.body.setVelocity(0);
    }

} else if (this.inimigosativos.includes('fantasma') && enemy.classe == 'demonio') {
    //updateAllDepths.call(this);
    const enemySpeed = 95; // Velocidade do inimigo
    const distance = Phaser.Math.Distance.Between(this.playerContainer.x, this.playerContainer.y, enemy.x, enemy.y);
    //updateDepth.call(this, enemy);
    // Persegue o jogador se estiver próximo o suficiente
    if (distance < 300 && this.vivo || enemy.acordando == true && this.vivo) {

        
        if (!this.proximo.includes(enemy.enemyId)) {
            this.proximo.push(enemy.enemyId)
           // console.log(this.proximo)
        }
    
       

        if (enemy.acordado == false && enemy.acordando == false) {
            //let acordaAnimation = this.add.sprite(enemy.x, enemy.y, 'enemy_dead');
            //acordaAnimation.setDepth(30);
           // acordaAnimation.play('enemy_acorda');
            //acordaAnimation.on('animationcomplete', () => {
               // acordaAnimation.destroy();
               if (this.transmusic == false) {
                if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
                    this.backgroundMusic.stop();
                    this.backgroundMusic.destroy();
                }
                console.log(this.backgroundMusic)
                // Carregar a nova música e tocar
                this.backgroundMusic = this.sound.add('fase1m', {
                    loop: true, // Repetir a música em loop
                    volume: 0.5 // Definir o volume da nova música
                });
            
                // Toca a nova música
                this.backgroundMusic.play();
                // Usar evento 'complete' para repetir a música após terminar
                this.backgroundMusic.once('complete', () => {
                    this.backgroundMusic.play(); // Repetir a música ao final
                });
            this.transmusic = true
            }
                enemy.acordado = true;
                enemy.acordando = false;
                //enemy.setVisible(true);
                //enemy.list.forEach((child) => {
                //    if (child.texture && child.texture.key.includes('enemy')) {
                //        child.setVisible(true)
                //    }
                //});
                
            //});
            enemy.acordando = true;
        } else if (enemy.acordado) {
            
            if (enemy.atacando == false) {           
                this.physics.moveToObject(enemy, this.playerContainer, enemySpeed);


                enemy.list.forEach((child) => {
                    if (child.texture && child.texture.key.includes('voador')) {
                        if (enemy.body.velocity.x < -50) {
                            child.play('voador_walk_left', true);
                            enemy.direcao = 'esquerda';
                        } else if (enemy.body.velocity.x > 50) {
                            child.play('voador_walk_right', true);
                            enemy.direcao = 'direita';
                        } else if (enemy.body.velocity.y < 0) {
                            child.play('voador_walk_back', true);
                            enemy.direcao = 'frente';
                        } else if (enemy.body.velocity.y > 0) {
                            child.play('voador_walk_front', true);
                            enemy.direcao = 'costa';
                        } else {
                            child.play('enemy_turn', true);
                            enemy.direcao = 'frente';
                        }
                    }
                });
                
            } else {
                enemy.body.setVelocity(0);
            }
        }
        
    } else {

        
           
        if (this.proximo.includes(enemy.enemyId)) {
            this.proximo.splice(enemy.enemyId, 1);
            //console.log(this.proximo.length)
        }
            
   

        if (enemy.body.velocity.x === 0 && enemy.body.velocity.y === 0) {
            // Atualizar animações de partes do inimigo
            enemy.list.forEach((child) => {
                if (child.texture && child.texture.key.includes('enemy')) {
                    child.play('enemy_turn', true);
                }
            });
        }
        enemy.body.setVelocity(0);
    }
} else if (enemy.classe == 'invocador') {
    enemy.body.setVelocity(0);
} else if (enemy.classe == 'dragao') {
     
    //updateAllDepths.call(this);
    const enemySpeed = 120; // Velocidade do inimigo
    const distance = Phaser.Math.Distance.Between(this.playerContainer.x, this.playerContainer.y, enemy.x, enemy.y);
    if (enemy.acordado == false && enemy.acordando == false || this.parardialogo == false) {
        enemy.body.setVelocity(0);
    }
    //updateDepth.call(this, enemy);
    // Persegue o jogador se estiver próximo o suficiente
    if (distance < 150 && this.vivo || enemy.acordando == true && this.vivo || enemy.acordado == true && this.vivo) {
        
        if (enemy.acordado == false && enemy.acordando == false && this.parardialogo == false) {
            if (this.transmusic == false) {
                if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
                    this.backgroundMusic.stop();
                    this.backgroundMusic.destroy();
                }
            
                // Carregar a nova música e tocar
                this.backgroundMusic = this.sound.add('fase3m', {
                    loop: true, // Repetir a música em loop
                    volume: 0.5 // Definir o volume da nova música
                });
            
                // Toca a nova música
                this.backgroundMusic.play();
                // Usar evento 'complete' para repetir a música após terminar
                this.backgroundMusic.once('complete', () => {
                    this.backgroundMusic.play(); // Repetir a música ao final
                });
            this.transmusic = true
            }
            //this.asasom.play();
            this.parardialogo = true
            
            const livro = this.add.image((window.innerWidth/2), (window.innerHeight-150), 'dragaofala').setInteractive();
            livro.setDepth(1013);
            livro.setScrollFactor(0);

            const text = "Você ousa desafiar minha autoridade? Não sabe com quem está lidando. Eu sou o guardião deste portal, e você não passará por aqui vivo. Sinta o verdadeiro poder de um dragão!";

            const textStyle = {
                fontSize: '18px',
                fill: '#000000',
                fontStyle: 'bold',
                wordWrap: { width: 400, useAdvancedWrap: true } // Ajuste a largura conforme necessário
            };

            const txt = this.add.text((window.innerWidth/2)+95, (window.innerHeight-140), text, textStyle).setOrigin(0.5, 0.5);
            txt.setDepth(1016);
            txt.setScrollFactor(0);

                    
                livro.on('pointerdown', () => {
                    
                    enemy.acordando = true;
                    enemy.health = 2222;
                    enemy.maxHealth = 2222;
                    livro.destroy()
                    txt.destroy()
                    
        }); 
    }
        
        if (!this.proximo.includes(enemy.enemyId)) {
            this.proximo.push(enemy.enemyId)
           // console.log(this.proximo)
        }
    
       

        if (enemy.acordado == false && enemy.acordando == true) {
                        
                    //enemy.acordando = true;
                if (enemy.y > 151) {
                    //console.log(enemy.y)
                    const velocityY = (-(enemy.y + 0.00005));
                    enemy.body.setVelocity(0, velocityY);
                
                } else {
                    this.dragchegou = false
                    this.tempodrag = 15000
                    this.dragtroca = false
                    this.geloquebrado = false
                    console.log('parar')
                    enemy.body.setVelocity(0, 0);
                    
                    enemy.acordando = false;
                    enemy.acordado = true
                    this.time.delayedCall(this.tempodrag, () => {
                        this.dragtroca = true
                        this.dragtroca2 = false
                    });
                }
                //enemy.setVisible(true);
                //enemy.list.forEach((child) => {
                //    if (child.texture && child.texture.key.includes('enemy')) {
                //        child.setVisible(true)
                //    }
                //});
                
            //});
               
           // });
        } else if (enemy.acordado) {
            if (this.geloquebrado == true) {
                enemy.body.setVelocity(0);
                //enemy.body.setVelocity(0, 0);
            }
            if (enemy.atacando == false) {           
                if (this.geloquebrado == false) {
                    const distance = Phaser.Math.Distance.Between(enemy.x, enemy.y, this.playerContainer.x, this.playerContainer.y);
                    const duration = distance / enemySpeed;
                    const velocityX = (this.playerContainer.x - enemy.x) / duration;
                    enemy.body.setVelocity(velocityX*1.5, 0);
                }

                enemy.list.forEach((child) => {
                    if (child.texture && child.texture.key.includes('dragcorpo') || child.texture && child.texture.key.includes('dragaoesquerda') || child.texture && child.texture.key.includes('dragaodireita') || child.texture && child.texture.key.includes('dragaofrente') || child.texture && child.texture.key.includes('dragaocosta')) {
                        // else if (enemy.body.velocity.y < 0) {
                            //child.play('voador_walk_back', true);
                       //     enemy.direcao = 'frente';
                       // } else if (enemy.body.velocity.y > 0) {
                            //child.play('voador_walk_front', true);
                       //     enemy.direcao = 'costa';
                       // } else {
                            //child.play('enemy_turn', true);
                        //    enemy.direcao = 'frente';
                       // }
                        const raiodrag = 35
                        if (this.geloquebrado == true) {
                            if (this.viradragpra == 'frente') {
                                child.play('draggelofrente', true);
                                //this.geloquebrado = true
                                //enemy.body.setVelocity(0, 0);
                            } else {
                                child.play('draggelocosta', true);
                               // this.geloquebrado = true
                                //enemy.body.setVelocity(0, 0);
                                
                            }
                        }
                        
                        if (this.dragtroca) {
                            
                                if (this.dragtroca2 == false) {
                                    this.quebragelo = Number(enemy.health)
                                    this.dragtroca2 = true
                                } else if (this.quebragelo > Number(enemy.health) && this.numeromagia == 5 && this.dragchegou == true) {
                                    this.dragtroca = false
                                    
                                    
                                    
                                        if (enemy.y < this.playerContainer.y) {
                                            this.viradragpra = 'frente'
                                            child.play('draggelofrente', true);
                                            this.geloquebrado = true
                                            enemy.body.setVelocity(0, 0);
                                        } else {
                                            this.viradragpra = 'costa'
                                            child.play('draggelocosta', true);
                                            this.geloquebrado = true
                                            enemy.body.setVelocity(0, 0);
                                            
                                        }
                                        this.time.delayedCall(8000, () => {
                                            this.dragchegou = false
                                            this.geloquebrado = false
                                        });
                                        
                                } else {
                                    this.quebragelo = Number(enemy.health)
                                }
                                
                            
                            //console.log(enemy.y)
                            if (enemy.y < 600 && enemy.y < 600) {
                                const velocityY = (+(enemy.y + 200));
                                enemy.body.setVelocity(0, velocityY); 
                            } else {
                                this.dragchegou = true
                            }
                            


                        } else if (this.dragtroca == false && this.dragtroca2 == true && this.geloquebrado == false) {
                            
                            if (enemy.y > 151) {
                                //console.log(enemy.y)
                                const velocityY = (-(enemy.y + 200));
                                enemy.body.setVelocity(0, velocityY);
                            } else {
                                this.dragtroca2 = false
                                enemy.body.setVelocity(0, 0);
                                this.time.delayedCall(this.tempodrag, () => {
                                    this.dragtroca = true
                                    this.dragtroca2 = false
                                });
                            }
                        }
                        
                        if (enemy.x - raiodrag < this.playerContainer.x && enemy.x + raiodrag > this.playerContainer.x && this.geloquebrado == false) {

                            if (enemy.y < this.playerContainer.y) {
                                child.play('dragataque', true);
                            } else {
                                child.play('dragcosta', true);
                            }
                            
                            // Verifica se o eixo X do dragão é igual ao do jogador e lança um projétil
                            //if (Math.abs(enemy.x - this.playerContainer.x) < 30) {
                                // Código para lançar o projétil
                                //this.time.delayedCall(200, () => {
                                if (enemy.y < this.playerContainer.y) {
                                    let projectile = this.projectiles2.get(enemy.x, enemy.y + 5, 'magia1');
                                    if (projectile) {
                                        projectile.setActive(true);
                                        projectile.setVisible(true);
                                        projectile.play('magia1', true);
                                        projectile.body.setSize(10, 10);
                                        projectile.setVelocityY(400); // Lança o projétil para baixo no eixo Y
                                        projectile.setDepth(this.playerContainer.depth - 1)
                                        this.magia1somx.play();
                                    }
                                } else {
                                    let projectile = this.projectiles2.get(enemy.x, enemy.y - 5, 'magia1');
                                    if (projectile) {
                                        
                                        projectile.setActive(true);
                                        projectile.setVisible(true);
                                        projectile.play('magia1', true);
                                        projectile.body.setSize(10, 10);
                                        projectile.rotation = Math.PI;
                                        projectile.setVelocityY(-400); // Lança o projétil para baixo no eixo Y
                                        projectile.setDepth(this.playerContainer.depth - 1)
                                        this.magia1somx.play();
                                    }
                                }
                                
                           // });
                           // }
                        } else if (this.geloquebrado == false) {
                            if (enemy.body.velocity.x < -10) {
                                child.play('dragesquerda', true);
                                enemy.direcao = 'esquerda';
                            } else if (enemy.body.velocity.x > 10) {
                                child.play('dragdireita', true);
                                enemy.direcao = 'direita';
                            }
                        }
                    }
                });
                
            } else {
                enemy.body.setVelocity(0);
            }
            // Função para lançar o projétil
           
           
        }
        
        
    } else if (this.geloquebrado == false) {

        
           
        if (this.proximo.includes(enemy.enemyId)) {
            this.proximo.splice(enemy.enemyId, 1);
            //console.log(this.proximo.length)
        }
            
   

        if (enemy.body.velocity.x === 0 && enemy.body.velocity.y === 0) {
            // Atualizar animações de partes do inimigo
            enemy.list.forEach((child) => {
                if (child.texture && child.texture.key.includes('enemy')) {
                    child.play('enemy_turn', true);
                }
            });
        }
        enemy.body.setVelocity(0);
    }
    
} else if (this.inimigosativos.includes('palhaco') && enemy.classe == 'palhaco2') {
    //updateAllDepths.call(this);
    const enemySpeed = 0; // Velocidade do inimigo
    const distance = Phaser.Math.Distance.Between(this.playerContainer.x, this.playerContainer.y, enemy.x, enemy.y);
    enemy.body.setVelocity(0);
    //updateDepth.call(this, enemy);
    // Persegue o jogador se estiver próximo o suficiente
    if (this.vivo) {

        
        if (!this.proximo.includes(enemy.enemyId)) {
            this.proximo.push(enemy.enemyId)
           // console.log(this.proximo)
        }
    
       

        if (enemy.acordado == false && enemy.acordando == false) {


            if (this.transmusic == false) {
                if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
                    this.backgroundMusic.stop();
                    this.backgroundMusic.destroy();
                }
            
                // Carregar a nova música e tocar
                this.backgroundMusic = this.sound.add('fase4m', {
                    loop: true, // Repetir a música em loop
                    volume: 0.5 // Definir o volume da nova música
                });
            
                // Toca a nova música
                this.backgroundMusic.play();
                // Usar evento 'complete' para repetir a música após terminar
                // this.backgroundMusic.once('complete', () => {
                //     this.backgroundMusic.play(); // Repetir a música ao final
                // });
            this.transmusic = true
            }


            // let acordaAnimation = this.add.sprite(enemy.x, enemy.y, 'enemy_dead');
            // acordaAnimation.setDepth(30);
            // acordaAnimation.play('enemy_acorda');
            // acordaAnimation.on('animationcomplete', () => {
            //     acordaAnimation.destroy();
                 enemy.acordado = true;
                 enemy.acordando = false;
                 //enemy.setVisible(true);
                 enemy.list.forEach((child) => {
            //         if (child.texture && child.texture.key.includes('enemy')) {
                         child.setVisible(true)
            //         }
                 });
                
            //});
            enemy.acordando = true;
        } else if (enemy.acordado) {
            
            if (enemy.atacando == false) {           
                this.physics.moveToObject(enemy, this.playerContainer, enemySpeed);


                enemy.list.forEach((child) => {
                    if (child.texture && child.texture.key.includes('palhaco')) {
                        // if (enemy.body.velocity.x < -50) {
                        //     child.play('palhaco_left', true);
                        //     enemy.direcao = 'esquerda';
                        // } else if (enemy.body.velocity.x > 50) {
                        //     child.play('palhaco_right', true);
                        //     enemy.direcao = 'direita';
                        // } else if (enemy.body.velocity.y < 0) {
                            child.play('palhaco_turn2', true);
                            enemy.body.setVelocity(0);
                            //enemy.direcao = 'frente';
                        // } else if (enemy.body.velocity.y > 0) {
                        //     child.play('palhaco_down', true);
                        //     enemy.direcao = 'costa';
                        // } else {
                        //     child.play('palhaco_turn', true);
                        //     enemy.direcao = 'frente';
                        // }
                    }
                });
                
            } else {
                //child.play('palhaco_turn', true);
                enemy.body.setVelocity(0);
            }
        }
        
    } else {

        
           
        if (this.proximo.includes(enemy.enemyId)) {
            this.proximo.splice(enemy.enemyId, 1);
            //console.log(this.proximo.length)
        }
            
   

        if (enemy.body.velocity.x === 0 && enemy.body.velocity.y === 0) {
            // Atualizar animações de partes do inimigo
            enemy.list.forEach((child) => {
                if (child.texture && child.texture.key.includes('palhaco')) {
                    child.play('palhaco_turn2', true);
                }
            });
        }
        enemy.body.setVelocity(0);
    }

} else if (this.inimigosativos.includes('palhaco') && enemy.classe == 'palhaco') {
    //updateAllDepths.call(this);
    const enemySpeed = 90; // Velocidade do inimigo
    const distance = Phaser.Math.Distance.Between(this.playerContainer.x, this.playerContainer.y, enemy.x, enemy.y);
    //updateDepth.call(this, enemy);
    // Persegue o jogador se estiver próximo o suficiente
    if (distance < 300 && this.vivo || enemy.acordando == true && this.vivo) {

        
        if (!this.proximo.includes(enemy.enemyId)) {
            this.proximo.push(enemy.enemyId)
           // console.log(this.proximo)
        }
    
       

        if (enemy.acordado == false && enemy.acordando == false) {


            if (this.transmusic == false) {
                if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
                    this.backgroundMusic.stop();
                    this.backgroundMusic.destroy();
                }
            
                // Carregar a nova música e tocar
                this.backgroundMusic = this.sound.add('fase4m', {
                    loop: true, // Repetir a música em loop
                    volume: 0.5 // Definir o volume da nova música
                });
            
                // Toca a nova música
                this.backgroundMusic.play();
                // Usar evento 'complete' para repetir a música após terminar
                // this.backgroundMusic.once('complete', () => {
                //     this.backgroundMusic.play(); // Repetir a música ao final
                // });
            this.transmusic = true
            }


            // let acordaAnimation = this.add.sprite(enemy.x, enemy.y, 'enemy_dead');
            // acordaAnimation.setDepth(30);
            // acordaAnimation.play('enemy_acorda');
            // acordaAnimation.on('animationcomplete', () => {
            //     acordaAnimation.destroy();
                 enemy.acordado = true;
                 enemy.acordando = false;
                 //enemy.setVisible(true);
                 enemy.list.forEach((child) => {
            //         if (child.texture && child.texture.key.includes('enemy')) {
                         child.setVisible(true)
            //         }
                 });
                
            //});
            enemy.acordando = true;
        } else if (enemy.acordado) {
            
            if (enemy.atacando == false) {           
                this.physics.moveToObject(enemy, this.playerContainer, enemySpeed);


                enemy.list.forEach((child) => {
                    if (child.texture && child.texture.key.includes('palhaco')) {
                        if (enemy.body.velocity.x < -50) {
                            child.play('palhaco_left', true);
                            enemy.direcao = 'esquerda';
                        } else if (enemy.body.velocity.x > 50) {
                            child.play('palhaco_right', true);
                            enemy.direcao = 'direita';
                        } else if (enemy.body.velocity.y < 0) {
                            child.play('palhaco_up', true);
                            enemy.direcao = 'frente';
                        } else if (enemy.body.velocity.y > 0) {
                            child.play('palhaco_down', true);
                            enemy.direcao = 'costa';
                        } else {
                            child.play('palhaco_turn', true);
                            enemy.direcao = 'frente';
                        }
                    }
                });
                
            } else {
                enemy.body.setVelocity(0);
            }
        }
        
    } else {

        
           
        if (this.proximo.includes(enemy.enemyId)) {
            this.proximo.splice(enemy.enemyId, 1);
            //console.log(this.proximo.length)
        }
            
   

        if (enemy.body.velocity.x === 0 && enemy.body.velocity.y === 0) {
            // Atualizar animações de partes do inimigo
            enemy.list.forEach((child) => {
                if (child.texture && child.texture.key.includes('palhaco')) {
                    child.play('palhaco_turn', true);
                }
            });
        }
        enemy.body.setVelocity(0);
    }

} else if (this.inimigosativos.includes('palhaco') && enemy.classe == 'palhaco3') {
    //updateAllDepths.call(this);
    const enemySpeed = 0; // Velocidade do inimigo
    const distance = Phaser.Math.Distance.Between(this.playerContainer.x, this.playerContainer.y, enemy.x, enemy.y);
    enemy.body.setVelocity(0);
    //enemy.healthBar.setVisible(false);
    //enemy.healthBarBg.setVisible(false);
    //updateDepth.call(this, enemy);
    // Persegue o jogador se estiver próximo o suficiente
    if (this.vivo) {

        
        if (!this.proximo.includes(enemy.enemyId)) {
            this.proximo.push(enemy.enemyId)
           // console.log(this.proximo)
        }
    
       

        if (enemy.acordado == false && enemy.acordando == false) {


            if (this.transmusic == false) {
                if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
                    this.backgroundMusic.stop();
                    this.backgroundMusic.destroy();
                }
            
                // Carregar a nova música e tocar
                this.backgroundMusic = this.sound.add('fase4m', {
                    loop: true, // Repetir a música em loop
                    volume: 0.5 // Definir o volume da nova música
                });
            
                // Toca a nova música
                this.backgroundMusic.play();
                // Usar evento 'complete' para repetir a música após terminar
                // this.backgroundMusic.once('complete', () => {
                //     this.backgroundMusic.play(); // Repetir a música ao final
                // });
            this.transmusic = true
            }


            // let acordaAnimation = this.add.sprite(enemy.x, enemy.y, 'enemy_dead');
            // acordaAnimation.setDepth(30);
            // acordaAnimation.play('enemy_acorda');
            // acordaAnimation.on('animationcomplete', () => {
            //     acordaAnimation.destroy();
                 enemy.acordado = true;
                 enemy.acordando = false;
                 //enemy.setVisible(true);
                 enemy.list.forEach((child) => {
                     if (child.texture && child.texture.key.includes('enemy')) {
                         child.setVisible(true)
                     }
                 });
                
            //});
            enemy.acordando = true;
        } else if (enemy.acordado) {
            
            if (enemy.atacando == false) {           
                this.physics.moveToObject(enemy, this.playerContainer, enemySpeed);


                enemy.list.forEach((child) => {
                    if (child.texture && child.texture.key.includes('palhaco')) {
                        // if (enemy.body.velocity.x < -50) {
                        //     child.play('palhaco_left', true);
                        //     enemy.direcao = 'esquerda';
                        // } else if (enemy.body.velocity.x > 50) {
                        //     child.play('palhaco_right', true);
                        //     enemy.direcao = 'direita';
                        // } else if (enemy.body.velocity.y < 0) {
                            child.play('palhaco_turn', true);
                            enemy.body.setVelocity(0);
                            //enemy.direcao = 'frente';
                        // } else if (enemy.body.velocity.y > 0) {
                        //     child.play('palhaco_down', true);
                        //     enemy.direcao = 'costa';
                        // } else {
                        //     child.play('palhaco_turn', true);
                        //     enemy.direcao = 'frente';
                        // }
                    }
                });
                
            } else {
                //child.play('palhaco_turn', true);
                enemy.body.setVelocity(0);
            }
        }
        
    } else {

        
           
        if (this.proximo.includes(enemy.enemyId)) {
            this.proximo.splice(enemy.enemyId, 1);
            //console.log(this.proximo.length)
        }
            
   

        if (enemy.body.velocity.x === 0 && enemy.body.velocity.y === 0) {
            // Atualizar animações de partes do inimigo
            enemy.list.forEach((child) => {
                if (child.texture && child.texture.key.includes('palhaco')) {
                    child.play('palhaco_turn2', true);
                }
            });
        }
        enemy.body.setVelocity(0);
    }

}
    
}


function updateAllDepths() {
    if (this.fase != 3) {
    const playerDepth = 50;
    const abovePlayerDepthRange = [44, 45, 46, 47, 48, 49]; // Faixa de profundidade para inimigos acima do jogador
    const belowPlayerDepthRange = [51, 52, 53, 54, 55, 56]; // Faixa de profundidade para inimigos abaixo do jogador

    // Ordenar os inimigos pela posição Y
    let enemies = this.enemies.getChildren();
    enemies.sort((a, b) => a.y - b.y);

    let aboveIndex = 0;
    let belowIndex = 0;
 

    enemies.forEach((enemy) => {
        if (enemy.y < this.playerContainer.y) {
            // Inimigo está acima do jogador
            enemy.setDepth(abovePlayerDepthRange[aboveIndex % abovePlayerDepthRange.length]);
            aboveIndex++;
        } else {
            // Inimigo está abaixo do jogador
            enemy.setDepth(belowPlayerDepthRange[belowIndex % belowPlayerDepthRange.length]);
            belowIndex++;
        }
    });
    } else {
        const playerDepth = 50;
        const abovePlayerDepthRange = [44, 45, 46, 47, 48, 49]; // Faixa de profundidade para inimigos acima do jogador
        const belowPlayerDepthRange = [51, 52, 53, 54, 55, 56]; // Faixa de profundidade para inimigos abaixo do jogador

        // Ordenar os inimigos pela posição Y
        let enemies = this.enemies.getChildren();
        enemies.sort((a, b) => a.y - b.y);

        let aboveIndex = 0;
        let belowIndex = 0;
        enemies.forEach((enemy) => {
            
                // Inimigo está abaixo do jogador
                enemy.setDepth(belowPlayerDepthRange[belowIndex % belowPlayerDepthRange.length]);
                belowIndex++;
        
        });
    }
    
}




function createEnemyContainer(scene, x, y, nome='esqueleto') {
if (nome == 'palhaco2') {
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


// Função para desativar o projétil ao colidir
function hitProjectile(projetil, layer) {
    projetil.setActive(false);
    projetil.setVisible(false);
    projetil.body.stop();
}

function hitEnemy2(projetil, enemy) {
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
    //this.limiteespada = false
    if (this.proximo.includes(enemy.enemyId)) {
        this.proximo.splice(enemy.enemyId, 1);
        //console.log(this.proximo.length)
    }
    
    // Desativar o projétil
    
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
        console.log('atingido');
        enemy.health -= this.danoespada;
        
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
            this.kills = 34
            deathAnimation.setDepth(99999);
            // Remover a animação de morte após a conclusão
            // deathAnimation.on('animationcomplete', () => {
            //     deathAnimation.destroy();
                
            // });
            //setTimeout(function() {
                
                //window.location.href = "https://castelododiabo.x10.mx/src/fim/";//pixxx
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

        
    }  else {
        // Atualiza a barra de vida
        if (enemy.classe != 'palhaco' && enemy.classe != 'palhaco2') {
        enemy.healthBar.setVisible(true);
        enemy.healthBarBg.setVisible(true);
        const healthPercentage = enemy.health / enemy.maxHealth;
        enemy.healthBar.scaleX = healthPercentage; // Use scaleX para ajustar a largura da barra
        }
    }
    
    
    
    
    this.limitemagia = projetil.magicaid
}

