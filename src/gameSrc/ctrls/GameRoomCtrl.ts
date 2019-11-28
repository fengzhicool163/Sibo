
/**
* name 
*/
module ctrl {

	import GameRequest = net.protocol.GameRequest;
	import GameResponse = net.protocol.GameResponse;

	/** 游戏ctrl层主要负责net消息的接收数据，通过model层解析保存数据，然后通过分发消息给显示层 */
	export class GameRoomCtrl extends GameRoomModel {

		/** 是否在游戏场景中 */
		protected isInGameScene = false;

		protected wsUrl: string;

		protected startPingPong: number;

		/** 动作队列 */
		public actionQueue: common.action.ActionQueue;

		/*************************************** 初始化与销毁 ***************************************/
		public init() {
			super.init();
			this.actionQueue = new common.action.ActionQueue();
			this.addListenerNetMsg();
		}

		public destroy() {
			//
			Laya.timer.clearAll(this);
			//
			super.destroy();
			//清空gameNet的事件监听
			this.gameNet.clearAllListener();
		}

		/************************************* 内部调用方法 ********************************/
		protected conectSever() {
			//获取游戏网络管理器
			//this.gameNet.init(this.wsUrl, "gameNet");
		}

		protected sendPingPong() {
			this.startPingPong = Date.now();
			GameRequest.reqPingPong(); //开始心跳
		}

		protected _intoGame(roomId:string , tableId:string) {
			//

			//

			this.actionQueue.pause();
			//打开游戏界面
			UIManager.getInstance().ShowUI(game.panel.GameRoomPanel, game.panel.GameRoomPanel.assets, this, this.exitGameLobby);
			//
			this.isInGameScene = true;
			//
			GameRequest.reqJoinRoom(roomId , tableId);
			//Laya.timer.once(1000, this, this.conectSever);
		}


		public exitGameLobby() {
			//初始化房间大厅控制器
			//lobby.panel.MatchPanel.Show();
			var rlCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
			//退出大厅
			rlCtrl.exitGameLobby();
			//
		}

		/** 退出游戏界面 */
		public goBackGameLobby() {
			//
			//Laya.timer.clear(this, this.conectSever);
			//前端主动断开socket
			//this.gameNet.clearSocket();
			//
			this.actionQueue.ClearActionQueue();
			//
			lobby.panel.MatchPanel.Hide();
			//
			this.clearData();
			gameenum.ServerErrorCode.errorStatus = null;
			//
			if (!this.isInGameScene) return;
			//关闭游戏界面
			UIManager.getInstance().HideUI(game.panel.GameRoomPanel, false);
			//初始化房间大厅控制器
			var rlCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
			//进入大厅
			rlCtrl.intoGameLobby();
		}


		public closeGameSocket() {
			Laya.timer.clear(this, this.conectSever);
			//前端主动断开socket
			this.gameNet.clearSocket();
			//
			this.actionQueue.ClearActionQueue();
			//
			lobby.panel.MatchPanel.Hide();
			//
			this.clearData();

		}

		/**
		 * 进入游戏房间
		 * @param roomId 房间ID
		 */
		public intoGame(roomId: string, tableId: string) {
			// var token = AppInfoManager.Token;
			// var gameId = AppInfoManager.GameId;
			// this.wsUrl = roomUrl + "/" + token + "/" + gameId + "/" + roomId;
			this._intoGame(roomId, tableId);
		}

		/** 退出游戏 */
		public exitGame() {
			
			GameRequest.reqExitGame();
		
		}


		/*************************************** 网络事件 ****************************************/
		protected addListenerNetMsg() {
			//链接事件
			this.gameNet.addListener(this.gameNet.Event.onConnectOpen, this, this.onConnectOpen);
			this.gameNet.addListener(this.gameNet.Event.onConnectClose, this, this.onConnectClose);
			this.gameNet.addListener(this.gameNet.Event.onConnectError, this, this.onConnectError);

			//
			//this.gameNet.addListener(GameResponse.PINGPONG, this, this.getPingPong);
			//统一错误处理
			this.gameNet.addListener(GameResponse.COMMON_ERROR, this, this.commonError);
			//房间快照
			this.gameNet.addListener(GameResponse.SANPSHOT, this, this.roomSanpshot);
			//服务器即将关闭连接
			this.gameNet.addListener(GameResponse.WILL_CLOSE, this, this.severClose);
			
			//玩家加入	
			//this.gameNet.addListener(GameResponse.ENTER, this, this.playerJoin);
			//玩家离开	
			this.gameNet.addListener(GameResponse.EXIT, this, this.playerLeave);
			//玩家被踢出房间
			//this.gameNet.addListener(GameResponse.FOOTOUT, this, this.playerKickOut)
			//玩家准备
			//this.gameNet.addListener(GameResponse.BEGIN_GAME, this, this.playerReadly);
			
			//游戏投注消息
			this.gameNet.addListener(GameResponse.BASE_BET, this, this.gameStartBetBase);
			
			//某个玩家下注了
			//this.gameNet.addListener(GameResponse.BET, this, this.playerBet);
			
		
			//游戏结算消息
			this.gameNet.addListener(GameResponse.GAME_SETTLEMENT, this, this.gameSettlement);
			
			this.gameNet.addListener(GameResponse.GAME_START_INIT , this , this.gameStartInit);
			this.gameNet.addListener(GameResponse.GAME_START_BET , this , this.gameBetReady);
			this.gameNet.addListener(GameResponse.GAME_END_BET , this , this.gameEndBet);
			this.gameNet.addListener(GameResponse.GAME_END_RESULET , this , this.gameEndResult);
			this.gameNet.addListener(GameResponse.GAME_TIPS , this , this.gameTipMsg);
			this.gameNet.addListener(GameResponse.GAME_REC , this , this.gameRec);
		}

