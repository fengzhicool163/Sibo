
module game.action {


	import GamePlayerStage = gameenum.GamePlayerStage;


	/** 某个玩家下注动作*/
	export class PlayerBetAction extends action.GameActionBase {

		public runActionFunc(data: net.protocol.PlayerBetBean) {
			this.printTime("[某个玩家下注]", data.time, data.remainingTime, data);
			//更新房间数据
			var roomObj = this.gameCtrl.roomObj;
			roomObj.totalBetScore += data.score;
			this.roomPanel.setRoundInfo(roomObj.curRound + 1, roomObj.totalBetScore);
			//刷新玩家数据
			var playerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
			if (!playerObj || playerObj.isOverGame) return null;
			//更新玩家数据
			playerObj.balanceScore = parseFloat(data.balanceScore);
			playerObj.addBetNum = data.score;
			playerObj.totalBetScore = data.totalBetScore;
			playerObj.localStage = GamePlayerStage.Wating;
			//
			this.roomPanel.playerBet(playerObj);
			//防止消息堆积
			this.gameCtrl.actionQueue.LockActionQueueTime(500);
		}
	}
}
