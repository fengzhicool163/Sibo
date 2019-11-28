/**
* name 
*/
module ctrl {

	/** 游戏model层处理解析转换服务器数据 并保存生成的 本地对象 */
	export class GameRoomModel extends UICtrl {

		/** 网络平管理器 */
		protected gameNet: net.GameNetMananger;

		/** 内部广播消息定义 */
		public Event = {
			/** 主玩家操作界面更新 */
			PlayerCtrlBtnUpdate: "PlayerCtrlBtnUpdate",//
			/** 网络延时刷新 */
			NetDelayUpdate: "NetDelayUpdate",
			//倒计时结束后自己的下注按钮置灰
			TimeEndUpDate: "TimeEndUpdate",
			/** 如果选择跟到底，刚好轮到自己出牌，需要发送事件，自动跟注*/
			AUTOFOLLOW: "autoFollow",
			/** 孤注一掷*/
			FIGHTBET: "fightbet",
		};

		/*************************************** 缓存数据接口 ***************************************/
		/** 房间对象 */
		public roomObj: game.objs.GameRoomObj;

		/** 玩家对象缓存池 */
		protected playerObjPool: util.PoolObj<game.objs.PlayerObject>;
		protected playerObj : game.objs.PlayerObject;
		/** 牌桌玩家数量 */
		protected _playerCount;
	
		/** 牌桌玩家数量 */
		public get playerCount() {
			return this._playerCount;
		}

		/** 清空管理器数据 */
		public clearData() {
			this.roomObj.resetObj();
			// for (const key in this.userIDPlayerObjMap) {
			// 	const playerObj = this.userIDPlayerObjMap[key];
			// 	this.playerObjPool.recover(playerObj);
			// }
			this.playerObj.destroy();
		}

		constructor() {
			super();
			this.init();
		}

		//
		public destroy() {
			this.roomObj.destroy();
			this.roomObj = null;
			this.playerObjPool = null;
			this.playerObj.destroy();
			this.playerObj.destroy();
		}

		//
		public init(...args: any[]) {
			//
			this.gameNet = UICtrlManager.getInstance().GetCtrl(net.GameNetMananger);
			//玩家配置对象
			//玩家配置对象
			this.roomObj = new game.objs.GameRoomObj();
			this.playerObj = new game.objs.PlayerObject();
		}




		/** 玩家是否足够开局 */
		public get playerEnough() {
			return 0;
		}

		/** 当前牌桌最后一次下注数目 */
		public get lastBetScore() {
			var betBase = this.roomObj.lastBetScore == 0 ? this.roomObj.minBet : this.roomObj.lastBetScore;
			return betBase;
		}

	


	

		

		/** 获取主玩家信息 */
		public getMainPlayerObj() {
			
			return this.playerObj;
		}

		/** 计算真实剩余时间 */
		public getRealRemainingTime(time: number, remainingTime: number) {
			//计算倒计时
			var severTime = this.gameNet.getCurSeverTime();
			var overtTime = Math.max(0, severTime - time);
			var remainingTime = Math.max(0, remainingTime - overtTime / 1000);
			return remainingTime;
		}

	}
}