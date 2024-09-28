import { preload } from './preload.js';
import { update } from './update.js';
import { setCookie, getCookie, eraseCookie } from './cookies.js';
//import { Inventory } from './inventory.js';
//import RexUIPlugin from '../assets/plugins/rexuiplugin.min.js';


export class BaseScene extends Phaser.Scene {
    constructor(config) {
        super(config);
    }

    preload() {
        
        //this.load.scenePlugin('rexuiplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js', 'rexUI', 'rexUI');
        preload.call(this);

        this.load.image('slot', '../assets/botoes/inventario.png'); // Adicione a imagem do slot do inventário
        this.load.image('specialSlot', '../assets/botoes/inventario2.png');
        this.load.image('item1', '../assets/botoes/inventario/p1.png'); // Adicione uma imagem de item de exemplo ../assets/botoes/item.png
        this.load.image('item2', '../assets/botoes/inventario/p2.png');
        this.load.image('cadeado', '../assets/botoes/inventario/p0.png');
        this.load.image('itemInfoBg', '../assets/botoes/ver.png');
        
    }

    create() {
        //this.rexUI = this.plugins.get('rexuiplugin');
        // Adicionar a imagem de fundo da tela de carregamento
   
        // Define o estado inicial do jogador como parado na frente
        this.parado = 'frente';
        this.isAttacking = false;
        this.dano = 25;
        this.carregamentointerno = false
        this.carregado = []
        this.ultimoataque = '';
        this.ataquebtn = false
        this.ataquebtn2 = false
        
        this.danosofrido = 0
        this.vivo = true
        this.caiu = false
        this.espadada
        this.danoespada = 40
        this.passando = false
        this.controleataque = 'magia/espada'
        this.limiteespada = true
        this.magia1som = this.sound.add('magia1som1');
        this.magia1somx = this.sound.add('magia1som1');
        this.magia1som2 = this.sound.add('magia1som21');
        this.pessom = this.sound.add('pessom');
        this.ossom = this.sound.add('espadasom');
        this.ossom2 = this.sound.add('espadasom');
       
        this.espadasom = this.sound.add('espadasom');
        this.danosom = this.sound.add('danosom');
        this.diesom = this.sound.add('diesom');
        this.fantasmasom = this.sound.add('espadasom');
        this.asasom = this.sound.add('espadasom');
        this.dragsom = this.sound.add('espadasom');
        this.dragmortesom = this.sound.add('espadasom');
        
        this.carregar = false
        this.proximo = []
        this.kills = 0
        this.moving = false
        this.controlearmadilhas = true
        this.inimigosativos = ['esqueleto']
        this.invocar = false
        //globais
        //this.choice = 0
        //this.fase = 1
        this.roubovida = 0
        //this.danoextra = 1;
        this.numeromagia = 1
        this.curabase = 0
        this.curatempo = true
        //this.magomorto = false
        //controles especificos:
        this.parardialogo = false//impede que sejam criados mais de um dialogo. Usado atualmente no dialogo do dragão
        this.fase = 1
        this.desbloqueado = 0
        
        this.transmusic = false
        this.inventoryItems = []
        //this.carregar = 1
        
        // Cria o inventário na posição (width - 10 - inventário), com uma grade de 5 colunas e 4 linhas
       const screenWidth = this.cameras.main.width;
       const inventoryX = screenWidth - 30 - (8 * 50);
       this.createInventory(inventoryX, 10, 8, 1);
       this.toggleInventory();
       // Configura a tecla I para alternar a visibilidade do inventário
       this.input.keyboard.on('keydown-I', () => {
           this.toggleInventory();
         
       });     

       this.inventoryVisible = !this.inventoryVisible;
        this.inventorySlots.children.each(slot => {
            slot.setVisible(this.inventoryVisible);
            slot.setInteractive(this.inventoryVisible);
            if (slot.item) {
                slot.item.setVisible(this.inventoryVisible);
            }
        });
 
        if (this.selectedItemInfo) {
            this.selectedItemInfo.bg.setVisible(this.inventoryVisible);
            this.selectedItemInfo.itemImage.setVisible(this.inventoryVisible);
            this.selectedItemInfo.text.setVisible(this.inventoryVisible);
        }

        // Adiciona um item ao inventário para testar a função de atualização
       
        
    }

