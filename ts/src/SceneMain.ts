import Phaser from 'phaser'

class SceneMain extends Phaser.Scene {
    constructor() {
        super({ key: "SceneMain" })
    }

    //private platforms?: Phaser.Physics.Arcade.StaticGroup = undefined
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys = undefined
    private player?: Phaser.Physics.Arcade.Sprite = undefined

    preload() {
        this.load.image('sky', 'assets/sky.png')
        this.load.image('ground', 'assets/platform.png')
        this.load.image('star', 'assets/star.png')
        this.load.image('bomb', 'assets/bomb.png')
        this.load.spritesheet('dude', 
            'assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
    }

    create() {
        this.add.image(400, 300, 'sky')
        this.add.image(400, 300, 'star')

        var platforms = this.physics.add.staticGroup()

        platforms.create(400, 568, 'ground').setScale(2).refreshBody()
        platforms.create(600, 400, 'ground')
        platforms.create(50, 250, 'ground')
        platforms.create(750, 220, 'ground')

        this.player = this.physics.add.sprite(100, 450, 'dude')

        this.player.setBounce(0.2)
        this.player.setCollideWorldBounds(true)

        this.physics.add.collider(this.player, platforms)

        this.cursors = this.input.keyboard.createCursorKeys()

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        })
        
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        })
        
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        })
    }

    update() { // this.cursors
        if (this.cursors && this.player) {
            if (this.cursors.left && this.cursors.left.isDown) {
                this.player.setVelocityX(-160)
                this.player.anims.play('left', true)
            }
            else if (this.cursors.right && this.cursors.right.isDown) {
                this.player.setVelocityX(160)
                this.player.anims.play('right', true)
            }
            else {
                this.player.setVelocityX(0)
                this.player.anims.play('turn')
            }
            
            if (this.cursors.up
                && this.cursors.up.isDown
                && this.player.body.touching.down) {
                this.player.setVelocityY(-330)
            }
        }
    }

    ex1_preload() {
        this.load.setBaseURL('http://labs.phaser.io')
        this.load.image('sky', 'assets/skies/space3.png')
        this.load.image('logo', 'assets/sprites/phaser3-logo.png')
        this.load.image('red', 'assets/particles/red.png')
    }

    ex1_create() {
        //this.load.image("myimage", "my-path/to-image/myimage.png")
        this.add.image(400, 300, 'sky')
        
        var particles = this.add.particles('red')

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        })

        var logo = this.physics.add.image(400, 100, 'logo')

        logo.setVelocity(100, 200)
        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)

        emitter.startFollow(logo)
    }
}

export default SceneMain