import Phaser from 'phaser'

class SceneBoot extends Phaser.Scene {
    constructor() {
        super({ key: "SceneBoot" });
    }

    preload() {

    }

    create() {
       this.scene.start("SceneMain");
    }
}

export default SceneBoot