    createInventory(x, y, cols, rows) {
        const slotSize = 50;
        this.inventorySlots = this.add.group();
 
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const slotX = x + col * slotSize;
                const slotY = y + row * slotSize;
 
                // Usa uma imagem diferente para a última linha
                const slotImage = (row === rows - 1) ? 'specialSlot' : 'slot';
                
                // Adiciona a imagem do slot
                const slot = this.add.image(slotX, slotY, slotImage).setOrigin(0);
                slot.setInteractive();
                slot.setScrollFactor(0); // Faz o slot ficar fixo na tela
                slot.on('pointerdown', () => {
                    if (slot.hasItem) {
                        this.selectedSlotIndex = col
                        console.log(this.selectedSlotIndex)
                        this.displayItemInfo(slot.item);
                    }
                });
                
                this.inventorySlots.add(slot);
                this.inventorySlots.setDepth(9999)
            }
        }
 
        // Adiciona alguns itens ao inventário para testes
        
        this.inventoryItems.push(this.addItemToSlot(0, 'item1', 'Elemento Fogo', 'O poder destrutivo e indomável das chamas. Queime seus inimigos com uma força avassaladora, reduzindo tudo a cinzas. O calor da batalha nunca foi tão intenso!(Causará queimaduras aos inimigos).'));
        this.inventoryItems.push(this.addItemToSlot(1, 'cadeado', 'Bloqueado', 'Um poder misterioso, trancado além de sua compreensão. Apenas os dignos poderão liberar o potencial oculto que aguarda atrás deste cadeado. Você está pronto para descobrir o que está por vir?'));
        this.inventoryItems.push(this.addItemToSlot(2, 'cadeado', 'Bloqueado', 'Um poder misterioso, trancado além de sua compreensão. Apenas os dignos poderão liberar o potencial oculto que aguarda atrás deste cadeado. Você está pronto para descobrir o que está por vir?'));
        this.inventoryItems.push(this.addItemToSlot(3, 'cadeado', 'Bloqueado', 'Um poder misterioso, trancado além de sua compreensão. Apenas os dignos poderão liberar o potencial oculto que aguarda atrás deste cadeado. Você está pronto para descobrir o que está por vir?'));
        this.inventoryItems.push(this.addItemToSlot(4, 'cadeado', 'Bloqueado', 'Um poder misterioso, trancado além de sua compreensão. Apenas os dignos poderão liberar o potencial oculto que aguarda atrás deste cadeado. Você está pronto para descobrir o que está por vir?'));
        this.inventoryItems.push(this.addItemToSlot(5, 'cadeado', 'Bloqueado', 'Um poder misterioso, trancado além de sua compreensão. Apenas os dignos poderão liberar o potencial oculto que aguarda atrás deste cadeado. Você está pronto para descobrir o que está por vir?'));
        this.inventoryItems.push(this.addItemToSlot(6, 'cadeado', 'Bloqueado', 'Um poder misterioso, trancado além de sua compreensão. Apenas os dignos poderão liberar o potencial oculto que aguarda atrás deste cadeado. Você está pronto para descobrir o que está por vir?'));
        this.inventoryItems.push(this.addItemToSlot(7, 'cadeado', 'Bloqueado', 'Um poder misterioso, trancado além de sua compreensão. Apenas os dignos poderão liberar o potencial oculto que aguarda atrás deste cadeado. Você está pronto para descobrir o que está por vir?'));
     
        
    }

    addItemToSlot(slotIndex, itemKey, itemName, itemDescription) {
        const slot = this.inventorySlots.getChildren()[slotIndex];
        if (!slot.hasItem) {
            const item = this.add.image(slot.x + 25, slot.y + 25, itemKey).setOrigin(0.5);
            item.setDepth(10000);
            item.setScrollFactor(0);
            item.itemName = itemName;
            item.itemDescription = itemDescription;
            item.slotIndex = slotIndex; // Armazena o índice do slot
            slot.hasItem = true;
            slot.item = item;

            return item;
        }
        return null;
    }

    updateInventoryItem(slotIndex, newTexture, newName, newDescription) {
        const item = this.getItemInSlot(slotIndex);

        if (item) {
            item.setTexture(newTexture);
            item.itemName = newName;
            item.itemDescription = newDescription;
        } else {
            console.log('Item não encontrado no slot especificado.');
        }
    }

    getItemInSlot(slotIndex) {
        return this.inventoryItems.find(item => item.slotIndex === slotIndex) || null;
    }
 
    displayItemInfo(item) {
        if (this.selectedItemInfo) {
            this.selectedItemInfo.bg.destroy();
            this.selectedItemInfo.text.destroy();
            this.selectedItemInfo.itemImage.destroy();
        }
 
        const infoX = 50;
        const infoY = 30;
        const infoWidth = 200;
        const infoHeight = 300;
 
        // Adiciona o fundo da informação do item
        const bg = this.add.image(infoX, infoY, 'itemInfoBg').setOrigin(0);
        bg.setDisplaySize(infoWidth, infoHeight);
        bg.setScrollFactor(0); // Faz o fundo ficar fixo na tela
        bg.setDepth(9999-5)
 
        // Adiciona a imagem do item
        const itemImage = this.add.image(infoX + 25, infoY + 25, item.texture.key).setOrigin(0.5);
        itemImage.setDepth(9999-2)
        itemImage.setScrollFactor(0); // Faz a imagem do item ficar fixa na tela
 
        // Adiciona o texto com as informações do item
        const text = this.add.text(infoX + 50, infoY + 10, `${item.itemName}\n\n${item.itemDescription}`, {
            font: '16px Arial',
            fill: '#ffffff',
            wordWrap: { width: 150 }
        });
        text.setScrollFactor(0); // Faz o texto ficar fixo na tela
        text.setDepth(9999-1)
 
        this.selectedItemInfo = { bg, itemImage, text };
    }
 
    toggleInventory() {
        this.inventoryVisible = !this.inventoryVisible;
        this.inventorySlots.children.each(slot => {
            slot.setVisible(this.inventoryVisible);
            slot.setInteractive(this.inventoryVisible);
            if (slot.item) {
                slot.item.setVisible(this.inventoryVisible);
            }
        });
    
        if (this.selectedItemInfo) {
            this.selectedItemInfo.bg.setVisible(this.inventoryVisible);
            this.selectedItemInfo.itemImage.setVisible(this.inventoryVisible);
            this.selectedItemInfo.text.setVisible(this.inventoryVisible);
        }
    }

    

    update(time, delta) {
        update.call(this, time, delta);
        // Lógica comum de atualização

        
    //transitionToNextScene(player, exitPoint) {
        // Substitua 'NextScene' pelo identificador da próxima cena
        //this.scene.start('NextScene');
   // }
    }

    
}