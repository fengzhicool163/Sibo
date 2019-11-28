/**
* name 
*/
module net.protocol {

	export class GameResponse {

		/**大厅房间数据 5021*/
		public static RoomInfo:string = "34208"; //
		/**心跳 1*/
		public static PINGPONG: string = "1"; //

		/**房间快照 4000*/
		public static SANPSHOT: string = "4000"; //

		/**房间配置下来了 4102*/
		public static ROOMCONFIG: string = "4102";//

		/**玩家准备 5000*/
		public static BEGIN_GAME: string = "5000";//

		/**
		 * 开局推送
		 */
		public static GAME_START_INIT: string = "34201";
		/**
		 * 开局推送 下注中 34202
		 */
		public static GAME_START_BET: string = "34202";
		/**
		 * 开局推送 停止下注 34203
		 */
		public static GAME_END_BET: string = "34203";

		/**
		 * 游戏结束时，推送开奖结果
		 */
		public static GAME_END_RESULET: string = "34204";

		/**
		 * 游戏结算
		 */
		public static GAME_SETTLEMENT: string = "34207";

		/**某个玩家下注 5002*/
		public static BET: string = "5002";//

	

		/**某个玩家进入 5008*/
		public static ENTER: string = "5008";//

		/**某个玩家离开 5009*/
		public static EXIT: string = "5109";//

		/**游戏结束 5010*/
		public static OVER: string = "5010";//todo

		/**游戏开始，投注 34205*/
		public static BASE_BET: string = "34205";//

		/** 游戏战绩 */
		public static GAME_REC: string = "3018";

		/**某个用户被踢出房间 5012*/
		public static FOOTOUT: string = "5012";//

	
	

		/**服务器将会关闭连接 4999*/
		public static WILL_CLOSE: string = "4999";//

		/**统一错误消息回复*/
		public static COMMON_ERROR: string = "6000";//

		/**  游戏提醒消息 */
		public static GAME_TIPS: string = "34210";

		private static severCodeMap = {
			34208:"收到房间桌台信息更新",
			5000: "某个玩家准备",
			5001: "某个玩家换桌的信息",
			5007: "轮到某个玩家操作",
			34205: "某个玩家下注",
			34207: "结算结果返回",
			34204: "推送开奖结果",
			5005: "某个玩家比牌",
			5006: "某个玩家结算亮牌",
			5008: "某个玩家进入",
			5109: "某个玩家离开",
			5010: "游戏结束",
			5011: "游戏开始，玩家开始下底注",
			5012: "某个用户被踢出房间",
			5014: "倒计时",
			5016: "超时托管设置",

			4001: "牌值(玩家点击看牌后)",
			4000: "房间快照",
			4102: "房间配置下来了",
			4999: "服务器将会关闭连接",
			34210: "游戏提醒0",
			3018:"游戏战绩"
		}

		public static severCodeToStr(code: number): string {
			var str = this.severCodeMap[code];
			return str;
		}


		/************************************** 错误码 *******************************************/

		private static codeToMessageMap = {
			//child code
			4000: "您的余额不足，请前往游戏大厅充值",  //余额不足
			4001: "网络异常，请重新进入或者重新登陆", //参数错误,关键字段缺失，如gameId，token等,前端动作：弹框提示，点击确认或者关闭回到上一级
			4002: "网络异常，请重新进入",//服务内部错误，弹框提示，点击确认或者关闭回到大厅
			4003: "长久未操作，自动退出房间",//超时未操作
			4004: "匹配不成功，请重新匹配",//匹配错误，弹框提示，点击确认或者关闭回到上一级
			4005: "登录过期,请重新登录",	//token错误,弹框提示，点击确定或者关闭都回到账号登录页面
			4006: "您已离开房间",	//用户离开
			4007: "匹配不成功，请重新匹配",//用户换台失败
			4008: "长久未操作，自动退出房间",	//游戏踢出
			4009: "您的账号在异地登录，请注意您的账号安全",//用户已登录
			4010: "用户不存在，请重新尝试",//用户不存在
			4011: "账号异常已被封禁，有问题请联系客服",//当用户被禁止游戏，或者被封号时
			4012: "匹配不成功，请重新匹配",//用户状态错误
			4013: "为了更好的体验，游戏停机维护中，给您带来不便敬请谅解",//服务关闭
			4014: "网络异常，请重新进入", //参数格式错误,弹框提示，点击确认或者关闭回到大厅
			4015: "您的账号在异地登录，请注意您的账号安全", //弹框提示，点击确认或者关闭回到大厅
		}

		//将4999的错误code转换为字符串
		public static codeToMessage(code: number): string {
			var content: string = this.codeToMessageMap[code];
			return content;
		}

	}
}