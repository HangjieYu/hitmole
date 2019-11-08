import GameView from "./GameView"

import { ui } from "./../ui/GameOverUI";

export default class GameOver extends ui.GameOverUI {

	private _gameView: GameView;

	constructor() {
		super()

		this.restartBtn.on(Laya.Event.CLICK, this, this.restartGame)
	}

	restartGame(): void {
		this.removeSelf()
		this._gameView = new GameView()
		this._gameView.gameStart()
		Laya.stage.addChild(this._gameView)
	}

	setScoreUI(score: number): void {
		let data: any = {}
		let temp: number = score
		for (let i: number = 9; i >= 0; i--) {
			data['item' + i] = { index: Math.floor(temp % 10) }
			temp = temp / 10
		}
		this.scoreNums.dataSource = data
	}
}