		/** 连接上了游戏服务器 */
		protected onConnectOpen() {
			//this.sendPingPong();
		}

		/** 链接关闭 */
		protected onConnectClose(e: any) {
			//
			this.actionQueue.ClearActionQueue();
			//弹出失败提示
			//UIManager.getInstance().ShowTip(e.reason);
			//
			lobby.panel.MatchPanel.Hide();
			if (gameenum.ServerErrorCode.errorStatus.closeCode == gameenum.ServerErrorCode.SERVER_CLOSE || gameenum.ServerErrorCode.errorStatus.closeCode == gameenum.ServerErrorCode.PARAMS_ERROR) {
				common.panel.PopInfoPanel.Show(gameenum.ServerErrorCode.errorStatus.closeReason, () => {
					this.closeGameSocket();
					var roomCtl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
					roomCtl.gotoLobby();
				});
			}
			else {

				//
				this.goBackGameLobby();
			}

		}

		/** 链接失败 */
		protected onConnectError() {
			//
			this.actionQueue.ClearActionQueue();
			//
			lobby.panel.MatchPanel.Hide();
			//弹出失败提示
			common.panel.PopInfoPanel.Show("网络连接失败，请检查网络");
			//
			this.goBackGameLobby();
		}

		/** 心跳处理 */
		protected getPingPong(data: net.protocol.PingPongBean) {
			Laya.timer.once(3000, this, this.sendPingPong);
			var netdelay = Date.now() - this.startPingPong;
			this.broadcast(this.Event.NetDelayUpdate, netdelay);
			//if(GameMain.DEBUG) console.log("当前网络来回延时 = " + netdelay + "ms");
		}

		/** 通用错误提示 */
		protected commonError(data: net.protocol.CommonErrorBean) {
			var action = new game.action.CommonErrorAction();
			action.runActionFunc(data);
		}

		/** 服务器将会关闭连接 4999*/
		protected severClose(data: net.protocol.SeverCloseBean) {
			var action = new game.action.SeverCloseAction();
			action.doActionWithData(data);
		}

	

		/** 玩家被踢出房间 5012*/
		// protected playerKickOut(data: net.protocol.PlayerKickOutBean) {
		// 	var action = new game.action.PlayerKickOutAction();
		// 	if (data.userId == UserInfoManger.UserId) {
		// 		action.doActionWithData(data);
		// 	} else {
		// 		action.setActionData(data);
		// 		this.actionQueue.addAction(action);
		// 	}
		// }

		/** 玩家离开 5009*/
		protected playerLeave(data: net.protocol.PlayerLeaveBean) {
			var action = new game.action.PlayerLeaveAction();
			if (data.userId == UserInfoManger.UserId) {
				action.doActionWithData(data);
			} else {
				//action.setActionData(data);
				//this.actionQueue.addAction(action);
			}
		}

		/** 房间快照 4000*/
		protected roomSanpshot(data: any) {
			var action = new game.action.RoomInitAction();
			action.setActionData(data);
			this.actionQueue.addAction(action);
		}

		/** 玩家进入 5008*/
		protected playerJoin(data: net.protocol.PlayerDataBean) {
			var action = new game.action.PlayerJoinAction();
			action.setActionData(data);
			this.actionQueue.addAction(action);
		}

		/** 玩家准备 5000*/
		protected playerReadly(data: net.protocol.PlayerReadyBean) {
			var action = new game.action.PlayerReadyAction();
			action.setActionData(data);
			this.actionQueue.addAction(action);
		}

	

		/** 游戏投注 34205*/
		protected gameStartBetBase(data: any) {
			console.log("GameRoomCtrl gamestartBetBase=============>");
			var action = new game.action.GameStartBetAction();
			action.setActionData(data);
			this.actionQueue.addAction(action);
		}

		/** 某个玩家下注了 5002*/
		protected playerBet(data: net.protocol.PlayerBetBean) {
			var action = new game.action.PlayerBetAction();
			action.setActionData(data);
			this.actionQueue.addAction(action);
		}

	

		/** 游戏结算 34207*/
		protected gameSettlement(data: any) {
			var action = new game.action.GameStartSettlementAction();
			action.setActionData(data);
			this.actionQueue.addAction(action);
		}

		/** 玩家超时托管设置 5016 */
		protected overhostsetting(data: net.protocol.OverHostDataBean) {

			
			var action = new game.action.PlayerOverHostSettingAction();
			action.doActionWithData(data);
		}


		/**  跟到底*/
		public betToEnd(data: any) {
			var action = new game.action.BetEndAction();
			action.doActionWithData(data);
		}

		/**
		 * 
		 * @param data 开局推送 34201 准备中
		 */
		public gameStartInit(data:any){
			var action = new game.action.GameStartInitAction();
			action.doActionWithData(data);
		}

		/**
		 * 开局推送 下注中 34202
		 */
		public gameBetReady(data:any){
			var action = new game.action.GameBetReady();
			action.doActionWithData(data);
		}

		/**
		 * 开局推送 结算中  34203
		 */
		public gameEndBet(data:any){
			var action = new game.action.GameEndBetAction();
			action.doActionWithData(data);
		}

		/**
		 * 游戏结束，推送开奖 34204
		 */
		public gameEndResult(data:any){
			var action = new game.action.GameOverResultAction();
			action.setActionData(data);
			this.actionQueue.addAction(action);
			//action.doActionWithData(data);
		}

	
		public gameTipMsg(data:any){
			var action = new game.action.GameTipAction();
			action.doActionWithData(data);
		}

		/** 游戏战绩 */
		public gameRec(data:any){
			EventManager.dispath(game.event.GameEvent.UPDATE_GAME_REC , data);
		}
	}
}