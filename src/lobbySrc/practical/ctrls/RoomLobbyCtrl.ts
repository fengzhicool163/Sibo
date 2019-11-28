
module ctrl {
	import GameRequest = net.protocol.GameRequest;
	import GameResponse = net.protocol.GameResponse;
	export class RoomLobbyCtrl extends RoomLobbyCtrlBase {

		protected gameNet : net.GameNetMananger;
		/** 游戏房间信息 */
		public roomDatas: Array<any> = null;
		/** 房间显示消息 */
		public EVENT_SHOWROOMBOX = "EVENT_SHOWROOMBOX";
		protected gameWsurl : string;
		public clearData() {
			this.roomDatas = null;
		}

		public init() { }

		/**
		 * 清除对象所有的定时器
		 */
		public destroy(): void {
			this.clearData();
		}

		/** 获取房间信息 */
		protected getRoomInfo(): void {

			// if (GameMain.DEBUG) console.log("开始获取房间信息");

			// var roomOb = new net.DefaultNetObserver();
			// //消息返回处理
			// roomOb.onSuccess = (roomInfo: any) => {
			// 	//保存房间数据
			// 	this.roomDatas = roomInfo.datas;
			// 	//广播房间数据更新
			// 	this.broadcast(this.EVENT_SHOWLOBBY);
			// };
			// //消息返回处理
			// roomOb.onError = this.errorCodeFunc.bind(this);
			// //发送消息
			// var roomAction = new net.GameRoomAction().bindObserver(roomOb);
			// roomAction.excute();
		}

		/** 就问取个用户数据三条消息骚不骚 */
		protected getAllInfo() {
			super.getAllInfo();
			//获取房间信息
			this.getRoomInfo();
		}


		/**
		 * 连接服务器
		 */
		public initSocket(){
			this.gameNet = UICtrlManager.getInstance().GetCtrl(net.GameNetMananger);
			this.gameNet.addListener(this.gameNet.Event.onConnectOpen , this , this.onSocketOpen);
			this.gameNet.addListener(GameResponse.RoomInfo,this,this.updateRoomBox);
			this.conectServer();	//连接游戏服务器
		
		
		}

		public onSocketOpen(){
			GameRequest.reqRoomInfo();
		}

		public conectServer(){
			if(!this.gameWsurl){
				if (GameMain.DEBUG) console.log("获取游戏服务器地址");
				// var gameWsOb = new net.DefaultNetObserver();
				// //
				// gameWsOb.onSuccess = (data: any) => {
				// 	this.gameWsurl = data.wsUrl + "/" + AppInfoManager.Token + "/" + AppInfoManager.GameId;
				// 	this.gameNet.init(this.gameWsurl,"SiBoWebsocket");
				// 	if (GameMain.DEBUG) console.log("游戏服务器地址:" + this.gameWsurl);
				// };
				// //消息返回处理
				// gameWsOb.onError = (error: number, msg: string) => {
				// 	this.errorCodeFunc(error,msg);
					
				// };
				// //
				// var gameWsAction = new net.GameSocketAction().bindObserver(gameWsOb);
				// gameWsAction.excute();
				var token = AppInfoManager.Token;
				var gameId = AppInfoManager.GameId;
				var url: string = AppInfoManager.GameUrl;
				this.gameWsurl = url + "/game/stake/" + token + "/" + gameId ;
				this.gameNet.init(this.gameWsurl,"SiBoWebsocket");
			}else{
				this.gameNet.init(this.gameWsurl,"SiBoWebsocket");
			}
		}

		public updateRoomBox(data:any){
			UserInfoManger.setUserBalance({balance:data.balance});
			UserInfoManger.setUserData({username:data.username,userId:data.userId});
			UserInfoManger.setUserHeadData({avatar:data.avatar});
			this.roomDatas = data.data;
			this.broadcast(this.EVENT_SHOWLOBBY);

		}

		public getRoomNum():number{
			if(this.roomDatas){
				return this.roomDatas.length;
			}
			return 0;
		}
	}
}