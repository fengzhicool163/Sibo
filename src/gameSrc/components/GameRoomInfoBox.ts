/**
* name 
*/
module game.component {

	export class GameRoomInfoBox extends common.component.UIBox {
	

		public bindObj : ui.gameUI.GameCommonBox.GameRoomInfoBoxUI;

	
		protected fengding : Laya.Label;
		protected roomType : Laya.Label;
		protected tableNum : Laya.Label;

		protected initComponents() {
			//初始化控件
			var bindObj = this.bindObj;
		
			//this.fengding = bindObj.fengding;
			this.roomType = bindObj.roomType;
			this.tableNum = bindObj.tableNum;
			//
			this.clearBox();
		}

		/** 重置房间信息显示 */
		public resetBox() {
			//设置显示初始值
		
			//this.fengding.text = "-";
			this.roomType.text = "-";
			this.tableNum.text = "-";
			this.bindObj.reCache();
		}

		/** 清空房间信息显示 */
		public clearBox() {
			this.resetBox();
			this.bindObj.visible = false;

		}

		
		/** 刷新游戏房间数据显示 {
			"commissionRate": 0.05,
			"maxBet": 50,
			"minEntry": 100,
			"commissionProportion": 0.05,
			"maxSeat": 5,
			"maxThinkTime": 20,
			"roomId": "101",
			"minBetScore": 5,
			"maxRound": 19,
			"gameName": "炸金花",
			"dark": "10,15,20,25",
			"maxBetScore": 50,
			"alias": "zjh",
			"brights": "20,30,40,50",
			"brand": "106",
			"gameId": "10",
			"minScore": 100,
			"minBet": 5,
			"minLookRound": 1,
			"minCompareRound": 1,
			"minStartPlayerNO": 2,
			"roomName": "进阶房",
			"prepareTime": 5,
			"tableId": "195005005",
			"lookCardMultiple": 2
			tableNo,//PS ctrl里添加的！！！
		}*/
		public setData( data : game.objs.GameRoomObj) {
			//房间名
			this.roomType.text = data.roomName;
			//桌号
			this.tableNum.text = data.tableName;//"第" + data.tableNo + "桌";
			//单注
		
			//封顶
			this.bindObj.limit.text = "" + data.maxBet;
			//this.fengding.text = data.maxBet.toString();
			//显示
			this.bindObj.visible = true;
			this.bindObj.paijuhao.text = "牌局号:" + data.curRoundUuid;
			//缓存
			this.bindObj.reCache();
		}


		/**   设置局号 */
		public setRoundId(id:string){
			this.bindObj.paijuhao.text = id;
			//缓存
			this.bindObj.reCache();
		}
	}
}