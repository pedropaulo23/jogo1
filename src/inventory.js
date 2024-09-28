export default class Inventory {
    constructor(scene) {
        this.scene = scene;
        this.items = [];
        this.slots = 24;
        this.padding = 5;
        this.icoSize = 32;
        this.cols = 4;

        this.width = (this.icoSize * this.cols) + this.padding * this.cols + this.padding;
        this.height = (this.icoSize * Math.ceil(this.slots / this.cols)) + this.padding * Math.ceil(this.slots / this.cols) + this.padding;

        this.createInventoryUI();
        this.createSlots();
        this.createHeader();
        this.createInputHandlers();
    }

    createInventoryUI() {
        this.bg = this.scene.add.graphics();
        this.bg.fillStyle(0x111111, 1);
        this.bg.fillRect(0, 0, this.width, this.height);
        this.bg.setScrollFactor(0);
        this.bg.setDepth(100);
        this.bg.visible = false;

        this.container = this.scene.add.container(20, 20, [this.bg]);
        this.container.setScrollFactor(0);
        this.container.setDepth(100);
    }

    createSlots() {
        this.slotsArray = [];
        const slotGraphics = this.scene.add.graphics();
        slotGraphics.fillStyle(0x666666, 1);
        slotGraphics.fillRect(0, 0, this.icoSize, this.icoSize);

        let count = 0;
        for (let y = this.padding; y < this.height; y += this.icoSize + this.padding) {
            for (let x = this.padding; x < this.width; x += this.icoSize + this.padding) {
                if (count < this.slots) {
                    const slot = this.scene.add.sprite(x, y, slotGraphics.generateTexture('slot')).setOrigin(0);
                    this.container.add(slot);
                    this.slotsArray.push(slot);
                }
                count++;
            }
        }
        slotGraphics.destroy();
    }

    createHeader() {
        const headerGraphics = this.scene.add.graphics();
        headerGraphics.fillStyle(0x111111, 1);
        headerGraphics.fillRect(0, 0, this.width, 12);

        this.header = this.scene.add.sprite(20, 8, headerGraphics.generateTexture('header')).setOrigin(0);
        this.header.setScrollFactor(0);
        this.header.setDepth(101);
        this.header.setInteractive({ draggable: true });

        this.header.on('drag', (pointer, dragX, dragY) => {
            this.header.x = dragX;
            this.header.y = dragY;
            this.container.x = dragX;
            this.container.y = dragY + 12;
        });

        headerGraphics.destroy();
        const text = this.scene.add.text(this.padding, this.padding - 2, 'Inventory', { font: '9px Courier New', fill: '#ffffff' });
        this.header.addChild(text);
    }

    createInputHandlers() {
        this.scene.input.keyboard.on('keydown-I', () => {
            this.toggleInventory();
        });
    }

    toggleInventory() {
        this.header.visible = !this.header.visible;
        this.container.visible = !this.container.visible;
    }

    addItem(item) {
        // Implement item addition logic
    }

    removeItem(item) {
        // Implement item removal logic
    }

    update() {
        // Implement update logic if needed
    }
}
