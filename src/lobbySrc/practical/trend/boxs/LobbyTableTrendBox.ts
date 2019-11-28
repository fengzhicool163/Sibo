

module lobby.component {

    export class LobbyTableTrendBox extends common.component.UIBox {

        protected bindObj : ui.gameTrend.Boxs.LobbyTableTrendBoxUI;
        protected itemPool : util.PoolView;
        protected datas:any;
        /** 缓存池初始化 */
        public initComponents(){
          
           this.bindObj.listView.scrollBar.visible = false;
           
           this.bindObj.listView.scrollBar.elasticDistance = 50;
           //this.bindObj.listView.itemRender = lobby.component.LobbyTableTrendItem;
            this.bindObj.listView.itemRender = lobby.component.LobbyTableTrendItem;
            this.bindObj.listView.renderHandler = Laya.Handler.create(this , this.onRender,null , false);
            //this.bindObj.listView.selectHandler = Laya.Handler.create(this , this.onselect , null , false);
              //this.bindObj.listView.array = [];
        
           //this.itemPool = new util.PoolView(LobbyTableTrendItem , ui.gameTrend.Items.LobbyTableTrendItemUI , 20,45);
            //棋子缓存池
            //this.itemPool = new util.PoolView(LobbyTableTrendItem,ui.gameTrend.Items.LobbyTableTrendItemUI,20,48);
        }

        public addItem(){

        }
            
        public clear(){
            this.datas = null;
        }

         /** 重置盒子(默认显示) */
        public  resetBox(){

        }

        /** 清理盒子(清空显示) */
        public  clearBox(){

        }

        /** 根据传入参数设置盒子显示 */
        public  setData(data: any){
            this.datas = [];
            //data = JSON.parse(data);
            for(let i = 0 ; i < data.length; i++){
                var itemData = data[i];
                var d = {d:itemData};
               
                this.datas.push(d);
               

            }
            this.bindObj.listView.array = this.datas;
            this.bindObj.listView.tweenTo(this.datas.length-1, 200,Laya.Handler.create(this, this.tweenComplete,null,false));
        }

        public onRender(cell:lobby.component.LobbyTableTrendItem , index:number){
            cell.setData(this.datas[index]);
        }

        public onselect(index:number){
            console.log("LobbyTableTrendBox onSelect===========>" , index);
        }

        public tweenComplete(){
            var cell:lobby.component.LobbyTableTrendItem = this.bindObj.listView.getCell(this.bindObj.listView.length-1) as lobby.component.LobbyTableTrendItem;
            if(cell){
                 cell.showLight();
            }
           
        }
    }
}
