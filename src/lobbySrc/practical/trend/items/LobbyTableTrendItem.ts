

module lobby.component {
    
    export class LobbyTableTrendItem extends ui.gameTrend.Items.LobbyTableTrendItemUI {
       
        public bindObj : ui.gameTrend.Items.LobbyTableTrendItemUI;
        protected datas:any;
        /**
         * 和次数
         */
        private heNum = 0;

        public initComponents(){
         
           
        }

        /**
         * 设置骰宝历史记录Item数据 []
         * @param itemType 
         */
        public setItemView(itemType:any) {
            this.lightBj.visible = false;
            this.imgN.visible = false;
            var dir = "lobbyRes/lobbyRoomList/img_sz_";
            this.img0.skin = dir + itemType[0] + ".png";
            this.img1.skin = dir + itemType[1] + ".png";
            this.img2.skin = dir + itemType[2] + ".png";
            var num1:number = parseInt(itemType[0]);
            var num2:number = parseInt(itemType[1]);
            var num3:number = parseInt(itemType[2]);
            var num4:number = parseInt(itemType[3]);
            
             if((num1 == num2) &&(num1 == num3)){
                this.big.visible = false;
                this.small.visible = false;
                this.baozi.visible = true;
                this.szbaozi.text = itemType[3];
                this.szbao.text = itemType[4];
            }
            else if(num4 >10){
                this.big.visible = true;
                this.small.visible = false;
                this.baozi.visible = false;
                this.szbig.text = itemType[3];
                this.szb.text = itemType[4];
            }
            else{
                this.big.visible = false;
                this.small.visible = true;
                this.baozi.visible = false;
                this.szsmall.text = itemType[3];
                this.szs.text = itemType[4];
            }
        }

        /**
         * 添加一次和状态
         */
        public showLight() {
            this.lightBj.visible = true;
            this.imgN.visible = true;
        }

        /**
         * 显示触底提示
         */
        public showTouchButtom() {
          
        }
          /** 重置盒子(默认显示) */
        public  resetBox(){
            this.big.visible = false;
            this.small.visible = false;
            this.baozi.visible = false;
        }

        /** 清理盒子(清空显示) */
        public  clearBox(){
            this.datas = null;
        }

        /** 根据传入参数设置盒子显示  data下 tables 下的roundResult*/
        public  setData(data: any){
           this.setItemView(data.d.split("_"));
        }
       
    }
}
