module game.objs {


	/** 游戏座位映射对象 */
	export class GameSeatObj extends GameObject{
		

		/** 服务器座位与本地座位映射 */
		public severLocalMap = {};
		/** 本地座位与服务器座位映射 */
		public localSeverMap = {};

		public resetObj() {
			this.severLocalMap = null;
			this.localSeverMap = null;
		}

		public destroy() {
			this.resetObj();
		}
		
		/** 初始化座位映射数据 */
		public setData(data: net.protocol.RoomDataBean) {
			//
			this.severLocalMap = {};
			this.localSeverMap = {};
			//
			var success = false;
			var playerCount = 0;
			//求出服务器对应本地的起始座位
			var startSeverSit = 0;
			//获取自身ID
			var myUserId = UserInfoManger.UserId;
			for (let severSit = 0; severSit < data.seats.length; ++severSit) {
				const userId = data.seats[severSit];
				if (userId != null) {
					++playerCount;
				}
				if (userId == myUserId) {
					startSeverSit = severSit; //求出主玩家服务器座位
					success = true;
				}
			}
			//
			if (playerCount != data.players.length) {
				return false;
			}
			//初始化本地座位与服务器座位映射
			for (let localSit = 0; localSit < 5; ++localSit) {
				this.severLocalMap[startSeverSit] = localSit;
				this.localSeverMap[localSit] = startSeverSit;
				++startSeverSit;
				if (startSeverSit >= 5) {
					startSeverSit = 0;
				}
			}
			//初始化座位成功与否
			return success;
		}

	}





}
