// 程序入口
import GameStart from "./script/GameStart";
import GameView from "./script/GameView";
import GameOver from "./script/GameOver";

class GameMain {

	public static gameStart: GameStart
	public static gameView: GameView
	public static gameOver: GameOver

	constructor() {
		Laya.init(800, 600)
		Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE
		Laya.stage.alignH = Laya.Stage.ALIGN_CENTER
		Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE
		Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL
		Laya.stage.bgColor = '#ffcccc'
		let resArray: Array<any> = [
			{
				url: 'res/atlas/ui.atlas',
				type: Laya.Loader.ATLAS
			},
			{
				url: 'ui/back.png',
				type: Laya.Loader.IMAGE
			},
			{
				url: 'ui/help.png',
				type: Laya.Loader.IMAGE
			}
		]
		Laya.Stat.show(0, 0)
		Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoaded))
	}

	onLoaded(): void {
		// let view: GameView = new GameView()
		// Laya.stage.addChild(view)

		GameMain.gameStart = new GameStart()
		Laya.stage.addChild(GameMain.gameStart)
	}
}

new GameMain()
