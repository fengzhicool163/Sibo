/**
* name 
*/
module game.component {

	import GameRequest = net.protocol.GameRequest;
	import PlayerAllowActions = gameenum.PlayerAllowActions;
	import GamePlayerStage = gameenum.GamePlayerStage;
	export class GameBetCtrlBarBox extends common.component.UIComponent {

		protected bindObj: ui.gameUI.GameCtrlBox.BetCtrlBarBoxUI;

		//protected playerObj: game.objs.PlayerObject;

		protected betBtnList:game.component.ChipBetBtn[];
		protected chipRange:any;
		protected playerBox: game.component.GamePlayerBox;
		protected gameCtrl: ctrl.GameRoomCtrl;
		//protected betLabelList: font.genzhuFont[];

		protected initComponents() {
			//初始化控件
			var bindObj = this.bindObj;
			//点击事件
			this.gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
			this.betBtnList = [];
			//this.betLabelList = [];
			this.playerBox = this.bindScript(game.component.GamePlayerBox , this.bindObj.playerObj);
			for (let index = 0; index < 5; index++) {
				const Btn = bindObj["betBtn" + index];
				var betBtn = this.bindScript(game.component.ChipBetBtn , Btn);
				this.betBtnList.push(betBtn);
				Btn.visible = false;
				//点击事件
				//EventManager.addTouchScaleListener(betBtn, this, this["clickBetBtnFunc" + index]);
			}
			EventManager.register(game.event.GameEvent.UPDATE_BET_BAR , this , this.UpdateBetCtrlBarData);
			EventManager.register(game.event.GameEvent.UPDATE_USER_BALANCE , this , this.setPlayerMoney);
			EventManager.addTouchScaleListener(this.bindObj.betBtn5, this, this.onReBet);
			EventManager.register(game.event.GameEvent.UPDATE_REBET , this , this.disableRebet );
			EventManager.register(game.event.GameEvent.BALANCE_CHECK , this , this.checkBalance);
			//初始化显示
			this.resetBox();
		}


		/**
		 * 设置数据
		 */
		public setData(data:any){
			this.chipRange = this.gameCtrl.roomObj.getChipRange();
			var bindObj = this.bindObj;
			for(let i = 0 ; i < this.chipRange.length; i++){
				var btn = bindObj["betBtn" + i];
				btn.visible = true;
				var scpBet = this.betBtnList[i];
				scpBet.setData(this.chipRange[i]);
				scpBet.hideLight();
				if(i == 0){
					scpBet.showLight();
					this.gameCtrl.roomObj.setLastBetScore(parseFloat(this.chipRange[0]));
				}
			}
			var betItem:any = bindObj["betBtn5"] ;
			betItem.visible = true;
			if(this.gameCtrl.roomObj.fowardRebetArea.length <= 0 ){
				betItem.disabled = true;
			}
			//var betScript:game.component.ChipBetBtn = this.betBtnList[5] ;
			//betScript.setData(0);
			this.checkBalance();
			this.playerBox.playerSitDown(this.gameCtrl.getMainPlayerObj());
		}



		/** 刷新下注按钮Bar显示 */
		public UpdateBetCtrlBarData() {
			var bindObj = this.bindObj;
			for(let i = 0 ; i < this.chipRange.length; i++){
				var btn = bindObj["betBtn" + i];
				btn.visible = true;
				var scpBet = this.betBtnList[i];
				scpBet.hideLight();
			}
		
		
		}



		/**
		 * 设置玩家当前金币
		 */
		public setPlayerMoney(money : number){
			this.playerBox.setPlayerMoney(money);
			this.gameCtrl.getMainPlayerObj().setBalance(money);
			this.checkBalance();
		}

		public TimeEndUpdate() {
			//this.bindObj.btnNode.disabled = true;
		}

		public resetBox() {
			//this.bindObj.btnNode.disabled = true;
			
			this.bindObj.visible = false;
		}


		public playerWin(addNum:number){
			this.playerBox.playerWin(addNum);
		}

		public playerReset(){
			this.playerBox.resetPlayer();
		}

		/** 重复投注 */
		public onReBet(){
			if(this.gameCtrl.roomObj.getGameState() != gameenum.GameStateType.PLAYING){
                return;
            }
			//var info:any = [];
			var info:any = this.gameCtrl.roomObj.fowardRebetArea
			// for(let key in data){
			// 	//this.bindObj.chipguang.visible = true;
			// 	var item:any = {"area":key , "bet":data[key]};
			// 	info.push(item);
			// }
			if(info.length > 0){
				net.protocol.GameRequest.reqReBet(info);
				this.bindObj.betBtn5.disabled = true;
			}
		}

		public disableRebet(v:any){
			this.bindObj.betBtn5.disabled = v[0];
		}

		public setDisable(v:boolean):void{
			this.bindObj.btnNode.disabled = v;
		
		}

		/** 余额检测，更新投注按钮是否可以点击 */
		public checkBalance(){
			var bindObj = this.bindObj;
			for(let i = 0 ; i <this.chipRange.length; i++){
				var money = this.chipRange[i];
				var btn = bindObj["betBtn" + i];
				if(money > this.gameCtrl.getMainPlayerObj().balanceScore){
					btn.disabled = true;
				}
				else{
					btn.disabled = false;
				}
			}
		}
		/****************************** 加注按钮点击事件 *****************************************/
	

		public destory(){
			this.resetBox();
			this.betBtnList = [];
			EventManager.removeAllEvents(this);
		}
	}
}