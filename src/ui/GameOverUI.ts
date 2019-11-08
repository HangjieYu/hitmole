export module ui {
    export class GameOverUI extends Laya.View {
		public restartBtn:Laya.Button;
		public scoreNums:Laya.Box;
        public static  uiView:any ={"type":"View","props":{"width":500,"height":400},"compId":1,"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"ui/overBg.png","sizeGrid":"17,15,21,17","height":400},"compId":2},{"type":"Image","props":{"y":63,"x":58,"skin":"ui/total Score.png"},"compId":3},{"type":"Button","props":{"y":295,"x":161,"var":"restartBtn","stateNum":2,"skin":"ui/btn_restart.png"},"compId":4},{"type":"Box","props":{"y":172,"x":160,"var":"scoreNums"},"compId":5,"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10},"compId":6},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10},"compId":7},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10},"compId":8},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10},"compId":9},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10},"compId":10},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10},"compId":11},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10},"compId":12},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10},"compId":13},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10},"compId":14},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10},"compId":15}]}],"loadList":["ui/overBg.png","ui/total Score.png","ui/btn_restart.png","ui/clip_number.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameOverUI.uiView);
        }
    }
}