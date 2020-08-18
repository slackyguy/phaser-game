import SceneBoot from './SceneBoot'
import SceneMain from './SceneMain'

export var config: Phaser.Types.Core.GameConfig = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: "black",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 300 }
        }
    },
    scene: [
        SceneBoot,
        SceneMain
    ],
    //pixelArt: true,
    //roundPixels: true
}