module game.commponet{
    export class WinTipsBox extends common.component.UIComponent{
        protected bindObj:ui.gameUI.GameCommonBox.WinMsgPanelUI;
         protected initComponents(){
           
        }

        public showMsg(money:number,name:string=null){
            //this.bindObj.msg.text = msg;
            this.bindObj.visible = true;
            if(name){
                this.bindObj.showPlayer.play(0,false);
                this.bindObj.pname.text = name;
            }
            else{
                this.bindObj.showMe.play(0 , false);
            }
            this.bindObj.winmoney.text = money.toString();
            Laya.timer.once(2000,this , this.hideMsg);
        }

        public hideMsg(){
            this.bindObj.visible = false;
        }

    }
}