module game.component{
    export class ChipBetBtn extends common.component.UIBox{
        protected bindObj: ui.gameUI.GameItems.GameChipBtnUI;
        private betData:any;
          protected initComponents(){
            this.bindObj.chipbj.on(Laya.Event.CLICK , this , this.onBetArea);
            //this.hideBg();
        }


          protected getChipImage( chipNum : number ) {
            var url = game.asset.AssetConfig.ChipImageMap[chipNum];
            return url;
        }


        protected getChipValueImage( chipNum:number){
            var url = game.asset.AssetConfig.ChipValueMap[chipNum];
            return url;
        }

        public onBetArea(){
            //console.log("ChipBetBtn onBetArea ================>", this.betData);
             var gameCtrl:ctrl.GameRoomCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
            if(gameCtrl.roomObj.getGameState() != gameenum.GameStateType.PLAYING){
                return;
            }
            EventManager.dispath(game.event.GameEvent.UPDATE_BET_BAR);
           
            this.bindObj.chipguang.visible = true;
           
            gameCtrl.roomObj.setLastBetScore(parseFloat(this.betData));
        }

        public  setData(data:any){
            this.betData = data;
            this.setChipNum(parseInt(data));
        }

        	/** 重置房间信息显示 */
		public resetBox() {
			//设置显示初始值
		
			this.bindObj.chipguang.visible = false;
			this.bindObj.reCache();
		}

		/** 清空房间信息显示 */
		public clearBox() {
			this.resetBox();
			//this.bindObj.visible = false;

		}


           /**
         * 设置筹码显示
         * @param chipNum 
         */
        public setChipNum( chipNum : number ){
            var num = chipNum || 0;
            var url = this.getChipImage( num );
            this.bindObj.chipbj.skin = url;
            var valueurl = this.getChipValueImage(num);
            this.bindObj.chipValue.skin = valueurl;
        }

        public showLight(){
            this.bindObj.chipguang.visible = true;
        }

        public hideLight(){
            this.bindObj.chipguang.visible = false;
        }
    }
}