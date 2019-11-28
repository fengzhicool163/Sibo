module game.component{
    export class GameTrendBox extends common.component.UIBox{
        protected bindObj:ui.gameTrend.Boxs.GameTrendBoxUI;
         /** 牌桌大路图 */
        protected trendBox : lobby.component.LobbyTableTrendBox;
        protected initComponents(){
            this.trendBox = this.bindScript(lobby.component.LobbyTableTrendBox , this.bindObj.gameTread);

        }


          /** 重置盒子清空大路图与状态队列 */
        public resetBox(){
            this.trendBox.clear();
            
        }

         /** 销毁盒子清空大路图与状态队列 */
        public clearBox(){
            this.resetBox();
            this.bindObj.visible = false;

        }

          /** 销毁 */
        public destroy(){
            this.resetBox();
            super.destroy();
        }

         /**
         * 设置牌桌条数据  data下的tables数据
         * @param data 
         */
        public setData( data : any ){
            //
            this.resetBox();
           this.trendBox.setData(data);
           this.setRoundResult(data);
            this.bindObj.visible = true;
        }

          public setRoundResult(data:any){
            var big:number = 0;
            var small:number = 0;
            var baozi:number = 0;
            for(let i = 0 ; i < data.length; i++){
                var itemData = data[i].split("_");
                if((itemData[0] == itemData[1]) && (itemData[0] == itemData[2])){
                    baozi = baozi + 1;
                }
                else if(itemData[3] > 10){
                    big = big + 1;
                }
                else{
                    small = small + 1;
                }
            }
            this.bindObj.big.text = "大 " + big;
            this.bindObj.small.text = "小 " + small;
            this.bindObj.baozi.text = "豹 " + baozi;
            this.bindObj.roundLabel.text = "第" + data.length + "局";
        }
    }
}