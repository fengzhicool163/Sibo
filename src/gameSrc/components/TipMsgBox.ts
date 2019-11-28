module game.commponet{
    export class TipMsgBox extends common.component.UIComponent{
        protected bindObj:ui.gameUI.GameCommonBox.TipMsgPanelUI;
         protected initComponents(){
           
        }

        public showMsg(msg:string){
            this.bindObj.msg.text = msg;
            this.bindObj.visible = true;
            Laya.timer.once(2000,this , this.hideMsg);
        }

        public hideMsg(){
            this.bindObj.visible = false;
        }

    }
}