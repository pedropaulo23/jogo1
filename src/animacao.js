// animations.js
//import { setCookie, getCookie, eraseCookie } from './cookies.js';
//import { getCookie } from './cookies.js';
export function createAnimations(scene) {
    // Criação de animações para o jogador
    scene.anims.create({
        key: 'left',
        frames: scene.anims.generateFrameNumbers('player', { start: 10, end: 17 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'turn',
        frames: [{ key: 'player', frame: 18 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn2',
        frames: [{ key: 'player', frame: 0 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn3',
        frames: [{ key: 'player', frame: 9 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn4',
        frames: [{ key: 'player', frame: 27 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'right',
        frames: scene.anims.generateFrameNumbers('player', { start: 28, end: 35 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'up',
        frames: scene.anims.generateFrameNumbers('player', { start: 1, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'down',
        frames: scene.anims.generateFrameNumbers('player', { start: 19, end: 26 }),
        frameRate: 10,
        repeat: -1
    });















    // Criação de animações para o chapéu
   
    scene.anims.create({
        key: 'left_chapeu',
        frames: scene.anims.generateFrameNumbers('chapeu', { start: 10, end: 17 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'turn_chapeu',
        frames: [{ key: 'chapeu', frame: 18 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn2_chapeu',
        frames: [{ key: 'chapeu', frame: 0 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn3_chapeu',
        frames: [{ key: 'chapeu', frame: 9 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn4_chapeu',
        frames: [{ key: 'chapeu', frame: 27 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'right_chapeu',
        frames: scene.anims.generateFrameNumbers('chapeu', { start: 28, end: 35 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'up_chapeu',
        frames: scene.anims.generateFrameNumbers('chapeu', { start: 1, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'down_chapeu',
        frames: scene.anims.generateFrameNumbers('chapeu', { start: 19, end: 26 }),
        frameRate: 10,
        repeat: -1
    });



   














    // Criação de animações para blusa
    scene.anims.create({
        key: 'left_blusa',
        frames: scene.anims.generateFrameNumbers('blusa', { start: 10, end: 17 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'turn_blusa',
        frames: [{ key: 'blusa', frame: 18 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn2_blusa',
        frames: [{ key: 'blusa', frame: 0 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn3_blusa',
        frames: [{ key: 'blusa', frame: 9 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn4_blusa',
        frames: [{ key: 'blusa', frame: 27 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'right_blusa',
        frames: scene.anims.generateFrameNumbers('blusa', { start: 28, end: 35 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'up_blusa',
        frames: scene.anims.generateFrameNumbers('blusa', { start: 1, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'down_blusa',
        frames: scene.anims.generateFrameNumbers('blusa', { start: 19, end: 26 }),
        frameRate: 10,
        repeat: -1
    });

    // Criação de animações para as pernas
    scene.anims.create({
        key: 'left_pernas',
        frames: scene.anims.generateFrameNumbers('pernas', { start: 10, end: 17 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'turn_pernas',
        frames: [{ key: 'pernas', frame: 18 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn2_pernas',
        frames: [{ key: 'pernas', frame: 0 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn3_pernas',
        frames: [{ key: 'pernas', frame: 9 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn4_pernas',
        frames: [{ key: 'pernas', frame: 27 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'right_pernas',
        frames: scene.anims.generateFrameNumbers('pernas', { start: 28, end: 35 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'up_pernas',
        frames: scene.anims.generateFrameNumbers('pernas', { start: 1, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'down_pernas',
        frames: scene.anims.generateFrameNumbers('pernas', { start: 19, end: 26 }),
        frameRate: 10,
        repeat: -1
    });

    // Criação de animações para os pés
    scene.anims.create({
        key: 'left_pes',
        frames: scene.anims.generateFrameNumbers('pes', { start: 10, end: 17 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'turn_pes',
        frames: [{ key: 'pes', frame: 18 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn2_pes',
        frames: [{ key: 'pes', frame: 0 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn3_pes',
        frames: [{ key: 'pes', frame: 9 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'turn4_pes',
        frames: [{ key: 'pes', frame: 27 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'right_pes',
        frames: scene.anims.generateFrameNumbers('pes', { start: 28, end: 35 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'up_pes',
        frames: scene.anims.generateFrameNumbers('pes', { start: 1, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'down_pes',
        frames: scene.anims.generateFrameNumbers('pes', { start: 19, end: 26 }),
        frameRate: 10,
        repeat: -1
    });

    // Criação de animações de ataque
    scene.anims.create({
        key: 'attack_up',
        frames: scene.anims.generateFrameNumbers('atak', { start: 3, end: 7 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_left',
        frames: scene.anims.generateFrameNumbers('atak', { start: 11, end: 15 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_down',
        frames: scene.anims.generateFrameNumbers('atak', { start: 19, end: 23 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_right',
        frames: scene.anims.generateFrameNumbers('atak', { start: 27, end: 31 }),
        frameRate: 10,
        repeat: 0
    });

    // Animações de ataque para arma
    scene.anims.create({
        key: 'attack_up_arma1',
        frames: scene.anims.generateFrameNumbers('arma1', { start: 3, end: 7 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_left_arma1',
        frames: scene.anims.generateFrameNumbers('arma1', { start: 11, end: 15 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_down_arma1',
        frames: scene.anims.generateFrameNumbers('arma1', { start: 19, end: 23 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_right_arma1',
        frames: scene.anims.generateFrameNumbers('arma1', { start: 27, end: 31 }),
        frameRate: 10,
        repeat: 0
    });
    // Animações de ataque para arma222222222222222222
    scene.anims.create({
        key: 'attack_up_arma5',
        frames: scene.anims.generateFrameNumbers('arma5', { start: 3, end: 7 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_left_arma5',
        frames: scene.anims.generateFrameNumbers('arma5', { start: 11, end: 15 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_down_arma5',
        frames: scene.anims.generateFrameNumbers('arma5', { start: 19, end: 23 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_right_arma5',
        frames: scene.anims.generateFrameNumbers('arma5', { start: 27, end: 31 }),
        frameRate: 10,
        repeat: 0
    });

    // Animações de ataque para atkblusa
    scene.anims.create({
        key: 'attack_up_atkblusa',
        frames: scene.anims.generateFrameNumbers('atkblusa', { start: 3, end: 7 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_left_atkblusa',
        frames: scene.anims.generateFrameNumbers('atkblusa', { start: 11, end: 15 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_down_atkblusa',
        frames: scene.anims.generateFrameNumbers('atkblusa', { start: 19, end: 23 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_right_atkblusa',
        frames: scene.anims.generateFrameNumbers('atkblusa', { start: 27, end: 31 }),
        frameRate: 10,
        repeat: 0
    });

    // Animações de ataque para atkchapeu
    scene.anims.create({
        key: 'attack_up_atkchapeu',
        frames: scene.anims.generateFrameNumbers('atkchapeu', { start: 3, end: 7 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_left_atkchapeu',
        frames: scene.anims.generateFrameNumbers('atkchapeu', { start: 11, end: 15 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_down_atkchapeu',
        frames: scene.anims.generateFrameNumbers('atkchapeu', { start: 19, end: 23 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_right_atkchapeu',
        frames: scene.anims.generateFrameNumbers('atkchapeu', { start: 27, end: 31 }),
        frameRate: 10,
        repeat: 0
    });

    // Animações de ataque para atkperna
    scene.anims.create({
        key: 'attack_up_atkperna',
        frames: scene.anims.generateFrameNumbers('atkperna', { start: 3, end: 7 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_left_atkperna',
        frames: scene.anims.generateFrameNumbers('atkperna', { start: 11, end: 15 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_down_atkperna',
        frames: scene.anims.generateFrameNumbers('atkperna', { start: 19, end: 23 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_right_atkperna',
        frames: scene.anims.generateFrameNumbers('atkperna', { start: 27, end: 31 }),
        frameRate: 10,
        repeat: 0
    });

    // Animações de ataque para atkpes
    scene.anims.create({
        key: 'attack_up_atkpes',
        frames: scene.anims.generateFrameNumbers('atkpes', { start: 3, end: 7 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_left_atkpes',
        frames: scene.anims.generateFrameNumbers('atkpes', { start: 11, end: 15 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_down_atkpes',
        frames: scene.anims.generateFrameNumbers('atkpes', { start: 19, end: 23 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_right_atkpes',
        frames: scene.anims.generateFrameNumbers('atkpes', { start: 27, end: 31 }),
        frameRate: 10,
        repeat: 0
    });

    // Animações de espadacorpo
    scene.anims.create({
        key: 'espadacorpo_attack_up',
        frames: scene.anims.generateFrameNumbers('espadacorpo', { start: 0, end: 5 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadacorpo_attack_left',
        frames: scene.anims.generateFrameNumbers('espadacorpo', { start: 6, end: 11 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadacorpo_attack_down',
        frames: scene.anims.generateFrameNumbers('espadacorpo', { start: 12, end: 17 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadacorpo_attack_right',
        frames: scene.anims.generateFrameNumbers('espadacorpo', { start: 18, end: 23 }),
        frameRate: 20,
        repeat: 0
    });
    // Espada
    scene.anims.create({
        key: 'espada_attack_up1',
        frames: scene.anims.generateFrameNumbers('espada', { start: 0, end: 5 }), // Ajuste o end conforme necessário
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espada_attack_left1',
        frames: scene.anims.generateFrameNumbers('espada', { start: 6, end: 11 }), // Ajuste o start e end conforme necessário
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espada_attack_down1',
        frames: scene.anims.generateFrameNumbers('espada', { start: 12, end: 17 }), // Ajuste o start e end conforme necessário
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espada_attack_right1',
        frames: scene.anims.generateFrameNumbers('espada', { start: 18, end: 23 }), // Ajuste o start e end conforme necessário
        frameRate: 20,
        repeat: 0
    });

    // Espada5
    scene.anims.create({
        key: 'espada_attack_up5',
        frames: scene.anims.generateFrameNumbers('espada5', { start: 0, end: 5 }), // Ajuste o end conforme necessário
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espada_attack_left5',
        frames: scene.anims.generateFrameNumbers('espada5', { start: 6, end: 11 }), // Ajuste o start e end conforme necessário
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espada_attack_down5',
        frames: scene.anims.generateFrameNumbers('espada5', { start: 12, end: 17 }), // Ajuste o start e end conforme necessário
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espada_attack_right5',
        frames: scene.anims.generateFrameNumbers('espada5', { start: 18, end: 23 }), // Ajuste o start e end conforme necessário
        frameRate: 20,
        repeat: 0
    });

    // Espadablusa
    scene.anims.create({
        key: 'espadablusa_attack_up',
        frames: scene.anims.generateFrameNumbers('espadablusa', { start: 0, end: 5 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadablusa_attack_left',
        frames: scene.anims.generateFrameNumbers('espadablusa', { start: 6, end: 11 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadablusa_attack_down',
        frames: scene.anims.generateFrameNumbers('espadablusa', { start: 12, end: 17 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadablusa_attack_right',
        frames: scene.anims.generateFrameNumbers('espadablusa', { start: 18, end: 23 }),
        frameRate: 20,
        repeat: 0
    });

    // Espadape
    scene.anims.create({
        key: 'espadape_attack_up',
        frames: scene.anims.generateFrameNumbers('espadape', { start: 0, end: 5 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadape_attack_left',
        frames: scene.anims.generateFrameNumbers('espadape', { start: 6, end: 11 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadape_attack_down',
        frames: scene.anims.generateFrameNumbers('espadape', { start: 12, end: 17 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadape_attack_right',
        frames: scene.anims.generateFrameNumbers('espadape', { start: 18, end: 23 }),
        frameRate: 20,
        repeat: 0
    });

    // Espadaperna
    scene.anims.create({
        key: 'espadaperna_attack_up',
        frames: scene.anims.generateFrameNumbers('espadaperna', { start: 0, end: 5 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadaperna_attack_left',
        frames: scene.anims.generateFrameNumbers('espadaperna', { start: 6, end: 11 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadaperna_attack_down',
        frames: scene.anims.generateFrameNumbers('espadaperna', { start: 12, end: 17 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadaperna_attack_right',
        frames: scene.anims.generateFrameNumbers('espadaperna', { start: 18, end: 23 }),
        frameRate: 20,
        repeat: 0
    });

    // Espadachapeu
    scene.anims.create({
        key: 'espadachapeu_attack_up',
        frames: scene.anims.generateFrameNumbers('espadachapeu', { start: 0, end: 5 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadachapeu_attack_left',
        frames: scene.anims.generateFrameNumbers('espadachapeu', { start: 6, end: 11 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadachapeu_attack_down',
        frames: scene.anims.generateFrameNumbers('espadachapeu', { start: 12, end: 17 }),
        frameRate: 20,
        repeat: 0
    });
    scene.anims.create({
        key: 'espadachapeu_attack_right',
        frames: scene.anims.generateFrameNumbers('espadachapeu', { start: 18, end: 23 }),
        frameRate: 20,
        repeat: 0
    });
    //inimigos

    scene.anims.create({
        key: 'enemy_left',
        frames: scene.anims.generateFrameNumbers('enemy', { start: 10, end: 17 }),
        frameRate: 30,
        repeat: -1
    });

    scene.anims.create({
        key: 'enemy_turn',
        frames: [{ key: 'enemy', frame: 18 }],
        frameRate: 30
    });

    scene.anims.create({
        key: 'enemy_turn2',
        frames: [{ key: 'enemy', frame: 0 }],
        frameRate: 30
    });

    scene.anims.create({
        key: 'enemy_dead',
        frames: scene.anims.generateFrameNumbers('enemy_dead_fire', { start: 0, end: 5 }), // Ajuste os frames conforme necessário
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'enemy_acorda',
        frames: scene.anims.generateFrameNumbers('enemy_dead', { start: 4, end: 0 }), // Ajuste os frames conforme necessário
        frameRate: 6,
        repeat: 0
    });

    scene.anims.create({
        key: 'enemy_right',
        frames: scene.anims.generateFrameNumbers('enemy', { start: 28, end: 35 }),
        frameRate: 30,
        repeat: -1
    });

    scene.anims.create({
        key: 'enemy_up',
        frames: scene.anims.generateFrameNumbers('enemy', { start: 1, end: 8 }),
        frameRate: 40,
        repeat: -1
    });

    scene.anims.create({
        key: 'enemy_down',
        frames: scene.anims.generateFrameNumbers('enemy', { start: 19, end: 26 }),
        frameRate: 40,
        repeat: -1
    });
    // Animações de ataque do inimigo
    scene.anims.create({
        key: 'enemy_attack_up',
        frames: scene.anims.generateFrameNumbers('enemy_ataque', { start: 5, end: 0 }), // Ajuste o intervalo de frames conforme necessário
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'enemy_attack_left',
        frames: scene.anims.generateFrameNumbers('enemy_ataque', { start: 11, end: 6 }), // Ajuste o intervalo de frames conforme necessário
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'enemy_attack_down',
        frames: scene.anims.generateFrameNumbers('enemy_ataque', { start: 17, end: 12 }), // Ajuste o intervalo de frames conforme necessário
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'enemy_attack_right',
        frames: scene.anims.generateFrameNumbers('enemy_ataque', { start: 23, end: 18 }), // Ajuste o intervalo de frames conforme necessário
        frameRate: 10,
        repeat: -1
    });

     //Animações da arma do inimigo
     scene.anims.create({
        key: 'enemy_arma_up',
        frames: scene.anims.generateFrameNumbers('faca', { start: 5, end: 0 }), // Ajuste o intervalo de frames conforme necessário
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'enemy_arma_left',
        frames: scene.anims.generateFrameNumbers('faca', { start: 11, end: 6 }), // Ajuste o intervalo de frames conforme necessário
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'enemy_arma_down',
        frames: scene.anims.generateFrameNumbers('faca', { start: 17, end: 12 }), // Ajuste o intervalo de frames conforme necessário
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'enemy_arma_right',
        frames: scene.anims.generateFrameNumbers('faca', { start: 23, end: 18 }), // Ajuste o intervalo de frames conforme necessário
        frameRate: 10,
        repeat: -1
    });


    //morte player:
    scene.anims.create({
        key: 'morreucorpo',
        frames: scene.anims.generateFrameNumbers('corpof', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'morreuchapeu',
        frames: scene.anims.generateFrameNumbers('chapeuf', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'camisadesaudade',
        frames: scene.anims.generateFrameNumbers('camisaf', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'morreupes',
        frames: scene.anims.generateFrameNumbers('pesf', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'morreuperna',
        frames: scene.anims.generateFrameNumbers('pernaf', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: 0
    });




    //magias
    scene.anims.create({
        key: 'magia1',
        frames: scene.anims.generateFrameNumbers('magia1', { start: 0, end: 60 }),
        frameRate: 100,
        repeat: -1
    });
    //magia5
    scene.anims.create({
        key: 'magia5',
        frames: scene.anims.generateFrameNumbers('magia5', { start: 0, end: 60 }),
        frameRate: 100,
        repeat: -1
    });


    //efeito magias
    scene.anims.create({
        key: 'magia1eft',
        frames: scene.anims.generateFrameNumbers('magia1eft', { start: 0, end: 11 }),
        frameRate: 10,
        repeat: -1
    });

    // Animações do inimigo 'voador'
    scene.anims.create({
        key: 'voador_walk_front',
        frames: scene.anims.generateFrameNumbers('voador', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'voador_walk_back',
        frames: scene.anims.generateFrameNumbers('voador', { start: 4, end: 7 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'voador_walk_right',
        frames: scene.anims.generateFrameNumbers('voador', { start: 8, end: 11 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'voador_walk_left',
        frames: scene.anims.generateFrameNumbers('voador', { start: 12, end: 15 }),
        frameRate: 10,
        repeat: -1
    });


    // invocador: 
    scene.anims.create({
        key: 'ritual',
        frames: scene.anims.generateFrameNumbers('invocador', { start: 26, end: 31 }),
        frameRate: 6,
        repeat: -1
    });
    scene.anims.create({
        key: 'ritualfim',
        frames: scene.anims.generateFrameNumbers('invocador', { start: 260, end: 264 }),
        frameRate: 10,
        
    });
    scene.anims.create({
        key: 'turn_invocador',
        //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
        frames: [{ key: 'invocador', frame: 28 }],
        frameRate: 20
       // repeat: -1
    });
    //brain
    scene.anims.create({
        key: 'ritualbrain',
        frames: scene.anims.generateFrameNumbers('brain', { start: 26, end: 31 }),
        frameRate: 6,
        repeat: -1
    });
    scene.anims.create({
        key: 'ritualfimbrain',
        frames: scene.anims.generateFrameNumbers('brain', { start: 260, end: 264 }),
        frameRate: 10,
        
    });
    scene.anims.create({
        key: 'turn_invocadorbrain',
        //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
        frames: [{ key: 'brain', frame: 0 }],
        frameRate: 20
       // repeat: -1
    });
    //costela
    scene.anims.create({
        key: 'ritualcostela',
        frames: scene.anims.generateFrameNumbers('costela', { start: 26, end: 31 }),
        frameRate: 6,
        repeat: -1
    });
    scene.anims.create({
        key: 'ritualfimcostela',
        frames: scene.anims.generateFrameNumbers('costela', { start: 260, end: 264 }),
        frameRate: 10,
        
    });
    scene.anims.create({
        key: 'turn_invocadorcostela',
        //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
        frames: [{ key: 'costela', frame: 28 }],
        frameRate: 20
       // repeat: -1
    });


    // dragao:
    
    scene.anims.create({
        key: 'turn_dragcorpo',
        //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
        frames: [{ key: 'dragcorpo', frame: 18 }],
        frameRate: 20
       // repeat: -1
    });
    scene.anims.create({
        key: 'turn_dragcabelo',
        //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
        frames: [{ key: 'dragcorpocabelo', frame: 18 }],
        frameRate: 18
       // repeat: -1
    });
    scene.anims.create({
        key: 'turn_dragasa',
        //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
        frames: scene.anims.generateFrameNumbers('dragcorpoasa', { start: 10, end: 14 }),
        frameRate: 15,
        repeat: -1
    });
    scene.anims.create({
        key: 'dragesquerda',
        //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
        frames: scene.anims.generateFrameNumbers('dragaoesquerda', { start: 9, end: 15 }),
        frameRate: 10,
        repeat: -1
    });
    scene.anims.create({
        key: 'dragdireita',
        //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
        frames: scene.anims.generateFrameNumbers('dragaodireita', { start: 9, end: 15 }),
        frameRate: 10,
        repeat: -1
    });
    scene.anims.create({
        key: 'dragfrente',
        //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
        frames: scene.anims.generateFrameNumbers('dragaofrente', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });
    scene.anims.create({
        key: 'dragcosta',
        //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
        frames: scene.anims.generateFrameNumbers('dragaocosta', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });
    scene.anims.create({
        key: 'draggelocosta',
        //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
        frames: [{ key:'dragaocosta', frame: 9 }],
        frameRate: 18
       
    });
    scene.anims.create({
        key: 'draggelofrente',
        //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
        frames: [{ key:'dragaofrente', frame: 9 }],
        frameRate: 18
       
    });
    scene.anims.create({
        key: 'dragataque',
        //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
        frames: scene.anims.generateFrameNumbers('dragaofrente', { start: 10, end: 15 }),
        frameRate: 10,
        repeat: -1
    });
    // scene.anims.create({
    //     key: 'dragataque2',
    //     //frames: scene.anims.generateFrameNumbers('invocador', { frame: 28 }),
    //     frames: scene.anims.generateFrameNumbers('dragaocosta', { start: 9, end: 15 }),
    //     frameRate: 10,
    //     repeat: -1
    // });







    // palhaco
    scene.anims.create({
        key: 'palhaco_right',
        frames: scene.anims.generateFrameNumbers('palhaco', { start: 28, end: 35 }),
        frameRate: 5,
        repeat: -1
    });

    scene.anims.create({
        key: 'palhaco_up',
        frames: scene.anims.generateFrameNumbers('palhaco', { start: 1, end: 8 }),
        frameRate: 5,
        repeat: -1
    });

    scene.anims.create({
        key: 'palhaco_down',
        frames: scene.anims.generateFrameNumbers('palhaco', { start: 19, end: 26 }),
        frameRate: 5,
        repeat: -1
    });
    scene.anims.create({
        key: 'palhaco_left',
        frames: scene.anims.generateFrameNumbers('palhaco', { start: 10, end: 17 }),
        frameRate: 5,
        repeat: -1
    });

    scene.anims.create({
        key: 'palhaco_turn',
        frames: [{ key: 'palhaco', frame: 18 }],
        frameRate: 30
    });

    scene.anims.create({
        key: 'palhaco_turn2',
        frames: [{ key: 'palhaco', frame: 0 }],
        frameRate: 30
    });


}
