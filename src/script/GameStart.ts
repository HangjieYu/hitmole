
import GameView from "./GameView"

import { ui } from "./../ui/GameStartUI";

export default class GameStart extends ui.GameStartUI {
	private _gameView: GameView;

	constructor() {
		super()

		this.startBtn.on(Laya.Event.CLICK, this, this.startGame)
	}

	startGame(): void {
		this.removeSelf()
		this._gameView = new GameView()
		this._gameView.gameStart()
		Laya.stage.addChild(this._gameView)
	}
}
