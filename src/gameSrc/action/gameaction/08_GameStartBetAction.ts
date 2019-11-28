
module game.action {

    import GamePlayerStage = gameenum.GamePlayerStage;

    /** 游戏开始投注动作*/
    export class GameStartBetAction extends action.GameActionBase {

        public runActionFunc(data : net.protocol.GameStartBetBean) {
			//
			this.printTime("[游戏投注===]",data.time,15,data);
			//
			//
			//this.gameCtrl.roomObj.lastBetScore = data.score;
			//this.gameCtrl.roomObj.curRoundUuid = data.uuid;
			
			//获取发牌动画时长
			var sendAnimTime = this.roomPanel.gameStartBetBase( data );
			//保证发牌动画播放
			//this.gameCtrl.actionQueue.LockActionQueueTime( sendAnimTime );
			//插队一个游戏开始动作到队列
			//var action = new GameStartAction();
			//action.setActionData();
			//this.gameCtrl.actionQueue.addFirstAction(action);
        }
    }
}
