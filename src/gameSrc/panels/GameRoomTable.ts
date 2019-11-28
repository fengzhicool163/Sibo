/**
* 牌桌类
*/
module game.panel {


	export abstract class GameRoomTable extends ui.gameUI.GamePanel.GameRoomPanelUI {

		protected lobbyCtrl: ctrl.RoomLobbyCtrl;
		protected gameCtrl: ctrl.GameRoomCtrl;
		protected netCtrl: net.GameNetMananger;

	
		/** 筹码盒子 */
		protected gameChipsBox: game.component.GameChipsBox;

		/** 倒计时盒子 */
		protected countDownBox: game.component.GameCountDownBox;

		/** 结算看牌显示 */
		protected gameShowCardBox: game.component.GameShowCardBox;

	

		/** 发牌列表 */
		//protected sendCardItemList: items.GameCardItem[];

		/** 牌桌初始化 */
		protected initComponents() {
			//管理器获取
			this.lobbyCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
			this.gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
			this.netCtrl = UICtrlManager.getInstance().GetCtrl(net.GameNetMananger);
			//
			

			//筹码盒子
			this.gameChipsBox = this.bindScript(game.component.GameChipsBox, this.gameChipsBoxObj);

			//倒计时时钟
			this.countDownBox = this.bindScript(game.component.GameCountDownBox, this.countDownObj);
			this.startBetAnim.on(Laya.Event.STOPPED , this , this.playStartComplete);
			this.stopAnim.on(Laya.Event.STOPPED , this , this.playStopComplete);
			//结算亮牌盒子
			//this.gameShowCardBox = this.bindScript(game.component.GameShowCardBox, this.gameShowCardBoxObj);

		
		}

		/** 关闭所有座位表现效果 */
		protected resetAllPlayerSitEffect() {
		
		}

		/** 重置牌桌 */
		protected resetTable() {
			//你赢了金币动画
			this.winAnim.visible = false;
			this.winAnim.stop();
			//亮牌BOX
			//this.gameShowCardBox.hide();
		
			//筹码
			this.gameChipsBox.clearAllChip();
			//倒计时
			this.countDownBox.resetBox();
			//牌局号清空
			this.paijuhao.text = "";
			
			//局数
			this.juShu.text = "";
			//总下注数
			this.allBetNum.text = "";
			//最后一轮特效
			//this.lastRoundEffect.stop();
			//this.lastRoundEffect.visible = false;
		}

		/**
		 * 清空牌桌
		 */
		protected clearTable() {
			//隐藏牌桌下注信息背景
			//this.tableInfoBG.visible = false;
			//重置牌桌
			this.resetTable();
			//清空所有玩家
		
		}

		/** 初始化牌桌(快照恢复) */
		protected initTable(roomObj: game.objs.GameRoomObj) {
			//重置牌桌
			this.resetTable();
			//牌桌信息更新
			this.setRoundInfo(roomObj.curRound + 1, roomObj.totalBetScore);
			//
			this.showBetInfo(roomObj.oddsInfo);
			this.countDownBox.setData(this.gameCtrl.roomObj.getRemainingTime(),this.gameCtrl.roomObj.getGameState());
			
			// 恢复筹码，下注区域
			if(this.gameCtrl.roomObj.getGameState() == gameenum.GameStateType.PLAYING ){
				if(this.gameCtrl.roomObj.getRemainingTime() > 3){
					var len:number = util.Tool.size(this.gameCtrl.roomObj.getBetAreaMoney());
					if(len > 0){
						this.chipInit();
					}
				}
			}
			
			//牌局号更新
			//this.paijuhao.text = roomObj.curRoundUuid;
			//数据恢复
			
		}


