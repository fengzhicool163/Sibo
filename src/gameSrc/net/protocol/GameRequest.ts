/**
* name 
*/
module net.protocol {

	export class GameRequest {

		private static clientCodeMap = {
			1: "网络延时心跳",
			1001: "玩家请求准备",
			1002: "玩家请求换桌",
			1003: "玩家请求跟注",
			1008: "玩家请求离开",
			1010:"获取房间列表",
			1111: "请求加入台桌",
			34101:"请求加入台桌",
			34103:"请求下注",
			34105: "请求用户结算结果",
			5109: "请求离开"
		}

		public static clientCodeToStr(code: number): string {
			var str = this.clientCodeMap[code];
			str = str || "empty";
			return str;
		}

		/**
		 * @param msg 发送消息
		 */
		private static sendMsg(data: any) {
			//统一添加userId
			var userId = UserInfoManger.UserId;
			data.userId = userId;
			var date = GameRequest.getNetManager().getCurSeverTime();
			data.timestamp = date;
			data.ctime = date;
			data.sn = "vdfvccvxdv";
			//data.brand = "";
			//发送消息
			var gameNet = UICtrlManager.getInstance().GetCtrl(GameNetMananger);
			gameNet.sendMessage(data);
		}

		private static getNetManager():GameNetMananger{
			var gameNet = UICtrlManager.getInstance().GetCtrl(GameNetMananger);
			return gameNet;
		}

		/** 服务器延时心跳 */
		public static reqPingPong() {
			var reqData: any = {
				code: 1
			};
			this.sendMsg(reqData);
		}


		/**
		 * 更换桌子
		 */
		public static reqChangeTable(): any {
			var reqData: any = {
				code: 1002
			};
			this.sendMsg(reqData);
		}

		/**
		 * 下注
		 * @param betValue 下注值
		 * @param baseBet 底注
		 */
		public static reqBet(area: string, baseBet: number): any {
			var gameCtrl:ctrl.GameRoomCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
			var tId = gameCtrl.roomObj.getTableId()
			var rId = gameCtrl.roomObj.getRoomId();
			var reqData: any = {
				code: 34103,
				betInfo: [{"area":area ,"bet":baseBet}],
				roomId: rId,
				tableId:tId
			};
			this.sendMsg(reqData);
		}

		/**
		 * 重复投注
		 */
		public static reqReBet(info:any){
			var gameCtrl:ctrl.GameRoomCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
			var tId = gameCtrl.roomObj.getTableId();
			var rId = gameCtrl.roomObj.getRoomId();
			var reqData: any = {
				code: 34103,
				betInfo: info,
				roomId: rId,
				tableId:tId
			};
			this.sendMsg(reqData);
		}

	

	

	

		/**
		 * 离开(区别换桌) 34104
		 */
		public static reqExitGame(): any {
			var reqData: any = {
				code: 34104,
				level:"exit"
			};
			this.sendMsg(reqData);
		}

		/**
		 * 孤注一掷
		 */
		public static reqLastFight(): any {
			var reqData: any = {
				code: 1009
			};
			this.sendMsg(reqData);
		}

		/**
		 * 超时托管
		 * @param overHost 
		 */
		public static reqOverHost(overHost: boolean) {
			var reqData: any = {
				code: 1011,
				overHost: overHost,
			};
			this.sendMsg(reqData);
		}


		/**
		 * 跟到底
		 */
		public static reqAllFollow(betToEnd) {
			var reqData: any = {
				code: 1012,
				betToEnd: betToEnd,
			};
			this.sendMsg(reqData);
		}


		/**
		 * 获取房间列表
		 */
		public static reqRoomInfo(){
			var date = GameRequest.getNetManager().getCurSeverTime();
			var reqData:any = {
				code:1010,
			}
			this.sendMsg(reqData);
		}


		/**
		 * 加入台桌
		 */
		public static reqJoinRoom(rId:string , tId:string){
			var reqData:any = {
				code:1111,
				roomId:rId,
				tableId:tId,
				
			}
			this.sendMsg(reqData);
		}

		/**
		 * 请求结算结果 34105
		 */
		public static reqResult(rId:string , room:string ,tId:string ){
			var reqData:any = {
				code:34105,
				roomId:room,
				tableId:tId,
				players:[UserInfoManger.UserId],
				roundId:rId
			}
			this.sendMsg(reqData);
		}

		/**
		 * 请求战绩
		 */
		public static reqGameRec(){
			var data:string = "rec";
			var gameNet = UICtrlManager.getInstance().GetCtrl(GameNetMananger);
			gameNet.sendData(data);
		}
	}

}