import SceneBoot from './SceneBoot'
import SceneMain from './SceneMain'

export var config: Phaser.Types.Core.GameConfig = {
    type: Phaser.WEBGL,
    width: 640,
    height: 640,
    backgroundColor: "black",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 0 }
        }
    },
    scene: [
        SceneBoot,
        SceneMain
    ],
    //pixelArt: true,
    //roundPixels: true
}