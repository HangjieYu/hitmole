
import { ui } from "./../ui/HammerUI";


export default class Hammer extends ui.HammerUI {
	constructor() {
		super()
	}

	start(): void {
		// Laya.Mouse.hide()
		Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown)
		Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
		this.onMouseMove()
	}

	end(): void {
		// Laya.Mouse.show()
		Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown)
		Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
	}

	onMouseDown(): void {
		this.hit.play(0, false)
	}

	onMouseMove(): void {
		this.pos(Laya.stage.mouseX - this.width / 2, Laya.stage.mouseY - this.height / 2)
	}
}
