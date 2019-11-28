
module game.action {

    import GamePlayerStage = gameenum.GamePlayerStage;
    

    /** 轮到某个玩家操作了动作*/
    export class PlayerActionTimeAction extends action.GameActionBase {

        public runActionFunc(data: net.protocol.PlayerActionTimeBean) {
            //
			this.printTime("[轮到某个玩家操作]",data.time,data.remainingTime,data);
            //保存最新数据
            var roomObj = this.gameCtrl.roomObj;
			roomObj.lastBetScore = data.lastBetScore;
			roomObj.curRound = data.round;
            roomObj.totalBetScore = data.tableTotalScore;
            //设置最新牌桌轮数与总下注数据
            this.roomPanel.setRoundInfo(roomObj.curRound+1,roomObj.totalBetScore);
            //
			//获取操作玩家数据
			let playerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
            if (!playerObj || playerObj.isOverGame) return null;
            //设置操作玩家阶段
            playerObj.localStage = GamePlayerStage.Playing;
            playerObj.setRemainingTime( data.time , data.remainingTime );
            //
            this.roomPanel.playerActionTime( playerObj );
            //设置其他玩家阶段
            for (const key in this.gameCtrl.userIDPlayerObjMap) {
				const playerObj = this.gameCtrl.userIDPlayerObjMap[key];
                if(playerObj.userId == data.userId) continue;
                if(!playerObj.isOverGame){
                    playerObj.localStage = GamePlayerStage.Wating;	
                }
            }
        }
    }
}