		/****************************************************** 显示刷新外部调用接口 **********************************************************/
		/** 设置牌桌信息 */
		public setRoundInfo(roundNo: number, allBetNum: number) {
			console.log("GameRoomTable  setRoundInfo================>", allBetNum);
			//牌桌信息更新
			this.juShu.text = roundNo.toString();
			//this.allBetNum.text = util.StringUtils.FormatGameMoney(allBetNum, 2);
			//this.tableInfoBG.visible = true;
		}

		/** 恢复投注区域数据 */
		public chipInit(){
			var obj = this.gameCtrl.roomObj.getBetAreaMoney();
			for(let key in obj){
				this.gameChipsBox.callBetNum(UserInfoManger.UserId , key , obj[key]);
			}
		}

	

		/** 准备摇塞子 */
		public gameReady() {
			//
			SoundManager.PlayYaoSai();
			this.yaosaiAnim.visible = true;
			this.yaosaiAnim.play(0,false);
		}

		/**
		 * 开始下注动画
		 */
		public playStartBet(){
			SoundManager.PlayStartBet();
			this.startBetAnim.visible = true;
			this.startBetAnim.play(0,false);
		}
		public playStartComplete(){
			this.startBetAnim.visible = false;
		}

		/**
		 * 停止下注动画
		 */
		public playStopEffect(){
			SoundManager.PlayStopBet();
			this.stopAnim.visible = true;
			this.stopAnim.play(0,false);
			Laya.timer.once(1000 , this , ()=>{
				SoundManager.PlayStopBetEffect();
			})
		}
		public playStopComplete(){
			this.stopAnim.visible = false;
		}
		/** 游戏开始倒计时 */
		public gameCountDown(remainingTime: number,state:number) {
			//关闭所有座位表现效果
			this.resetAllPlayerSitEffect();
			//开始倒计时
			this.countDownBox.setData(remainingTime,state);
		}

		/** 游戏投注 */
		public gameStartBetBase(data: any) {
			//清空倒计时
			//this.countDownBox.resetBox();
			// 投注 飞筹码
			var bet:any = data.data;
			var betData:any = bet.betItems;
			for(let i = 0 ; i < betData.length; i++){
				var d:any = betData[i];
				this.gameChipsBox.callBetNum(data.userId , d.betAreaId,d.betMoney);
				if(data.userId == UserInfoManger.UserId){
					//同步当前区域的自己的下注总额
					this.gameCtrl.roomObj.setBetMoneyByName(d.betAreaId ,d.mAreaBetMoney);
					// 更新 我自己的总下注金额
					this.gameCtrl.roomObj.addTotalBetScore(d.betMoney);
					EventManager.dispath(game.event.GameEvent.UPDATE_BET_MONEY , [d.betAreaId,d.mAreaBetMoney]);
					// 记录用户的重复投注区域
					//this.gameCtrl.roomObj.reBetArea[d.betAreaId] = d.mAreaBetMoney;
					var result = {"area":d.betAreaId , "bet":d.betMoney};
					
					this.gameCtrl.roomObj.reBetArea.push(result);
					console.log("GameRoomTable gameStartBetBase 游戏投注============>",this.gameCtrl.roomObj.reBetArea);
				}
				
			}
			if(data.userId == UserInfoManger.UserId){
				console.log("GameRoomTable gameStartBetBase ===============>",bet.balance);
				this.gameCtrl.getMainPlayerObj().setBalance(bet.balance);
				EventManager.dispath(game.event.GameEvent.UPDATE_USER_BALANCE , bet.balance);
				EventManager.dispath(game.event.GameEvent.UPDATE_REBET , [true]);
			}
			
		
		
			//发牌动画时长
			//return (this.sendCardItemList.length + 1) * cardDelay;
		}

	

		/** 赔率信息 */
		public showBetInfo(data: any) {
			var oddsInfoBox = this.oddsInfoBox;
			for(let key in data){
				var item = oddsInfoBox.getChildByName(key) as Laya.Label;
				if(item){
					var value = parseInt(data[key]) - 1;
					item.text = "1:" + value;
				}
			}
		
		}


	
	
	}
}