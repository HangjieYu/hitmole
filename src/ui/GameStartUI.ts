export module ui {
    export class GameStartUI extends Laya.View {
		public startBtn:Laya.Button;
        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"compId":1,"child":[{"type":"Image","props":{"y":55,"x":38,"skin":"ui/help.png"},"compId":2},{"type":"Button","props":{"y":432,"x":309,"var":"startBtn","stateNum":2,"skin":"ui/btn_start.png"},"compId":3}],"loadList":["ui/help.png","ui/btn_start.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameStartUI.uiView);
        }
    }
}