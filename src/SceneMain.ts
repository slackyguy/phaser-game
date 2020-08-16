import Phaser from 'phaser'

class SceneMain extends Phaser.Scene {
    constructor() {
        super({ key: "SceneMain" });
    }

    create() {
        this.load.image("myimage", "my-path/to-image/myimage.png");
    }

    update() {

    }
}

export default SceneMain;