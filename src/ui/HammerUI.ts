
export module ui {
    export class HammerUI extends Laya.View {
        public hit: Laya.FrameAnimation;
        public static uiView: any = { "type": "View", "props": { "width": 100, "height": 100 }, "compId": 1, "child": [{ "type": "Image", "props": { "y": 64, "x": 64, "width": 98, "skin": "ui/hammer.png", "rotation": 20, "pivotY": 53, "pivotX": 63, "height": 77 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "y": [{ "value": 63, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }], "x": [{ "value": 67, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 67, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 1 }], "rotation": [{ "value": 20, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 0 }, { "value": -16, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 1 }, { "value": 20, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 5 }] } }], "name": "hit", "id": 1, "frameRate": 24, "action": 0 }], "loadList": ["ui/hammer.png"], "loadList3D": [] };
        constructor() { super() }
        createChildren(): void {

            super.createChildren();
            this.createView(ui.HammerUI.uiView);
        }
    }
}